<template>
  <div class="menuLeft" @click.stop="clickMenu">
    <img class="menuIcon" src="./img/menu.png" v-show="!isClicked"/>
    <div v-show="isClicked">
      <ul class="menuList" :style="{width: '6rem', height: menuHeight+'px'}" @click.stop="">
        <li class="menuListItem" @click.stop="change(2)"><img class="listIcon" :src=imgList1[0] /><span>总体概况</span></li>
        <li class="menuListItem" @click.stop="change(6)"><img class="listIcon" :src=imgList1[1] /><span>CS75-PLUS新车分析专题</span></li>
        <li class="menuListItem" @click.stop="change(14)"><img class="listIcon" :src=imgList1[2] /><span>新CS75驾驶功能分析专题</span></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Menu",
    props: {
      clickFlag : {
        type: Number
      },
      index: {
        type: Number
      }
    },
    data() {
      return {
        isiOS: false,
        isClicked: false,
        menuHeight: window.innerHeight,
        imgList1: [
          require("./img/1-1.png"),
          require("./img/2-1.png"),
          require("./img/3-2.png"),
          require("./img/4-1.png"),
          require("./img/5-1.png"),
        ],
      };
    },
    watch: {
      clickFlag(newValue, oldValue){
        let me = this;
        me.isClicked = false;
      },
      index(newValue, oldValue){
        console.log("进入index函数");
        let me = this;

        if(newValue <= 5 && newValue >= 2){
          me.imgList1[0] = require("./img/1-2.png");
          me.imgList1[1] = require("./img/2-1.png");
          me.imgList1[2] = require("./img/3-1.png");
          me.imgList1[3] = require("./img/4-1.png");
          me.imgList1[4] = require("./img/5-1.png");
        }
        if(newValue <= 13 && newValue >= 6){
          me.imgList1[0] = require("./img/1-1.png");
          me.imgList1[1] = require("./img/2-2.png");
          me.imgList1[2] = require("./img/3-1.png");
          me.imgList1[3] = require("./img/4-1.png");
          me.imgList1[4] = require("./img/5-1.png");
        }else if(newValue <= 20 && newValue >= 14){
          me.imgList1[2] = require("./img/3-2.png");
          me.imgList1[0] = require("./img/1-1.png");
          me.imgList1[1] = require("./img/2-1.png");
          me.imgList1[3] = require("./img/4-1.png");
          me.imgList1[4] = require("./img/5-1.png");
        }
      }
    },


    methods: {
      clickMenu: function() {
        let me = this;
        if(me.isClicked === false){
          me.isClicked = true;
        }else{
          me.isClicked = false;
        }

      },
      change: function(index){
        let me = this;
        me.$emit('changePage', index);
        me.isClicked = false;
      },
      // menuClose: function(index){
      //   let me = this;
      //   me.isClicked = false;
      //
      //
      // },
    }
  }
</script>

<style scoped>
  .menuLeft {
    position:absolute;
    left: 0;
    top: 0;
    z-index:999;
  }

  .menuIcon {
    position: absolute;
    left: 0.8rem;
    top: 1rem;
    width: 0.7rem;
    height: 0.7rem;
  }

  .menuList {
    width:200px;
    height:200px;
    padding-inline-start: 0;
    background-color: white;
    margin-top: 0;
    padding-top: 0.43rem;
  }

  .menuListItem {
    border-bottom: 1px solid #D3D3D3;
    color: #555;
    width: 100%;
    height: 1.07rem;
    line-height: 1.07rem;
    list-style-type:none;
    text-align: left;
    padding-left: 0.4rem;
    font-size: 0.373rem;
    position: relative;
  }

  .listIcon{
    width: 0.64rem;
    height: 0.64rem;
    position: absolute;
    top: 0.2rem;
  }

  .menuListItem span{
    position: absolute;
    left: 1.3rem
  }

  .menuListItem1 span {
    left: 0.5rem;
  }
</style>
