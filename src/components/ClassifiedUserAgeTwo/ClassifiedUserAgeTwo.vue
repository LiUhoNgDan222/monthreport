<template>
  <div>
    <!--<Drawer></Drawer>-->
    <div id="title">各车型具体分析</div>
    <div id="CS35UserAge" :style="{width: '100%', height: line1Height+'px',margin:'0 auto'}"></div>
    <div id="CS35AgeRate">
      <p>
        {{classifiedTwoData.carNameFour}}用户主力购车年纪<span>23-48</span>岁<br/>
        峰值在<span>29</span>岁
      </p>
      <!--<p>-->
        <!--{{classifiedTwoData.carNameFour}}主力购车年纪在<span>{{classifiedTwoData.CS35mainUserAge}}</span>岁，占比达<span>{{classifiedTwoData.CS35mainUserAgeRate}}</span>%<br/>-->
        <!--峰值在<span>{{classifiedTwoData.CS35maxUserAge}}</span>岁-->
      <!--</p>-->
    </div>
    <div id="CS55UserAge" :style="{width: '100%', height:  line2Height+'px',margin:'0 auto'}"></div>
    <div id="CS55AgeRate">
      <p>
        {{classifiedTwoData.carNameFive}}用户主力购车年纪<span>22-43</span>岁<br/>
        峰值在<span>31</span>岁
      </p>
      <!--<p>-->
        <!--{{classifiedTwoData.carNameFive}}主力购车年纪同样在<span>{{classifiedTwoData.CS55mainUserAge}}</span>岁，占比达<span>{{classifiedTwoData.CS55mainUserAgeRate}}</span>%<br/>-->
        <!--峰值在<span>{{classifiedTwoData.CS55maxUserAge}}</span>岁-->
      <!--</p>-->
    </div>
  </div>
</template>

<script>
  import Drawer from "../Drawer/Drawer"
  import echarts from "echarts"

  export default {
    name: "ClassifiedUserAgeTwo",
    components: {Drawer},
    props: ["classifiedTwoData"],
    data() {
      return {
        line1Height: window.innerHeight * 0.24,
        line2Height: window.innerHeight * 0.26,
      }
    },
    mounted(){

    },
    methods: {
      initAgeTwo() {
        this.drawCS35line();
        this.drawCS55line();
      },
      drawCS35line(){
        let me = this;
        // 基于准备好的dom，初始化echarts实例
        let CS35userAnalysisPie = me.$echarts.init(document.getElementById('CS35UserAge'))
        // 绘制图表
        CS35userAnalysisPie.setOption({
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
            bottom: '1%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            boundaryGap:false,
            data:me.classifiedTwoData.ageItemFour,
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
              data:me.classifiedTwoData.ageDataFour,
            }
          ]
        });
      },

      drawCS55line(){
        let me = this;
        // 基于准备好的dom，初始化echarts实例
        let CS55userAnalysisLine = me.$echarts.init(document.getElementById('CS55UserAge'))
        // 绘制图表
        CS55userAnalysisLine.setOption({
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
            bottom: '1%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            boundaryGap:false,
            data:me.classifiedTwoData.ageItemFive,
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
              data:me.classifiedTwoData.ageDataFive,
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
