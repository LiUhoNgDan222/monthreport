<template>
  <div>
    <!--<Drawer></Drawer>-->
    <div id="title">问题反馈分析</div>
    <div id="content1">
      智能化：<span>{{feedbackData.intelligentRecordNum}}          </span>非智能化： <span>{{feedbackData.nonIntelligentRecordNum}}</span>
      <br/><div style="font-weight: bold">数据来源：智问系统&incall app反馈模块</div>
    </div>
    <div id="feedbackPie" :style="{width: '95%', height: pieHeight+'px', margin: '2% 0 0 10%'}"></div>
    <div id="feedbackLine" :style="{width: '95%', height: lineHeight+'px', margin: '0 0 0 6%'}"></div>
<!--    <div class="tip" :style="bgTips" v-show="showTips"><br/><br/>试试点击饼状图，<br/>查看反馈详细分类</div>-->
<!--    <table class="table" :style="{width: '60%',height: tableHeight+'px'}" v-show="showDetail">-->
<!--      <thead>-->
<!--      <tr align="center">-->
<!--        <th>{{text}}</th>-->
<!--        <th>反馈数量</th>-->
<!--      </tr>-->
<!--      </thead>-->
<!--      <tbody>-->
<!--      <tr class="remoteRegion" v-for ="detail in details">-->
<!--        <td>{{detail.name}}</td>-->
<!--        <td>{{detail.value}}</td>-->
<!--      </tr>-->
<!--      </tbody>-->
<!--    </table>-->
    <div id="content">
      用户反馈最多的智能联网<span> 数据不更新 </span>问题，<br/>
      一直 <span>居高不下</span> ，需要重点解决。
    </div>
    <div class="page">5-4/6</div>
  </div>
</template>

