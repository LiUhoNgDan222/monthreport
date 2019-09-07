<template>
  <div>
    <!--<Drawer></Drawer>-->

    <div id="title">总体概览</div>
    <div class="subtitle2">智能网联用户转化</div>

    <div id="userTurn" :style="{width: '90%', height: barHeight1+'px', margin: '0 0 20px 0'}"></div>

<!--    <div class="subtitle2">各车型趋势分析</div>-->
    <div id="userTrend" :style="{width: '100%', height: barHeight2+'px', margin: '20px 0 0 0'}"></div>
    <div class="boxStyle">
      智能网联搭载率及实名认证率持续<span> 上升 </span>
    </div>
    <div class="page">2/22</div>
  </div>
</template>

<script>
  import Drawer from "../Drawer/Drawer"
  import echarts from "echarts"
  export default {
    name: "TotalUser",
    components: {Drawer},
    props: ["totalUserList"],
    data() {
      return {
        barHeight1: window.innerHeight * 0.22,
        barHeight2: window.innerHeight * 0.3
      }
    },
    mounted(){

    },
    methods: {
      init() {
        this.drawUserTurn();
        this.drawUserTrend();
      },
      drawUserTurn(){
        let me = this;
        // 基于准备好的dom，初始化echarts实例
        let monthTrendLine = this.$echarts.init(document.getElementById('userTurn'));
        // 绘制图表
        monthTrendLine.setOption({
          color: ['#00A0E9','#EEAF00','#EB595F','#9FB934'],
          grid: {
            left: '20%',
            right: '9%',
            // top: '20%',
            // bottom: '25%'
          },
          calculable : true,
          series : [
            {
              name:'漏斗图',
              type:'funnel',
              top: 10,
              bottom: 0,
              width: '58%',
              height: '100%',
              minSize: '30%',
              maxSize: '100%',
              x: '15%',
              data: me.totalUserList.funnelData
            },
            {
              name:'漏斗图',
              type:'funnel',
              top: 10,
              bottom: 0,
              width: '58%',
              height: '100%',
              minSize: '30%',
              maxSize: '100%',
              x: '15%',
              label: {
                normal: {
                  position: 'inside',
                },
              },
              data: [
                {value:80, name:'498841'},
                {value:60, name:'155336'},
                {value:40, name:'104389'},
                {value:20, name:'83707'},
              ]
            }
          ]
        });
      },
      drawUserTrend(){
        let me = this;
        // 基于准备好的dom，初始化echarts实例
        let monthTrendLine = this.$echarts.init(document.getElementById('userTrend'));
        // 绘制图表
        monthTrendLine.setOption({
          grid: {
            left: '20%',
            right: '9%',
            top: '20%',
            bottom: '25%'
          },
          tooltip: {
            show: true,
            trigger: 'axis',
            formatter: '{b0}<br/>{a0}:{c0}%<br/>{a1}:{c1}%'
          },
          legend: {
            data:['智能网联搭载率','实名认证率'],
            itemHeight: 6,
            textStyle: {
              color: 'grey'
            },
            // orient: 'vertical',
            top: '10%',
            left: '25%'
          },
          xAxis: {
            type: 'category',
            data:me.totalUserList.monthList,
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
              rotate: 30
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
              formatter: '{value} %'
            },
            nameTextStyle: {
              color: '#666'
            },
          },
          series: [{
            name: '智能网联搭载率',
            data: me.totalUserList.userPerMonthAlls,
            type: 'line',
            barWidth: 7,
            itemStyle: {
              color: '#EEAF00',
              opacity: 0.8,
              barBorderRadius: [5, 5, 0, 0],
            },
          },
            {
              name: '实名认证率',
              data: me.totalUserList.userPerMonthCAs,
              type: 'line',
              barWidth: 7,
              itemStyle: {
                color: '#00A0E9',
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
  .subtitle2 {
    width: 100%;
    text-align: left;
    margin-left:5%;
    margin-top: 5%;
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

  p {
    font-size: 26px
  }


</style>
