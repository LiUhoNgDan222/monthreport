<template>
  <div>
    <!--<Drawer></Drawer>-->

    <div id="title">整车配置功能应用分析</div>
    <div id="definition">统计车型仅限新CS75（1072名用户）<br/>上线时间：2018-11</div>

    <div id="ManualNumberTimes" :style="{width: '100%', height: barHeight1+'px', margin: '10px 0 10px 0'}"></div>
    <div id="userTimesTrend" :style="{width: '100%', height: barHeight2+'px', margin: '10px 0 15px 0'}"></div>
    <div id="content4">
      5月部分车辆数据透传通道默认关闭<br/>导致<span> 整车配置 </span>活跃度跳水下降，需重新开启。
    </div>
  </div>
</template>

<script>
  import Drawer from "../Drawer/Drawer"
  import echarts from "echarts"
  export default {
    name: "FunctionUseTimes",
    components: {Drawer},
    props: ["carFunctions"],
    data() {
      return {
        bg9: {
          backgroundImage: "url(" + require("../../assets/picture/box.png") + ")",
        },
        barHeight1: window.innerHeight * 0.25,
        barHeight2: window.innerHeight * 0.3,
      }
    },
    mounted(){
    },
    methods: {
      initFunctionUseTimes() {
        this.drawFuncTimes();
        this.drawTrend();
      },
      drawFuncTimes(){
        let me = this;
        // 基于准备好的dom，初始化echarts实例
        let manualFuncTimesBar = this.$echarts.init(document.getElementById('ManualNumberTimes'))
        // 绘制图表
        manualFuncTimesBar.setOption({
          grid: {
            left: '20%',
            top: '6%',
            bottom: '47%'
          },

          legend: {
            data:['车辆数量'],
            itemHeight: 6,
            textStyle: {
              color: 'grey',
              fontSize: 9
            },
            right: 0,
            top: 0,
          },
          xAxis: {
            type: 'category',
            data:me.carFunctions.carFunctionsItem,
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
              rotate:40,
              fontSize: 10,
              color: '#666',
            },
            nameTextStyle: {
              color: '#666'
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
                color: '#00A0E9'
              }
            },
            nameTextStyle: {
              color: '#666'
            },
            axisLabel :{
              color: '#666',
              formatter: '{value}万',
            },
          },
          series: [{
            data: me.carFunctions.carFunctionsData,
            type: 'bar',
            barWidth: 7,
            itemStyle: {
              color: '#00A0E9',
              opacity: 0.8,
              barBorderRadius: [5, 5, 0, 0],
            },
            label: {
              label: {
                show: true,
                position: 'top',
                fontSize: 10,
                color: '#00A0E9',
                formatter: '{c}万',
              }
            }
          }]
        });
      },
      drawTrend(){
        let me = this;
        // 基于准备好的dom，初始化echarts实例
        let userTimesTrendLine = this.$echarts.init(document.getElementById('userTimesTrend'))
        // 绘制图表
        userTimesTrendLine.setOption({
          grid: {
            left: '20%',
            top: '25%',
            bottom: '14%'
          },
          tooltip: {
            show: true,
            trigger: 'axis',
            formatter: '{b0}<br/>{a0} : {c0}万次<br/>{a1} : {c1}万次<br/>{a2} : {c2}万次'
          },
          legend: {
            data:me.carFunctions.funcList,
            itemHeight: 6,
            right: '5%',
            top: 0,
            textStyle: {
              color: 'grey',
              fontSize: 10
            },
            orient: 'vertical',
            itemGap: 2
          },
          xAxis: {
            type: 'category',
            data:me.carFunctions.monthList,
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
              fontSize: 10,
              color: '#666',
            },
            nameTextStyle: {
              color: '#666'
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
                color: '#00A0E9'
              }
            },
            nameTextStyle: {
              color: '#666'
            },
            axisLabel :{
              color: '#666',
              formatter: '{value}万',
            },
          },
          series: [{
            name: me.carFunctions.funcList[0],
            data: me.carFunctions.oneUseTimes,
            type: 'line',
            barWidth: 7,
            itemStyle: {
              color: '#EEAF00',
              opacity: 0.8,
              barBorderRadius: [5, 5, 0, 0],
            },
          },
            {
              name: me.carFunctions.funcList[1],
              data: me.carFunctions.twoUseTimes,
              type: 'line',
              barWidth: 7,
              itemStyle: {
                color: '#00A0E9',
                opacity: 0.8,
                barBorderRadius: [5, 5, 0, 0],
              },
            },
            {
              name: me.carFunctions.funcList[2],
              data: me.carFunctions.threeUseTimes,
              type: 'line',
              barWidth: 7,
              itemStyle: {
                color: '#004EA2',
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
    padding-bottom: 8%
  }

  #definition {
    width: 100%;
    text-align: left;
    margin-left:5%;
    color: grey;
  }

  #secondText {
    position: relative;
    /*top:30%*/
    top:30%;
  }


  #content {
    width: 100%;
    height:250px;
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
    padding-top: 4%;
    font-size: 30px;
  }

  span {
    color: #2894FF;
    font-size: 36px;
  }

  p {
    font-size: 28px;
  }

  #content4 {
    width:80%;
    margin: 0 auto;
    background-color: #F0F9FE;
    padding: 0.2rem 0.3rem 0.2rem 0.3rem;
    font-size: 0.32rem;
    color: #444
  }


</style>
