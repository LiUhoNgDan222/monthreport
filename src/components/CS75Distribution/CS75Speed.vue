<template>
  <div>
    <!--<Drawer></Drawer>-->

    <div id="title">新CS75驾驶行为分析</div>
    <div id="subTitle1">速度分布</div>

    <div id="speedDistribution" :style="{width: '100%', height: barHeight1+'px', margin: '0 0 0 0'}"></div>

    <div id="subTitle2">加速度分布</div>
    <div id="accelerateDistribution" :style="{width: '100%', height: barHeight2+'px', margin: '0 0 0 0'}"></div>
    <div class="content">
      由于堵车等原因，用户多在<span> 0-10km/h </span>速度行驶<br/>并且大部分用户的驾驶习惯还比较温柔
    </div>

    <!--<p>{{remoteActive.carTypeUsed}}</p>-->
  </div>
</template>

<script>
  import Drawer from "../Drawer/Drawer"
  import echarts from "echarts"
  export default {
    name: "CS75Speed",
    components: {Drawer},
    props: ["CS75List"],
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
        let speedBar = this.$echarts.init(document.getElementById('speedDistribution'))
        // 绘制图表
        speedBar.setOption({
          grid: {
            left: '20%',
            top: '12%',
            bottom: '30%',
            right: '18%'
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
            name: 'km/h',
            type: 'category',
            data:['0-10','10-20','20-30','30-40','40-50','50-60','60-70','70-80','80-90','90-100','100-110','110-120'],
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
            data: [31.34,10.24,10.56,10.22,9.43,7.5,5.12,4.8,3.72,3.16,2.11,1.32],
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
        let accelerateBar = this.$echarts.init(document.getElementById('accelerateDistribution'))
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
            name: 'km/(h*s)',
            type: 'category',
            data:['-7--6','-6--5','-5--4','-4--3','-3--2','-2--1','-1-0','0-1','1-2','2-3','3-4','4-5','5-6','6-7'],
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
            data: [0.52,0.94,1.53,2.84,5.46,12.38,23.72,28.84,12.7,5.57,2.57,1.12,0.54,0.25],
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
