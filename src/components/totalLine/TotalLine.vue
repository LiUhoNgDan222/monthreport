<template>
  <div>
    <!--<Drawer></Drawer>-->
    <div id="title">车辆在线情况</div>
    <div id="dataLine" :style="{width: '100%', height: lineHeight+'px',margin:'0 0 30px 0'}"></div>
    <div id="content">
      <span>CS85-COUPE </span>连续3个月在线率最高<br/>
      大家已经接受中大型SUV日常代步使用了
    </div>
  </div>
</template>

<script>
  import Drawer from "../Drawer/Drawer"
  import echarts from "echarts"
  export default {
    name: "TotalLine",
    components: {Drawer},
    props: ["seriesOnlineList"],
    data() {
      return {
        lineHeight: window.innerHeight * 0.5,
      }
    },
    mounted(){
    },
    methods: {
      initTotalLine() {
        console.log("初始化totalLine");
        this.drawLine();
      },
      drawLine(){
        let me = this;
        // 基于准备好的dom，初始化echarts实例
        let totalDataLine = me.$echarts.init(document.getElementById('dataLine'))
        // 绘制图表
        totalDataLine.setOption({
          title: {
            text: '车辆平均日使用率',
            x:'center',
            y: 'bottom',
            textStyle: {
              color: '#AAABC6',
              fontSize: 13,
              fontWeight: 'normal',
            }
          },
          tooltip: {
            trigger: 'axis',
            formatter: '{b}<br/>{a}:{c}%'
          },
          legend: {
            data:['平均日使用率'],
            itemHeight: 6,
            textStyle: {
              color: '#333'
            },
            orient: 'vertical',
            right: '4%',
            top: '20%,'
          },
          grid: {
            left: '9%',
            right: '9%',
            bottom: '9%',
            containLabel: true,
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            splitLine:{
              show: true,
              lineStyle: {
                color: ['#CCECFB'],
                opacity: 0.7,
              }
            },
            axisLabel :{
              interval:0,
              rotate:40,
              fontSize: 10,
              color: '#666'
            },
            axisLine: {
              lineStyle: {
                color: '#00A0E9'
              }
            },
            nameTextStyle: {
              color: '#666'
            },
            data: me.seriesOnlineList.seriesName
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
              formatter: '{value}%',
              color: '#666'
            },
            nameTextStyle: {
              color: '#666'
            },
          },
          series: [
            {
              name:'平均日使用率',
              type:'line',
              symbol: 'circle',
              lineStyle: {
                color: '#00A0E9',
                opacity: 0.8,
              },
              itemStyle: {
                color: '#EEAF00'
              },
              data:me.seriesOnlineList.avgRate,
              markPoint : {
                label:{
                  show: true,
                }
              }
            },
          ]
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
    padding-bottom: 6%
  }

  #dateText {
    width: 100%;
    text-align: left;
    margin-left: 20%;
    font-size: 35px
  }
  #content {
    width:80%;
    margin: 0 auto;
    background-color: #F0F9FE;
    padding: 0.2rem 0.3rem 0.2rem 0.3rem;
    font-size: 0.32rem;
    color: #444
  }

  #secondText {
    position: relative;
    /*top:30%*/
    top:22%
  }

  span {
    color: #00A0E9;
    font-size: 0.43rem;
    font-weight: bold;
  }

  p {
    font-size: 28px;
  }

</style>
