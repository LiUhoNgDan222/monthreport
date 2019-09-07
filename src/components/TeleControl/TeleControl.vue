<template>
  <div>
    <!--<Drawer></Drawer>-->
    <div id="title">远程控制功能活跃度</div>
    <div id="teleControlBar" :style="{width: '100%', height: barHeight+'px', margin: '8% 0 5% 0 '}"></div>
    <div id="content">
      用户喜欢在<span>开关门、寻车</span>等场景用远程控制功能
    </div>
  </div>
</template>

<script>
  import Drawer from "../Drawer/Drawer"
  import echarts from "echarts"
  export default {
    name: "TeleControl",
    components: {Drawer},
    props: ["remoteActive"],
    data() {
      return {
        bg9: {
          backgroundImage: "url(" + require("../../assets/picture/box3.png") + ")",
        },
        barHeight: window.innerHeight * 0.48,
      }
    },
    mounted(){

    },
    methods: {
      initTeleControl() {
        let me = this;
        me.drawControlBar();
      },
      drawControlBar(){
        let me = this;
        // 基于准备好的dom，初始化echarts实例
        let controlBar = this.$echarts.init(document.getElementById('teleControlBar'))
        // 绘制图表
        controlBar.setOption({
          grid: {
            left: '20%',
            top: '15%',
            bottom: '30%'
          },
          xAxis: {
            type: 'category',
            data: me.remoteActive.totalFunctionCode,
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
              fontSize: 11,
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
            axisLabel: {
              formatter: '{value}万',
              color: '#666'
            },
            nameTextStyle: {
              color: '#666'
            },
          },
          series: [{
            data: me.remoteActive.totalUseTimes,
            type: 'bar',
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

  #content {
    width:80%;
    margin: 0 auto;
    background-color: #F0F9FE;
    padding: 0.6rem 0.3rem 0.6rem 0.3rem;
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
    top:38%;
  }

  span {
    color: #00A0E9;
    font-size: 0.42rem;
    font-weight: bold;
  }

  p {
    font-size: 28px;
  }
</style>
