<template>
  <div>
    <div id="title">车机应用配置地域偏好</div>
    <div id="subTitle1">按城市等级</div>
    <table class="table" :style="{height: tableHeight+'px', margin: '20px 0 9% 5%'}">
      <thead>
      <tr>
        <th></th>
        <th>一线</th>
        <th>新一线</th>
        <th>二线</th>
        <th>三线</th>
        <th>四线</th>
        <th>五线</th>
      </tr>
      </thead>
      <tbody>
      <tr class="functionCity" v-for ="preference in preferences">
        <td id="specialTd">{{preference.name}}</td>
        <td>{{preference.one}}</td>
        <td>{{preference.newone}}</td>
        <td>{{preference.two}}</td>
        <td>{{preference.three}}</td>
        <td>{{preference.four}}</td>
        <td>{{preference.five}}</td>
      </tr>
      </tbody>
    </table>
    <div id="content">
      一线城市的用户偏爱<span> 收音机 </span>和<span> 高德地图 </span><br/>这跟喜马拉雅的定位基本符合，<br/>
      五线城市用户偏爱<span> 酷我音乐 </span>和<span> 本地音乐 </span><br/>且不爱使用导航
    </div>
    <div id="describe">偏好性指标越大表示用户使用此功能越频繁</div>
    <img class="formulaStyle" src="./img/formula.png" />
  </div>
</template>

<script>
  export default {
    name: "FunctionPreferCity",
    data() {
      return {
        preferences: [
          {'name': '酷我音乐', 'one': -0.22, 'newone': -0.1, 'two': -0.05, 'three': 0.08, 'four': 0.11, 'five': 0.11},
          {'name': '收音机', 'one': 0.21, 'newone': -0.04, 'two': 0.12, 'three': 0.01, 'four': -0.12, 'five': -0.1},
          {'name': '音乐', 'one': -0.19, 'newone': -0.19, 'two': 0.04, 'three': 0.03, 'four': 0.14, 'five': 0.18},
          {'name': '高德', 'one': 0.21, 'newone': 0.16, 'two': 0.01, 'three': -0.11, 'four': -0.18, 'five': -0.21},
        ],
        tableHeight: window.innerHeight * 0.3,
      }
    },
    methods: {
      initFunctionPreferCity: function() {
        var trs = document.getElementsByClassName('functionCity');
        var tdArr = [];
        for(var i=0;i<trs.length;i++){
          var tds = trs[i].getElementsByTagName('td');
          for(var j=0;j<tds.length;j++){
            if(!tdArr[j]){
              tdArr[j] = [];
            }
            tdArr[j].push(tds[j]);
          }
        }
        for(var i=1;i<tdArr.length;i++){
          tdArr[i].sort(function(td1,td2){
            var v1 = parseFloat(td1.innerHTML);
            var v2 = parseFloat(td2.innerHTML);
            return v1 > v2 ? -1 : 1;
          })
          var len = tdArr[i].length
          tdArr[i][0].style.color = '#00A0E9';
          tdArr[i][len-1].style.color = '#FF9000';
        }
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

  #subTitle1 {
    font-size: 0.36rem;
    color: #444;
    font-weight: bold;
    margin-left: 7%;
    text-align: left;
    width: 100%;
  }

  .table {
    width: 90%;
    border-collapse:collapse;
  }

  #content {
    width:80%;
    margin: 0 auto;
    background-color: #F0F9FE;
    padding: 0.6rem 0.3rem 0.6rem 0.3rem;
    font-size: 0.32rem;
    color: #444
  }

  #describe {
    width: 100%;
    margin: 0 auto;
    position: absolute;
    bottom: 14%;
    left: 0;
    right: 0;
    color: #444
  }

  .formulaStyle {
    width: 7.5rem;
    height: 1.35rem;
    position: absolute;
    bottom: 5%;
    left: 0;
    right: 0;
    margin: 0 auto;
  }

  td, th
  {
    height: 0.8rem;
    line-height: 0.8rem;
    border:1px solid #eee;
    padding:3px 7px 2px 7px;
    color:#666;
  }

  th
  {
    font-size:1em;
    text-align:left;
    padding-top:5px;
    padding-bottom:4px;
    background-color:#F0F9FE;
    color:#666;
  }

  span {
    color: #00A0E9;
    font-size: 0.4rem;
    font-weight: bold;
  }

</style>
