<template>
  <div>
    <!--<Drawer></Drawer>-->

    <div id="title">CS75-PLUS联网专题</div>
    <div id="subTitle">不同车型用户对远程控制功能(请求数TOP10)的使用偏好</div>
    <div id="subTitle1">CS75-PLUS</div>

    <div id="speed" :style="{width: '100%', height: barHeight1+'px'}"></div>

    <div id="subTitle2">新CS75</div>
    <div id="urgeSpeed" :style="{width: '100%', height: barHeight2+'px', margin: '0 0 0 0'}"></div>
    <div class="content">
      CS75-PLUS新上市，用户在10号之后拿到实车，<span>9月中下旬 </span>才有较大规模功能使用数据，因此总请求数<span> 较少 </span>。
    </div>

    <!--<p>{{remoteActive.carTypeUsed}}</p>-->
    <div class="page">6/28</div>
  </div>
</template>

<script>
  import echarts from "echarts"
  export default {
    name: "CS75PlusPreference",
    data() {
      return {
        barHeight1: window.innerHeight * 0.25,
        barHeight2: window.innerHeight * 0.24,
        color: ['#00A0E9','#EEAF00','#EB595F','#9FB934','#B15BFF'],
        legend: ['总请求数','功能请求数','搭载车辆数'],
        xAxisData: ['总请求数','锁定车门','查询车况','解锁车门','打开空调','关闭空调','鸣笛','闪灯','闪灯鸣笛','车窗开缝',
          '关闭车窗'],
        stackData: [0, 18542, 13316, 9128, 5574, 4057,2994,2151,1428,808,427,],
        totalData: [23847, '-', '-', '-', '-', '-','-','-', '-', '-','-',],
        funcNum: ['-', 5305, 5226, 4188, 3554, 1517,1063,843,723,620,381,],
        carNum: ['-', 1100, 230, 100, 400, 500],
        xAxisData1: ['总请求数','锁定车门','解锁车门','查询车况','打开空调','关闭空调','空气净化器','关闭天窗','鸣笛','闪灯鸣笛','闪灯'],
        stackData1: [0, 35777, 23685, 13108, 5333, 4072, 2992, 1912, 1257, 759, 373],
        totalData1: [50104, '-', '-', '-', '-', '-','-','-', '-', '-','-',],
        funcNum1: ['-', 14327, 12092, 10577, 7775, 1261, 1080, 1071, 664, 498, 386],
        carNum1: ['-', 1100, 230, 100, 400, 500],
      }
    },
    mounted(){

    },
    methods: {
      init() {
        this.drawCS75Plus();
        this.drawCS75();
      },
      drawCS75Plus(){
        // 基于准备好的dom，初始化echarts实例
        let charts = this.$echarts.init(document.getElementById('speed'));
        // 绘制图表
        charts.setOption({
          color: this.color,
          grid: {
            left: '20%',
            top: '26%',
            bottom: '25%',
            right: '10%'
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
          tooltip: {
            show: true,
            trigger: 'axis',
            formatter: '{b}<br/>{a1}:{c1}<br/>{a2}:{c2}<br/>',
            // position: function (pos, params, dom, rect, size) {
            //   // 鼠标在左侧时 tooltip 显示到右侧，鼠标在右侧时 tooltip 显示到左侧。
            //   var obj = {top: 60};
            //   obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = '10%';
            //   return obj;
            // },
            textStyle:{
              align:'left',
            },
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
              rotate:40,
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
          // {
          //   name: '车辆数',
          //   type: 'value',
          //   splitLine:{
          //     show: true,
          //     lineStyle: {
          //       color: ['#CCECFB'],
          //       opacity: 0.7,
          //     }
          //   },
          //   axisLine: {
          //     lineStyle: {
          //       color: '#00A0E9'
          //     }
          //   },
          //   axisLabel :{
          //     color: '#666'
          //   },
          //   nameTextStyle: {
          //     color: '#666'
          //   },
          // }
          ],
          series: [{
            name: '辅助',
            type: 'bar',
            stack:  '总量',
            yAxisIndex: 0,
            itemStyle: {
              normal: {
                barBorderColor: 'rgba(0,0,0,0)',
                color: 'rgba(0,0,0,0)'
              },
              emphasis: {
                barBorderColor: 'rgba(0,0,0,0)',
                color: 'rgba(0,0,0,0)'
              }
            },
            data: this.stackData,
          },
          {
            name: '总请求数',
            type: 'bar',
            stack: '总量',
            yAxisIndex: 0,
            label: {
              normal: {
                show: true,
                // position: ['-15px', '-17px'],
                position: 'top',
                textStyle: {
                  fontSize: 9,
                }
              }
            },
            data: this.totalData,
          },
          {
            name: '功能请求数',
            type: 'bar',
            stack: '总量',
            yAxisIndex: 0,
            label: {
              normal: {
                show: true,
                // position: ['10%', '-15px'],
                position: 'top',
                textStyle: {
                  fontSize: 9,
                }
              }
            },
            data: this.funcNum,
          },
          // {
          //   name: '搭载车辆数',
          //   type: 'line',
          //   yAxisIndex: 1,
          //   label: {
          //     normal: {
          //       show: true,
          //       position: 'top'
          //     }
          //   },
          //   data: this.carNum,
          // }
          ]
        });
      },
      drawCS75(){
        // 基于准备好的dom，初始化echarts实例
        let charts = this.$echarts.init(document.getElementById('urgeSpeed'))
        // 绘制图表
        charts.setOption({
          color: this.color,
          grid: {
            left: '20%',
            top: '20%',
            bottom: '30%',
            right: '10%'
          },
          // legend: {
          //   data: this.legend,
          //   itemHeight: 6,
          //   textStyle: {
          //     color: 'grey'
          //   },
          //   right: 35,
          //   top: 'top'
          // },
          tooltip: {
            show: true,
            trigger: 'axis',
            formatter: '{b}<br/>{a1}:{c1}<br/>{a2}:{c2}<br/>',
            // position: function (pos, params, dom, rect, size) {
            //   // 鼠标在左侧时 tooltip 显示到右侧，鼠标在右侧时 tooltip 显示到左侧。
            //   var obj = {top: 60};
            //   obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = '10%';
            //   return obj;
            // },
            textStyle:{
              align:'left',
            },
          },
          xAxis: {
            type: 'category',
            data: this.xAxisData1,
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
              color: '#666',
              // padding: [0,6,0]
            },
            nameTextStyle: {
              color: '#666'
            },
          },
          // {
          //   name: '车辆数',
          //   type: 'value',
          //   splitLine:{
          //     show: true,
          //     lineStyle: {
          //       color: ['#CCECFB'],
          //       opacity: 0.7,
          //     }
          //   },
          //   axisLine: {
          //     lineStyle: {
          //       color: '#00A0E9'
          //     }
          //   },
          //   axisLabel :{
          //     color: '#666'
          //   },
          //   nameTextStyle: {
          //     color: '#666'
          //   },
          // }
          ],
          series: [{
            name: '辅助',
            type: 'bar',
            stack:  '总量',
            yAxisIndex: 0,
            itemStyle: {
              normal: {
                barBorderColor: 'rgba(0,0,0,0)',
                color: 'rgba(0,0,0,0)'
              },
              emphasis: {
                barBorderColor: 'rgba(0,0,0,0)',
                color: 'rgba(0,0,0,0)'
              }
            },
            data: this.stackData1,
          },
            {
              name: '总请求数',
              type: 'bar',
              stack: '总量',
              yAxisIndex: 0,
              label: {
                normal: {
                  show: true,
                  // position: ['-10px', '-15px'],
                  position: 'top',
                  textStyle: {
                    fontSize: 9,
                  }
                }
              },
              data: this.totalData1,
            },
            {
              name: '功能请求数',
              type: 'bar',
              stack: '总量',
              yAxisIndex: 0,
              label: {
                normal: {
                  show: true,
                  // position: ['0px', '-15px'],
                  position: 'top',
                  textStyle: {
                    fontSize: 9,
                  }
                }
              },
              data: this.funcNum1,
            },
            // {
            //   name: '搭载车辆数',
            //   type: 'line',
            //   yAxisIndex: 1,
            //   label: {
            //     normal: {
            //       show: true,
            //       position: 'top'
            //     }
            //   },
            //   data: this.carNum1,
            // }
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
    padding-bottom: 10%;
    font-family: "Microsoft YaHei";
  }

  #definition {
    width: 100%;
    text-align: left;
    margin-left:5%;
    color: grey;
  }

  #subTitle {
    font-size: 0.4rem;
    color: #00a0e9;
    margin: 0 7% 4%;
    text-align: left;
  }

  #subTitle1 {
    font-size: 0.36rem;
    color: #444;
    font-weight: bold;
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
