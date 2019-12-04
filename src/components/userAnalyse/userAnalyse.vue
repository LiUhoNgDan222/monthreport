<template>
  <div>
    <!--<Drawer></Drawer>-->
    <div class="subTitle">用户年龄</div>
    <div class="subTitle2">用户购车年龄分布</div>
    <div id="userPie" :style="{width: '90%', height: pieHeight+'px',margin:'0 auto'}"></div>
    <!--<div class="linear-progress">-->
      <!--<p>男：女</p>-->
      <!--<div class="progressBar">-->
        <!--<div class="itemText1">{{userAnalyseData.sexRatio}}</div>-->
        <!--<div class="itemBar">-->
          <!--<mu-flex id="progressStyle">-->
            <!--<mu-linear-progress mode="determinate" :value="ratio">:</mu-linear-progress>-->
          <!--</mu-flex>-->
        <!--</div>-->
        <!--<div class="itemText2">1</div>-->
      <!--</div>-->
    <!--</div>-->
    <div class="subTitle2">年轻购车用户的占比趋势</div>
    <div class="desc">年轻购车用户指在20-35岁购车的用户</div>
    <div id="userLine" :style="{width: '100%', height: lineHeight+'px',margin:'5px 0 0 0 '}"></div>
<!--    <div id="userBar" :style="{width: '100%', height: lineHeight+'px',margin:'5px 0 0 0 '}"></div>-->
    <div id="mainAge">
        整体来看，<span> 20-35岁 </span>购车用户占比<br/>较年初有所<span> 降低</span>。
    </div>
    <div class="page">3/19</div>
  </div>
</template>

