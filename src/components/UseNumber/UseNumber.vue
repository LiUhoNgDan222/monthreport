<template>
  <div>
    <!--<Drawer></Drawer>-->
    <div id="title">每日出行次数</div>

    <div id="useNumberLine" :style="{width: '80%', height: lineHeight+'px',margin:'12% 10% 15% 10%', backgroundImage: bg2, backgroundSize: '100% 100%'}"></div>
    <div id="content">
      <span>大年三十</span>和<span>初一</span>用户出行率偏低，<br/><span>初二</span>后迎来出行高峰
    </div>
  </div>
</template>

<script>
  import Drawer from "../Drawer/Drawer"
  import echarts from "echarts"
  export default {
    name: "UseNumber",
    components: {Drawer},
    props: ["drivingNums"],
    data() {
      return {
        bg2: "url(" + require("./img/calender.png") + ")",
        lineHeight: window.innerHeight * 0.47,
      }
    },
    mounted(){

    },
    methods: {
      initUseNumber() {
        this.drawUseNumber();
      },
      drawUseNumber(){
        let me = this;
        // 基于准备好的dom，初始化echarts实例
        let useNumberLine = me.$echarts.init(document.getElementById('useNumberLine'))
        // 绘制图表
        useNumberLine.setOption({
          grid: {
            left: '5%'
          },
          tooltip: {
            position: 'top',
            formatter: function(params){
              return params.data[1] * 600 / 10000 + '万次'
            }
          },

          visualMap: [{
            show: false,
            min: 0,
            max: 1000,
            calculable: true,
            seriesIndex: [1],
            orient: 'horizontal',
            left: '5%',
            bottom: -20,
            inRange: {
              color: ['blue'],
              opacity: [0, 0.6]
            },
          }],

          calendar: [
            {
              orient: 'vertical',
              right: 15,
              left: 15,
              top: 100,
              bottom: 30,
              itemStyle: {
                opacity: 0.1,
              },
              yearLabel: {
                margin: 40,
                show: false,
              },
              monthLabel: {
                show: false,
              },
              dayLabel: {
                nameMap: ['日', '一', '二', '三', '四', '五', '六'],
                color: '#333',
                fontSize: 14
              },
              splitLine: {
                show: false,
              },
              cellSize: 'auto',
              range: me.drivingNums.month
            }],

          series: [{
            type: 'effectScatter',
            coordinateSystem: 'calendar',
            calendarIndex: 0,
            symbolSize: function (val) {
              return val[1] / 40;
            },
            itemStyle: {
              color: '#00A0E9',
              opacity: 0.5,
            },
            data: me.drivingNums.drivingNumsData
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
    font-size: 0.63rem;
    color: #444444;
    font-weight: bold;
    padding-top: 9%;
    padding-bottom: 6%
  }

  #dateText {
    width: 100%;
    text-align: left;
    margin-left: 20%;
    font-size: 35px
  }
  #content {
    width:80%;
    margin: 0 auto;
    background-color: #F0F9FE;
    padding: 0.2rem 0.3rem 0.2rem 0.3rem;
    font-size: 0.32rem;
    color: #444
  }


  #secondText {
    position: relative;
    /*top:30%*/
    top:30%
  }

  span {
    color: #2894FF;
    font-size: 40px;
  }

  p {
    font-size: 28px;
  }

</style>
