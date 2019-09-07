<template>
  <div>
    <!--<Drawer></Drawer>-->
    <div id="title">远程控制功能活跃趋势</div>
    <div id="teleControlTrendBar" :style="{width: '100%', height: barHeight+'px', margin: '3% 0 5% 0 '}"></div>
    <div id="content">
      <span>空调、闪灯鸣笛、开关车门</span>均为刚需功能<br/><span>开关车门</span>有1个月的新鲜期，<br/>这一个月内需要持续关注用户使用偏好
    </div>
  </div>
</template>

<script>
  import Drawer from "../Drawer/Drawer"
  import echarts from "echarts"
  export default {
    name: "TeleControlTrend",
    components: {Drawer},
    props: ["remoteTrade"],
    data() {
      return {
        bg9: {
          backgroundImage: "url(" + require("../../assets/picture/box3.png") + ")",
        },
        barHeight: window.innerHeight * 0.5,
      }
    },
    mounted(){

    },
    methods: {
      initTeleControlTrend() {
        let me = this;
        me.drawControlTrendBar();
      },
      drawControlTrendBar(){
        let me = this;
        // 基于准备好的dom，初始化echarts实例
        let controlTrendBar = this.$echarts.init(document.getElementById('teleControlTrendBar'))
        // 绘制图表
        controlTrendBar.setOption({
          grid: {
            left: '20%',
            top: '15%',
            bottom: '40%'
          },
          tooltip: {
            show: true,
            trigger: 'axis',
            formatter: '{b0}<br/>{a0}:{c0}<br/>{a1}:{c1}<br/>{a2}:{c2}<br/>{a3}:{c3}<br/>{a4}:{c4}<br/>{a5}:{c5}<br/>{a6}:{c6}'
          },
          legend: {
            data:['关闭空调','打开空调','关闭车门','打开车门','闪灯','打开关闭净化器','打开后备箱'],
            color:['#32A8FF',' #02C800',],
            orient:'horizontal',
            bottom: 0,
            textStyle:{
              color:'#333',
              fontSize: 12
            },
            align: 'auto',
            itemGap: 10,
            itemWidth:14,
            itemHeight: 3,
            width: 260
          },
          xAxis: {
            type: 'category',
            data: me.remoteTrade.item,
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
              fontSize: 9,
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
              color: '#666',
            },
            nameTextStyle: {
              color: '#666',
            },
          },
          series: [{
            name: '关闭空调',
            data: me.remoteTrade.closeAir,
            type: 'line',
            barWidth: 7,
            itemStyle: {
              color: '#00A0E9',
              opacity: 0.8,
              barBorderRadius: [5, 5, 0, 0],
            },
          },
            {
              name: '打开空调',
              data: me.remoteTrade.openAir,
              type: 'line',
              barWidth: 7,
              itemStyle: {
                color: '#888889',
                opacity: 0.8,
                barBorderRadius: [5, 5, 0, 0],
              },
            },
            {
              name: '关闭车门',
              data: me.remoteTrade.lockDoor,
              type: 'line',
              barWidth: 7,
              itemStyle: {
                color: '#EB595F',
                opacity: 0.8,
                barBorderRadius: [5, 5, 0, 0],
              },
            },
            {
              name: '打开车门',
              data: me.remoteTrade.unLockDoor,
              type: 'line',
              barWidth: 7,
              itemStyle: {
                color: '#9FB934',
                opacity: 0.8,
                barBorderRadius: [5, 5, 0, 0],
              },
            },
            {
              name: '闪灯',
              data: me.remoteTrade.flashLight,
              type: 'line',
              barWidth: 7,
              itemStyle: {
                color: '#EEAF00',
                opacity: 0.8,
                barBorderRadius: [5, 5, 0, 0],
              },
            },
            {
              name: '打开关闭净化器',
              data: me.remoteTrade.openClosePurifier,
              type: 'line',
              barWidth: 7,
              itemStyle: {
                color: '#004595',
                opacity: 0.8,
                barBorderRadius: [5, 5, 0, 0],
              },
            },
            {
              name: '打开后备箱',
              data: me.remoteTrade.openTrunk,
              type: 'line',
              barWidth: 7,
              itemStyle: {
                color: '#B15BFF',
                opacity: 0.8,
                barBorderRadius: [5, 5, 0, 0],
              },
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
