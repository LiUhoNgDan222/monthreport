<template>
  <div>
    <!--<Drawer></Drawer>-->
    <div id="title">用户手机终端分析</div>
<!--    <div id="subTitle1">用户热爱品牌：oppo、vivo、苹果</div>-->
    <img :src="phoneBg" class="phonePic"/>
    <div class="content">
      oppo和vivo用户与长安核心用户相符，我们可以借鉴终端厂商的产品<span> 策划 </span>和<span> 品宣 </span>策略。
    </div>
    <div class="page">2-3/4</div>
  </div>
</template>

<script>
  export default {
    name: "PhoneAnalyse",
    data() {
      return {
        phoneBg: require("./img/rank.jpg"),
      }
    },
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
  #subTitle1 {
    font-size: 0.36rem;
    color: #444;
    font-weight: bold;
    margin: 4% 0 4% 7%;
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
  .phonePic {
    width: 9rem;
    /*width: 7.7rem;*/
    /*height: 9rem;*/
    margin-bottom: 3%
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
    font-size: 0.42rem;
    font-weight: bold;
  }

  p {
    font-size: 28px;
  }
</style>
