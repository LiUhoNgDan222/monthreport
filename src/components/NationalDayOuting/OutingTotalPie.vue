<template>
    <div>
      <!--<Drawer></Drawer>-->
      <div id="title">智能网联用户出游概况</div>
      <div id="content">
        总自驾游车辆：<span> 25467 </span>辆<br/>
        占所有网联车的<span> 12.3% </span><br/>
        较51自驾游的<span> 16420</span> 辆车，提升<span> 55% </span>
      </div>
      <div :style="{width: '100%'}">
        <div :style="{width: '49%', display:'inline-block'}">
          <div id="outingPie1" :style="{width: '100%', height: pieHeight + 'px',margin:'3% 0 0 0'}"></div>
        </div>
        <div :style="{width: '50%', display:'inline-block'}">
          <div id="outingPie2" :style="{width: '100%', height: pieHeight + 'px',margin:'3% 0 0 0'}"></div>
        </div>
      </div>

      <p id="newCity">
        短途旅游：去过景点，且旅游里程小于300km<br/>
        长途旅游：去过景点，且旅游里程大于等于300km
      </p>
      <div class="page">13/27</div>
    </div>
</template>

<script>
  import Drawer from "../Drawer/Drawer"
  import echarts from "echarts"
  export default {
    name: "OutingTotalPie",
    data() {
      return {
        pieHeight: window.innerHeight * 0.43,
      }
    },
    mounted(){
      // this.init();
    },
    methods: {
      init() {
        this.drawPie1();
        this.drawPie2();
      },
      drawPie1(){
        let me = this;
        // 基于准备好的dom，初始化echarts实例
        let totalDataPie = this.$echarts.init(document.getElementById('outingPie1'));
        // 绘制图表
        let option = {
          tooltip: {
            trigger: 'item',
            formatter: "{b}: {c} ({d}%)",
            position: 'bottom'
          },
          color: ['#00A0E9','#EEAF00','#9FB934','#EB595F','#B15BFF'],
          series: [
            {
              // name: '出游车辆',
              type:'pie',
              radius : [0,75],
              center: ['55%', '50%'],
              startAngle: 225,
              minAngle: 9,
              avoidLabelOverlap:false,
              itemStyle:{
                normal : {
                  textStyle: {
                    color: '#fff'
                  },
                  label : {
                    position : 'inner',
                  },
                  labelLine : {
                    show : false
                  },
                  borderWidth: 3,
                  borderColor: 'white'
                }
              },
              // roseType: 'radius',
              data:[
                {value:19862, name:'\n本省旅游车辆'},
                {value:5605, name:'跨省\n旅游车辆'},
              ],
              label: {
                normal: {
                  textStyle: {
                    color: '#fff',
                    fontSize: 10,
                  },
                  formatter: "{b} \n\n {c} ({d}%)",
                },
              },
              animationType: 'scale',
              animationEasing: 'elasticOut',
              animationDelay: function (idx) {
                return Math.random() * 200;
              }
            }
          ]
        };
        totalDataPie.setOption(option);
      },
      drawPie2(){
        let me = this;
        // 基于准备好的dom，初始化echarts实例
        let totalDataPie = this.$echarts.init(document.getElementById('outingPie2'));
        // 绘制图表
        let option = {
          tooltip: {
            trigger: 'item',
            formatter: "{b}: {c} ({d}%)",
            position: 'bottom'
          },
          color: ['#00A0E9','#EEAF00','#9FB934','#EB595F','#B15BFF'],
          series: [
            {
              // name:'网联车辆数',
              type:'pie',
              radius : [0,75],
              center: ['45%', '50%'],
              startAngle: 180,
              minAngle: 9,
              avoidLabelOverlap:false,
              itemStyle:{
                normal : {
                  textStyle: {
                    color: '#fff'
                  },
                  label : {
                    position : 'inner'
                  },
                  labelLine : {
                    show : false
                  },
                  borderWidth: 3,
                  borderColor: 'white'
                }
              },
              // roseType: 'radius',
              data:[
                {value:13286, name:'\n短途旅游车辆'},
                {value:12181, name:'长途旅游车辆'},
              ],
              label: {
                normal: {
                  textStyle: {
                    color: '#fff',
                    fontSize: 10,
                  },
                  formatter: "{b} \n\n {c} ({d}%)",
                },
              },
              animationType: 'scale',
              animationEasing: 'elasticOut',
              animationDelay: function (idx) {
                return Math.random() * 200;
              }
            }
          ]
        };
        totalDataPie.setOption(option);
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
    padding-bottom: 9%;
    font-family: "Microsoft YaHei";
  }

  #content {
    width:80%;
    margin: 5% auto 0;
    background-color: #F0F9FE;
    padding: 0.2rem 0.3rem 0.4rem 0.3rem;
    font-size: 0.32rem;
    color: #444;
  }

  #newCity {
    width: 75%;
    margin: 0 auto;
    font-size: 0.24rem;
    color: #666;
    padding-top: 0.2rem;
    text-align: left;
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
    font-size: 0.45rem;

  }

  div {
    color:#D0D0D0;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 2s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }


</style>
