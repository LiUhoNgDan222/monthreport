<template>
  <div>
    <!--<Drawer></Drawer>-->
    <div>
      <div id="title">用户春节出行专题</div>
      <div id="definition">迁徙区域排行榜</div>
    </div>


    <div id="areaBar" :style="{width: '100%', height: barHeight1+'px', margin: '30px 0 20px 0'}"></div>
    <div id="content" :style="bg9">
      <p id="dateText">根据统计结果<br/></p>
      <p>
        <span>西南、华东、华中</span>地区用户<br/>在春节迁徙大军中占据了大半部分。
      </p>
    </div>
  </div>
</template>

<script>
  import Drawer from "../Drawer/Drawer"
  import echarts from "echarts"
  export default {
    name: "MapArea",
    components: {Drawer},
    data() {
      return {
        bg9: {
          backgroundImage: "url(" + require("../../assets/picture/box.png") + ")",
        },
        barHeight1: window.innerHeight * 0.4,
      }
    },
    mounted(){
      this.drawAreaBar();
    },
    methods: {
      drawAreaBar(){
        let me = this;
        // 基于准备好的dom，初始化echarts实例
        let mapAreaBar = this.$echarts.init(document.getElementById('areaBar'))
        // 绘制图表
        mapAreaBar.setOption({
          grid: {
            left: '20%',
            top: '6%',
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
            data:['西南','华东','华中','华北','西北','华南','东北'],
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
              rotate:40,
              fontSize: 12
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
            data: [14817,11441,10813,6983,3160,2612,1082],
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
              position: 'top',
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
    font-size: 30px;
  }

  span {
    color: #2894FF;
    font-size: 36px;
  }

  p {
    font-size: 28px;
  }


</style>
