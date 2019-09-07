<template>
  <div>
    <!--<Drawer></Drawer>-->

    <div id="title">整车功能配置投入产出分析</div>
    <div id="definition4">采用功能的搭载率和使用率表示功能投入产出情况</div>
    <img :src="inOutBg" class="inOutPic"/>
    <div class="content">
      <span>空气净化、多色氛围灯、全景天窗功能<br/> </span>虽然非全系标配功能，但是用户非常喜欢使用。
    </div>
    <div style="color: #444; margin-top: 5%">目前由于定速巡航和自适应巡航数据存在问题<br/>正在排查解决中，计划下一期报告会发布相关信息</div>

    <!--<p>{{remoteActive.carTypeUsed}}</p>-->
  </div>
</template>

<script>
  import Drawer from "../Drawer/Drawer"
  import echarts from "echarts"
  export default {
    name: "inOut",
    components: {Drawer},
    data() {
      return {
        inOutBg: require("./img/inOut.png"),
      }
    },
    mounted(){

    },
  }
</script>

<style scoped>

  #title {
    width: 100%;
    margin: 0 auto;
    font-size: 0.55rem;
    color: #444444;
    font-weight: bold;
    padding-top: 9%;
    padding-bottom: 10%
  }

  .inOutPic {
    width: 8.5rem;
    height: 7.8rem;
    margin-bottom: 10%
  }

  #definition4 {
    width: 100%;
    text-align: left;
    margin-left: 10%;
    margin-bottom: 6%;
    color: grey;
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

  .content {
    width:80%;
    margin: 0 auto;
    background-color: #F0F9FE;
    padding: 0.2rem 0.3rem 0.2rem 0.3rem;
    font-size: 0.32rem;
    color: #444
  }

  #dateText {
    width: 100%;
    text-align: left;
    margin-left: 20%;
    position: relative;
  }

  #secondText {
    position: relative;
    /*top:30%*/
    top:30%;
  }


  span {
    color: #00A0E9;
    font-size: 0.4rem;
    font-weight: bold;
  }


</style>
