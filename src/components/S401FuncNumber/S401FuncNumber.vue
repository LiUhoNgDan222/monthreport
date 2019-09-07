<template>
  <div>
    <!--<Drawer></Drawer>-->
    <div id="title">S401车机功能活跃频次</div>
    <div id="S401FuncNumberData" :style="{width: '100%', height: barHeight+'px', margin: '0 auto'}"></div>
    <div id="content" :style="bg9">
      <!--<p id="dateText">根据<span>{{remoteActive.month}}</span>每日最少活跃<br/></p>-->
      <p id="secondText">
        <!--<span>{{remoteActive.carNumber}}</span>来看，使用手机APP远程控制<br/>-->
        <!--功能的频次还是较少-->
        <span>远程搜车</span>功能活跃度跑步进入前列
      </p>
    </div>
    <!--<p>{{remoteActive.carTypeUsed}}</p>-->
  </div>
</template>

<script>
  import Drawer from "../Drawer/Drawer"
  import echarts from "echarts"
  export default {
    name: "S401FuncNumber",
    components: {Drawer},
    data() {
      return {
        bg9: {
          backgroundImage: "url(" + require("../../assets/picture/box3.png") + ")",
        },
        barHeight: window.innerHeight * 0.40,
      }
    },
    mounted(){
      this.drawS401Func();
    },
    methods: {
      drawS401Func(){
        let me = this;
        // 基于准备好的dom，初始化echarts实例
        let S401FuncBar = this.$echarts.init(document.getElementById('S401FuncNumberData'))
        // 绘制图表
        S401FuncBar.setOption({
          grid: {
            left: '20%',
            top: '6%',
            bottom: '30%'
          },
          xAxis: {
            type: 'category',
            data:['喜马拉雅','本地电台','酷我音乐','导航'],
            splitLine:{
              show: true,
              lineStyle: {
                color: ['#CCECFB'],
                opacity: 0.1,
              }
            },
            axisLine: {
              lineStyle: {
                color: '#CCECFB'
              }
            },
            axisLabel :{
              interval:0,
              fontSize: 10
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
                color: '#CCECFB'
              }
            },
            nameTextStyle: {
              color: '#BEBEBE'
            },
          },
          series: [{
            data: [0.15,0.65,0.33,1.88],
            type: 'bar',
            barWidth: 4,
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
    top:30%
  }


  span {
    color: #2894FF;
    font-size: 40px;
  }

  p {
    font-size: 28px;
  }
</style>
