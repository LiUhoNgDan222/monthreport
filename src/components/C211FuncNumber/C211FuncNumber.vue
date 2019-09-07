<template>
  <div>
    <!--<Drawer></Drawer>-->

    <div id="title">车机应用活跃度</div>
    <div id="definition">活跃频次 = 使用次数 / 行驶次数</div>

    <div id="C211FuncNumberData" :style="{width: '100%', height: barHeight+'px', margin: '0 0 10px 0'}"></div>
    <div id="content">
      睿骋CC用户平均一次行程要使用1.2次导航<br/>
      说明对<span> 导航功能 </span>的高依赖
    </div>

    <!--<p>{{remoteActive.carTypeUsed}}</p>-->
  </div>
</template>

<script>
  import Drawer from "../Drawer/Drawer"
  import echarts from "echarts"
  export default {
    name: "C211FuncNumber",
    components: {Drawer},
    props: ["carAppSeries"],
    data() {
      return {
        barHeight: window.innerHeight * 0.50,
      }
    },
    mounted(){

    },
    methods: {
      initC211FuncNumber() {
        this.drawC211Func();
      },
      drawC211Func(){
        let me = this;
        // 基于准备好的dom，初始化echarts实例
        let C211FuncBar = this.$echarts.init(document.getElementById('C211FuncNumberData'))
        // 绘制图表
        C211FuncBar.setOption({
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          grid: {
            left: '20%',
          },
          legend: {
            data: me.carAppSeries.carType,
            textStyle:{
              color: '#666'
            },
            itemWidth:8,
            itemHeight: 8,
          },
          calculable: true,
          xAxis: [
            {
              type: 'category',
              axisTick: {show: false},
              data: me.carAppSeries.appName,
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
                color: '#666'
              },
            }
          ],
          yAxis: [
            {
              name: '频次',
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
            }
          ],
          series: [
            {
              name: '逸动',
              type: 'bar',
              barGap: 0,
              barWidth: 7,
              data: me.carAppSeries.c211Freq,
              itemStyle: {
                color: '#EEAF00',
                opacity: 0.8,
                barBorderRadius: [5, 5, 0, 0],
              },
            },
            {
              name: '逸动两厢',
              type: 'bar',
              barWidth: 7,
              data: me.carAppSeries.c212Freq,
              itemStyle: {
                color: '#00A0E9',
                opacity: 0.8,
                barBorderRadius: [5, 5, 0, 0],
              },
            },
            {
              name: '睿骋CC',
              type: 'bar',
              barWidth: 7,
              data: me.carAppSeries.c301Freq,
              itemStyle: {
                color: '#004EA2',
                opacity: 0.8,
                barBorderRadius: [5, 5, 0, 0],
              },
            },
            {
              name: '全新CS95',
              type: 'bar',
              barWidth: 7,
              data: me.carAppSeries.s401Freq,
              itemStyle: {
                color: '#9FB934',
                opacity: 0.8,
                barBorderRadius: [5, 5, 0, 0],
              },
            },
          ]
        });
      },
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
    padding-bottom: 8%
  }

  #definition {
    width: 100%;
    text-align: left;
    margin-left: 25%;
    margin-top: 3%;
    margin-bottom: 3%;
    color: grey;
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
    font-size: 0.4rem;
    font-weight: bold;
  }


</style>
