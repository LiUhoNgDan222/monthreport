<template>
  <div>
    <!--<Drawer></Drawer>-->

    <div id="title">新CS75驾驶功能分析专题</div>
    <div id="subTitle1">自动泊车(功能搭载2375辆车)</div>
    <div class="subTitle2">性能指标分析</div>
<!--    <div class="desc">-->
<!--      国庆期间，新CS75的4738名用户中有<span> 1338 </span>名使用过自适应巡航，平均单车单日使用<span> 7.52 </span>次-->
<!--      （非节假日时单车单日使用<span> 5.85 </span>次）。-->
<!--    </div>-->

    <div id="parkingFunction" :style="{width: '100%', height: barHeight1+'px', margin: '2% 0 0 0'}"></div>
    <p class="desc">
      计算规则<br>
      故障退出率=故障次数/使用次数<br>
      场景不满足及人为干预退出率=场景不满足或者人为干预退出次数/使用次数<br>
      泊车成功率=泊车成功次数/使用次数<br>
    </p>
    <div class="content">
      <span>场景不满足及人为干预退出率 </span>逐月增高，可以考虑在信号上进一步区分场景或人为退出原因。
    </div>
    <div class="page">19/20</div>

  </div>
</template>

<script>
  import echarts from "echarts"
  export default {
    name: "CS75ParkingFunction",
    data() {
      return {
        barHeight1: window.innerHeight * 0.28,
        color: ['#00A0E9','#EEAF00','#EB595F','#9FB934','#B15BFF'],
        lineData: [16.47, 8.91,9.78,5.15],
        lineData1: [44.71, 49.22,59.48,33.08],
        lineData2: [38.82, 41.86,30.73,61.77],
        legend: ['故障退出率','场景不满足及人为干预退出率','泊车成功率'],
        xAxisData: ['8月','9月','10月','11月'],
      }
    },
    mounted(){

    },
    methods: {
      init() {
        this.drawLine();
      },
      drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let charts = this.$echarts.init(document.getElementById('parkingFunction'));
        // 绘制图表
        charts.setOption({
          color: this.color,
          grid: {
            left: '16%',
            top: '28%',
            bottom: '15%',
            right: '10%'
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
              color: '#666',
              formatter: '{value} %'
            },
            nameTextStyle: {
              color: '#666'
            },
          },
          series: [{
            name: this.legend[0],
            type: 'line',
            label: {
              normal: {
                show: true,
                position: 'top',
                textStyle: {
                  fontSize: 10,
                },
                // formatter: '{c}%',
                formatter: function(params) {
                  let str;
                  if(params.value < 16 && params.value > 9){
                    str = '           ' + params.value + '%';
                  }else{
                    str = params.value + '%';
                  }
                  return str;
                },
              }
            },
            data: this.lineData,
          },{
            name: this.legend[1],
            type: 'line',
            label: {
              normal: {
                show: true,
                position: 'top',
                textStyle: {
                  fontSize: 10,
                },
                formatter: '{c}%',
              }
            },
            data: this.lineData1,
          },{
            name: this.legend[2],
            type: 'line',
            label: {
              normal: {
                show: true,
                position: 'bottom',
                textStyle: {
                  fontSize: 10,
                },
                // formatter: '{c}%',
                formatter: function(params) {
                  let str;
                  if(params.value < 62 && params.value > 61){
                    str = '      ' + params.value + '%';
                  }else if(params.value < 31 && params.value > 30){
                    str = params.value + '%      ';
                  }else{
                    str = params.value + '%';
                  }
                  return str;
                },
              }
            },
            data: this.lineData2,
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
