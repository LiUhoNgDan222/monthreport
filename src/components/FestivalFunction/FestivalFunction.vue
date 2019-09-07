<template>
  <div>
    <!--<Drawer></Drawer>-->

    <div id="title">用户春节出行专题</div>
    <div>
      <div id="subtitle1">车机功能活跃频次</div>
      <div id="definition">活跃频次=使用次数/行驶次数</div>
    </div>


    <div id="festivalFunctionTimes" :style="{width: '100%', height: barHeight1+'px', margin: '0 0 20px 0'}"></div>
    <div>
      <p>
        春节期间，<span>导航</span>使用次数相对平时更加频繁
      </p>
    </div>
    <div id="subtitle2">单日行驶里程</div>
    <div id="festivalMiles" :style="{width: '100%', height: barHeight2+'px', margin: '20px 0 10px 0'}"></div>
    <div>
      <p>
        相对平时，更多用户每日行程在<span>80-100</span>公里
      </p>
    </div>

    <!--<p>{{remoteActive.carTypeUsed}}</p>-->
  </div>
</template>

<script>
  import Drawer from "../Drawer/Drawer"
  import echarts from "echarts"
  export default {
    name: "FestivalFunction",
    components: {Drawer},
    data() {
      return {
        barHeight1: window.innerHeight * 0.27,
        barHeight2: window.innerHeight * 0.28,
      }
    },
    mounted(){
      this.drawTimes();
      this.drawMiles();
    },
    methods: {
      drawTimes(){
        let me = this;
        // 基于准备好的dom，初始化echarts实例
        let festivalFunctionTimesLine = this.$echarts.init(document.getElementById('festivalFunctionTimes'))
        // 绘制图表
        festivalFunctionTimesLine.setOption({
          grid: {
            left: '20%',
            right: '17%',
            top: '20%',
            bottom: '14%'
          },
          legend: {
            data:['春节频次','平时频次'],
            itemHeight: 6,
            textStyle: {
              color: 'grey'
            },
            right: 0,
            top: 0,
          },
          xAxis: {
            name: '应用名',
            type: 'category',
            data:['音乐','导航','电台'],
            splitLine:{
              show: true,
              lineStyle: {
                color: ['#BEBEBE'],
                opacity: 0.1,
              }
            },
            axisLine: {
              lineStyle: {
                color: '#BEBEBE'
              }
            },
            axisLabel :{
              fontSize: 12
            },
            nameTextStyle: {
              color: '#BEBEBE'
            },
          },
          yAxis: {
            name: '频次',
            type: 'value',
            splitLine:{
              show: true,
              lineStyle: {
                color: ['#BEBEBE'],
                opacity: 0.1,
              }
            },
            axisLine: {
              lineStyle: {
                color: '#BEBEBE'
              }
            },
            nameTextStyle: {
              color: '#BEBEBE'
            },
          },
          series: [{
            name: '春节频次',
            data: [1.09,0.83,0.12],
            type: 'bar',
            barWidth: 7,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#AE00AE',
              }, {
                offset: 1,
                color: '#D9006C',
              }]),
              opacity: 0.8,
              barBorderRadius: [5, 5, 0, 0],
            },
          },
            {
              name: '平时频次',
              data: [1.19,0.76,0.17],
              type: 'bar',
              barWidth: 7,
              itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#0CB1F5',
                }, {
                  offset: 1,
                  color: '#0CEAA3',
                }]),
                opacity: 0.8,
                barBorderRadius: [5, 5, 0, 0],
              },
            }]
        });
      },
      drawMiles(){
        let me = this;
        // 基于准备好的dom，初始化echarts实例
        let festivalMilesLine = this.$echarts.init(document.getElementById('festivalMiles'))
        // 绘制图表
        festivalMilesLine.setOption({
          grid: {
            left: '20%',
            right: '20%',
            top: '18%',
            bottom: '25%'
          },
          legend: {
            data:['春节人次','平时人次'],
            itemHeight: 6,
            textStyle: {
              color: 'grey'
            },
            right: 0,
            top: 0,
          },
          xAxis: {
            name: '里程/km',
            type: 'category',
            data:['1-20','20-40','40-60','60-80','80-100','100-120','120-140','140-160','160-180','180-200','200-220','220-240','240-260'],
            splitLine:{
              show: true,
              lineStyle: {
                color: ['#BEBEBE'],
                opacity: 0.1,
              }
            },
            axisLine: {
              lineStyle: {
                color: '#BEBEBE'
              }
            },
            nameTextStyle: {
              color: '#BEBEBE'
            },
          },
          yAxis: {
            name: '占比',
            type: 'value',
            splitLine:{
              show: true,
              lineStyle: {
                color: ['#BEBEBE'],
                opacity: 0.1,
              }
            },
            axisLabel :{
              formatter: '{value}%'
            },
            axisLine: {
              lineStyle: {
                color: '#BEBEBE'
              }
            },
            nameTextStyle: {
              color: '#BEBEBE'
            },
          },
          series: [{
            name: '春节人次',
            data: [40,24,14,8,5,3,2,2,1,1,1,1,1],
            type: 'line',
            barWidth: 7,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#AE00AE',
              }, {
                offset: 1,
                color: '#D9006C',
              }]),
              opacity: 0.8,
              barBorderRadius: [5, 5, 0, 0],
            },
          },
            {
              name: '平时人次',
              data: [52,22,11,6,3,2,1,1,1,1,0,0,0],
              type: 'line',
              barWidth: 7,
              itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#0CB1F5',
                }, {
                  offset: 1,
                  color: '#0CEAA3',
                }]),
                opacity: 0.8,
                barBorderRadius: [5, 5, 0, 0],
              },
            }]
        });
      }
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
    padding-bottom: 2%
  }

  #subtitle1 {
    width: 100%;
    text-align: left;
    margin-left:5%;
    font-size: 32px
  }
  #subtitle2 {
    width: 100%;
    text-align: left;
    margin-left:5%;
    font-size: 32px
  }

  #definition {
    width: 100%;
    text-align: left;
    margin-left:5%;
    color: grey;
  }

  #content {
    width: 100%;
    height:310px;
    background-size: 90% 90%;
    background-repeat: no-repeat;
    background-position: center;
    padding-bottom: 5%;
  }

  #dateText {
    width: 100%;
    text-align: left;
    margin-left: 20%;
    position: relative;
  }

  #secondText {
    position: relative;
    /*top:30%*/
    top:30%;
  }


  span {
    color: #2894FF;
    font-size: 32px;
  }

  p {
    font-size: 26px
  }


</style>
