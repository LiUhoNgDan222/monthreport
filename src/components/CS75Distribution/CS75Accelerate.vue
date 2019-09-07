<template>
  <div>
    <!--<Drawer></Drawer>-->

    <div id="title">新CS75驾驶行为分析</div>
    <div id="subTitle1">车速-加速频次</div>

    <div id="speed" :style="{width: '100%', height: barHeight1+'px', margin: '4% 0 0 0'}"></div>

    <div id="subTitle2">频次</div>
    <div id="urgeSpeed" :style="{width: '100%', height: barHeight2+'px', margin: '0 0 0 0'}"></div>
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
    name: "CS75Accelerate",
    components: {Drawer},
    data() {
      return {
        barHeight1: window.innerHeight * 0.24,
        barHeight2: window.innerHeight * 0.24,
      }
    },
    mounted(){
      this.drawSpeedVSAcc();
      this.drawUrgeSpeed();
    },
    methods: {
      initRegionalFuel() {
        this.drawSpeedVSAcc();
        this.drawUrgeSpeed();
      },
      drawSpeedVSAcc(){
        let me = this;
        // 基于准备好的dom，初始化echarts实例
        let speedVSAccBar = this.$echarts.init(document.getElementById('speed'))
        // 绘制图表
        speedVSAccBar.setOption({
          grid: {
            left: '20%',
            top: '20%',
            bottom: '30%',
            right: '18%'
          },
          legend: {
            data:['加速','减速'],
            itemHeight: 6,
            textStyle: {
              color: 'grey'
            },
            right: 35,
            top: 'top'
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
            axisLabel :{
              color: '#666'
            },
            nameTextStyle: {
              color: '#666'
            },
          },
          series: [{
            name: '加速',
            data: [2484,3277,2462,2061,1663,1380,1025,817,474,366,194,62,],
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
            //
            // }
          },
          {
            name: '减速',
            data:[1206,2379,2569,2455,2092,1732,1276,1000,638,455,281,142],
            type: 'bar',
            barWidth: 7,
            itemStyle: {
              color: '#EEAF00',
              opacity: 0.8,
              barBorderRadius: [5, 5, 0, 0],
            },
            // label: {
            //   show: true,
            //   position: 'top',
            //   fontSize: 9,
            //   color: '#EEAF00',
            //
            // }
          }]
        });
      },
      drawUrgeSpeed(){
        let me = this;
        // 基于准备好的dom，初始化echarts实例
        let urgeSpeedBar = this.$echarts.init(document.getElementById('urgeSpeed'))
        // 绘制图表
        urgeSpeedBar.setOption({
          grid: {
            left: '20%',
            top: '23%',
            bottom: '40%',
            right: '18%'
          },
          legend: {
            data:['急加速','急减速'],
            itemHeight: 6,
            textStyle: {
              color: 'grey'
            },
            right: 35,
            top: 'top',
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
              rotate: 40,
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
            nameTextStyle: {
              color: '#666'
            },
            axisLabel :{
              color: '#666'
            },
          },
          series: [{
            name: '急加速',
            data: [251,799,713,590,467,390,285,224,146,104,54,30],
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
            //
            // }
          },
          {
            name: '急减速',
            data: [629,785,800,722,675,501,336,266,154,103,54,21],
            type: 'bar',
            barWidth: 7,
            itemStyle: {
              color: '#EEAF00',
              opacity: 0.8,
              barBorderRadius: [5, 5, 0, 0],
            },
            // label: {
            //   show: true,
            //   position: 'top',
            //   fontSize: 9,
            //   color: '#EEAF00',
            //
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
