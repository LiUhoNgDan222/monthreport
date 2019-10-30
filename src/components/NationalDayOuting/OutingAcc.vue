<template>
  <div>
    <!--<Drawer></Drawer>-->

    <div id="title">新CS75出游用户分析</div>
    <div id="subTitle1">自适应巡航使用情况</div>

    <div class="desc">
      国庆期间，新CS75的4738名用户中有<span> 1338 </span>名使用过自适应巡航，平均单车单日使用<span> 7.52 </span>次
      （非节假日时单车单日使用<span> 5.85 </span>次）。
    </div>

    <div id="acc" :style="{width: '100%', height: barHeight1+'px', margin: '4% 0 0 0'}"></div>
<!--    <div class="content">-->
<!--      <span>一线 </span>城市油耗偏高，因为人多车多堵车多-->
<!--    </div>-->
    <div class="page">22/27</div>

  </div>
</template>

<script>
  import echarts from "echarts"
  export default {
    name: "OutingAcc",
    data() {
      return {
        barHeight1: window.innerHeight * 0.56,
        color: ['#00A0E9','#EEAF00','#EB595F','#9FB934','#B15BFF'],
        legend: ['驾驶时长','自适应巡航使用时长','自适应巡航使用时长/驾驶时长占比'],
        xAxisData: ['10.1','10.2','10.3','10.4','10.5','10.6','10.7'],
        barNum: [556, 529,524,553,554,535,565],
        barNum1: [40, 29,30,32,34,37,33],
        lineNum: [7.13, 5.48,5.71,5.83,6.09,6.87,5.82],
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
        let charts = this.$echarts.init(document.getElementById('acc'));
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
            name: '时长(m)',
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
                position: 'bottom',
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
