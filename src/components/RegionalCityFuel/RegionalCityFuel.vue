<template>
  <div>
    <!--<Drawer></Drawer>-->
    <div id="title">地域油耗分析</div>
    <div id="subTitle3">按城市群</div>
    <div id="regionalCityFuelData" :style="{width: '100%', height: barHeight+'px', margin: '10px 0 40px 0'}"></div>
    <div id="content">
      <span>京津冀</span> 和 <span>成渝经济圈</span> 的油耗最高<br/>这与“堵”城的分布一致
    </div>
    <!--<p>{{remoteActive.carTypeUsed}}</p>-->
  </div>
</template>

<script>
  import Drawer from "../Drawer/Drawer"
  import echarts from "echarts"
  export default {
    name: "RegionalCityFuel",
    components: {Drawer},
    props: ["RegionalCityFuelList"],
    data() {
      return {
        barHeight: window.innerHeight * 0.40,
      }
    },
    mounted(){

    },
    methods: {
      initRegionalCityFuel() {
        this.drawregionalCityFuelFunc();
      },
      drawregionalCityFuelFunc(){
        let me = this;
        // 基于准备好的dom，初始化echarts实例
        let regionalCityFuelBar = this.$echarts.init(document.getElementById('regionalCityFuelData'))
        // 绘制图表
        regionalCityFuelBar.setOption({
          grid: {
            left: '20%',
            top: '15%',
            bottom: '20%'
          },
          xAxis: {
            type: 'category',
            data:me.RegionalCityFuelList.regionalItem,
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
              fontSize: 12,
              color: '#666'
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
                opacity: 0.7,
              }
            },
            axisLine: {
              lineStyle: {
                color: '#00A0E9'
              }
            },
            axisLabel: {
              color: '#666'
            },
            nameTextStyle: {
              color: '#666'
            },
            min: 7,
          },
          series: [{
            data: me.RegionalCityFuelList.regionalData,
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
              fontSize: 11,
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
    padding-bottom: 2%
  }

  #content {
    width:80%;
    margin: 0 auto;
    background-color: #F0F9FE;
    padding: 0.5rem 0.3rem 0.5rem 0.3rem;
    font-size: 0.32rem;
    color: #444
  }

  #subTitle3 {
    font-size: 0.36rem;
    color: #444;
    font-weight: bold;
    margin-top: 10%;
    margin-left: 7%;
    text-align: left;
    width: 100%;
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
    color: #00A0E9;
    font-size: 0.4rem;
    font-weight: bold;
  }

  p {
    font-size: 28px;
  }
</style>
