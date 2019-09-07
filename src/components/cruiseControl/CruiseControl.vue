<template>
  <div>
    <!--<Drawer></Drawer>-->

    <div id="title">驾驶功能高频次使用用户分析</div>
    <div class="subtitle">定速巡航</div>
    <div id="fixedCCs" :style="{width: '100%', height: barHeight1+'px', margin: '0 0 5px 0'}"></div>
    <div class="subtitle">自适应巡航</div>
    <div id="adaptiveCCs" :style="{width: '100%', height: barHeight2+'px', margin: '10px 0 5px 0'}"></div>
    <div id="content">
      车龄越长用户越懒<br/>
      <span>30-40</span>岁的用户常使用驾驶功能<br/>
      <span>20-30</span>岁的用户使用率低于预期<br/>或许年轻人更享受驾驶的乐趣
    </div>

    <!--<p>{{remoteActive.carTypeUsed}}</p>-->
  </div>
</template>

<script>
  import Drawer from "../Drawer/Drawer"
  import echarts from "echarts"
  export default {
    name: "CruiseControl",
    components: {Drawer},
    props: ["cruiseControl"],
    data() {
      return {
        barHeight1: window.innerHeight * 0.25,
        barHeight2: window.innerHeight * 0.25,
      }
    },
    mounted(){

    },
    methods: {
      initCruiseControl() {
        this.drawFixed();
        this.drawAdaptive();
      },
      drawFixed(){
        let me = this;
        // 基于准备好的dom，初始化echarts实例
        let fixedCCsLine = this.$echarts.init(document.getElementById('fixedCCs'))
        // 绘制图表
        fixedCCsLine.setOption({
          grid: {
            left: '20%',
            right: '20',
            top: '12%',
            bottom: '30%'
          },
          tooltip: {
            show: true,
            trigger: 'axis',
            formatter: '{b0}<br/>{a0} : {c0}%<br/>{a1} : {c1}%'
          },
          legend: {
            data:['全部','定速巡航'],
            itemHeight: 6,
            textStyle: {
              color: 'grey'
            },
            orient: 'vertical',
            right: '6%',
            top: 0,
          },
          xAxis: {
            type: 'category',
            data:me.cruiseControl.fixedCCsItem,
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
              color: '#666'
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
            axisLabel :{
              formatter: '{value}%',
              color: '#666'
            },
            nameTextStyle: {
              color: '#666'
            },
          },
          series: [{
            name: '全部',
            data: me.cruiseControl.carFuncAllsData,
            type: 'line',
            barWidth: 7,
            itemStyle: {
              color: '#EEAF00',
              opacity: 0.8,
              barBorderRadius: [5, 5, 0, 0],
            },
          },
            {
              name: '定速巡航',
              data: me.cruiseControl.fixedCCsData,
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
      drawAdaptive(){
        let me = this;
        // 基于准备好的dom，初始化echarts实例
        let adaptiveCCsLine = this.$echarts.init(document.getElementById('adaptiveCCs'))
        // 绘制图表
        adaptiveCCsLine.setOption({
          grid: {
            left: '20%',
            top: '5%',
            bottom: '43%',
            right: '20',
          },
          tooltip: {
            show: true,
            trigger: 'axis',
            formatter: '{b0}<br/>{a0} : {c0}%<br/>{a1} : {c1}%'
          },
          legend: {
            data:['全部','自适应巡航'],
            itemHeight: 6,
            textStyle: {
              color: 'grey'
            },
            orient: 'vertical',
            right: '6%',
            top: 0,
          },
          xAxis: {
            type: 'category',
            data:me.cruiseControl.fixedCCsItem,
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
              rotate: 40,
              fontSize: 11,
              color: '#666'
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
            axisLabel :{
              formatter: '{value}%',
              color: '#666'
            },
            nameTextStyle: {
              color: '#666'
            },
          },
          series: [{
            name: '全部',
            data: me.cruiseControl.carFuncAllsData,
            type: 'line',
            barWidth: 7,
            itemStyle: {
              color: '#EEAF00',
              opacity: 0.8,
              barBorderRadius: [5, 5, 0, 0],
            },
          },
            {
              name: '自适应巡航',
              data: me.cruiseControl.adaptiveCCsData,
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
    padding-bottom: 2%
  }

  .subtitle {
    width: 100%;
    text-align: left;
    font-size: 32px;
    margin-left:5%;
    margin-top: 3%;
    color: #444
  }



  #definition {
    width: 100%;
    text-align: left;
    margin-left:5%;
    color: grey;
  }

  #content {
    width:80%;
    margin: 0 auto;
    background-color: #F0F9FE;
    padding: 0.2rem 0.3rem 0.2rem 0.3rem;
    font-size: 0.32rem;
    color: #444
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


</style>
