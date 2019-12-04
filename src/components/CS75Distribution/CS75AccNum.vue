<template>
  <div>
    <!--<Drawer></Drawer>-->

    <div id="title">新CS75驾驶功能分析专题</div>
    <div id="subTitle1">ACC自适应巡航(功能搭载16481辆车)</div>
    <div class="subTitle2">月使用车辆数</div>
<!--    <div class="desc">-->
<!--      国庆期间，新CS75的4738名用户中有<span> 1338 </span>名使用过自适应巡航，平均单车单日使用<span> 7.52 </span>次-->
<!--      （非节假日时单车单日使用<span> 5.85 </span>次）。-->
<!--    </div>-->

    <div id="accNum" :style="{width: '100%', height: barHeight1+'px', margin: '2% 0 0 0'}"></div>
    <div class="subTitle2">单车平均月使用次数</div>
    <div id="acc" :style="{width: '100%', height: barHeight2+'px', margin: '2% 0 0 0'}"></div>
    <div class="content">
      <span>6月底 </span>才开始采集数据，7月用户还在ota，数据尚未稳定，因此使用车辆数和次数都<span> 较低</span>。
    </div>
    <div class="page">15/20</div>

  </div>
</template>

<script>
  import echarts from "echarts"
  export default {
    name: "CS75AccNum",
    data() {
      return {
        barHeight1: window.innerHeight * 0.20,
        barHeight2: window.innerHeight * 0.28,
        color: ['#00A0E9','#EEAF00','#EB595F','#9FB934','#B15BFF'],
        lineData: [901, 2038,1848,2034,1674],
        legend: ['单车平均月使用次数','单车平均月驾驶次数','占比'],
        xAxisData: ['7月','8月','9月','10月','11月'],
        barNum: [11.52, 27.87,22.55,25.26,20,],
        barNum1: [1636, 873,978,1002,1101,],
        lineNum: [0.7, 3.19,2.31,2.52,1.82,],
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
        let charts = this.$echarts.init(document.getElementById('accNum'));
        // 绘制图表
        charts.setOption({
          color: this.color,
          grid: {
            left: '16%',
            top: '15%',
            bottom: '15%',
            right: '18%'
          },
          xAxis: {
            type: 'category',
            data: this.xAxisData,
            boundaryGap: false,
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
            // name: '时长(m)',
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
            type: 'line',
            label: {
              normal: {
                show: true,
                position: 'top',
                textStyle: {
                  fontSize: 10,
                },
                // formatter: '       {c}'
              }
            },
            areaStyle: {
              normal: {
                color: this.color[0]
              }
            },
            data: this.lineData,
          }]
        });
      },
      draw(){
        // 基于准备好的dom，初始化echarts实例
        let charts = this.$echarts.init(document.getElementById('acc'));
        // 绘制图表
        charts.setOption({
          color: this.color,
          grid: {
            left: '16%',
            top: '32%',
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
            // name: '时长(m)',
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
              // lineStyle: {
              //   color: ['#CCECFB'],
              //   opacity: 0.7,
              // }
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
                position: 'top',
                textStyle: {
                  fontSize: 10,
                },
                formatter: '{c}%',
                // formatter: function(params) {
                //   let str;
                //   if(params.value < 2.4 && params.value > 2){
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
