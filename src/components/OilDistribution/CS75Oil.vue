<template>
  <div>
    <!--<Drawer></Drawer>-->

    <div id="title">油耗分布(油浮算法)</div>
    <div id="subTitle1">新CS75</div>

    <div id="CS75Oil" :style="{width: '100%', height: barHeight1+'px', margin: '0 0 0 0'}"></div>

    <div id="subTitle2">CS95</div>
    <div id="CS95Oil" :style="{width: '100%', height: barHeight2+'px', margin: '0 0 0 0'}"></div>
    <div class="content">
      很明显的<span> cs95 </span>油耗相对于其他车型偏高
    </div>

    <!--<p>{{remoteActive.carTypeUsed}}</p>-->
  </div>
</template>

<script>
  import Drawer from "../Drawer/Drawer"
  import echarts from "echarts"
  export default {
    name: "CS75Oil",
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
        let speedBar = this.$echarts.init(document.getElementById('CS75Oil'))
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
            data:['6-7','7-8','8-9','9-10','10-11','11-12','12-13','13-14','14-15','15-16','16-17','17-18'],
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
            data: [0.13,0.89,5.29,17.22,27.51,24.72,13.56,5.85,2.56,1.25,0.75,0.27],
            type: 'bar',
            barWidth: 7,
            itemStyle: {
              color: '#00A0E9',
              opacity: 0.8,
              barBorderRadius: [5, 5, 0, 0],
            },
            // label: {
            //   show: true,
            //   position: 'top',
            //   fontSize: 9,
            //   color: '#00A0E9',
            //   formatter: '{c} %'
            // }
          }]
        });
      },
      drawAccelerate(){
        let me = this;
        // 基于准备好的dom，初始化echarts实例
        let accelerateBar = this.$echarts.init(document.getElementById('CS95Oil'));
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
            data:['8-9','9-10','10-11','11-12','12-13','13-14','14-15','15-16','16-17','17-18','18-19'],
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
            data: [0.49,7.09,12.77,14.11,14.11,16.28,12.14,8.07,6.95,4.98,3.02],
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