<script>
  import Drawer from "../Drawer/Drawer"
  import echarts from "echarts"
  export default {
    name: "UserAnalyse",
    components: {Drawer},
    props: ["userAnalyseData"],
    data() {
      return {
        pieHeight: window.innerHeight * 0.24,
        lineHeight: window.innerHeight * 0.26,
        legend: ['CS35','CS55','新CS75','CS75-PLUS','CS95','逸动'],
        ratio: 1,
      }
    },
    mounted(){
    },
    methods: {
      initUserAnalyse() {
        let me = this;
        me.ratio = me.userAnalyseData.sexRatio * 100 / (me.userAnalyseData.sexRatio + 1);
        // console.log('ratio');
        // console.log(me.userAnalyseData);
        const totalJson = [];
        for(var i=0;i<me.userAnalyseData.ageRange.length;i++){
          const json = {};
          json.name = me.userAnalyseData.ageRange[i];
          json.value = me.userAnalyseData.userNum[i];
          totalJson.push(json);
        }
        me.drawPie(totalJson);
        me.drawLine();
        // me.drawBar();
      },
      drawPie(totalJson){
        let me = this;
        // 基于准备好的dom，初始化echarts实例
        let userAnalysisPie = me.$echarts.init(document.getElementById('userPie'))
        // 绘制图表
        userAnalysisPie.setOption({
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}岁: {c} ({d}%)",
            position: ['50%', '50%']
          },
          legend: {
            data:me.userAnalyseData.ageRange,
            // formatter: '{name}岁',
            formatter: function(param) {
              if(param === '50以上'){
                return '50岁以上';
              }
              return param + '岁';
            },
            x: 'right',
            y: 'middle',
            orient: 'vertical',
            textStyle:{
              color:'#666'
            },
            itemWidth:14,
            itemHeight:5,
          },
          grid: {
            right: '3%',
          },
          series: [
            {
              name:'用户年龄',
              type:'pie',
              center : ['37%', '50%'],
              radius: ['35%', '80%'],
              avoidLabelOverlap:false,
              color:['#32A8FF','#02C800'],
              roseType: 'radius',
              itemStyle:{
                normal:{
                  color: function (params){
                    var colorList = [
                      '#888889',
                      '#EB595F',
                      '#9FB934',
                      '#00A0E9',
                      '#EEAF00',
                    ];
                    return colorList[params.dataIndex];
                  },
                }
              },
              data:totalJson,
              label: {
                normal: {
                  formatter: '{d}%',
                  textStyle: {
                    color: '#333'
                  },
                  position: 'outside',
                  fontSize: 11,
                }
              },
              labelLine: {
                normal: {
                  color: function (params){
                    var colorList = [
                      '#888889',
                      '#EB595F',
                      '#9FB934',
                      '#00A0E9',
                      '#EEAF00',
                    ];
                    return colorList[params.dataIndex];
                  },
                  smooth: 0.2,
                  length: 2,
                  length2: 4
                }
              },

              animationType: 'scale',
              animationEasing: 'elasticOut',
              animationDelay: function (idx) {
                return Math.random() * 200;
              }
            }
          ]
        });
      },

      drawLine(){
        let me = this;
        // 基于准备好的dom，初始化echarts实例
        let userAnalysisLine = me.$echarts.init(document.getElementById('userLine'))
        // 绘制图表
        userAnalysisLine.setOption({
          color: [
            '#00A0E9',
            '#EEAF00',
            '#EB595F',
            '#9FB934',
            '#B15BFF',
            '#ffb980',
            '#FF5809',
            '#2ec7c9',
          ],
          // tooltip: {
          //   trigger: 'axis',
          //   formatter: '{b}岁<br/>{a0}:{c0}<br/>{a1}:{c1}<br/>{a2}:{c2}<br/>{a3}:{c3}'
          // },
          tooltip: {
            show: true,
            trigger: 'axis',
            // formatter: '{b}<br/>{a0}:{c0}%<br/>{a1}:{c1}%<br/>{a2}:{c2}%<br/>',
            position: function (pos, params, dom, rect, size) {
              // 鼠标在左侧时 tooltip 显示到右侧，鼠标在右侧时 tooltip 显示到左侧。
              var obj = {top: 60};
              obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = '10%';
              return obj;
            },
            textStyle:{
              align:'left',
            },
          },
          legend: {
            data: me.legend,
            itemHeight: 6,
            textStyle: {
              color: 'grey'
            },
            // orient: 'vertical',
            // top: '10%',
            left: '10%',
            right: '10%'
          },
          grid: {
            left: '16%',
            right: '9%',
            top: '25%',
            bottom: '18%',
            // containLabel: true
          },
          xAxis: {
            type: 'category',
            boundaryGap:false,
            data:me.userAnalyseData.ageItem,
            splitLine:{
              show: true,
              lineStyle: {
                color: ['#CCECFB'],
                opacity: 0.7,
              }
            },
            axisLine: {
              lineStyle: {
                color: '#00A0E9',
                opacity: 0.7,
              },
            },
            axisLabel :{
              color: '#666',
              interval: 0,
            },
            nameTextStyle: {
              color: '#BEBEBE'
            },
          },
          yAxis: {
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
                color: '#00A0E9',
              }
            },
            axisLabel :{
              formatter: '{value}%',
              color: '#666'
            },
            nameTextStyle: {
              color: '#BEBEBE',
            },
            min: 35,
            // max:60,
            // splitNumber:6
          },
          series: [
            {
              name:me.legend[0],
              type:'line',
              data:me.userAnalyseData.ageDataOne,
            },
            {
              name:me.legend[1],
              type:'line',
              data:me.userAnalyseData.ageDataTwo,
            },
            {
              name:me.legend[2],
              type:'line',
              data:me.userAnalyseData.ageDataThree,
            },
            {
              name:me.legend[3],
              type:'line',
              data:me.userAnalyseData.ageDataFour,
            },
            {
              name:me.legend[4],
              type:'line',
              data:me.userAnalyseData.ageDataFive,
            },
            {
              name:me.legend[5],
              type:'line',
              data:me.userAnalyseData.ageDataSix,
            }
          ]
        });
      },
      drawBar(){
        let me = this;
        // 基于准备好的dom，初始化echarts实例
        let userBar = me.$echarts.init(document.getElementById('userBar'));
        // 绘制图表
        userBar.setOption({
          tooltip : {
            trigger: 'item',
          },
          grid: {
            left: '30%',
            right: '10%',
            bottom: '30',
            top: '70',
          },
          legend: {
            show:true,
            data: ['18-23岁','23-28岁','28-33岁','33-38岁','38-43岁','43-48岁','48-53岁','53-58岁','58岁以上'],
            x: '30px',
            // y: 'middle',
            itemWidth:14,
            itemHeight:5,
          },
          xAxis: {
            type: 'value',
            splitLine:{
              show: true,
              lineStyle: {
                color: ['#CCECFB'],
                opacity: 0.7,
              }
            },
            axisLabel: {
              fontSize: 10,
              formatter: '{value}%',
              color: '#666'
            },
            axisLine: {
              lineStyle: {
                color: '#00A0E9'
              },
            },
            nameTextStyle: {
              color: '#666'
            },
            max: 100
          },
          yAxis: {
            type: 'category',
            data: me.userAnalyseData.detailListSeriesName,
            splitLine:{
              show: true,
              lineStyle: {
                color: ['#CCECFB'],
                opacity: 0.7,
              }
            },
            axisLabel :{
              interval:0,
              fontSize: 12,
              color: '#666'
            },
            axisLine: {
              lineStyle: {
                color: '#00A0E9'
              }
            },
            nameTextStyle: {
              color: '#666',
              fontSize: '6',
            },
          },
          series: [{
            name:'18-23岁',
            data: me.userAnalyseData.ageRange1,
            type: 'bar',
            barWidth: 8,
            stack: '总量',
            itemStyle: {
              color: '#888889',
            },
          },{
            name:'23-28岁',
            data: me.userAnalyseData.ageRange2,
            type: 'bar',
            barWidth: 8,
            stack: '总量',
            itemStyle: {
              color: '#EB595F',
            },
          },{
            name:'28-33岁',
            data: me.userAnalyseData.ageRange3,
            type: 'bar',
            barWidth: 8,
            stack: '总量',
            itemStyle: {
              color: '#9FB934',
            },
          },{
            name:'33-38岁',
            data: me.userAnalyseData.ageRange4,
            type: 'bar',
            barWidth: 8,
            stack: '总量',
            itemStyle: {
              color: '#00A0E9',
            },
          },{
            name:'38-43岁',
            data: me.userAnalyseData.ageRange5,
            type: 'bar',
            barWidth: 8,
            stack: '总量',
            itemStyle: {
              color: '#EEAF00',
            },
          },{
            name:'43-48岁',
            data: me.userAnalyseData.ageRange6,
            type: 'bar',
            barWidth: 8,
            stack: '总量',
            itemStyle: {
              color: '#6745c9',
            },
          },{
            name:'48-53岁',
            data: me.userAnalyseData.ageRange7,
            type: 'bar',
            barWidth: 8,
            stack: '总量',
            itemStyle: {
              color: '#2eb9a7',
            },
          },{
            name:'53-58岁',
            data: me.userAnalyseData.ageRange8,
            type: 'bar',
            barWidth: 8,
            stack: '总量',
            itemStyle: {
              color: '#ee580e',
            },
          },{
            name:'58岁以上',
            data: me.userAnalyseData.ageRange9,
            type: 'bar',
            barWidth: 8,
            stack: '总量',
            itemStyle: {
              color: '#004595',
              barBorderRadius: [0, 5, 5, 0],
            },
          }]
        });
      }
    }

  }
