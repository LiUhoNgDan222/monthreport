<template>
  <div style="color: #fff">
    <!--<Drawer></Drawer>-->
    <div id="titleMessage">
      以上结论均由智能网联汽车<br/>实际数据得出
    </div>
    <div id="middleMessage">
      <!--<h3>{{endPageData.releseDate}}</h3>-->
      <h3>2019-12-05</h3>
    </div>
    <div id="alertMessage">
      <!--<h3>{{endPageData.releseDate}}</h3>-->
      道路千万条 安全第一条<br/>
      行车不规范 亲人两行泪<br/>
      长安行天下 明天更美好
    </div>
    <div id="bottomMessage">
      <p>制作群</p><br/>&#9660
    </div>
  </div>

</template>

<script>
  import Drawer from "../Drawer/Drawer"
  export default {
      name: "EndPage",
      components: {Drawer},
      props: ["endPageData"],
    }
</script>

<style scoped>

  #titleMessage {
    position: absolute;
    left:32%;
    top:40%;
    margin-left:-100px;
    margin-top:-100px;
    font-size: 40px;
  }

  #middleMessage {
    position: absolute;
    width: 100%;
    margin: 0 auto;
    top: 43%
  }

  #alertMessage {
    position: absolute;
    width: 100%;
    margin: 0 auto;
    font-size: 32px;
    top: 75%
  }

  #bottomMessage {
    position: absolute;;
    width: 100%;
    margin: 0 auto;
    bottom: 20px;
    color: lightgrey;
  }

  p {
    font-size: 28px;
    margin: 0 auto;

  }
</style>
