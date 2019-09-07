<template>
  <div>
    <!--<Drawer></Drawer>-->
    <div id="title">各车型具体分析</div>
    <div id="xtUserAge" :style="{width: '100%', height: line1Height+'px',margin:'0 auto'}"></div>
    <div id="xtAgeRate">
      <p>
        {{classifiedOneData.carNameTwo}}用户购买量不大，<br/>峰值在<span>28</span>岁
      </p>
      <!--<p>-->
        <!--{{classifiedOneData.carNameTwo}}主力购车年纪在<span>{{classifiedOneData.xtmainUserAge}}</span>岁，占比达<span>{{classifiedOneData.xtmainUserAgeRate}}</span>%<br/>-->
        <!--峰值在<span>{{classifiedOneData.xtmaxUserAge}}</span>岁-->
      <!--</p>-->
    </div>
    <div id="CCUserAge" :style="{width: '100%', height:  line2Height+'px',margin:'0 auto'}"></div>
    <div id="CCAgeRate">
      <p>
        {{classifiedOneData.carNameThree}}用户购买量也不大，<br/>峰值在<span>23</span>岁
      </p>
      <!--<p>-->
        <!--{{classifiedOneData.carNameThree}}主力购车年纪同样在<span>{{classifiedOneData.CCmainUserAge}}</span>岁，占比达<span>{{classifiedOneData.CCmainUserAgeRate}}</span>%<br/>-->
        <!--峰值在<span>{{classifiedOneData.CCmaxUserAge}}</span>岁-->
      <!--</p>-->
    </div>
  </div>
</template>

<script>
  import Drawer from "../Drawer/Drawer"
  import echarts from "echarts"

  export default {
    name: "ClassifiedUserAgeOne",
    props: ["classifiedOneData"],
    components: {Drawer},
    data() {
      return {
        line1Height: window.innerHeight * 0.26,
        line2Height: window.innerHeight * 0.26,
      }
    },
    mounted(){

    },
    methods: {
      initAgeOne() {
        this.drawxtline();
        this.drawCCline();
      },
      drawxtline(){
        let me = this;
        // 基于准备好的dom，初始化echarts实例
        let xtuserAnalysisPie = me.$echarts.init(document.getElementById('xtUserAge'))
        // 绘制图表
        xtuserAnalysisPie.setOption({
          tooltip: {
            trigger: 'axis',
            formatter: '{b}岁<br/>{a}:{c}'
          },
          lineStyle:{
            normal:{
              color:'#32A8FF'
            }
          },
          grid: {
            top: '15%',
            left: '3%',
            right: '4%',
            bottom: '1%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            boundaryGap:false,
            data:me.classifiedOneData.ageItemTwo,
            axisLine: {
              lineStyle: {
                color: '#BEBEBE',
                opacity: 0.1,
              }
            },
            nameTextStyle: {
              color: '#BEBEBE'
            },
          },
          yAxis: {
            type: 'value',
            splitLine:{
              show: true,
              lineStyle: {
                color: ['#BEBEBE'],
                opacity: 0.1,
              }
            },
            axisLine: {
              lineStyle: {
                color: '#BEBEBE',
                opacity: 0.1,
              }
            },
            nameTextStyle: {
              color: '#BEBEBE'
            },
            /*min:0,
             max:60,
             splitNumber:6*/
          },
          series: [
            {
              name:'用户数量',
              type:'line',
              symbol: 'circle',
              stack: '总量1',
              lineStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#FF00FF',
                }, {
                  offset: 1,
                  color: '#D9006C',
                }]),
                opacity: 0.6,
              },
              itemStyle: {
                opacity: 0,
              },
              data:me.classifiedOneData.ageDataTwo,
            }
          ]
        });
      },

      drawCCline(){
        let me = this;
        // 基于准备好的dom，初始化echarts实例
        let CCuserAnalysisLine = me.$echarts.init(document.getElementById('CCUserAge'))
        // 绘制图表
        CCuserAnalysisLine.setOption({
          tooltip: {
            trigger: 'axis',
            formatter: '{b}岁<br/>{a}:{c}'
          },
          lineStyle:{
            normal:{
              color:'#32A8FF'
            }
          },
          grid: {
            top: '13%',
            left: '3%',
            right: '4%',
            bottom: '9%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            boundaryGap:false,
            data:me.classifiedOneData.ageItemThree,
            axisLine: {
              lineStyle: {
                color: '#BEBEBE',
                opacity: 0.1,
              }
            },
            nameTextStyle: {
              color: '#BEBEBE'
            },
          },
          yAxis: {
            type: 'value',
            splitLine:{
              show: true,
              lineStyle: {
                color: ['#BEBEBE'],
                opacity: 0.1,
              }
            },
            axisLine: {
              lineStyle: {
                color: '#BEBEBE',
                opacity: 0.1,
              }
            },
            nameTextStyle: {
              color: '#BEBEBE'
            },
            /*min:0,
             max:60,
             splitNumber:6*/
          },
          series: [
            {
              name:'用户数量',
              type:'line',
              symbol: 'circle',
              stack: '总量1',
              lineStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#FF00FF',
                }, {
                  offset: 1,
                  color: '#D9006C',
                }]),
                opacity: 0.6,
              },
              itemStyle: {
                opacity: 0,
              },
              data:me.classifiedOneData.ageDataThree,
            }
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
    padding-bottom: 2%
  }

  span {
    color: #2894FF;
    font-size: 40px;
  }
</style>
