<template>
  <div>
    <!--<Drawer></Drawer>-->
    <div id="title">千车反馈数</div>
    <div id="thousandData" :style="{width: '100%', height: barHeight+'px', margin: '8% 0 5% 0 '}"></div>
    <div id="content">
      <span>CS85coupe </span>的用户千车反馈数最高，<br/>是CS55的4倍、新CS75的2.5倍。

    </div>
  </div>
</template>

<script>
  import Drawer from "../Drawer/Drawer"
  import echarts from "echarts"
  export default {
    name: "ThousandFeedback",
    components: {Drawer},
    props: ["thousandCarFeedBack"],
    data() {
      return {
        bg9: {
          backgroundImage: "url(" + require("../../assets/picture/box3.png") + ")",
        },
        barHeight: window.innerHeight * 0.48,
      }
    },
    mounted(){

    },
    methods: {
      initThousand() {
        let me = this;
        me.drawThousand();
      },
      drawThousand(){
        let me = this;
        // 基于准备好的dom，初始化echarts实例
        let thousandDataPie = this.$echarts.init(document.getElementById('thousandData'))
        // 绘制图表
        thousandDataPie.setOption({
          grid: {
            left: '20%',
            top: '15%',
            bottom: '30%'
          },
          xAxis: {
            type: 'category',
            data: me.thousandCarFeedBack.seriesName,
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
            axisLabel: {
              formatter: '{value}',
              color: '#666'
            },
            nameTextStyle: {
              color: '#666'
            },
          },
          series: [{
            data: me.thousandCarFeedBack.recordNumPerSeries,
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
              formatter: '{c}',
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
    font-size: 0.42rem;
    font-weight: bold;
  }

  p {
    font-size: 28px;
  }
</style>
