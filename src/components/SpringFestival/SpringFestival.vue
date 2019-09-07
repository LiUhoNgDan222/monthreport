<template>
  <div>
    <!--<Drawer></Drawer>-->

    <div id="title">用户春节出行专题</div>
    <div id="definition">春节人气top10景点</div>

    <div id="festivalTop" :style="{width: '100%', height: barHeight1+'px', margin: '30px 0 0 0'}"></div>
    <div id="content" :style="bg9">
      <p id="dateText">根据统计结果<br/></p>
      <p>
        长安车主在春节期间热衷在<span>川渝地区</span>旅游
      </p>
    </div>
  </div>
</template>

<script>
  import echarts from "echarts"
  export default {
    name: "SpringFestival",
    data() {
      return {
        bg9: {
          backgroundImage: "url(" + require("../../assets/picture/box.png") + ")",
        },
        barHeight1: window.innerHeight * 0.42,
      }
    },
    mounted(){
      this.drawFestival();
    },
    methods: {
      drawFestival(){
        let me = this;
        // 基于准备好的dom，初始化echarts实例
        let festivalTopBar = this.$echarts.init(document.getElementById('festivalTop'))
        // 绘制图表
        festivalTopBar.setOption({
          grid: {
            left: '30%',
            right: '15%',
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
            data:['锦屏风景名胜区','重庆观音桥商圈','南充市阆中古城','广安市邓小平故里','重庆长寿·菩提古镇','梓州杜甫草堂','南充西山风景区','丽江古城景区','重庆云阳张飞庙','重庆开县汉丰湖'],
            splitLine:{
              show: true,
              lineStyle: {
                color: ['#BEBEBE'],
                opacity: 0.1,
              }
            },
            axisLine: {
              lineStyle: {
                color: '#BEBEBE'
              }
            },
            axisLabel :{
              interval:0,
              fontSize: 10
            },
            nameTextStyle: {
              color: '#BEBEBE'
            },
          },
          xAxis: {
            name: '次数',
            type: 'value',
            splitLine:{
              show: true,
              lineStyle: {
                color: ['#BEBEBE'],
                opacity: 0.1,
              }
            },
            axisLine: {
              lineStyle: {
                color: '#BEBEBE'
              }
            },
            axisLabel :{
              interval:0,
              rotate: 40,
              fontSize: 12
            },
            nameTextStyle: {
              color: '#BEBEBE'
            },
          },
          series: [{
            data: [728,771,777,934,965,999,1225,1280,1405,2753],
            type: 'bar',
            barWidth: 7,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#AE00AE',
              }, {
                offset: 1,
                color: '#D9006C',
              }]),
              opacity: 0.8,
              barBorderRadius: [5, 5, 0, 0],
            },
            label: {
              show: true,
              position: 'right',
              fontSize: 9,
              color: 'white'
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

  #definition {
    width: 100%;
    font-size: 32px;
    text-align: left;
    margin-left:5%;
    margin-top: 1%;
  }

  #secondText {
    position: relative;
    /*top:30%*/
    top:30%;
  }


  #content {
    width: 100%;
    height:250px;
    background-size: 90% 90%;
    background-repeat: no-repeat;
    background-position: center;
    padding-bottom: 5%;
  }

  #dateText {
    width: 100%;
    text-align: left;
    margin-left: 20%;
    position: relative;
    padding-top: 4%;
    font-size: 34px;
  }

  span {
    color: #2894FF;
    font-size: 36px;
  }

  p {
    font-size: 28px;
  }


</style>
