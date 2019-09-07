<template>
  <div>
    <div id="title">远程控制功能地域偏好</div>
    <div id="subTitle1">按地域</div>
    <table class="table" :style="{height: tableHeight+'px', margin: '5px 0 8% 5%'}">
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
      <tr class="remoteRegion" v-for ="preference in preferences">
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
      西南用户非常喜欢<span> 远程寻车 </span>功能，<br/>可能因为停车场结构复杂
    </div>
  </div>
</template>

<script>
  export default {
    name: "RemotePreferRegion",
    data() {
      return {
        preferences: [
          {'name': '查询车况', 'one': '-0.16', 'two': '0.11', 'three': '-0.04', 'four': '0.06', 'five': '0.14', 'six': '0.18', 'seven': '-0.21'},
          {'name': '远程寻车', 'one': '-1.34', 'two': '-1.45', 'three': '-0.76', 'four': '-1.73', 'five': '-1.83', 'six': '-1.12', 'seven': '1.01'},
          {'name': '关闭车门', 'one': '0.24', 'two': '0.07', 'three': '0.17', 'four': '0.24', 'five': '-0.03', 'six': '0.06', 'seven': '-0.23'},
          {'name': '打开车门', 'one': '0.25', 'two': '0.08', 'three': '0.17', 'four': '0.12', 'five': '-0.08', 'six': '0.01', 'seven': '-0.24'},
          {'name': '关闭空调', 'one': '0.11', 'two': '0.10', 'three': '-0.16', 'four': '0.17', 'five': '0.30', 'six': '-0.08', 'seven': '-0.23'},
          {'name': '打开空调', 'one': '-0.06', 'two': '0.06', 'three': '-0.23', 'four': '0.18', 'five': '0.61', 'six': '-0.17', 'seven': '-0.37'},
          {'name': '打开后备箱', 'one': '0.17', 'two': '-0.48', 'three': '-0.34', 'four': '0.96', 'five': '-0.16', 'six': '0.41', 'seven': '-0.35'},
          {'name': '查询车辆位置', 'one': '-0.27', 'two': '0.05', 'three': '0.13', 'four': '0.03', 'five': '-0.02', 'six': '0.39', 'seven': '-0.24'},
        ],
        tableHeight: window.innerHeight * 0.3,
      }
    },
    methods: {
      initRemotePreferRegion: function() {
        var trs = document.getElementsByClassName('remoteRegion');
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
    white-space:nowrap;
    border:1px solid #eee;
    padding:1px 0 1px 0;
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
