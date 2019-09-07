<template>
  <div>
    <!--<Drawer></Drawer>-->

    <div id="title">整车配置功能活跃用户数</div>
    <div id="definition">统计车型仅限新CS75（1072名用户）<br/>使用率 = 功能使用用户数 / 功能搭载用户数</div>

    <div id="ManualNumberData" :style="{width: '100%', height: barHeight1+'px', margin: '4% 0 0 0'}"></div>
    <div class="content">
      <span>遥控泊车</span>功能受搭载率影响，用户数少
    </div>
    <div id="AutoNumberData" :style="{width: '100%', height: barHeight2+'px', margin: '10px 0 0 0'}"></div>
    <div class="content">
      自动触发功能中，<span>陡坡起步辅助</span>用处最大
    </div>
    <div style="color: #444; margin-top: 5%; font-size: 9px">目前由于定速巡航和自适应巡航数据存在问题<br/>正在排查解决中，计划下一期报告会发布相关信息</div>

    <!--<p>{{remoteActive.carTypeUsed}}</p>-->
  </div>
</template>

<script>
  import Drawer from "../Drawer/Drawer"
  import echarts from "echarts"
  export default {
    name: "FunctionUseNumber",
    components: {Drawer},
    props: ["carFunctionActiveUser"],
    data() {
      return {
        barHeight1: window.innerHeight * 0.25,
        barHeight2: window.innerHeight * 0.25,
      }
    },
    mounted(){

    },
    methods: {
      initFunctionUseNumber() {
        this.drawManualFunc();
        this.drawAutoFunc();
      },
      drawManualFunc(){
        let me = this;
        // 基于准备好的dom，初始化echarts实例
        let manualFuncBar = this.$echarts.init(document.getElementById('ManualNumberData'))
        // 绘制图表
        manualFuncBar.setOption({
          grid: {
            left: '20%',
            top: '20%',
            bottom: '30%',
            right: '18%'
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
            // data:me.carFunctionActiveUser.manualUserNumsItem,
            data:['多色氛围灯','前窗雨刷','行李箱解锁','遥控闭锁','空气净化','全景天窗','后窗雨刷','遥控泊车','遥控寻车'],
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
              fontSize: 10,
              color: '#666'
            },
            nameTextStyle: {
              color: '#666'
            },
          },
          yAxis: [
            {
              type: 'value',
              name: '用户数',
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
                color: '#00A0E9'
              },
              nameTextStyle: {
                color: '#00A0E9'
              },
            },
            {
              type: 'value',
              name: '使用率',
              min: 0,
              max: 100,
              splitLine:{
                show: true,
                lineStyle: {
                  color: ['#CCECFB'],
                  opacity: 0.7,
                }
              },
              axisLine: {
                lineStyle: {
                  color: '#9FB934'
                }
              },
              axisLabel :{
                color: '#9FB934',
                formatter: '{value}%',
              },
              nameTextStyle: {
                color: '#9FB934'
              },
            },
          ],
          series: [{
            data: [905,872,811,784,500,491,437,31,3],
            type: 'bar',
            barWidth: 7,
            itemStyle: {
              color: '#00A0E9',
              opacity: 0.8,
              barBorderRadius: [5, 5, 0, 0],
            },
          },
            {
              data: [84.0,81.0,75.3,72.8,46.4,45.6,40.6,10.4,0.28],
              type: 'line',
              barWidth: 7,
              yAxisIndex: 1,
              itemStyle: {
                color: '#9FB934',
                opacity: 0.8,
                barBorderRadius: [5, 5, 0, 0],
              },
            }
          ]
        });
      },
      drawAutoFunc(){
        let me = this;
        // 基于准备好的dom，初始化echarts实例
        let autoFuncBar = this.$echarts.init(document.getElementById('AutoNumberData'))
        // 绘制图表
        autoFuncBar.setOption({
          grid: {
            left: '20%',
            top: '5%',
            bottom: '40%'
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
            data:me.carFunctionActiveUser.autoUserNumsItem,
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
              fontSize: 11,
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
            nameTextStyle: {
              color: '#666'
            },
            axisLabel :{
              color: '#666'
            },
          },
          series: [{
            data: me.carFunctionActiveUser.autoUserNumsData,
            type: 'bar',
            barWidth: 7,
            itemStyle: {
              color: '#00A0E9',
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
    padding-bottom: 7%
  }

  #definition {
    width: 100%;
    text-align: left;
    margin-left:5%;
    color: grey;
  }

  .content {
    width:80%;
    margin: 0 auto;
    background-color: #F0F9FE;
    padding: 0.2rem 0.3rem 0.2rem 0.3rem;
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
    top:30%;
  }


  span {
    color: #00A0E9;
    font-size: 0.4rem;
    font-weight: bold;
  }


</style>
