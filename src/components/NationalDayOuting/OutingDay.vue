<template>
  <div>
    <!--<Drawer></Drawer>-->
    <div id="title">智能网联用户出游概况</div>
    <div id="subTitle1">出游天数</div>
    <div id="dayPie" :style="{width: '80%', height: pieHeight+'px', margin: '0 0 0 10%'}"></div>
    <div id="subTitle2">每日出游车辆数</div>
    <div id="dayLine" :style="{width: '100%', height: barHeight+'px', margin: '0 0 5% 0 '}"></div>
    <div class="mainCity">
      用户普遍出游<span> 1天 </span>，
      <span>10月2日 </span>为出游最高峰。
    </div>
    <div class="page">14/27</div>
  </div>
</template>

<script>
  import echarts from "echarts"
  export default {
    name: "OutingDay",
    data() {
      return {
        pieHeight: window.innerHeight * 0.28,
        barHeight: window.innerHeight * 0.25,
        day: [
          {value:16658, name:'1天'},
          {value:5244, name:'2天'},
          {value:1923, name:'3天'},
          {value:829, name:'4天'},
          {value:418, name:'5天'},
          {value:237, name:'6天'},
          {value:158, name:'7天'},
        ],
        carData: [6292,6995,6593,5762,5569,5068,4570],
      }
    },
    mounted(){

    },
    methods: {
      init() {
        this.drawDayPie();
        this.drawDayLine();
      },
      drawDayPie(totalJson){
        let me = this;
        // 基于准备好的dom，初始化echarts实例
        let mainCityPie = me.$echarts.init(document.getElementById('dayPie'));
        // 绘制图表
        let option = {
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
          },
          color: ['#888889', '#EB595F', '#9FB934', '#00A0E9', '#EEAF00', '#004595', '#ffb980','#B15BFF',],
          legend: {
            data: ['1天','2天','3天','4天','5天','6天','7天','7天以上'],
            x: 'left',
            y: 'middle',
            orient: 'vertical',
            textStyle:{
              color: '#333'
            },
            itemWidth:8,
            itemHeight: 8
          },
          series: [
            {
              name:'出游天数',
              type:'pie',
              center: ['60%','50%'],
              radius: ['30%', '60%'],
              startAngle: 160,
              avoidLabelOverlap:false,
              itemStyle:{
                normal:{
                  borderWidth: 2,
                  borderColor: 'white'
                }
              },
              data: me.day,
              label: {
                normal: {
                  formatter: function(params) {
                    let str;
                    if(params.percent < 0.7){
                      str = params.percent + '%\n\n';
                    }else if(params.percent >= 1 && params.percent < 4){
                      str = '\n' + params.percent + '%';
                    }else{
                      str = params.percent + '%';
                    }
                    return str;
                  },
                  textStyle: {
                    color: '#333',
                    fontSize: 10,
                  },
                }
              },
              labelLine: {
                normal: {
                  length: 6,
                  length2: 6
                }
              },
              // itemStyle: {
              //   normal: {
              //     borderWidth: 20,
              //     borderColor: '#ffffff',
              //   },
              //   emphasis: {
              //     borderWidth: 0,
              //     shadowBlur: 10,
              //     shadowOffsetX: 0,
              //     shadowColor: 'rgba(0, 0, 0, 0.5)'
              //   },
              // },

              animationType: 'scale',
              animationEasing: 'elasticOut',
              animationDelay: function (idx) {
                return Math.random() * 200;
              }
            }
          ]
        };
        mainCityPie.setOption(option);
      },

      drawDayLine(){
        let me = this;
        // 基于准备好的dom，初始化echarts实例
        let mainCityBar = me.$echarts.init(document.getElementById('dayLine'));
        // 绘制图表
        mainCityBar.setOption({
          grid: {
            left: '20%',
            right: '10%',
            bottom: '20',
            top: '20',
          },
          color: ['#00A0E9'],
          xAxis: {
            type: 'category',
            data: ['10.1','10.2','10.3','10.4','10.5','10.6','10.7'],
            splitLine:{
              show: true,
              lineStyle: {
                color: ['#CCECFB'],
                opacity: 0.7,
              }
            },
            axisLabel: {
              fontSize: 10,
              color: '#666'
            },
            axisLine: {
              lineStyle: {
                color: '#00A0E9'
              },
            },
            nameTextStyle: {
              color: '#666'
            },
          },
          yAxis: {
            type: 'value',
            splitLine:{
              show: true,
              lineStyle: {
                color: ['#CCECFB'],
                opacity: 0.7,
              }
            },
            axisLabel :{
              interval:0,
              fontSize: 12,
              formatter: '{value}辆',
              color: '#666'
            },
            axisLine: {
              lineStyle: {
                color: '#00A0E9'
              }
            },
            nameTextStyle: {
              color: '#666',
              fontSize: '6',
            },
          },
          series: [{
            data: me.carData,
            type: 'line',
            itemStyle : {
              normal: {
                label : {
                  show: true,
                  // color: '#333',
                },
              }
            }
          }]
        });
      }
    }

  }
</script>

<style scoped>
  div {
    font-size: 28px;
  }

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

  #subTitle1 {
    font-size: 0.36rem;
    color: #444;
    font-weight: bold;
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

  .mainCity {
    width:80%;
    margin: 0 auto;
    background-color: #F0F9FE;
    padding: 0.2rem 0.3rem 0.2rem 0.3rem;
    font-size: 0.32rem;
    color: #444
  }

  #newCity {
    width: 90%;
    margin: 0 auto;
    font-size: 0.24rem;
    color: #666;
    padding-top: 0.2rem
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
