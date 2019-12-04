<template>
  <div>
    <!--<Drawer></Drawer>-->

    <div id="title">新CS75驾驶功能分析专题</div>
    <div id="subTitle1">ACC自适应巡航(功能搭载16481辆车)</div>
    <div class="subTitle2">单车平均月使用总里程</div>
<!--    <div class="desc">-->
<!--      国庆期间，新CS75的4738名用户中有<span> 1338 </span>名使用过自适应巡航，平均单车单日使用<span> 7.52 </span>次-->
<!--      （非节假日时单车单日使用<span> 5.85 </span>次）。-->
<!--    </div>-->

    <div id="accMile" :style="{width: '100%', height: barHeight1+'px', margin: '2% 0 0 0'}"></div>
    <div class="subTitle2">单车平均使用里程(单次行程)</div>
    <div id="accMile1" :style="{width: '100%', height: barHeight2+'px', margin: '2% 0 0 0'}"></div>
    <div class="content">
      用户<span> 单次行程 </span>使用功能<span> 距离短</span>，<br/>平均不超过5km。
    </div>
    <div class="page">16/20</div>

  </div>
</template>

<script>
  import echarts from "echarts"
  export default {
    name: "CS75AccMile",
    data() {
      return {
        barHeight1: window.innerHeight * 0.24,
        barHeight2: window.innerHeight * 0.24,
        color: ['#00A0E9','#EEAF00','#EB595F','#9FB934','#B15BFF'],
        legend: ['单车平均月使用里程','单车平均月驾驶里程','占比'],
        legend1: ['单车平均使用里程','单车平均驾驶里程','占比'],
        xAxisData: ['7月','8月','9月','10月','11月'],
        barNum: [122.5, 340.5,281.9,339.4,237.5],
        barNum1: [13380.49, 5245.22,7775.82,7989.34,7697.86],
        lineNum: [0.92, 6.49,3.63,4.25,3.08],
        barNum2: [0.00028, 0.00066,0.00053,0.00057,0.00044],
        barNum3: [0.0091, 0.0029,0.0043,0.0039,0.0042],
        lineNum1: [3.04, 22.38,12.31,14.47,10.6],
      }
    },
    mounted(){

    },
    methods: {
      init() {
        this.drawLine();
        this.draw();
      },
      drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let charts = this.$echarts.init(document.getElementById('accMile'));
        // 绘制图表
        charts.setOption({
          color: this.color,
          grid: {
            left: '16%',
            top: '33%',
            bottom: '15%',
            right: '18%'
          },
          legend: {
            x:'center',
            data: this.legend,
            itemHeight: 6,
            textStyle: {
              color: 'grey',
            },
            width: 300,
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
            name: 'km',
            nameGap: 0,
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
              // name: '车辆数',
              type: 'value',
              splitLine:{
                show: false,
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
                formatter: '{value} %'
              },
              nameTextStyle: {
                color: '#666'
              },
            }],
          series: [{
            name: this.legend[0],
            type: 'bar',
            yAxisIndex: 0,
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
          },{
            name: this.legend[1],
            type: 'bar',
            yAxisIndex: 0,
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
          },{
            name: this.legend[2],
            type: 'line',
            yAxisIndex: 1,
            label: {
              normal: {
                show: true,
                position: 'bottom',
                textStyle: {
                  fontSize: 10,
                },
                formatter: '{c}%',
                // formatter: function(params) {
                //   let str;
                //   if(params.value < 160 && params.value > 100){
                //     str = '\n\n' + params.value + '%';
                //   }else{
                //     str = params.value + '%';
                //   }
                //   return str;
                // },
              }
            },
            data: this.lineNum,
          }]
        });
      },
      draw(){
        // 基于准备好的dom，初始化echarts实例
        let charts = this.$echarts.init(document.getElementById('accMile1'));
        // 绘制图表
        charts.setOption({
          color: this.color,
          grid: {
            left: '16%',
            top: '33%',
            bottom: '15%',
            right: '18%'
          },
          legend: {
            x:'center',
            data: this.legend1,
            itemHeight: 6,
            textStyle: {
              color: 'grey',
            },
            width: 300,
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
            name: 'km',
            nameGap: 5,
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
            // name: '车辆数',
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
              formatter: '{value} %'
            },
            nameTextStyle: {
              color: '#666'
            },
          }],
          series: [{
            name: this.legend1[0],
            type: 'bar',
            yAxisIndex: 0,
            label: {
              normal: {
                show: true,
                position: 'top',
                textStyle: {
                  fontSize: 10,
                },
                formatter: function(params) {
                  let str;
                  if(params.value < 0.00004 && params.value > 0.00003){
                    str = params.value + '\n';
                  }else if(params.value < 0.00003 && params.value > 0.00001){
                    str = params.value + '      ';
                  }else{
                    str = params.value;
                  }
                  return str;
                },
              }
            },
            data: this.barNum2,
          },{
            name: this.legend1[1],
            type: 'bar',
            yAxisIndex: 0,
            label: {
              normal: {
                show: true,
                position: 'top',
                textStyle: {
                  fontSize: 10,
                },
              }
            },
            data: this.barNum3,
          },{
            name: this.legend1[2],
            type: 'line',
            yAxisIndex: 1,
            label: {
              normal: {
                show: true,
                position: 'top',
                textStyle: {
                  fontSize: 10,
                },
                formatter: function(params) {
                  let str;
                  if(params.value < 160 && params.value > 100){
                    str = '\n\n' + params.value + '%';
                  }else{
                    str = params.value + '%';
                  }
                  return str;
                },
              }
            },
            data: this.lineNum1,
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
    /*font-size: 0.63rem;*/
    font-size: 0.587rem;
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

  .subTitle2 {
    font-size: 0.36rem;
    color: #444;
    font-weight: bold;
    margin-top: 2%;
    margin-left: 7%;
    text-align: left;
    width: 100%;
  }

  .desc {
    font-size: 0.36rem;
    color: #444;
    text-align: left;
    padding: 0.3rem 7%;
    text-indent: 0.8rem;
  }

  .content {
    width:80%;
    margin: 0 auto;
    background-color: #F0F9FE;
    padding: 0.2rem 0.3rem 0.2rem 0.3rem;
    font-size: 0.32rem;
    color: #444
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
