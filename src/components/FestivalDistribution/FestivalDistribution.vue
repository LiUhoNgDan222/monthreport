<template>
  <div>
    <!--<Drawer></Drawer>-->

    <div id="title">用户春节出行专题</div>

    <div class="subtitle1">年龄分布</div>
    <div id="ageDistribution" :style="{width: '90%', height: barHeight1+'px', margin: '0 auto'}"></div>

    <div class="subtitle2">车型分布</div>
    <div id="carDistribution" :style="{width: '100%',  height: barHeight2+'px', margin: '0 0 5px 0'}"></div>

    <div id="content">
      <p>
        <span>20-40</span>岁的用户热衷节假日出游
      </p>
    </div>
  </div>
</template>

<script>
  import echarts from "echarts"
  export default {
    name: "FestivalDistribution",
    data() {
      return {
        barHeight1: window.innerHeight * 0.3,
        barHeight2: window.innerHeight * 0.38,
      }
    },
    mounted(){
      this.drawAge();
      this.drawCarType();
    },
    methods: {
      drawAge(){
        let me = this;
        // 基于准备好的dom，初始化echarts实例
        let ageDistributionBar = this.$echarts.init(document.getElementById('ageDistribution'))
        // 绘制图表
        ageDistributionBar.setOption({
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)",
            position: ['50%', '50%']
          },
          legend: {
            data:['0-20岁','20-30岁','30-40岁','40-50岁','50岁以上'],
            // formatter: '{name}岁',
            formatter: function(param) {
              if(param === '50以上'){
                return '50岁以上';
              }
              return param;
            },
            x: 'right',
            y: 'middle',
            orient: 'vertical',
            textStyle:{
              color:'#AAABC6'
            },
            itemWidth:14,
            itemHeight:5,
          },
          grid: {
            right: '3%',
          },
          series: [
            {
              name:'用户年龄',
              type:'pie',
              center : ['37%', '50%'],
              radius: ['35%', '77%'],
              avoidLabelOverlap:false,
              color:['#32A8FF',' #02C800'],
              roseType: 'radius',
              itemStyle:{
                normal:{
                  color: function (params){
                    var colorList = [
                      new echarts.graphic.LinearGradient(1, 0, 0, 0, [{ //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上

                        offset: 0,
                        color: '#6172E3'
                      }, {
                        offset: 1,
                        color: '#57A8BF'
                      }]),
                      new echarts.graphic.LinearGradient(1, 0, 0, 0, [{ //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上

                        offset: 0,
                        color: '#63E587'
                      }, {
                        offset: 1,
                        color: '#5FE2E4'
                      }]),
                      new echarts.graphic.LinearGradient(1, 0, 0, 0, [{ //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上

                        offset: 0,
                        color: '#F9F900'
                      }, {
                        offset: 1,
                        color: '#977C00'
                      }]),
                      new echarts.graphic.LinearGradient(1, 0, 0, 0, [{ //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上

                        offset: 0,
                        color: '#FFAB1C'
                      }, {
                        offset: 1,
                        color: '#FF5809'
                      }]),
                      new echarts.graphic.LinearGradient(1, 0, 0, 0, [{ //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上

                        offset: 0,
                        color: '#722C94'
                      }, {
                        offset: 1,
                        color: '#B51BA0'
                      }]),
                      new echarts.graphic.LinearGradient(1, 0, 0, 0, [{ //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上

                        offset: 0,
                        color: '#FF359A'
                      }, {
                        offset: 1,
                        color: '#FF00FF'
                      }]),
                      new echarts.graphic.LinearGradient(1, 0, 0, 0, [{ //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上

                        offset: 0,
                        color: '#4A4AFF'
                      }, {
                        offset: 1,
                        color: '#0080FF'
                      }]),
                      new echarts.graphic.LinearGradient(1, 0, 0, 0, [{ //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上

                        offset: 0,
                        color: '#6C6C6C'
                      }, {
                        offset: 1,
                        color: '#AE0000'
                      }])
                    ];
                    return colorList[params.dataIndex];
                  },
                }
              },
              data:[{value: 946, name: '0-20岁'},{value: 36492, name: '20-30岁'},{value: 32393, name: '30-40岁'},{value: 18339, name: '40-50岁'},{value: 6691, name: '50岁以上'}],
              label: {
                normal: {
                  formatter: '{d}%',
                  textStyle: {
                    color: 'white'
                  },
                  position: 'outside',
                  fontSize: 11,
                }
              },
              labelLine: {
                normal: {
                  lineStyle: {
                    color: 'rgba(255, 255, 255, 0.3)'
                  },
                  smooth: 0.2,
                  length: 2,
                  length2: 4
                }
              },
              animationType: 'scale',
              animationEasing: 'elasticOut',
              animationDelay: function (idx) {
                return Math.random() * 200;
              }
            }
          ]
        });
      },
      drawCarType(){
        let me = this;
        // 基于准备好的dom，初始化echarts实例
        let carDistributionBar = this.$echarts.init(document.getElementById('carDistribution'))
        // 绘制图表
        carDistributionBar.setOption({
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)",
            position: ['50%', '50%']
          },
          legend: {
            data: ['逸动', '逸动两厢', '睿骋CC', '全新CS35Plus', 'CS55', '新CS75', 'CS85-COUPE', 'CS95'],
            color:['#32A8FF',' #02C800',],
            orient:'horizontal',
            bottom: 0,
            textStyle:{
              color:'#AAABC6',
              fontSize: 10
            },
            align: 'auto',
            itemGap: 10,
            itemWidth:14,
            itemHeight: 5,
            width: 260
          },
          series: [
            {
              name:'用户成功激活数',
              type:'pie',
              radius : '55%',
              center: ['50%', '40%'],
              minAngle: 9,
              avoidLabelOverlap:false,
              color:['#32A8FF',' #02C800'],
              itemStyle:{
                normal:{
                  color: function (params){
                    var colorList = [
                      new echarts.graphic.LinearGradient(1, 0, 0, 0, [{ //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                        offset: 0,
                        color: '#4A4AFF'
                      }, {
                        offset: 1,
                        color: '#0080FF'

                      }]),
                      new echarts.graphic.LinearGradient(1, 0, 0, 0, [{ //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上

                        offset: 0,
                        color: '#A2D91E'
                      }, {
                        offset: 1,
                        color: '#0CE288'
                      }]),
                      new echarts.graphic.LinearGradient(1, 0, 0, 0, [{ //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上

                        offset: 0,
                        color: '#B51BA0'
                      }, {
                        offset: 1,
                        color: '#782B95'
                      }]),
                      new echarts.graphic.LinearGradient(1, 0, 0, 0, [{ //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上

                        offset: 0,
                        color: '#369CFB'
                      }, {
                        offset: 1,
                        color: '#37F1F3'
                      }]),
                      new echarts.graphic.LinearGradient(1, 0, 0, 0, [{ //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上

                        offset: 0,
                        color: '#FFA91C'
                      }, {
                        offset: 1,
                        color: '#FF6A27'
                      }]),
                      new echarts.graphic.LinearGradient(1, 0, 0, 0, [{ //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上

                        offset: 0,
                        color: '#FF359A'
                      }, {
                        offset: 1,
                        color: '#FF00FF'
                      }]),
                      new echarts.graphic.LinearGradient(1, 0, 0, 0, [{ //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                        offset: 0,
                        color: '#DCB5FF'
                      }, {
                        offset: 1,
                        color: '#BE77FF'
                      }]),
                      new echarts.graphic.LinearGradient(1, 0, 0, 0, [{ //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上

                        offset: 0,
                        color: '#66B3FF'
                      }, {
                        offset: 1,
                        color: '#9393FF'
                      }])
                    ];
                    return colorList[params.dataIndex];
                  },
                }
              },
              // roseType: 'radius',
              data:[{value: 15609, name: '逸动'},{value: 945, name: '逸动两厢'},{value: 3945, name: '睿骋CC'},{value: 6605, name: '全新CS35Plus'},{value: 2655, name: 'CS55'},{value: 62855, name: '新CS75'},{value: 151, name: 'CS85-COUPE'},{value: 2096, name: 'CS95'}],
              label: {
                normal: {
                  textStyle: {
                    color: 'white'
                  },
                  formatter: function(params) {
                    let str;
                    if(params.value < 200){
                      str = '\n'+params.value;
                    }else{
                      str = params.value + '\n';
                    }
                    return str;
                  },
                },
              },
              labelLine: {
                normal: {
                  lineStyle: {
                    color: 'rgba(255, 255, 255, 0.3)'
                  },
                  smooth: 0.2,
                }
              },

              animationType: 'scale',
              animationEasing: 'elasticOut',
              animationDelay: function (idx) {
                return Math.random() * 200;
              }
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

  .subtitle1 {
    width: 100%;
    font-size: 32px;
    text-align: left;
    margin-left:5%;
    margin-top: 5%;
  }

  .subtitle2 {
    width: 100%;
    font-size: 32px;
    text-align: left;
    margin-left:5%;
  }

  #secondText {
    position: relative;
    /*top:30%*/
    top:30%;
  }


  #content {
    width: 100%;
    height:250px;
    background-size: 90% 90%;
    background-repeat: no-repeat;
    background-position: center;
    padding-bottom: 5%;
  }

  #dateText {
    width: 100%;
    text-align: left;
    margin-left: 20%;
    position: relative;
    padding-top: 4%;
    font-size: 30px;
  }

  span {
    color: #2894FF;
    font-size: 36px;
  }

  p {
    font-size: 28px;
  }


</style>
