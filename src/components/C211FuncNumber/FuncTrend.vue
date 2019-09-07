<template>
  <div>
    <!--<Drawer></Drawer>-->

    <div id="title">车机应用活跃趋势</div>
    <div id="subtitle5">平均月使用次数</div>
    <div id="monthFuncTrend" :style="{width: '100%', height: barHeight1+'px', margin: '0 0 20px 0'}"></div>
    <div id="subtitle2">平均月使用时长（单位：小时）</div>
    <div id="monthFuncHour" :style="{width: '100%', height: barHeight2+'px', margin: '20px 0 0 0'}"></div>
    <div class="boxStyle">
      <span> 车载地图导航 </span>正在逐步重新被用户接受<br/><span> 酷我音乐 </span>可能由于歌单偏少原因导致使用时长略微下降
    </div>

    <!--<p>{{remoteActive.carTypeUsed}}</p>-->
  </div>
</template>

<script>
  import Drawer from "../Drawer/Drawer"
  import echarts from "echarts"
  export default {
    name: "FuncTrend",
    components: {Drawer},
    props: ["carAppTrade"],
    data() {
      return {
        barHeight1: window.innerHeight * 0.27,
        barHeight2: window.innerHeight * 0.25,
      }
    },
    mounted(){

    },
    methods: {
      initTrend() {
        this.drawFuncTrend();
        this.drawFuncHour();
      },
      drawFuncTrend(){
        let me = this;
        // 基于准备好的dom，初始化echarts实例
        let monthFuncTrendLine = this.$echarts.init(document.getElementById('monthFuncTrend'))
        // 绘制图表
        monthFuncTrendLine.setOption({
          grid: {
            left: '20%',
            right: '9%',
            top: '20%',
            bottom: '14%'
          },
          tooltip: {
            show: true,
            trigger: 'axis',
            formatter: '{b0}<br/>{a0}:{c0}次<br/>{a1}:{c1}次'
          },
          legend: {
            data:['高德地图','酷我音乐'],
            itemHeight: 6,
            textStyle: {
              color: 'grey'
            },
            orient: 'vertical',
            top: '10%',
            right: '10%'
          },
          xAxis: {
            type: 'category',
            data:me.carAppTrade.carAppTradeItem,
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
              color: '#666'
            },
            nameTextStyle: {
              color: '#666'
            },
          },
          yAxis: {
            name: '次数',
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
              color: '#666'
            },
            nameTextStyle: {
              color: '#666'
            },
          },
          series: [{
            name: '高德地图',
            data: me.carAppTrade.gaoDeTimesMonthTrade,
            type: 'line',
            barWidth: 7,
            itemStyle: {
              color: '#EEAF00',
              opacity: 0.8,
              barBorderRadius: [5, 5, 0, 0],
            },
          },
            {
              name: '酷我音乐',
              data: me.carAppTrade.kuWoTimesMonthTrade,
              type: 'line',
              barWidth: 7,
              itemStyle: {
                color: '#00A0E9',
                opacity: 0.8,
                barBorderRadius: [5, 5, 0, 0],
              },
            }]
        });
      },
      drawFuncHour(){
        let me = this;
        // 基于准备好的dom，初始化echarts实例
        let monthFuncHourLine = this.$echarts.init(document.getElementById('monthFuncHour'))
        // 绘制图表
        monthFuncHourLine.setOption({
          grid: {
            left: '20%',
            right: '9' +
              '%',
            top: '20%',
            bottom: '25%'
          },
          tooltip: {
            show: true,
            trigger: 'axis',
            formatter: '{b0}<br/>{a0} : {c0}小时<br/>{a1} : {c1}小时'
          },
          legend: {
            data:['高德地图','酷我音乐'],
            itemHeight: 6,
            textStyle: {
              color: 'grey'
            },
            orient: 'vertical',
            top: 0,
            right: '10%'
          },
          xAxis: {
            type: 'category',
            data:me.carAppTrade.carAppTradeItem,
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
            nameTextStyle: {
              color: '#666'
            },
            axisLabel :{
              fontSize: 12,
              color: '#666'
            },
          },
          yAxis: {
            name: '时长',
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
            nameTextStyle: {
              color: '#666'
            },
            axisLabel :{
              interval:0,
              fontSize: 12,
              color: '#666'
            },
          },
          series: [{
            name: '高德地图',
            data: me.carAppTrade.gaoDeTimeMonthTrade,
            type: 'line',
            barWidth: 7,
            itemStyle: {
              color: '#EEAF00',
              opacity: 0.8,
              barBorderRadius: [5, 5, 0, 0],
            },
          },
            {
              name: '酷我音乐',
              data: me.carAppTrade.kuWoTimeMonthTrade,
              type: 'line',
              barWidth: 7,
              itemStyle: {
                color: '#00A0E9',
                opacity: 0.8,
                barBorderRadius: [5, 5, 0, 0],
              },
            }
            ]
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
    padding-bottom: 3%
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
    margin-top: 3%;
    font-size: 0.4rem;
    color: #444;
    font-weight: bold
  }
  #subtitle5 {
    width: 100%;
    text-align: left;
    margin-left:5%;
    margin-top: 3%;
    font-size: 0.4rem;
    color: #444;
    font-weight: bold
  }

  #definition {
    width: 100%;
    text-align: left;
    margin-left: 25%;
    margin-top: 5%;
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


  .boxStyle {
    width:80%;
    margin: 0 auto;
    background-color: #F0F9FE;
    padding: 0.2rem 0.3rem 0.2rem 0.3rem;
    font-size: 0.32rem;
    color: #444
  }


  span {
    color: #00A0E9;
    font-size: 0.4rem;
    font-weight: bold;
  }

  p {
    font-size: 26px
  }


</style>
