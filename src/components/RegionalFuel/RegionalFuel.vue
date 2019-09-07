<template>
  <div>
    <!--<Drawer></Drawer>-->

    <div id="title">地域油耗分析</div>
    <div id="subTitle1">按地域</div>

    <div id="regionalData" :style="{width: '100%', height: barHeight1+'px', margin: '0 0 0 0'}"></div>
    <div class="content">
      <span>西南、华南</span>和<span> 东北地区 </span>油耗偏高
    </div>
    <div id="subTitle2">按城市等级</div>
    <div id="cityData" :style="{width: '100%', height: barHeight2+'px', margin: '10px 0 0 0'}"></div>
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
    name: "RegionalFuel",
    components: {Drawer},
    props: ["RegionalFuelList"],
    data() {
      return {
        barHeight1: window.innerHeight * 0.24,
        barHeight2: window.innerHeight * 0.24,
      }
    },
    mounted(){

    },
    methods: {
      initRegionalFuel() {
        this.drawRegionalFuel();
        this.drawCityFuel();
      },
      drawRegionalFuel(){
        let me = this;
        // 基于准备好的dom，初始化echarts实例
        let regionalBar = this.$echarts.init(document.getElementById('regionalData'))
        // 绘制图表
        regionalBar.setOption({
          grid: {
            left: '20%',
            top: '12%',
            bottom: '30%'
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
            type: 'category',
            data:me.RegionalFuelList.regionalItem,
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
              color: '#666'
            },
            nameTextStyle: {
              color: '#666'
            },
          },
          series: [{
            data: me.RegionalFuelList.regionalData,
            type: 'bar',
            barWidth: 7,
            itemStyle: {
              color: '#00A0E9',
              opacity: 0.8,
              barBorderRadius: [5, 5, 0, 0],
            },
            label: {
              show: true,
              position: 'top',
              fontSize: 9,
              color: '#00A0E9',

            }
          }]
        });
      },
      drawCityFuel(){
        let me = this;
        // 基于准备好的dom，初始化echarts实例
        let cityBar = this.$echarts.init(document.getElementById('cityData'))
        // 绘制图表
        cityBar.setOption({
          grid: {
            left: '20%',
            top: '10%',
            bottom: '40%'
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
            type: 'category',
            data:me.RegionalFuelList.cityItem,
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
              color: '#666'
            },
          },
          series: [{
            data: me.RegionalFuelList.cityData,
            type: 'bar',
            barWidth: 7,
            itemStyle: {
              color: '#00A0E9',
              opacity: 0.8,
              barBorderRadius: [5, 5, 0, 0],
            },
            label: {
              show: true,
              position: 'top',
              fontSize: 9,
              color: '#00A0E9',

            }
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
