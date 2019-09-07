<template>
  <div>
    <div id="title">远程控制功能地域偏好</div>
    <div id="subTitle1">按城市等级</div>
    <table class="table" :style="{height: tableHeight+'px', margin: '5px 0 8% 5%'}">
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
      <tr class="remoteCity" v-for ="preference in preferences">
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
      新一线用户喜欢使用<span> 远程寻车功能 </span>功能<br/>一线用户喜欢<span> 开后备箱 </span>功能<br/>五线用户喜欢<span> 查询车辆位置 </span>功能
    </div>
  </div>
</template>

<script>
  export default {
    name: "RemotePreferCity",
    data() {
      return {
        preferences: [
          {'name': '查询车况', 'one': '0.09', 'newone': '-0.14', 'two': '0.16', 'three': '-0.04', 'four': '-0.01', 'five': '0.11'},
          {'name': '远程寻车', 'one': '-1.95', 'newone': '1.00', 'two': '-1.67', 'three': '-0.95', 'four': '-1.30', 'five': '-1.23'},
          {'name': '关闭车门', 'one': '-0.04', 'newone': '-0.30', 'two': '0.02', 'three': '0.15', 'four': '0.19', 'five': '0.10'},
          {'name': '打开车门', 'one': '0.01', 'newone': '-0.31', 'two': '0.04', 'three': '0.14', 'four': '0.17', 'five': '0.09'},
          {'name': '关闭空调', 'one': '0.36', 'newone': '-0.20', 'two': '0.10', 'three': '0.04', 'four': '-0.03', 'five': '0.01'},
          {'name': '打开空调', 'one': '0.60', 'newone': '-0.22', 'two': '0.16', 'three': '0.05', 'four': '-0.16', 'five': '-0.14'},
          {'name': '打开后备箱', 'one': '1.26', 'newone': '-0.28', 'two': '-0.19', 'three': '-0.32', 'four': '-0.54', 'five': '0.23'},
          {'name': '查询车辆位置', 'one': '-0.49', 'newone': '-0.44', 'two': '0.22', 'three': '0.10', 'four': '-0.16', 'five': '0.63'},
        ],
        tableHeight: window.innerHeight * 0.3,
      }
    },
    methods: {
      initRemotePreferCity: function() {
        var trs = document.getElementsByClassName('remoteCity');
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
    font-size:1em;
    border:1px solid #eee;
    padding:1px 1px 1px 1px;
    color:#666;
    white-space:nowrap
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
