<template>
  <div>
    <!--<Drawer></Drawer>-->

    <div id="title">油耗分布(油浮算法)</div>
    <div id="subTitle1">全新CS35plus</div>

    <div id="CS35plusOil" :style="{width: '100%', height: barHeight1+'px', margin: '0 0 0 0'}"></div>

    <div id="subTitle2">CS55</div>
    <div id="CS55Oil" :style="{width: '100%', height: barHeight2+'px', margin: '0 0 0 0'}"></div>
    <div class="content">
      两个车型差别不大，油耗集中在<span> 8-11 </span>
    </div>

    <!--<p>{{remoteActive.carTypeUsed}}</p>-->
  </div>
</template>

<script>
  import Drawer from "../Drawer/Drawer"
  import echarts from "echarts"
  export default {
    name: "CS55Oil",
    components: {Drawer},
    data() {
      return {
        barHeight1: window.innerHeight * 0.24,
        barHeight2: window.innerHeight * 0.24,
      }
    },
    mounted(){
      this.drawSpeed();
      this.drawAccelerate();
    },
    methods: {
      initRegionalFuel() {
        this.drawSpeed();
        this.drawAccelerate();
      },
      drawSpeed(){
        let me = this;
        // 基于准备好的dom，初始化echarts实例
        let speedBar = this.$echarts.init(document.getElementById('CS35plusOil'))
        // 绘制图表
        speedBar.setOption({
          grid: {
            left: '20%',
            top: '12%',
            bottom: '30%',
            right: '23%'
          },
          legend: {
            data:['车辆数量'],
            itemHeight: 6,
            textStyle: {
              color: 'grey'
            },
            right: 0,
            top: 0,
          },
          xAxis: {
            name: 'L/100km',
            type: 'category',
            data:['6-7','7-8','8-9','9-10','10-11','11-12','12-13','13-14'],
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
            show: true,
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
              color: '#666',
              interval: 'auto',
              formatter: '{value} %'
            },
            nameTextStyle: {
              color: '#666'
            },
          },
          series: [{
            data: [0.35,3.95,27.7,41.05,19.14,5.75,1.82,0.23],
            type: 'bar',
            barWidth: 7,
            itemStyle: {
              color: '#00A0E9',
              opacity: 0.8,
              barBorderRadius: [5, 5, 0, 0],
            },
          }]
        });
      },
      drawAccelerate(){
        let me = this;
        // 基于准备好的dom，初始化echarts实例
        let accelerateBar = this.$echarts.init(document.getElementById('CS55Oil'))
        // 绘制图表
        accelerateBar.setOption({
          grid: {
            left: '20%',
            top: '10%',
            bottom: '40%',
            right: '23%'
          },
          legend: {
            data:['车辆数量'],
            itemHeight: 6,
            textStyle: {
              color: 'grey'
            },
            right: 0,
            top: 0,
          },
          xAxis: {
            name: 'L/100km',
            type: 'category',
            data:['6-7','7-8','8-9','9-10','10-11','11-12','12-13','13-14'],
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
            nameTextStyle: {
              color: '#666'
            },
            axisLabel :{
              color: '#666',
              interval: 'auto',
              formatter: '{value} %'
            },
          },
          series: [{
            data: [0.83,4.51,20.09,38.13,24.13,8.31,3.52,0.47],
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
    padding-bottom: 10%
  }

  #definition {
    width: 100%;
    text-align: left;
    margin-left:5%;
    color: grey;
  }

  #subTitle1 {
    font-size: 0.36rem;
    color: #444;
    font-weight: bold;
    margin-left: 7%;
    text-align: left;
    width: 100%;
  }

  #subTitle2 {
    font-size: 0.36rem;
    color: #444;
    font-weight: bold;
    margin-top: 2%;
    margin-left: 7%;
    text-align: left;
    width: 100%;
  }

  .content {
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
    color: #00A0E9;
    font-size: 0.4rem;
    font-weight: bold;
  }


</style>
