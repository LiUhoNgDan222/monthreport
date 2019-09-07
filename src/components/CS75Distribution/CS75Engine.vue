<template>
  <div>
    <!--<Drawer></Drawer>-->

    <div id="title">新CS75分析专题(油喷算法)</div>

    <div class="info">
      <div>时间：2019-05-01~05-31</div>
      <div>车辆：728辆</div>
      <div class="desc">用两种算法对同样的728辆车进行油耗计算，结果如下</div>
    </div>



    <div id="oil" :style="{width: '100%', height: barHeight1+'px', margin: '0 0 0 0'}"></div>

    <div class="content">
      油喷算法油耗集中在<span> 8-12 </span>区间段<br/>油浮算法油耗集中<span> 9-13 </span>区间段<br/>根据数据和试验结果，<span> 油喷算法 </span>更为准确
    </div>

    <!--<p>{{remoteActive.carTypeUsed}}</p>-->
  </div>
</template>

<script>
  import Drawer from "../Drawer/Drawer"
  import echarts from "echarts"
  export default {
    name: "CS75Engine",
    components: {Drawer},
    props: ["OilList"],
    data() {
      return {
        barHeight1: window.innerHeight * 0.4,
      }
    },
    mounted(){
      this.drawOil();
    },
    methods: {
      drawOil(){
        let me = this;
        // 基于准备好的dom，初始化echarts实例
        let speedVSAccBar = this.$echarts.init(document.getElementById('oil'))
        // 绘制图表
        speedVSAccBar.setOption({
          grid: {
            left: '20%',
            top: '20%',
            bottom: '30%',
            right: '23%'
          },
          legend: {
            data:['油浮','油喷'],
            itemHeight: 6,
            textStyle: {
              color: 'grey'
            },
            right: 35,
            top: 'top'
          },
          xAxis: {
            name: 'L/100km',
            type: 'category',
            data:['5-6','6-7','7-8','8-9','9-10','10-11','11-12','12-13','13-14','14-15','15-16','16-17','17-18','18-19','19-20','20-21'],
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
              fontSize: 9,
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
              color: '#666',
              formatter: '{value} %'
            },
            nameTextStyle: {
              color: '#666'
            },
          },
          series: [{
            name: '油浮',
            data: [0,0.13,0.89,5.29,17.22,27.51,24.72,13.56,5.85,2.56,1.25,0.75,0.27,0,0,0],
            type: 'bar',
            barWidth: 7,
            itemStyle: {
              color: '#00A0E9',
              opacity: 0.8,
              barBorderRadius: [5, 5, 0, 0],
            },

          },
            {
              name: '油喷',
              data: [3.77,6.75,17.43,14.76,14.6,11.46,6.75,6.12,3.92,2.83,2.04,1.73,1.73,1.26,1.26,1.1],
              type: 'bar',
              barWidth: 7,
              itemStyle: {
                color: '#EEAF00',
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
    font-size: 0.55rem;
    color: #444444;
    font-weight: bold;
    padding-top: 9%;
    padding-bottom: 10%
  }

  .info{
    width: 72%;
    margin: 0 auto;
    padding: 0.2rem 0.3rem 0.2rem 0.3rem;
    font-size: 0.32rem;
    color: #444;
    text-align: center;
  }

  .desc{
    margin: 20px 0;
  }

  .content {
    width:80%;
    margin: 0 auto;
    background-color: #F0F9FE;
    padding: 0.2rem 0.3rem 0.2rem 0.3rem;
    font-size: 0.32rem;
    color: #444
  }

  span {
    color: #00A0E9;
    font-size: 0.4rem;
    font-weight: bold;
  }

</style>
