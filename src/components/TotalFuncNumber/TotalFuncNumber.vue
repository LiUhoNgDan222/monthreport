<template>
  <div>
    <!--<Drawer></Drawer>-->
    <div id="title">车机应用活跃度</div>
    <div id="TotalFuncNumberData" :style="{width: '100%', height: barHeight+'px', margin: '40px 0 40px 0'}"></div>
    <div id="content">
      <span>本地电台</span>活跃度呈下降趋势<br/>
      在线音乐正在逐步被消费者认可
    </div>
    <!--<p>{{remoteActive.carTypeUsed}}</p>-->
  </div>
</template>

<script>
  import Drawer from "../Drawer/Drawer"
  import echarts from "echarts"
  export default {
    name: "TotalFuncNumber",
    components: {Drawer},
    props: ["carActiveApp"],
    data() {
      return {
        barHeight: window.innerHeight * 0.40,
      }
    },
    mounted(){

    },
    methods: {
      initTotalFuncNumber() {
        this.drawC212Func();
      },
      drawC212Func(){
        let me = this;
        // 基于准备好的dom，初始化echarts实例
        let C212FuncBar = this.$echarts.init(document.getElementById('TotalFuncNumberData'))
        // 绘制图表
        C212FuncBar.setOption({
          grid: {
            left: '20%',
            top: '15%',
            bottom: '15%'
          },
          xAxis: {
            type: 'category',
            data:me.carActiveApp.carActiveAppItem,
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
              formatter: '{value}万',
              color: '#666'
            },
            nameTextStyle: {
              color: '#666'
            },
          },
          series: [{
            data: me.carActiveApp.carActiveAppData,
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
              formatter: function(params){
                return params.data * 10000
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
    color: #2894FF;
    font-size: 40px;
  }

  p {
    font-size: 28px;
  }
</style>
