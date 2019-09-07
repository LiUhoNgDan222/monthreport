<template>
    <div>
      <!--<Drawer></Drawer>-->
      <div id="title">人群习惯分析</div>
      <div class="tip" v-show="showTips"><br/><br/>试试点击饼状图，<br/>查看三大属性的分布数据</div>
      <div id="content">
        将长安汽车网联用户按照<span> 车系 </span>、<span> 城市 </span>、<br/>
        <span> 用户特征 </span> 三大属性进行人群细分，统计分析<br/>
        各细分人群的主要<span> 网联驾驶数据 </span>，<br/>
        定位人群差异，服务产品优化。
      </div>
      <div id="doublePie" :style="{width: '100%', height: pieHeight + 'px',margin:'3% 0 0 0'}"></div>
      <div class="page">3/22</div>
    </div>
</template>

<script>
  import Drawer from "../Drawer/Drawer"
  import echarts from "echarts"
  export default {
    name: "DoublePie",
    components: {Drawer},
    data() {
      return {
        pieHeight: window.innerHeight * 0.53,
        showTips: true,
      }
    },
    mounted(){
      // this.init();
    },
    methods: {
      init() {
        this.drawPie();
        this.$emit('delay')
      },
      drawPie(){
        let me = this;
        // 基于准备好的dom，初始化echarts实例
        let totalDataPie = this.$echarts.init(document.getElementById('doublePie'));
        // 绘制图表
        let option = {
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)",
            position: 'bottom'
          },
          color:['#EB595F',
            '#9FB934',
            '#00A0E9',
            '#EEAF00',
            '#004595',
            '#ffb980',
            '#B15BFF',
            '#2ec7c9',
            '#FF5809',
            '#dc69aa',
          ],
          legend: {
            data: ['CS95','新CS75','CS55','逸动','睿骋CC'],
            orient:'horizontal',
            bottom: 0,
            textStyle:{
              color:'#333',
              fontSize: 12
            },
            align: 'auto',
            itemGap: 20,
            itemWidth:14,
            itemHeight: 5,
            width: 260
          },
          series: [
            {
              name:'网联车辆数',
              type:'pie',
              radius : [0,45],
              center: ['48%', '40%'],
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
                  }
                }
              },
              // roseType: 'radius',
              data:[
                {value:156552, name:'车系'},
                {value:71228, name:'城市'},
                {value:186691, name:'性别'}
              ],
              label: {
                normal: {
                  textStyle: {
                    color: '#333'
                  },
                  // formatter: function(params) {
                  //   let str;
                  //   if(params.value < 9400 && params.value > 9355){
                  //     str = '\n'+params.value;
                  //   }else{
                  //     str = params.value + '\n';
                  //   }
                  //   return str;
                  // },
                },
              },
              animationType: 'scale',
              animationEasing: 'elasticOut',
              animationDelay: function (idx) {
                return Math.random() * 200;
              }
            },
            {
              name:'网联车辆数',
              type:'pie',
              radius : [60, 90],
              center: ['48%', '40%'],
              funnelAlign: 'left',
              data:[
                {value:2980, name:'CS95'},
                {value:121887, name:'新CS75'},
                {value:4061, name:'CS55'},
                {value:22785, name:'逸动'},
                {value:4839, name:'睿骋CC'},
              ]
            }
          ]
        };
        totalDataPie.setOption(option);
        totalDataPie.on('click', function(param) {
          me.showTips = false;
          if(param.name === "车系"){
            option.legend.data = ['CS95','新CS75','CS55','逸动','睿骋CC'];
            option.series[1].data = [
              {value:2980, name:'CS95'},
              {value:121887, name:'新CS75'},
              {value:4061, name:'CS55'},
              {value:22785, name:'逸动'},
              {value:4839, name:'睿骋CC'},
            ];
          }
          if(param.name === "城市"){
            option.legend.data = ['河北','浙江','广东','河南','重庆','吉林','陕西'];
            option.series[1].data = [
              {value:9852, name:'河北'},
              {value:12462, name:'浙江'},
              {value:14068, name:'广东'},
              {value:11622, name:'河南'},
              {value:13325, name:'重庆'},
              {value:2536, name:'吉林'},
              {value:7363, name:'陕西'},
            ];
          }
          if(param.name === "性别"){
            option.legend.data = ['男','女'];
            option.series[1].data = [
              {value:151303, name:'男'},
              {value:35388, name:'女'},
            ];
          }
          totalDataPie.setOption(option);
        })
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
    padding-bottom: 9%
  }

  #content {
    width:80%;
    margin: 0 auto;
    background-color: #F0F9FE;
    padding: 0.2rem 0.3rem 0.4rem 0.3rem;
    font-size: 0.32rem;
    color: #444
  }

  .tip {
    position: absolute;
    width: 4.3rem;
    height: 2.6rem;
    top: 64%;
    left: 10%;
    color: #444;
    background-image: url("./img/tips.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    z-index: 999;
  }

  #dateText {
    width: 100%;
    text-align: left;
    margin-left: 15%;
    padding-top: 3%
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