<script>
  export default {
    name: "FeedbackPie",
    props: ["feedbackData"],
    data() {
      return {
        pieHeight: window.innerHeight * 0.28,
        lineHeight: window.innerHeight * 0.28,
        bgTips: {
          backgroundImage: "url(" + require("./img/tips.png") + ")",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat"
        },
        showTips: true,
        showDetail: false,
        details: [],
        text: '产品分类top3',
        lineLabel: [],
        lineItem: [],
        lineData: [],
      }
    },
    methods: {
      initFeedbackPie(){
        const totalJson = [];
        for(var i=0;i<this.feedbackData.intelligentClassifyItem.length;i++){
          const json = {};
          json.name = this.feedbackData.intelligentClassifyItem[i];
          json.value = this.feedbackData.intelligentClassifyData[i];
          totalJson.push(json);
        }
        this.drawFeedbackPie(totalJson);
        // 处理折线图数据，默认智能网联
        this.getLineData(this.feedbackData.smartConnectionLine);
        this.drawFeedbackLine();
      },
      // 处理折线图数据
      getLineData(data){
        let lable = [];
        let item = [];
        let data1 = [];
        for(var i=0;i<data.length;i++){
          if(lable.indexOf(data[i].itemName) === -1){
            lable.push(data[i].itemName);
          }
          if(item.indexOf(data[i].statMonth) === -1){
            item.push(data[i].statMonth);
          }
        }
        for(var i=0;i<lable.length;i++){
          let item = [];
          for(var j=0;j<data.length;j++) {
            if(lable[i] === data[j].itemName){
              item.push(data[j].recordNum);
            }
          }
          data1.push(item);
        }
        this.lineLabel = lable;
        this.lineItem = item;
        this.lineData = data1;
      },

      drawFeedbackPie(totalJson){
        let me = this;
        // 基于准备好的dom，初始化echarts实例
        let feedbackPieData = me.$echarts.init(document.getElementById('feedbackPie'));
        // 绘制图表
        feedbackPieData.setOption({
          tooltip: {
            trigger: 'item',
            position: 'bottom',
            formatter: "{b}: {c}次 ({d}%)"
          },
          series: [
            {
              type:'pie',
              // center: ['50%','33%'],
              radius: ['50%', '90%'],
              avoidLabelOverlap:false,
              color:['#32A8FF','#02C800'],
              startAngle: 110,
              itemStyle:{
                normal:{
                  color: function (params){
                    var colorList = [
                      '#004595',
                      '#00A0E9',
                      '#EEAF00',
                      '#9FB934',
                    ];
                    return colorList[params.dataIndex];
                  },
                  borderWidth: 2,
                  borderColor: 'white'
                }
              },
              data:totalJson,
              label: {
                normal: {
                  formatter: function(params) {
                    let str;
                    if(params.percent < 1){
                      str = '\n\n'+params.name;
                    }else{
                      str = params.name;
                    }
                    return str;
                  },
                  textStyle: {
                    color: '#333',
                    fontSize: 12,
                  },
                }
              },
              labelLine: {
                normal: {
                  color: function (params){
                    var colorList = [
                      '#004595',
                      '#00A0E9',
                      '#EEAF00',
                      '#9FB934',
                    ];
                    return colorList[params.dataIndex];
                  },
                  length: 10,
                  length2:16
                }
              },
              // itemStyle: {
              //   normal: {
              //     borderWidth: 20,
              //     borderColor: '#ffffff',
              //   },
              //   emphasis: {
              //     borderWidth: 0,
              //     shadowBlur: 10,
              //     shadowOffsetX: 0,
              //     shadowColor: 'rgba(0, 0, 0, 0.5)'
              //   },
              // },

              animationType: 'scale',
              animationEasing: 'elasticOut',
              animationDelay: function (idx) {
                return Math.random() * 200;
              }
            }
          ]
        });
        feedbackPieData.on('click', function(param) {
          if(param.name === "智能网联"){
            me.getLineData(me.feedbackData.smartConnectionLine);
          }
          if(param.name === "车载娱乐影音系统"){
            me.getLineData(me.feedbackData.carEntertainmentLine);
          }
          if(param.name === "电器附件"){
            me.getLineData(me.feedbackData.electricalAccessoriesLine);
          }
          if(param.name === "驾驶辅助"){
            me.getLineData(me.feedbackData.drivingAssistanceLine);
          }
          me.drawFeedbackLine();
          // console.log(param);
          // me.details = [];
          // me.text = '产品分类top3';
          // if(param.name === "智能网联"){
          //   for(var i=0;i<me.feedbackData.smartConnectionNumItem.length;i++){
          //     const json = {};
          //     json.name = me.feedbackData.smartConnectionNumItem[i];
          //     json.value = me.feedbackData.smartConnectionNumData[i];
          //     me.details.push(json);
          //   }
          // }
          // if(param.name === "车载娱乐影音系统"){
          //   for(var i=0;i<me.feedbackData.carEntertainmentNumItem.length;i++){
          //     const json = {};
          //     json.name = me.feedbackData.carEntertainmentNumItem[i];
          //     json.value = me.feedbackData.carEntertainmentNumData[i];
          //     me.details.push(json);
          //   }
          // }
          // if(param.name === "电器附件"){
          //   for(var i=0;i<me.feedbackData.electricalAccessoriesNumItem.length;i++){
          //     const json = {};
          //     json.name = me.feedbackData.electricalAccessoriesNumItem[i];
          //     json.value = me.feedbackData.electricalAccessoriesNumData[i];
          //     me.details.push(json);
          //   }
          //   me.text = '产品分类top2';
          // }
          // if(param.name === "驾驶辅助"){
          //   for(var i=0;i<me.feedbackData.drivingAssistanceNumItem.length;i++){
          //     const json = {};
          //     json.name = me.feedbackData.drivingAssistanceNumItem[i];
          //     json.value = me.feedbackData.drivingAssistanceNumData[i];
          //     me.details.push(json);
          //   }
          // }
          // me.showDetail = true;
          // me.showTips = false;
        })
      },
      drawFeedbackLine(){
        let me = this;
        let color = ['#00A0E9','#EEAF00','#9FB934'];
        let series = [];
        // 基于准备好的dom，初始化echarts实例
        let feedbackLine = this.$echarts.init(document.getElementById('feedbackLine'));
        // 处理显示的series
        for(var i=0;i<this.lineData.length;i++){
          series.push({
            name: this.lineLabel[i],
            data: this.lineData[i],
            type: 'line',
            barWidth: 7,
            itemStyle: {
              color: color[i],
              opacity: 0.8,
              barBorderRadius: [5, 5, 0, 0],
            },
          });
        }
        // 绘制图表
        feedbackLine.setOption({
          grid: {
            right: '9%',
            bottom: '25%'
          },
          tooltip: {
            show: true,
            trigger: 'axis',
            textStyle:{
              align:'left'
            }
          },
          legend: {
            data:this.lineLabel,
            itemHeight: 6,
            textStyle: {
              color: 'grey'
            },
            // orient: 'vertical',
            top: '14%',
            // left: '25%'
          },
          xAxis: {
            type: 'category',
            data: this.lineItem,
            splitLine:{
              show: true,
              lineStyle: {
                color: ['#CCECFB'],
                opacity: 0.7,
              }
            },
            axisLine: {
              lineStyle: {
                color: '#00A0E9'
              }
            },
            axisLabel :{
              fontSize: 12,
              color: '#666',
              interval: 0,
              // rotate: 30
            },
            nameTextStyle: {
              color: '#666'
            },
          },
          yAxis: {
            // name: '比例',
            type: 'value',
            splitLine:{
              show: true,
              lineStyle: {
                color: ['#CCECFB'],
                opacity: 0.7,
              }
            },
            axisLine: {
              lineStyle: {
                color: '#00A0E9'
              }
            },
            axisLabel :{
              interval:0,
              fontSize: 12,
              color: '#666',
              // formatter: '{value} %'
            },
            nameTextStyle: {
              color: '#666'
            },
          },
          series: series
        });
      },
    }
  }
</script>

<style scoped>
  #title {
    width: 100%;
    margin: 0 auto;
    font-size: 0.63rem;
    color: #444444;
    font-weight: bold;
    padding-top: 9%;
    padding-bottom: 6%
  }

  #content1 {
    color: #666;
    margin-top: 5%;
  }

  .tip {
    position: absolute;
    width: 4.3rem;
    height: 2.6rem;
    top: 57%;
    left: 13%;
    color: #444;
  }
  #content {
    width:80%;
    position: absolute;
    bottom: 8%;
    left: 10%;
    background-color: #F0F9FE;
    padding: 0.3rem 0.3rem 0.3rem 0.3rem;
    font-size: 0.32rem;
    color: #444
  }
  .table {
    width: 90%;
    border-collapse:collapse;
    position: absolute;
    top: 58%;
    left: 20%;
    border-color:#E5E5E5 ;
  }
  td, th
  {
    height: 0.8rem;
    line-height: 0.8rem;
    white-space:nowrap;
    border:1px solid #E5E5E5;
    padding:1px 0 1px 0;
    color:#666;
  }

  th
  {
    font-size:1em;
    padding-top:5px;
    padding-bottom:4px;
    background-color:#F0F9FE;
    color:#666;
  }

  .page {
    position: absolute;
    bottom: 0.7rem;
    left: 0;
    width: 100%;
    color: #666;
    font-weight: normal;
    font-size: 0.35rem;
    font-family: "Microsoft YaHei";
  }

  span {
    color: #00A0E9;
    font-size: 0.4rem;
    font-weight: bold;
  }
</style>
