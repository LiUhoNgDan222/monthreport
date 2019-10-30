<template>
  <div>
    <!--<Drawer></Drawer>-->

    <div id="title">新CS75出游用户分析</div>
    <div id="subTitle1">自动泊车使用情况</div>

    <div class="desc">
      国庆期间，新CS75的4738名用户中有<span> 62 </span>名使用过自动泊车，平均单车单日使用<span> 1.4 </span>次
      （非节假日时单车单日使用<span> 1.38 </span>次）。
    </div>

    <div id="parking" :style="{width: '100%', height: barHeight1+'px', margin: '4% 0 0 0'}"></div>
<!--    <div class="content">-->
<!--      <span>一线 </span>城市油耗偏高，因为人多车多堵车多-->
<!--    </div>-->

    <div class="page">23/27</div>
  </div>
</template>

<script>
  import echarts from "echarts"
  export default {
    name: "OutingParking",
    data() {
      return {
        barHeight1: window.innerHeight * 0.56,
        color: ['#00A0E9','#EEAF00','#EB595F','#9FB934','#B15BFF'],
        legend: ['驾驶次数','自动泊车使用次数','自动泊车使用次数/驾驶次数占比'],
        xAxisData: ['10.1','10.2','10.3','10.4','10.5','10.6','10.7'],
        barNum: [6.41, 6.13,5.91,5.8,5.89,5.81,5.72],
        barNum1: [1.54, 1.39,1.62,1.3,1.31,1.4,1.45],
        lineNum: [24, 22.7,27.41,22.4,22.2,24.1,25.3],
      }
    },
    mounted(){

    },
    methods: {
      init() {
        this.draw();
      },
      draw(){
        // 基于准备好的dom，初始化echarts实例
        let charts = this.$echarts.init(document.getElementById('parking'));
        // 绘制图表
        charts.setOption({
          color: this.color,
          grid: {
            left: '14%',
            top: '20%',
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
            // right: '15%',
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
                position: [0,-10],
                // position: 'top',
                // formatter: '{c}%',
                textStyle: {
                  fontSize: 10,
                },
                formatter: function(params) {
                  let str;
                  if(params.value < 26 && params.value > 22){
                    str = '\n\n'+params.value;
                  }else{
                    str = params.value;
                  }
                  return str+'%';
                },
              },
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
