<template>
  <div>
    <!--<Drawer></Drawer>-->

    <div id="title">油耗统计</div>
    <div id="city" :style="bg6">
      <p id="averageText">平均油耗<span> {{seriesOilCost.avgOilCost}} </span>L/100km</p>
    </div>
    <div id="subTitle">各车型油耗</div>
    <div id="carTypeOilRank" :style="{width: '100%', height: barHeight1+'px', margin: '5px 0 20px 0'}"></div>
    <div id="content">
      平均油耗<span> 超过8 </span>的三个车型<br/>值得重点关注下
    </div>
  </div>
</template>

<script>
  import echarts from "echarts"
  export default {
    name: "CarTypeOil",
    props: ["seriesOilCost"],
    data() {
      return {
        bg6: {
          backgroundImage: "url(" + require("./img/oilCar.png") + ")",
          height: window.innerHeight * 0.08 + 'px',
        },
        barHeight1: window.innerHeight * 0.35,
      }
    },
    mounted(){

    },
    methods: {
      initCarTypeOil() {
        this.drawOilRank();
      },
      drawOilRank(){
        let me = this;
        // 基于准备好的dom，初始化echarts实例
        let carTypeOilRankBar = this.$echarts.init(document.getElementById('carTypeOilRank'))
        // 绘制图表
        carTypeOilRankBar.setOption({
          grid: {
            left: '30%',
            right: '40',
            top: '6%',
            bottom: '15%'
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
          yAxis: {
            type: 'category',
            data:me.seriesOilCost.seriesAvgOilCostsItem.reverse(),
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
              fontSize: 12,
              color: '#666'
            },
            nameTextStyle: {
              color: '#BEBEBE'
            },
          },
          xAxis: {
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
              interval:0,
              fontSize: 12,
              color: '#666'
            },
            nameTextStyle: {
              color: '#BEBEBE'
            },
            min: 7
          },
          series: [{
            data: me.seriesOilCost.seriesAvgOilCostsData.reverse(),
            type: 'bar',
            barWidth: 7,
            itemStyle: {
              color: '#00A0E9',
              opacity: 0.8,
              barBorderRadius: [0, 5, 5, 0],
            },
            label: {
              show: true,
              position: 'right',
              fontSize: 11,
              color: '#00A0E9'
            },
            markLine: {
              label: {
                show: true,
                formatter: me.seriesOilCost.avgOilCost,
                position: "end"
              },
              lineStyle: {
                color: '#FFD800',
              }
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

  #secondText {
    position: relative;
    /*top:30%*/
    top:30%;
  }

  #city {
    width: 70%;
    margin: 0 auto;
    background-size: 90% 90%;
    background-repeat: no-repeat;
    background-position: center;
    text-align: center;
    padding-bottom: 10%;
    color: #FFF
  }


  #content {
    width:80%;
    margin: 0 auto;
    background-color: #F0F9FE;
    padding: 0.5rem 0.3rem 0.6rem 0.3rem;
    font-size: 0.32rem;
    color: #444
  }

  #averageText {
    width: 100%;
    margin-left: 10%;
    padding-top:4%;
    position: relative;
    font-size: 24px;
  }

  #subTitle {
    font-size: 0.36rem;
    color: #444;
    font-weight: bold;
    margin-left: 0.9rem;
    margin-top: 0.67rem;
    text-align: left;
    width: 100%;
  }

  #dateText {
    width: 100%;
    text-align: left;
    margin-left: 20%;
    position: relative;
    padding-top: 4%;
    font-size: 34px;
  }

  #bottomMessage {
    position: absolute;
    width: 100%;
    margin: 0 auto;
    bottom: 40px;
    font-size: 26px
  }

  span {
    color: #00A0E9;
    font-size: 0.4rem;
    font-weight: bold;
  }

  #averageText > span {
    color: #FFD800;
    font-size: 0.48rem;
    font-weight: bold;
  }

  p {
    font-size: 28px;
  }


</style>
