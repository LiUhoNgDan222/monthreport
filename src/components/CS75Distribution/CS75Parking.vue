<template>
  <div>
    <!--<Drawer></Drawer>-->

    <div id="title">新CS75驾驶功能分析专题</div>
    <div id="subTitle1">自动泊车(功能搭载2375辆车)</div>
    <div class="subTitle2">月使用车辆数</div>
<!--    <div class="desc">-->
<!--      国庆期间，新CS75的4738名用户中有<span> 1338 </span>名使用过自适应巡航，平均单车单日使用<span> 7.52 </span>次-->
<!--      （非节假日时单车单日使用<span> 5.85 </span>次）。-->
<!--    </div>-->

    <div id="parking" :style="{width: '100%', height: barHeight1+'px', margin: '2% 0 0 0'}"></div>
    <div class="subTitle2">平均单车月使用总次数</div>
    <div id="parking1" :style="{width: '100%', height: barHeight2+'px', margin: '2% 0 0 0'}"></div>
    <div class="content">
      <span>11月 </span>自动泊车使用车辆数<span> 减少</span>，但人均使用次数<span> 提高</span>，这些留存用户是泊车功能的核心用户。
    </div>
    <div class="page">17/19</div>

  </div>
</template>

<script>
  import echarts from "echarts"
  export default {
    name: "CS75Parking",
    data() {
      return {
        barHeight1: window.innerHeight * 0.20,
        barHeight2: window.innerHeight * 0.28,
        color: ['#00A0E9','#EEAF00','#EB595F','#9FB934','#B15BFF'],
        lineData: [212,195,201,170],
        legend: ['单车平均月使用次数','单车平均月驾驶次数','占比'],
        xAxisData: ['8月','9月','10月','11月'],
        barNum: [3.52, 2.65,2.49,5.37],
        barNum1: [ 219.3,256.9,279.7,307.5,],
        lineNum: [1.6, 1.03,0.89,1.75],
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
        let charts = this.$echarts.init(document.getElementById('parking'));
        // 绘制图表
        charts.setOption({
          color: this.color,
          grid: {
            left: '14%',
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
                position: 'right',
                textStyle: {
                  fontSize: 10,
                },
                formatter: function(params) {
                  let str;
                  // if(params.value < 160 && params.value > 100){
                  //   str = '\n\n' + params.value + '%';
                  // }else{
                    str = params.value + '\n';
                  // }
                  return str;
                },
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
        let charts = this.$echarts.init(document.getElementById('parking1'));
        // 绘制图表
        charts.setOption({
          color: this.color,
          grid: {
            left: '14%',
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
    font-family: "Microsoft YaHei";
  }

  .subTitle2 {
    font-size: 0.36rem;
    color: #444;
    /*font-weight: bold;*/
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
