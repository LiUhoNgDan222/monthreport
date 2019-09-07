<template>
  <div>
    <div id="title">车机应用配置地域偏好</div>
    <div id="subTitle1">按地域</div>
    <table class="table" :style="{height: tableHeight+'px', margin: '20px 0 15% 5%'}">
      <thead>
      <tr>
        <th></th>
        <th>东北</th>
        <th>华东</th>
        <th>华中</th>
        <th>华北</th>
        <th>华南</th>
        <th>西北</th>
        <th>西南</th>
      </tr>
      </thead>
      <tbody>
      <tr class="functionRegion" v-for ="preference in preferences">
        <td id="specialTd">{{preference.name}}</td>
        <td>{{preference.one}}</td>
        <td>{{preference.two}}</td>
        <td>{{preference.three}}</td>
        <td>{{preference.four}}</td>
        <td>{{preference.five}}</td>
        <td>{{preference.six}}</td>
        <td>{{preference.seven}}</td>
      </tr>
      </tbody>
    </table>
    <div id="content">
      <span> 收音机 </span>在东北华北地区备受关注<br/>
      <span> 音乐 </span>在华中华南地区受欢迎
    </div>
  </div>
</template>

<script>
  export default {
    name: "FunctionPreferRegion",
    data() {
      return {
        preferences: [
          {'name': '酷我音乐', 'one': '0.1', 'two': '0.04', 'three': '0.07', 'four': '0.03', 'five': '-0.08', 'six': '-0.01', 'seven': '-0.05'},
          {'name': '收音机', 'one': '0.25', 'two': '-0.07', 'three': '-0.02', 'four': '0.27', 'five': '-0.01', 'six': '0.15', 'seven': '-0.11'},
          {'name': '音乐', 'one': '-0.15', 'two': '-0.11', 'three': '-0.02', 'four': '-0.14', 'five': '0.18', 'six': '0.01', 'seven': '0.08'},
          {'name': '高德', 'one': '-0.09', 'two': '0.02', 'three': '-0.05', 'four': '-0.02', 'five': '-0.01', 'six': '-0.02', 'seven': '0.03'},
        ],
        tableHeight: window.innerHeight * 0.3,
      }
    },
    methods: {
      initFunctionPreferRegion: function() {
        var trs = document.getElementsByClassName('functionRegion');
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

  td, th
  {
    height: 0.8rem;
    line-height: 0.8rem;

    border:1px solid #eee;
    padding:1px 1px 1px 1px;
    color:#666;
    white-space:nowrap
  }

  th
  {
    font-size:0.9em;
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
