<template>
  <div>
    <!--<Drawer></Drawer>-->

    <div id="title">用户春节出行专题</div>
    <div id="content" :style="bg9">
      <p id="dateText">油耗对比<br/></p>
      <p>
        春节7天平均油耗<span>7.87</span>L/100km<br/>
        较平时油耗<span>7.76</span>L/100km有些许增加
      </p>
    </div>
    <div id="definition">春节期间油耗最高的城市top5</div>
    <div id="festivalOilTop" :style="{width: '100%', height: barHeight1+'px', margin: '30px 0 20px 0'}"></div>
    <div>
      <p>
        春节期间由于拥堵，油耗有所增加<br/><span>高原气候</span>对油耗有影响
      </p>
    </div>
    <p id="bottomMessage">由于技术原因，油耗存在较大误差，仅供参考</p>
  </div>
</template>

<script>
  import echarts from "echarts"
  export default {
    name: "FestivalOil",
    data() {
      return {
        bg9: {
          backgroundImage: "url(" + require("../../assets/picture/box.png") + ")",
        },
        barHeight1: window.innerHeight * 0.32,
      }
    },
    mounted(){
      this.drawFestivalOil();
    },
    methods: {
      drawFestivalOil(){
        let me = this;
        // 基于准备好的dom，初始化echarts实例
        let festivalOilTopBar = this.$echarts.init(document.getElementById('festivalOilTop'))
        // 绘制图表
        festivalOilTopBar.setOption({
          title: {
            text: '油耗最高城市top5',
            x:'center',
            y: 'bottom',
            textStyle: {
              color: '#BEBEBE',
              fontSize: 13,
              fontWeight: 'normal',
            }
          },
          grid: {
            left: '29%',
            top: '2%',
            bottom: '28%'
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
            data:['新疆石河子市','西藏林芝市','西藏山南市','新疆可克达拉','怒江傈僳族自治州'],
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
            nameTextStyle: {
              color: '#BEBEBE'
            },
          },
          series: [{
            data: [8.33,8.41,8.54,8.89,8.91],
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
              fontSize: 10,
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
    font-size: 34px;
    text-align: left;
    margin-left:5%;
    margin-top: 9%;
  }

  #secondText {
    position: relative;
    /*top:30%*/
    top:30%;
  }

  #bottomMessage {
    position: absolute;
    width: 100%;
    margin: 0 auto;
    bottom: 40px;
    font-size: 26px
  }

  #content {
    width: 100%;
    height:260px;
    background-size: 90% 90%;
    background-repeat: no-repeat;
    background-position: center;
    padding-bottom: 1%;
  }

  #dateText {
    width: 100%;
    text-align: left;
    margin-left: 20%;
    position: relative;
    padding-top: 2%;
    font-size: 36px;
  }

  span {
    color: #2894FF;
    font-size: 36px;
  }

  p {
    font-size: 28px;
  }


</style>
