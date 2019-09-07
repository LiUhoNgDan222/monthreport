<template>
  <div style="color: #fff;">
    <!--<Drawer></Drawer>-->
    <div id="titleMessage">
      <div id="mainTitle">
        工作人员
      </div>
      （排名不分先后）
    </div>
    <div id="bottomMessage1">
      出品单位：<br/><br/><br/>
      监制：<br/>
      制片：<br/>执行制片：<br/>
      策划：<br/>
      大数据技术组：<br/><br/>
      整车数字化组：<br/><br/><br/>
      测    试     组：<br/>
      U     X      组：
    </div>
    <div id="bottomMessage2">
      智能化研究院 <br/>客户管理部<br/> 管创中心DDM项目组<br/>
      何举刚 张玉祥 梁光忠<br/>
      蔡春茂<br/>
      段朋<br/>
      明瑶 戴娇<br/>
      谢磊<br/>
      黄立 唐苑琳 周金文 谭嘉林 韦鹏<br/>
      易纲（icar总监） 刘铜阳<br/>
      吴锐 袁野 邵国君 <br/>王强(Tbox) 王建文(车机埋点)<br/>
      陈兰兰<br/>
      万宏<br/> 冉启亚 刘洪丹
    </div>
  </div>

</template>

<script>
  import Drawer from "../Drawer/Drawer"
  export default {
    name: "Presentation",
    components: {Drawer},
    props: ["endPageData"],
  }
</script>

<style scoped>

  #titleMessage {
    position: absolute;
    width: 100%;
    margin: 0 auto;
    top:16%;
    font-size: 26px;
  }

  #mainTitle {
    font-size: 40px
  }

  #bottomMessage1 {
    position: absolute;
    font-size: 27px;
    text-align: right;
    width: 30%;
    left: 8%;
    margin: 0 auto;
    top: 28%;
    color: #fff;
  }

  #bottomMessage2 {
    position: absolute;
    font-size: 27px;
    text-align: left;
    width: 88%;
    left: 40%;
    margin: 0 auto;
    top: 28%;
    color: #fff;
  }

  span {

  }
</style>