</script>

<style scoped>

  .subTitle {
    width: 100%;
    margin: 0 auto;
    /*font-size: 0.63rem;*/
    font-size: 0.587rem;
    color: #444444;
    font-weight: bold;
    padding-top: 9%;
    padding-bottom: 8%
  }

  .subTitle2 {
    width: 100%;
    text-align: left;
    margin-left:8%;
    margin-top: 3%;
    font-size: 0.48rem;
    color: #444;
    font-weight: bold
  }

  .desc {
    color: #444;
    text-align: left;
    margin-left: 8%;
    margin-top: 1%;
  }

  .linear-progress {
    width: 250px;
    position: absolute;
    right: 50px;
    top: 500px;
    color: #AAABC6
  }

  #progressStyle {
    display: inline-block;
  }

  .progressBar {
    margin-left: 10%;
    width: 80%;
    height: 40px;
  }

  .itemBar {
    width:40%;
    float:left;
    clear:right;
    height:40px;
  }

  .itemText1 {
    width:40px;
    float:left;
    clear:right;
    height:20px;
    margin-left: 10%
  }

  .itemText2 {
    width:15px;
    float:left;
    clear:right;
    height:20px;
    margin-right: 15%
  }

  #mainAge {
    width:80%;
    margin: 0 auto;
    background-color: #F0F9FE;
    padding: 0.1rem 0.3rem 0.1rem 0.3rem;
    font-size: 0.32rem;
    color: #444
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
