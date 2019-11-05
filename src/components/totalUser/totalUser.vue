<template>
  <div>
    <!--<Drawer></Drawer>-->

    <div id="title">总体概览</div>
    <div class="subtitle2">智能网联用户转化</div>

    <div id="userTurn" :style="{width: '90%', height: barHeight1+'px', margin: '0 0 20px 0'}"></div>

    <div class="subtitle2">主要车型实名认证率趋势分析</div>
    <div id="userTrend" :style="{width: '100%', height: barHeight2+'px', margin: '10px 0 0 0'}"></div>
    <div class="boxStyle">
      因为一级经销商的<span> 实名认证考核策略</span>，<br/>
      CS75-PLUS实名认证率接近100%，<br/>可以考虑<span> 扩展 </span>到其他渠道。
    </div>
    <div class="page">2/20</div>
  </div>
</template>

<script>
  import Drawer from "../Drawer/Drawer"
  import echarts from "echarts"
  export default {
    name: "TotalUser",
    components: {Drawer},
    data() {
      return {
        barHeight1: window.innerHeight * 0.22,
        barHeight2: window.innerHeight * 0.3,
        funnelData: [
          {value:80, name:'期间产量'},
          {value:60, name:'联网搭载 38.2%'},
          {value:40, name:'终端实销 73.0%'},
          {value:20, name:'车辆激活 85.4%'},
        ],
        funnelData1: [
          {value:80, name:'524902'},
          {value:60, name:'200376'},
          {value:40, name:'146189'},
          {value:20, name:'124910'},
        ],
        legend: ['CS35','CS55','新CS75','CS75-PLUS','CS95','逸动',],
        monthList: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月',],
        lineData: [86.57,88.92,92.72,92.72,92.74,92.1,93.13,94.19,93.82,95.83],
        lineData1: [88.89,88.98,90.14,90.02,89.96,90.45,92,92.97,93.16,93.7],
        lineData2: [92.47,93.39,94.35,94.86,94.37,93.49,95.39,95.67,95.57,96.1],
        lineData3: [,,,,,,,,87.57,98.25],
        lineData4: [83.08,83.09,83.93,83.37,82.39,82.72,85.2,87.76,88.1,89.16],
        lineData5: [91.25,91.9,92.88,93.25,93.2,92.67,93.5,94.69,94.75,95.47],
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
              data: me.funnelData
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
              data: me.funnelData1
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
          grid: {
            left: '16%',
            right: '9%',
            top: '24%',
            bottom: '16%'
          },
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
            data: this.legend,
            itemHeight: 6,
            textStyle: {
              color: 'grey'
            },
            // orient: 'vertical',
            // top: '10%',
            left: '10%',
            right: '10%'
          },
          xAxis: {
            type: 'category',
            data:me.monthList,
            boundaryGap: false,
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
            min: 80,
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
            name: me.legend[0],
            data: me.lineData,
            type: 'line',
            barWidth: 7,
            itemStyle: {
              opacity: 0.8,
              barBorderRadius: [5, 5, 0, 0],
            },
          },{
            name: me.legend[1],
            data: me.lineData1,
            type: 'line',
            barWidth: 7,
            itemStyle: {
              opacity: 0.8,
              barBorderRadius: [5, 5, 0, 0],
            },
          },{
            name: me.legend[2],
            data: me.lineData2,
            type: 'line',
            barWidth: 7,
            itemStyle: {
              opacity: 0.8,
              barBorderRadius: [5, 5, 0, 0],
            },
          },{
            name: me.legend[3],
            data: me.lineData3,
            type: 'line',
            barWidth: 7,
            itemStyle: {
              opacity: 0.8,
              barBorderRadius: [5, 5, 0, 0],
            },
          },{
            name: me.legend[4],
            data: me.lineData4,
            type: 'line',
            barWidth: 7,
            itemStyle: {
              opacity: 0.8,
              barBorderRadius: [5, 5, 0, 0],
            },
          },{
            name: me.legend[5],
            data: me.lineData5,
            type: 'line',
            barWidth: 7,
            itemStyle: {
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
    /*font-size: 0.63rem;*/
    font-size: 0.587rem;
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
