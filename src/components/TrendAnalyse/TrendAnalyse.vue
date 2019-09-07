<template>
  <div>
    <!--<Drawer></Drawer>-->

    <div id="title">趋势分析</div>
    <div id="definition">数据来源：智能网联车实名认证用户</div>


    <div id="monthTrend" :style="{width: '100%', height: barHeight1+'px', margin: '0 0 20px 0'}"></div>
    <div class="boxStyle">
      <span>1月</span>销量有一波增长，之后趋于平衡
    </div>
    <div id="subtitle2">各车型趋势分析</div>
    <div id="carTrend" :style="{width: '100%', height: barHeight2+'px', margin: '20px 0 0 0'}"></div>
    <div class="boxStyle">
      <span> 新CS75</span>在5月销量有一定幅度的增长<br/>其他车型变化不大
    </div>

    <!--<p>{{remoteActive.carTypeUsed}}</p>-->
  </div>
</template>

<script>
  import Drawer from "../Drawer/Drawer"
  import echarts from "echarts"
  export default {
    name: "TrendAnalyse",
    components: {Drawer},
    props: ["trendAnalyseList"],
    data() {
      return {
        barHeight1: window.innerHeight * 0.22,
        barHeight2: window.innerHeight * 0.25,
      }
    },
    mounted(){

    },
    methods: {
      initTrend() {
        this.drawMonthTrend();
        this.drawCarTrend();
      },
      drawMonthTrend(){
        let me = this;
        // 基于准备好的dom，初始化echarts实例
        let monthTrendLine = this.$echarts.init(document.getElementById('monthTrend'))
        // 绘制图表
        monthTrendLine.setOption({
          grid: {
            left: '20%',
            right: '9%',
            top: '20%',
            bottom: '14%'
          },
          tooltip: {
            show: true,
            trigger: 'axis',
            formatter: '{b0}<br/>{a0}:{c0}名新增<br/>{a1}:{c1}名新增'
          },
          legend: {
            data:['乘用车','总体'],
            itemHeight: 6,
            textStyle: {
              color: 'grey'
            },
            orient: 'vertical',
            top: '10%',
            left: '25%'
          },
          xAxis: {
            type: 'category',
            data:me.trendAnalyseList.monthList,
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
              interval: 3,
            },
            nameTextStyle: {
              color: '#666'
            },
          },
          yAxis: {
            name: '人数',
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
            name: '乘用车',
            data: me.trendAnalyseList.userPerMonthCAs,
            type: 'line',
            barWidth: 7,
            itemStyle: {
              color: '#EEAF00',
              opacity: 0.8,
              barBorderRadius: [5, 5, 0, 0],
            },
          },
            {
              name: '总体',
              data: me.trendAnalyseList.userPerMonthAlls,
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
      drawCarTrend(){
        let me = this;
        // 基于准备好的dom，初始化echarts实例
        let carTrendLine = this.$echarts.init(document.getElementById('carTrend'))
        // 绘制图表
        carTrendLine.setOption({
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
            formatter: '{b0}<br/>{a0} : {c0}名<br/>{a1} : {c1}名<br/>{a2} : {c2}名<br/>{a3} : {c3}名'
          },
          legend: {
            data:['新CS75','CS55','全新CS35Plus','逸动'],
            itemHeight: 6,
            textStyle: {
              color: 'grey'
            },
            orient: 'vertical',
            top: 0,
            left: '25%'
          },
          xAxis: {
            type: 'category',
            data:me.trendAnalyseList.monthList,
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
              color: '#666',
              interval: 3,
            },
          },
          yAxis: {
            name: '人数',
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
            name: '新CS75',
            data: me.trendAnalyseList.userCS7518,
            type: 'line',
            barWidth: 7,
            itemStyle: {
              color: '#EEAF00',
              opacity: 0.8,
              barBorderRadius: [5, 5, 0, 0],
            },
          },
            {
              name: 'CS55',
              data: me.trendAnalyseList.userCS55,
              type: 'line',
              barWidth: 7,
              itemStyle: {
                color: '#00A0E9',
                opacity: 0.8,
                barBorderRadius: [5, 5, 0, 0],
              },
            }
            ,
            {
              name: '全新CS35Plus',
              data: me.trendAnalyseList.userCS35Plus,
              type: 'line',
              barWidth: 7,
              itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#66B3FF'
                }, {
                  offset: 1,
                  color: '#9393FF'
                }]),
                opacity: 0.8,
                barBorderRadius: [5, 5, 0, 0],
              },
            },
            {
              name: '逸动',
              data: me.trendAnalyseList.userC211,
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
