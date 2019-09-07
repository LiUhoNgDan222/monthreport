<template>
  <div>
    <!--<Drawer></Drawer>-->
    <div id="title">日行驶里程概况</div>
    <div id="MileConditionData" :style="{width: '100%', height: lineHeight1+'px',margin:'0 0 10px 0'}"></div>
    <div id="content">
      大部分用户每天行驶里程在<span> 100 </span>km以内<br/>峰值在<span> 1-20 </span>km
    </div>
    <div id="subTitle4">单日用车时长</div>
    <div id="MileConditionTime" :style="{width: '100%', height: lineHeight2+'px',margin:'0 0 10px 0'}"></div>
    <div id="content1">
      大部分用户每天用车时长在<span> 90 </span>分钟之内
    </div>
  </div>
</template>

<script>
  import Drawer from "../Drawer/Drawer"
  import echarts from "echarts"
  export default {
    name: "MileCondition",
    components: {Drawer},
    props: ["milesRanges"],
    data() {
      return {
        lineHeight1: window.innerHeight * 0.23,
        lineHeight2: window.innerHeight * 0.26,
      }
    },
    mounted(){

    },
    methods: {
      initMileCondition() {
        this.drawMileLine();
        this.drawMileTime();
      },
      drawMileLine(){
        let me = this;
        // 基于准备好的dom，初始化echarts实例
        let MileConditionLine = me.$echarts.init(document.getElementById('MileConditionData'))
        // 绘制图表
        MileConditionLine.setOption({
          // title: {
          //   text: '车辆日使用率折线图',
          //   x:'center',
          //   y: 'bottom',
          //   textStyle: {
          //     color: '#AAABC6',
          //     fontSize: 13,
          //     fontWeight: 'normal',
          //   }
          // },
          tooltip: {
            trigger: 'axis',
            formatter: '{b}km<br/>{a}:{c}万',
          },
          // legend: {
          //   data:['最低日使用率','最高日使用率'],
          //   itemHeight: 6,
          //   textStyle: {
          //     color: 'grey'
          //   },
          //   orient: 'vertical',
          //   right: 0,
          //   top: 0,
          // },
          grid: {
            top: '23%',
            left: '9%',
            right: '23%',
            bottom: '5%',
            containLabel: true,
          },
          xAxis: {
            name: '里程/km',
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
            data: me.milesRanges.milesRangesItem,
          },
          yAxis: {
            name: '人次',
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
          series: [
            {
              name:'用户数量',
              type:'line',
              symbol: 'circle',
              lineStyle: {
                color: '#00A0E9',
                opacity: 0.8,
              },
              itemStyle: {
                color: '#EEAF00'
              },
              data:me.milesRanges.milesRangesData,
              markPoint : {
                label:{
                  show: true,
                }
              }
            },
          ]
        });
      },
      drawMileTime(){
        let me = this;
        // 基于准备好的dom，初始化echarts实例
        let MileConditionTime = me.$echarts.init(document.getElementById('MileConditionTime'))
        // 绘制图表
        MileConditionTime.setOption({
          grid: {
            left: '20%',
            top: '20%',
            bottom: '35%'
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
            data:me.milesRanges.timeRangesItem,
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
          yAxis: {
            name: '人次',
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
            data: me.milesRanges.timeRangesData,
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

  #content1 {
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
    top:26%
  }

  span {
    color: #00A0E9;
    font-size: 0.45rem;
    font-weight: bold;
  }

  #subTitle4 {
    font-size: 0.36rem;
    color: #444;
    font-weight: bold;
    margin-top: 3%;
    margin-left: 7%;
    text-align: left;
    width: 100%;
  }


</style>
