<template>
    <div>
      <!--<Drawer></Drawer>-->
      <div id="title">轿车vsSUV</div>
      <div class="rateBox" style="left: 8%">
        <div class="boxTitle">轿车</div>
        <img class="bothIcon" src="./img/both.png" /><br/>
        <div class="line"></div>
        <div class="rateItem1">
          <img class="smallIcon" src="./img/man.png" />
          <span class="manItem">男性  :  </span>
          <img class="smallIcon" src="./img/woman.png" />
          <span class="womanItem">女性</span>
        </div>
        <div class="rateItem2">
          <span class="manItem">{{seriesGenderRatio.saloonRatio}} : </span>
          <span class="womanItem">1</span>
        </div>
      </div>
      <div class="rateBox" style="right: 8%">
        <div class="boxTitle">SUV</div>
        <img class="bothIcon" src="./img/both.png" />
        <div class="line"></div>
        <div class="rateItem1">
          <img class="smallIcon" src="./img/man.png" />
          <span class="manItem">男性  :  </span>
          <img class="smallIcon" src="./img/woman.png" />
          <span class="womanItem">女性</span>
        </div>
        <div class="rateItem2">
          <span class="manItem">{{seriesGenderRatio.suvRatio}} : </span>
          <span class="womanItem">1</span>
        </div>
      </div>
      <div class="rate1">
        <p v-for="item in seriesGenderRatio.carRateListOne" :class="{blue: item.flag}">
          <span>{{item.name}}</span><br/>{{item.value}}
        </p>
      </div>
      <div class="rate2">
        <p v-for="item in seriesGenderRatio.carRateListTwo" :class="{blue: item.flag}">
          <span>{{item.name}}</span><br/>{{item.value}}
        </p>
      </div>
      <div id="mainAge">
        <span class="textSpan">CS95 </span>和<span class="textSpan"> 逸动两厢 </span>用户的男女比例在2个极端
      </div>
    </div>
</template>

<script>
  import Drawer from "../Drawer/Drawer"
  export default {
    name: "CarVsSUV",
    components: {Drawer},
    props: ["seriesGenderRatio"],
    data() {
      return {
        bg4: {
          backgroundImage: "url(" + "http://incallcdn.changan.com.cn/static/shamdown/ng/static/img/vsBox.51d0f45.png" + ")",
        },
        bgHeight: window.innerHeight * 0.50,
        }
    },
    methods: {
      initCarVsSUV() {

      }
    }
  }
</script>

<style scoped>

  #wrapper {
    width: 100%;
    background-size: 90% 90%;
    background-repeat: no-repeat;
    background-position: 50% 15%;
    text-align: center;
    padding-bottom: 5%;
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

  .line {
    height:1px;
    border-top: solid 1px #D5EFFB;
    text-align: center;
    margin-top: 0.5rem;
   }

  .rateBox {
    position: absolute;
    width: 4rem;
    height: 6.24rem;
    background-color: #EDF8FD;
    top: 18%;
    border-radius: 0.07rem
  }

  .rateItem1 {
    height: 0.5rem;
    width: 4rem;
    margin: 0 auto;
    padding-top: 0.4rem;
  }

  .rateItem2 {
    height: 0.5rem;
    width: 4rem;
    margin: 0 auto;
    padding-top: 0.7rem;
  }

  .manItem {
    color: #00A0EA;
    font-size: 0.373rem
  }

  .womanItem {
    color: #FD6E6E;
    font-size: 0.373rem
  }

  .boxTitle {
    width: 100%;
    background-color: #00A0E9;
    height: 1.01rem;
    color: #FFF;
    font-size: 0.48rem;
    font-weight: bold;
    line-height: 0.96rem;
    margin: 0 auto;
    border-radius: 0.07rem
  }

  .bothIcon {
    width: 1.81rem;
    height: 1.81rem;
    margin-top: 0.7rem
  }

  .smallIcon {
    width: 0.32rem;
    height: 0.51rem;
  }

  #carRate {
    height:30%;
    position:absolute;
    top:20%;
    left: 15%;
  }

  #SUVRate {
    height:30%;
    position:absolute;
    top:20%;
    right: 15%;
  }

  .blue {
    color: #00A0EA;
  }

  p {
    font-size: 26px;
    color: #444
  }

  span {
    color: #444;
    font-size: 0.32rem;
  }

  .rate1 {
    height:10%;
    width: 95%;
    position:absolute;
    top:55%;
    left:5%
  }

  .rate2 {
    height:10%;
    width: 100%;
    position:absolute;
    top:64%;
    left:1%;
  }



  .rate1 >p {
    float: left;
    margin-left: 6%;
    line-height:50px;
  }

  .rate2 >p {
    float: left;
    margin-left: 7%;
    line-height:50px;
  }

  #mainAge {
    position: absolute;
    top: 78%;
    left: 10%;
    width:80%;
    margin: 0 auto;
    background-color: #F0F9FE;
    padding: 0.4rem 0.3rem 0.4rem 0.3rem;
    font-size: 0.32rem;
    color: #444
  }

  .textSpan{
    color: #00A0E9;
    font-size: 0.4rem;
    font-weight: bold;
  }

</style>
