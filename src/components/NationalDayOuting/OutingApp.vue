<template>
  <div>
    <!--<Drawer></Drawer>-->

    <div id="title">新CS75出游用户分析</div>
    <div id="subTitle1">车载应用使用情况</div>

    <div id="numTimes" :style="{width: '100%', height: barHeight1+'px', margin: '4% 0 0 0'}"></div>
    <div id="times" :style="{width: '100%', height: barHeight1+'px', margin: '4% 0 0 0'}"></div>
    <div class="content">
      节假日期间，<span>导航</span>、<span>音乐</span>使用频次是非节假日的<span> 2倍 </span>，
      可以考虑在节假日期间<span> 增加 </span>开机欢迎页的广告投放。
    </div>

    <!--<p>{{remoteActive.carTypeUsed}}</p>-->
    <div class="page">20/28</div>
  </div>
</template>

<script>
  import echarts from "echarts"
  export default {
    name: "OutingApp",
    data() {
      return {
        barHeight1: window.innerHeight * 0.28,
        barHeight2: window.innerHeight * 0.28,
        color: ['#00A0E9','#EEAF00','#9FB934','#EB595F','#B15BFF'],
        legend: ['导航','酷我音乐','驾驶'],
        xAxisData: ['节假日','非节假日'],
        barNum: [26.35,12.06],
        barNum1: [17.38, 9.07],
        barNum2: [4.34, 3.81],
        legend1: ['导航','酷我音乐','驾驶'],
        barNum4: [7.82, 2.92],
        barNum5: [17.87, 8.29 ],
        barNum6: [11.07, 9.42],
      }
    },
    mounted(){

    },
    methods: {
      init() {
        this.drawNum();
        this.draw();
      },
      drawNum(){
        // 基于准备好的dom，初始化echarts实例
        let charts = this.$echarts.init(document.getElementById('numTimes'));
        // 绘制图表
        charts.setOption({
          color: this.color,
          grid: {
            left: '18%',
            top: '20%',
            bottom: '15%',
            right: '10%'
          },
          legend: {
            data: this.legend,
            itemWidth: 7,
            itemHeight: 7,
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
            axisLabel :{
              color: '#666'
            },
            nameTextStyle: {
              color: '#666'
            },
          },
          series: [{
            name: this.legend[0],
            type: 'bar',
            label: {
              normal: {
                show: true,
                position: 'top',
                textStyle: {
                  fontSize: 10,
                },
              }
            },
            data: this.barNum,
          },
          {
            name: this.legend[1],
            type: 'bar',
            label: {
              normal: {
                show: true,
                position: 'top',
                textStyle: {
                  fontSize: 10,
                },
              }
            },
            data: this.barNum1,
          },
          {
            name: this.legend[2],
            type: 'bar',
            label: {
              normal: {
                show: true,
                position: 'top',
                textStyle: {
                  fontSize: 10,
                },
              }
            },
            data: this.barNum2,
          }]
        });
      },
      draw(){
        // 基于准备好的dom，初始化echarts实例
        let charts = this.$echarts.init(document.getElementById('times'));
        // 绘制图表
        charts.setOption({
          color: this.color,
          grid: {
            left: '18%',
            top: '20%',
            bottom: '15%',
            right: '10%'
          },
          legend: {
            data: this.legend1,
            itemWidth: 7,
            itemHeight: 7,
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
          yAxis: {
            name: '时长(小时)',
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
          series: [{
            name: this.legend1[0],
            type: 'bar',
            label: {
              normal: {
                show: true,
                position: 'top',
                textStyle: {
                  fontSize: 10,
                },
              }
            },
            data: this.barNum4,
          },
            {
              name: this.legend1[1],
              type: 'bar',
              label: {
                normal: {
                  show: true,
                  position: 'top',
                  textStyle: {
                    fontSize: 10,
                  },
                }
              },
              data: this.barNum5,
            },
            {
              name: this.legend1[2],
              type: 'bar',
              label: {
                normal: {
                  show: true,
                  position: 'top',
                  textStyle: {
                    fontSize: 10,
                  },
                }
              },
              data: this.barNum6,
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
    padding-bottom: 10%
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
