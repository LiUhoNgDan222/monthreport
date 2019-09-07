<template>
    <div>
      <!--<Drawer></Drawer>-->
      <div class="title">星座分布</div>
      <div id="constellationBar" :style="{width: '100%', height: lineHeight+'px',margin:'3% 0 0 5%'}"></div>
      <div class="title1">生肖分布</div>
      <div id="animalsBar" :style="{width: '100%', height: lineHeight+'px',margin:'0 0 4% 5%'}"></div>
      <div id="content2">
        近三个月数据看，都是气质出众的<span>天秤座</span><br/>和有情有义的<span>属狗人</span>对长安有一种执念
      </div>
    </div>
</template>

<script>
  import Drawer from "../Drawer/Drawer"
  import echarts from "echarts"
  export default {
      name: "Constellation",
    components: {Drawer},
    props: ["userConstellationList"],
    data() {
        return {
          firstConstellation: '天平座',
          secondConstellation: '处女座',
          thirdConstellation: '天蝎座',
          lineHeight: window.innerHeight * 0.30,
        }
    },
      mounted(){

      },
      methods: {
        initConstellation() {
          this.drawConstellationBar();
          this.drawAnimalBar();
        },
        drawConstellationBar(){
          let me = this;
          // 基于准备好的dom，初始化echarts实例
          let constellationDataBar = me.$echarts.init(document.getElementById('constellationBar'));
          // 绘制图表
          constellationDataBar.setOption({
            title: {
              text: '各星座购车数量树状图',
              x:'center',
              y: 'bottom',
              textStyle: {
                color: '#BEBEBE',
                fontSize: 13,
                fontWeight: 'normal',
              }
            },
            grid: {
              left: '10%',
              top: '18%'
            },
            xAxis: {
              type: 'category',
              data: me.userConstellationList.constellation,
              axisLabel :{
                interval:0,
                fontSize: 10,
                color: '#666'
              },
              splitLine:{
                show: true,
                lineStyle: {
                  color: ['#CCECFB'],
                  opacity: 0.1,
                }
              },
              axisLine: {
                lineStyle: {
                  color: '#00A0E9'
                }
              },
              nameTextStyle: {
                color: '#666'
              },
            },
            yAxis: {
              name: '人数',
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
              data: me.userConstellationList.constellationNum,
              type: 'bar',
              barWidth: 4,
              itemStyle: {
                color: '#00A0E9',
                opacity: 0.8,
                barBorderRadius: [5, 5, 0, 0],
              },
              label: {
                show: true,
                position: 'top',
                fontSize: 8,
                color: 'white'
              }
            }]
          });
        },
        drawAnimalBar() {
          let me = this;
          // 基于准备好的dom，初始化echarts实例
          let animalsDataBar = me.$echarts.init(document.getElementById('animalsBar'));
          // 绘制图表
          animalsDataBar.setOption({
            title: {
              text: '各生肖购车数量树状图',
              x:'center',
              y: 'bottom',
              textStyle: {
                color: '#BEBEBE',
                fontSize: 13,
                fontWeight: 'normal',
              }
            },
            grid: {
              left: '10%',
              top: '18%'
            },
            xAxis: {
              type: 'category',
              data: me.userConstellationList.animals,
              axisLabel :{
                interval:0,
                fontSize: 12,
                color: '#666'
              },
              splitLine:{
                show: true,
                lineStyle: {
                  color: ['#CCECFB'],
                  opacity: 0.1,
                }
              },
              axisLine: {
                lineStyle: {
                  color: '#00A0E9'
                }
              },
              nameTextStyle: {
                color: '#666'
              },
            },
            yAxis: {
              name: '人数',
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
              data: me.userConstellationList.animalsNum,
              type: 'bar',
              barWidth: 4,
              itemStyle: {
                color: '#00A0E9',
                opacity: 0.8,
                barBorderRadius: [5, 5, 0, 0],
              },
              label: {
                show: true,
                position: 'top',
                fontSize: 8,
                color: 'white'
              }
            }]
          });
        }
      }
    }
</script>

<style scoped>

  .title {
    width: 100%;
    margin: 0 auto;
    font-size: 0.63rem;
    color: #444444;
    font-weight: bold;
    padding-top: 9%;
    padding-bottom: 2%
  }

  .title1 {
    width: 100%;
    text-align: left;
    margin-left:8%;
    margin-top: 2%;
    margin-bottom: 4%;
    font-size: 0.48rem;
    color: #444;
    font-weight: bold
  }

  #content2 {
    width:80%;
    margin: 0 auto;
    background-color: #F0F9FE;
    padding: 0.1rem 0.3rem 0.1rem 0.3rem;
    font-size: 0.32rem;
    color: #444
  }

  #dateText {
    width: 100%;
    text-align: left;
    margin-left: 20%;
    position: relative;
    top:25%
  }

  #secondText {
    position: relative;
    /*top:30%*/
    top:60%
  }

  span {
    color: #2894FF;
    font-size: 40px;
  }
</style>
