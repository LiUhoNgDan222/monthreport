<template>
  <div>
    <!--<Drawer></Drawer>-->

    <div id="title">工作日与休息日油耗分析</div>

    <div id="workingDayData" :style="{width: '100%', height: barHeight+'px', margin: '0 0 20px 0'}"></div>
    <div id="content">
      <span>周六 </span>的油耗首次打败周一的<br/>可能是春暖花开好天气，大家都出门啦
    </div>

    <!--<p>{{remoteActive.carTypeUsed}}</p>-->
  </div>
</template>

<script>
  import Drawer from "../Drawer/Drawer"
  import echarts from "echarts"
  export default {
    name: "WorkingDayOil",
    components: {Drawer},
    props: ["workingDayOilList"],
    data() {
      return {
        barHeight: window.innerHeight * 0.50,
      }
    },
    mounted(){

    },
    methods: {
      initWorkingDayOil() {
        this.drawworkingDay();
      },
      drawworkingDay(){
        let me = this;
        // 基于准备好的dom，初始化echarts实例
        let workingDayBar = this.$echarts.init(document.getElementById('workingDayData'))
        // 绘制图表
        workingDayBar.setOption({
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
            data: ['全国','重庆'],
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
              data: me.workingDayOilList.weekDay,
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
                color: '#666'
              },
            }
          ],
          yAxis: [
            {
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
              min: 7,
            }
          ],
          series: [
            {
              name: '全国',
              type: 'bar',
              barGap: 0,
              barWidth: 7,
              data: me.workingDayOilList.AlloilCost,
              itemStyle: {
                color: '#EEAF00',
                opacity: 0.8,
                barBorderRadius: [5, 5, 0, 0],
              },
              label: {
                show: true,
                position: 'top',
                fontSize: 9,
                color: '#EEAF00',
                formatter: function(params){
                  return params.data + '      '
                }
              }
            },
            {
              name: '重庆',
              type: 'bar',
              barWidth: 7,
              data: me.workingDayOilList.CQoilCost,
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
                formatter: function(params){
                  return params.data + '\n'
                }
              }
            }
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
    padding-bottom: 15%
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
