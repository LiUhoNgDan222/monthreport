<template>
  <div>
    <!--<Drawer></Drawer>-->
    <div id="title">各车型具体分析</div>
    <div id="CS75UserAge" :style="{width: '100%', height: line1Height+'px',margin:'0 auto'}"></div>
    <div id="CS75AgeRate">
      <p>
        {{classifiedThreeData.carNameSix}}用户主力购车年纪<span>24-36</span>岁<br/>
        峰值在<span>29</span>岁
      </p>
      <!--<p>-->
        <!--{{classifiedThreeData.carNameSix}}主力购车年纪在<span>{{classifiedThreeData.CS75mainUserAge}}</span>岁，占比达<span>{{classifiedThreeData.CS75mainUserAgeRate}}</span>%<br/>-->
        <!--峰值在<span>{{classifiedThreeData.CS75maxUserAge}}</span>岁-->
      <!--</p>-->
    </div>
    <div id="CS95UserAge" :style="{width: '100%', height:  line2Height+'px',margin:'0 auto'}"></div>
    <div id="CS95AgeRate">
      <p>
        {{classifiedThreeData.carNameSeven}}购买量较少，总体年纪分布很平顺<br/>
        <span>46</span>岁峰值
      </p>
      <!--<p>-->
        <!--{{classifiedThreeData.carNameSeven}}主力购车年纪同样在<span>{{classifiedThreeData.CS95mainUserAge}}</span>岁，占比达<span>{{classifiedThreeData.CS95mainUserAgeRate}}</span>%<br/>-->
        <!--峰值在<span>{{classifiedThreeData.CS95maxUserAge}}</span>岁-->
      <!--</p>-->
    </div>
  </div>
</template>

<script>
  import Drawer from "../Drawer/Drawer"
  import echarts from "echarts"

  export default {
    name: "ClassifiedUserAgeThree",
    components: {Drawer},
    props: ["classifiedThreeData"],
    data() {
      return {
        line1Height: window.innerHeight * 0.26,
        line2Height: window.innerHeight * 0.24,
      }
    },
    mounted(){

    },
    methods: {
      initAgeThree() {
        this.drawCS75line();
        this.drawCS95line();
      },
      drawCS75line(){
        let me = this;
        // 基于准备好的dom，初始化echarts实例
        let CS75userAnalysisPie = me.$echarts.init(document.getElementById('CS75UserAge'))
        // 绘制图表
        CS75userAnalysisPie.setOption({
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
            data:me.classifiedThreeData.ageItemSix,
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
              data:me.classifiedThreeData.ageDataSix,
            }
          ]
        });
      },

      drawCS95line(){
        let me = this;
        // 基于准备好的dom，初始化echarts实例
        let CS95userAnalysisLine = me.$echarts.init(document.getElementById('CS95UserAge'))
        // 绘制图表
        CS95userAnalysisLine.setOption({
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
            data:me.classifiedThreeData.ageItemSeven,
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
              name:'浏览次数',
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
              data:me.classifiedThreeData.ageDataSeven,
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
