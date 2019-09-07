<template>
  <div class="drawerStyle">
    <mu-flex justify-content="center" align-items="center" class="buttonStyle">
      <mu-button icon color="primary" @click="open = !open">
        <mu-icon value="menu"></mu-icon>
      </mu-button>
    </mu-flex>
    <mu-drawer :open.sync="open" :docked="docked" :right="position === 'right'" :style="{ position: drawerStyle }">
    <!--<mu-drawer :open.sync="open" :docked="docked" :right="position === 'right'">-->
      <mu-paper :z-depth="1" class="demo-list-wrap">
        <mu-appbar>
          <mu-button icon slot="left">
            <mu-icon value="menu"></mu-icon>
          </mu-button>
          选择月份
          <mu-button icon slot="right" @click="open = false">
            <mu-icon value="close"></mu-icon>
          </mu-button>
        </mu-appbar>
      </mu-paper>
      <mu-list toggle-nested>
        <mu-list-item button :ripple="false" nested :open="open1 === 'send'" :key="key" v-for="(val, key) in items">
          <mu-list-item-title>{{key}}</mu-list-item-title>
          <mu-list-item-action>
            <mu-icon class="toggle-icon" size="24" value="keyboard_arrow_down"></mu-icon>
          </mu-list-item-action>
          <mu-list-item button :ripple="false" slot="nested" :key="value.month" v-for="value in val">
            <mu-list-item-title><a class="srcStyle" :href="'#/$'+value.monthFlag" target="_blank">{{ value.month }}</a></mu-list-item-title>
          </mu-list-item>
        </mu-list-item>
      </mu-list>
    </mu-drawer>
  </div>
</template>

<script>
  import {getMonth} from '@/service/getData'
  export default {
    name: "Drawer",
    data () {
      return {
        docked: true,
        open: false,
        position: 'left',
        drawerStyle: 'absolute',
        open1: 'send',
        items: {},
      }
    },
    created() {
      let me = this;
      let getMonthSuccess = function (response) {
        // for(var i=0; i<response.data.data.length; i++){
        //   const json = {};
        //   var reg = /([^-]+)$/;
        //   var month = response.data.data[i].match(reg);
        //   var year = response.data.data[i].substring(0, 4);
        //   console.log('year');
        //   console.log(year);
        //   json.month = month[0]+'月';
        //   json.monthFlag = response.data.data[i];
        //   me.items.push(json);
        // }
        console.log('进入monthData');
        const monthData = response.data.data;
        var reg = /([^-]+)$/;
        var json = {};
        var flag = '';
        var array1 = [];
        for(var i = 0; i<monthData.length; i++) {
          const str = {};
          var month = monthData[i].match(reg);
          var year = monthData[i].substring(0, 4);
          if( i === 0 ){
            flag = year;
            str.month = month[0]+'月';
            str.monthFlag = monthData[i];
            array1.push(str);
          }
          if(i!==0 && flag === year) {

            str.month = month[0]+'月';
            str.monthFlag = monthData[i];
            array1.push(str);
            if(i === monthData.length-1){
              json[flag + '年'] = array1;
            }
          }
          if(i!==0 && flag !== year){
            json[flag] = array1;
            array1 = [];
            flag = year;
            str.month = month[0]+'月';
            str.monthFlag = monthData[i];
            array1.push(str);
            if(i === monthData.length-1){
              json[flag + '年'] = array1;
            }
          }
        }
        me.items = json;

      };
      let getMonthError = function(response) {

      }
      getMonth(getMonthSuccess, getMonthError);
    }
  }
</script>

<style scoped>
  /*@import 'https://fonts.useso.com/css?family=Roboto:300,400,500,700,400italic';*/
  @import 'https://cdn.bootcss.com/material-design-icons/3.0.1/iconfont/material-icons.css';

  .drawerStyle {
    overflow:hidden;
  }

  .srcStyle {
    color: black
  }

  .buttonStyle {
    position: absolute;
    top: 19px;
    right: 140px;
  }
</style>
