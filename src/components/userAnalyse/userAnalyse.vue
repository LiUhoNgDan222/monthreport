<template>
  <div>
    <!--<Drawer></Drawer>-->
    <div class="subTitle">用户年龄</div>
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
    <div class="subTitle2">各车型年龄</div>
<!--    <div id="userLine" :style="{width: '100%', height: lineHeight+'px',margin:'5px 0 0 0 '}"></div>-->
    <div id="userBar" :style="{width: '100%', height: lineHeight+'px',margin:'5px 0 0 0 '}"></div>
    <div id="mainAge">
      <p>
        用户年龄特征趋于<span> 稳定 </span>
      </p>
    </div>
    <div class="page">2-1/3</div>
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
        pieHeight: window.innerHeight * 0.25,
        lineHeight: window.innerHeight * 0.3,
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
        // me.drawLine();
        me.drawBar();
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
          tooltip: {
            trigger: 'axis',
            formatter: '{b}岁<br/>{a0}:{c0}<br/>{a1}:{c1}<br/>{a2}:{c2}<br/>{a3}:{c3}'
          },
          lineStyle:{
            normal:{
              color:'#32A8FF'
            }
          },
          legend: {
            data:['逸动','全新CS35Plus','CS55','新CS75'],
            itemHeight: 6,
            textStyle: {
              color: 'grey'
            },
            orient: 'vertical',
            right: '5%',
            top: 0,
          },
          grid: {
            left: '3%',
            right: '6%',
            bottom: '9%',
            top: '15%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            boundaryGap:false,
            data:me.userAnalyseData.ageItem,
            axisLine: {
              lineStyle: {
                color: '#00A0E9',
                opacity: 0.7,
              }
            },
            axisLabel :{
              color: '#666'
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
                opacity: 0.1,
              }
            },
            axisLine: {
              lineStyle: {
                color: '#00A0E9',
                opacity: 0.7,
              }
            },
            axisLabel :{
              formatter: '{value}%',
              color: '#666'
            },
            nameTextStyle: {
              color: '#BEBEBE',
            },
            /*min:0,
             max:60,
             splitNumber:6*/
          },
          series: [
            {
              name:'逸动',
              type:'line',
              symbol: 'circle',
              lineStyle: {
                color: '#888889',
                opacity: 0.8,
              },
              itemStyle: {
                opacity: 0,
                color: '#888889'
              },
              data:me.userAnalyseData.ageDataOne,
            },
            {
              name:'全新CS35Plus',
              type:'line',
              symbol: 'circle',
              lineStyle: {
                color: '#EB595F',
                opacity: 0.8,
              },
              itemStyle: {
                opacity: 0,
                color: '#EB595F'
              },
              data:me.userAnalyseData.ageDataTwo,
            },
            {
              name:'CS55',
              type:'line',
              symbol: 'circle',
              lineStyle: {
                color: '#9FB934',
                opacity: 0.8,
              },
              itemStyle: {
                opacity: 0,
                color: '#9FB934'
              },
              data:me.userAnalyseData.ageDataThree,
            },
            {
              name:'新CS75',
              type:'line',
              symbol: 'circle',
              lineStyle: {
                color: '#00A0E9',
                opacity: 0.8,
              },
              itemStyle: {
                opacity: 0,
                color: '#00A0E9'
              },
              data:me.userAnalyseData.ageDataFour,
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
    font-size: 0.63rem;
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
