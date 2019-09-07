<template>
  <div>
    <!--<Drawer></Drawer>-->
    <div id="title">居住城市分布</div>
    <div id="cityPie" :style="{width: '80%', height: pieHeight+'px', margin: '0 0 0 10%'}"></div>
    <div id="cityBar" :style="{width: '100%', height: barHeight+'px', margin: '0 0 5% 0 '}"></div>
    <div class="mainCity">
      较1月数据，<span>CS95 </span>在 <span>新一线 </span>城市占比从10%提高到43%，说明新一线城市用户逐渐成为大型SUV的主力用户。
    </div>
    <p id="newCity">
      {{city}}
    </p>
    <div class="page">2-2/3</div>
  </div>
</template>

<script>
  import echarts from "echarts"
  import Drawer from "../Drawer/Drawer"
  export default {
    name: "MainCity",
    components: {Drawer},
    props: ["cityDistributionPage"],
    data() {
      return {
        pieHeight: window.innerHeight * 0.26,
        barHeight: window.innerHeight * 0.28,
        city: '',
        first: '一线城市：北京、上海、广州、深圳',
        second: "新一线城市： 成都、杭州、重庆、武汉、苏州、西安、天津、南京、郑州、长沙、沈阳、青岛、宁波、东莞和无锡",
        third: '二线城市：佛山、合肥、大连、福州、厦门、哈尔滨、长春、石家庄、贵阳、南昌等',
        fourth: '三线城市：汕头、保定、镇江、洛阳、乌鲁木齐、唐山、呼和浩特、芜湖、桂林、三亚等',
        fifth: '四线城市：茂名、驻马店、大理、宜春、曲靖、齐齐哈尔、德阳、乐山、十堰、渭南等',
        sixth: '五线城市：防城港、玉溪、普洱、抚顺、衡水、内江、达州、昭通、张家界、荆门等',
      }
    },
    mounted(){

    },
    methods: {
      initMainCity() {
        let me = this;
        //对饼图的操作
        const totalJson = [];
        for(var i=0;i<me.cityDistributionPage.allListCityType.length;i++){
          const json = {};
          json.name = me.cityDistributionPage.allListCityType[i];
          json.value = me.cityDistributionPage.allListResidentNum[i];
          totalJson.push(json);
        }

        me.drawCityPie(totalJson);
        me.drawCityBar();
        me.city = me.second;
      },
      drawCityPie(totalJson){
        let me = this;
        // 基于准备好的dom，初始化echarts实例
        let mainCityPie = me.$echarts.init(document.getElementById('cityPie'))
        // 绘制图表
        let option = {
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
          },
          legend: {
            data:me.cityDistributionPage.allListCityType,
            color:['#32A8FF',' #02C800',],
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
              name:'居住城市',
              type:'pie',
              center: ['60%','60%'],
              radius: ['30%', '60%'],
              avoidLabelOverlap:false,
              color:['#32A8FF',' #02C800'],
              itemStyle:{
                normal:{
                  color: function (params){
                    var colorList = [
                      '#888889',
                      '#EB595F',
                      '#9FB934',
                      '#00A0E9',
                      '#EEAF00',
                      '#004595',
                    ];
                    return colorList[params.dataIndex];
                  },
                  borderWidth: 2,
                  borderColor: 'white'
                }
              },
              data:totalJson,
              label: {
                normal: {
                  formatter: function(params) {
                    let str;
                    if(params.percent < 10){
                      str = params.percent + '%\n\n\n';
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
                  color: function (params){
                    var colorList = [
                      '#888889',
                      '#EB595F',
                      '#9FB934',
                      '#00A0E9',
                      '#EEAF00',
                      '#004595',
                    ];
                    return colorList[params.dataIndex];
                  },
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
        // legend的点击事件
        mainCityPie.on('legendselectchanged', function(obj) {
          option.legend.selected  = {
            '一线': true,
            '三线': true,
            '二线': true,
            '五线': true,
            '四线': true,
            '新一线': true
          };
          mainCityPie.setOption(option);
          if (obj.name === '一线')
            me.city = me.first;
          if (obj.name === '新一线')
            me.city = me.second;
          if (obj.name === '二线')
            me.city = me.third;
          if (obj.name === '三线')
            me.city = me.fourth;
          if (obj.name === '四线')
            me.city = me.fifth;
          if (obj.name === '五线')
            me.city = me.sixth;
        });

        // item的点击事件
        mainCityPie.on('click', function(obj) {
          if (obj.name === '一线')
            me.city = me.first;
          if (obj.name === '新一线')
            me.city = me.second;
          if (obj.name === '二线')
            me.city = me.third;
          if (obj.name === '三线')
            me.city = me.fourth;
          if (obj.name === '四线')
            me.city = me.fifth;
          if (obj.name === '五线')
            me.city = me.sixth;
        });
      },

      drawCityBar(){
        let me = this;
        // 基于准备好的dom，初始化echarts实例
        let mainCityBar = me.$echarts.init(document.getElementById('cityBar'))
        // 绘制图表
        mainCityBar.setOption({
          grid: {
            left: '30%',
            right: '10%',
            bottom: '20',
            top: '20',
          },
          xAxis: {
            type: 'value',
            splitLine:{
              show: true,
              lineStyle: {
                color: ['#CCECFB'],
                opacity: 0.7,
              }
            },
            axisLabel: {
              fontSize: 10,
              formatter: '{value}%',
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
            max: 100
          },
          yAxis: {
            type: 'category',
            data: me.cityDistributionPage.detailListSeriesName,
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
            data: me.cityDistributionPage.firstCityNum,
            type: 'bar',
            barWidth: 6,
            stack: '总量',
            itemStyle: {
              color: '#888889',
            },
          },{
            data: me.cityDistributionPage.sixthCityNum,
            type: 'bar',
            barWidth: 6,
            stack: '总量',
            itemStyle: {
              color: '#EB595F',
            },
          },{
            data: me.cityDistributionPage.secondCityNum,
            type: 'bar',
            barWidth: 6,
            stack: '总量',
            itemStyle: {
              color: '#9FB934',
            },
          },{
            data: me.cityDistributionPage.thirdCityNum,
            type: 'bar',
            barWidth: 6,
            stack: '总量',
            itemStyle: {
              color: '#00A0E9',
            },
          },{
            data: me.cityDistributionPage.fourthCityNum,
            type: 'bar',
            barWidth: 6,
            stack: '总量',
            itemStyle: {
              color: '#EEAF00',
            },
          },{
            data: me.cityDistributionPage.fifthCityNum,
            type: 'bar',
            barWidth: 6,
            stack: '总量',
            itemStyle: {
              color: '#004595',
              barBorderRadius: [0, 5, 5, 0],
            },
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
    padding-bottom: 2%
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
