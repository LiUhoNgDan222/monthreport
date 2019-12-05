<template>
  <div>
    <!--<Drawer></Drawer>-->
    <div id="title">CS75-PLUS新车分析专题</div>
<!--    <div id="subTitle1">用户热爱品牌：oppo、vivo、苹果</div>-->
    <img :src="phoneBg" class="phonePic"/>
    <div class="content">
      <span>数据一致性 </span>一直是用户最关注的问题，远程控制的成功率提高后用户反馈也相应<span> 降低</span>。
    </div>
    <div class="page">11/19</div>
  </div>
</template>

<script>
  export default {
    name: "ImagePage7",
    data() {
      return {
        phoneBg: require("./img/7.png"),
      }
    },
  }
</script>

<style scoped>
  #title {
    width: 100%;
    margin: 0 auto;
    /*font-size: 0.63rem;*/
    font-size: 0.587rem;
    color: #444444;
    font-weight: bold;
    padding-top: 9%;
    padding-bottom: 6%;
    font-family: "Microsoft YaHei";
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
    width:82%;
    margin: 0 auto;
    background-color: #F0F9FE;
    padding: 0.2rem 0.3rem 0.2rem 0.3rem;
    font-size: 0.32rem;
    color: #444
  }
  .phonePic {
    width: 85%;
    /*width: 7.7rem;*/
    /*height: 9rem;*/
    margin-top: 3%;
    margin-bottom: 3%;
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

  p {
    font-size: 28px;
  }
</style>
