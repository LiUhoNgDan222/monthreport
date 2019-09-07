<template>
  <div>
    <div id="title">意见反馈</div>
    <div id="definition1">您对本期报告的评价</div>
    <div>
      <img class="starIcon" :src=imgSrc1 @click="clickStar(1)" />
      <img class="starIcon" :src=imgSrc2 @click="clickStar(2)"/>
      <img class="starIcon" :src=imgSrc3 @click="clickStar(3)"/>
      <img class="starIcon" :src=imgSrc4 @click="clickStar(4)"/>
      <img class="starIcon" :src=imgSrc5 @click="clickStar(5)"/>
    </div>
    <textarea v-model="advise" @input="descInput" maxlength="200" name="abstract" id="abstract" placeholder="你还期待看到哪些维度的分析？或有哪些意见或建议？" :style="{height: textHeight+'px', margin: '20px 0 0 0'}"></textarea>
    <div class="leftNumber">{{leftText}}/200</div>
    <button class="button" :style="{backgroundColor: buttonColor, color: buttonTextColor}" @click="submitAdvise">{{buttonText}}</button>
    <div :class="{'showAlert': showAl, 'hideAlert': hideAl}">{{alertText}}</div>
  </div>

</template>

<script>
  import { advise } from "@/service/getData"
  export default {
    name: "Feedback",
    data() {
      return {
        imgSrc1: require("./img/unclick.png"),
        imgSrc2: require("./img/unclick.png"),
        imgSrc3: require("./img/unclick.png"),
        imgSrc4: require("./img/unclick.png"),
        imgSrc5: require("./img/unclick.png"),
        count: 0,
        textHeight: window.innerHeight * 0.2,
        buttonColor: '#E0E0E1',
        buttonTextColor: '#999999',
        buttonText: '确定',
        advise: '',
        leftText: 0,
        showAl: false,
        hideAl: true,
        alertText: "",
      }
    },
    methods: {

      clickStar(index) {
        let me = this;
        if(me.leftText > 200) {
          console.log("字数不能超过200");
          return;
        }
        me.imgSrc5 = require("./img/unclick.png");
        me.imgSrc4 = require("./img/unclick.png");
        me.imgSrc3 = require("./img/unclick.png");
        me.imgSrc2 = require("./img/unclick.png");
        me.imgSrc1 = require("./img/unclick.png");
        if(index === 1){
          me.imgSrc1 = require("./img/click.png");
          me.count = 1;
        }
        if(index === 2){
          me.imgSrc2 = require("./img/click.png");
          me.imgSrc1 = require("./img/click.png");
          me.count = 2;
        }
        if(index === 3){
          me.imgSrc3 = require("./img/click.png");
          me.imgSrc2 = require("./img/click.png");
          me.imgSrc1 = require("./img/click.png");
          me.count = 3;
        }
        if(index === 4){
          me.imgSrc4 = require("./img/click.png");
          me.imgSrc3 = require("./img/click.png");
          me.imgSrc2 = require("./img/click.png");
          me.imgSrc1 = require("./img/click.png");
          me.count = 4;
        }
        if(index === 5){
          me.imgSrc5 = require("./img/click.png");
          me.imgSrc4 = require("./img/click.png");
          me.imgSrc3 = require("./img/click.png");
          me.imgSrc2 = require("./img/click.png");
          me.imgSrc1 = require("./img/click.png");
          me.count = 5;
        }
        if(me.count !== 0) {
          me.buttonColor = '#00A0E9';
          me.buttonTextColor = '#FFFFFF';
          me.showAl = false;
          me.hideAl = true;
        }else{
          me.buttonColor = '#E0E0E1';
          me.buttonTextColor = '#999999';
        }
      },

      submitAdvise() {
        let me = this;
        if(me.buttonText === '已评价') return;
        if(me.count === 0) {
          me.showAl = true;
          me.hideAl = false;
          me.alertText = "请对本期报告进行评价!";
          setTimeout(() =>{
            me.showAl = true;
            me.hideAl = false;
            me.alertText = "";
          },3000);
          console.log("请对本期报告进行评价")
        }else{
          let success = function() {
            console.log("提交成功");
            me.alertText = "评价成功!";
            me.showAl = true;
            me.hideAl = false;
            setTimeout(() =>{
              me.showAl = true;
              me.hideAl = false;
              me.alertText = "";
              me.buttonColor = '#E0E0E1';
              me.buttonTextColor = '#999999';
              me.buttonText = '已评价';
            },1000);
          }
          let fail = function() {
            console.log("提交失败")
          }
          advise(me.count, me.advise, success, fail);
        }
      },

      descInput() {
        var txtVal = this.advise.length;
        this.leftText = txtVal;
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
    padding-bottom: 10%
  }

  #definition1 {
    width: 100%;
    text-align: left;
    margin: 2% 0 2% 35%;
    color: grey;
  }

  .starIcon {
    width: 0.64rem;
    height: 0.64rem;
    margin: 0 0.15rem 0 0.15rem
  }

  #abstract {
    width: 80%;
    border-color: #E5E5E5;
    background-color:#FCFCFC;
    padding: 0.3rem;
    resize: none;
  }

  .button {
    width: 80%;
    height: 0.93rem;
    border: none;
    border-radius: 8px;
  }

  .leftNumber {
    width: 90%;
    text-align: right;
    margin-bottom: 10%
  }

  .showAlert {
    width: 4rem;
    margin: 0 auto;
    color: darkred;
  }

  .hideAlert {
    display: none
  }
</style>
