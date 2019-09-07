<template>
  <div>
    <!--<Drawer></Drawer>-->

    <div id="title">油耗分布(油浮算法)</div>
    <div id="subTitle1">逸动/逸动两厢</div>

    <div id="YiDongOil" :style="{width: '100%', height: barHeight1+'px', margin: '0 0 0 0'}"></div>

    <div id="subTitle2">睿骋CC</div>
    <div id="CCOil" :style="{width: '100%', height: barHeight2+'px', margin: '0 0 0 0'}"></div>
    <div class="content">
      <span>一线 </span>城市油耗偏高，因为人多车多堵车多
    </div>

    <!--<p>{{remoteActive.carTypeUsed}}</p>-->
  </div>
</template>

<script>
  import Drawer from "../Drawer/Drawer"
  import echarts from "echarts"
  export default {
    name: "YiDongOil",
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
        let speedBar = this.$echarts.init(document.getElementById('YiDongOil'))
        // 绘制图表
        speedBar.setOption({
          grid: {
            left: '20%',
            top: '20%',
            bottom: '30%',
            right: '23%'
          },
          legend: {
            data:['逸动','逸动两厢'],
            itemHeight: 6,
            textStyle: {
              color: 'grey'
            },
            right: 35,
            top: 0,
          },
          xAxis: {
            name: 'L/100km',
            type: 'category',
            data:['5-6','6-7','7-8','8-9','9-10','10-11','11-12','12-13'],
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
            name: '逸动',
            data: [0.23,7.27,31.39,35.32,17.22,5.85,2.1,0.61],
            type: 'bar',
            barWidth: 7,
            itemStyle: {
              color: '#00A0E9',
              opacity: 0.8,
              barBorderRadius: [5, 5, 0, 0],
            },

          },
          {
            name: '逸动两厢',
            data: [0,1.92,22.78,40.16,23.82,7.84,2.59,0.89],
            type: 'bar',
            barWidth: 7,
            itemStyle: {
              color: '#EEAF00',
              opacity: 0.8,
              barBorderRadius: [5, 5, 0, 0],
            },

          }]
        });
      },
      drawAccelerate(){
        let me = this;
        // 基于准备好的dom，初始化echarts实例
        let accelerateBar = this.$echarts.init(document.getElementById('CCOil'))
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
            data: [2.18,12.13,26.34,27.33,16.32,8.96,5.42,1.33],
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
