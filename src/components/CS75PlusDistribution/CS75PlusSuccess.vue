<template>
  <div>
    <!--<Drawer></Drawer>-->

    <div id="title">CS75-PLUS联网专题</div>
    <div id="subTitle1">不同车型远程控制功能成功率差异</div>

    <div id="success" :style="{width: '100%', height: barHeight1+'px', margin: '4% 0 0 0'}"></div>
    <div class="content">
      远程控制活跃度和成功率，<br>
      <span> CS75-PLUS </span>都优于新CS75。
    </div>

    <!--<p>{{remoteActive.carTypeUsed}}</p>-->
    <div class="page">7/28</div>
  </div>
</template>

<script>
  import echarts from "echarts"
  export default {
    name: "CS75PlusSuccess",
    data() {
      return {
        barHeight1: window.innerHeight * 0.56,
        color: ['#00A0E9','#EEAF00','#9FB934','#EB595F','#B15BFF'],
        legend: ['单车日均请求数','单车日均控制成功率'],
        xAxisData: ['CS75-PLUS','新CS75'],
        barNum: [ 5.33,2.24 ],
        lineNum: [ 80.2,71.7 ],
      }
    },
    mounted(){

    },
    methods: {
      init() {
        this.drawCS75Plus();
      },
      drawCS75Plus(){
        // 基于准备好的dom，初始化echarts实例
        let charts = this.$echarts.init(document.getElementById('success'));
        // 绘制图表
        charts.setOption({
          color: this.color,
          grid: {
            left: '20%',
            top: '20%',
            bottom: '15%',
            right: '18%'
          },
          legend: {
            data: this.legend,
            itemHeight: 6,
            textStyle: {
              color: 'grey'
            },
            right: 35,
            top: 'top'
          },
          xAxis: {
            type: 'category',
            data: this.xAxisData,
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
              // rotate:40,
              fontSize: 10,
              color: '#666'
            },
            nameTextStyle: {
              color: '#666'
            },
          },
          yAxis: [{
            name: '请求数',
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
              color: '#666'
            },
            nameTextStyle: {
              color: '#666'
            },
          },
          {
            name: '成功率',
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
              formatter: '{value}%'
            },
            nameTextStyle: {
              color: '#666'
            },
          }],
          series: [{
            name: this.legend[0],
            type: 'bar',
            yAxisIndex: 0,
            barWidth : 30,
            label: {
              normal: {
                show: true,
                position: 'top'
              }
            },
            data: this.barNum,
          },
          {
            name: this.legend[1],
            type: 'line',
            yAxisIndex: 1,
            label: {
              normal: {
                show: true,
                position: 'right',
                formatter: '{c}%'
              }
            },
            data: this.lineNum,
          }]
        });
      },
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
    padding-bottom: 10%;
    font-family: "Microsoft YaHei";
  }

  #definition {
    width: 100%;
    text-align: left;
    margin-left:5%;
    color: grey;
  }

  #subTitle1 {
    font-size: 0.4rem;
    color: #00a0e9;
    /*font-weight: bold;*/
    margin-left: 7%;
    text-align: left;
    width: 100%;
  }

  #subTitle2 {
    font-size: 0.36rem;
    color: #444;
    font-weight: bold;
    margin-top: 2%;
    margin-left: 7%;
    text-align: left;
    width: 100%;
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

  .page {
    position: absolute;
    bottom: 0.7rem;
    left: 0;
    width: 100%;
    color: #666;
    font-weight: normal;
    font-size: 0.35rem;
    font-family: "Microsoft YaHei";
  }

  span {
    color: #00A0E9;
    font-size: 0.4rem;
    font-weight: bold;
  }


</style>
