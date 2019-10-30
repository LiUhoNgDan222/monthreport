<template>
    <div>
      <!--<Drawer></Drawer>-->
      <div id="title">总体概况</div>
      <div id="content">
        在<span>{{userNumSeriesList.statisMonth}}</span>，长安车联网乘用车大家庭<br/>
        新增<span>{{userNumSeriesList.newUserNum}}</span>名用户，<br/>同比增长<span>{{userNumSeriesList.yoy}}%</span>，环比增加<span>{{userNumSeriesList.qoq}}%</span>，<br/>
        累计用户数达<span>{{userNumSeriesList.accUserNum}}</span>名<br/>
<!--        （乘用+欧尚累计用户数达<span>{{userNumSeriesList.totalUserNum}}</span>名）-->
      </div>
      <div id="dataPie" :style="{width: '100%', height: pieHeight + 'px',margin:'3% 0 0 0'}"></div>
      <div class="page">1/27</div>
    </div>
</template>

<script>
  import Drawer from "../Drawer/Drawer"
  import echarts from "echarts"
  export default {
    name: "TotalPie",
    components: {Drawer},
    props: ["userNumSeriesList"],
    data() {
      return {
        pieHeight: window.innerHeight * 0.51,
      }
    },
    mounted(){
    },
    methods: {
      initTotalPie() {
        const totalJson = [];
        for(var i=0;i<this.userNumSeriesList.totalItem.length;i++){
          const json = {};
          json.name = this.userNumSeriesList.totalItem[i];
          json.value = this.userNumSeriesList.totalData[i];
          totalJson.push(json);
        }
        this.drawLine(totalJson);
        this.$emit('delay')
      },

      drawLine(totalJson){
        let me = this;
        // 基于准备好的dom，初始化echarts实例
        let totalDataPie = this.$echarts.init(document.getElementById('dataPie'));
        // 绘制图表
        totalDataPie.setOption({
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)",
            position: ['40%', '40%']
          },
          color:[
            '#004595',
            '#EEAF00',
            '#EB595F',
            '#9FB934',
            '#00A0E9',
            '#888889',
            '#FF5809',
            '#B15BFF',
            '#2ec7c9',
            '#ffb980',
          ],
          legend: {
            data: me.userNumSeriesList.totalItem,
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
            width: 300
          },
          series: [
            {
              name:'用户成功激活数',
              type:'pie',
              radius : '55%',
              center: ['48%', '40%'],
              startAngle: 50,
              minAngle: 9,
              avoidLabelOverlap:false,
              // roseType: 'radius',
              data:totalJson,
              label: {
                normal: {
                  textStyle: {
                    color: '#333'
                  },
                  formatter: function(params) {
                    let str;
                    if(params.value < 442 && params.value > 94){
                      str = params.value + '\n\n';
                    }else{
                      str = params.value + '\n';
                    }
                    return str;
                  },
                },
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
