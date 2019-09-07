<template>
    <div>
      <!--<Drawer></Drawer>-->
      <div id="title">油耗统计</div>
      <div id="city" :style="bg6">
        <p id="averageText">平均油耗<span> {{oilCostPage.avgOilCost}} </span>L/100km</p>
        <p id="secondAverageText">
          其中油耗最高的城市为<span class="spanText">西藏{{oilCostPage.maxOilCity}}</span><br/>
          最低的为<span class="spanText">西藏{{oilCostPage.minOilCity}}</span>
        </p>
      </div>
      <div id="highUser" :style="bg7">
        <p id="highText">油老虎</p>
        <p class="secondText">
          油耗最高的用户，达到<span> {{oilCostPage.highOilUser}} </span>L/100km<br/>
          车型为新CS75
          <!--油耗最高的用户，达到<span> {{oilCostPage.highOilUser}} </span>L/100km<br/>-->
          <!--俗称马路杀手，车型为{{oilCostPage.maxUserOilCar}}-->
        </p>
      </div>
      <div id="lowUser" :style="bg8">
        <p class="oilText">节油先锋</p>
        <p class="secondText">
          油耗最低的用户，只有<span> {{oilCostPage.lowOilUser}} </span>L/100km<br/>
          车型为新CS75
          <!--油耗最低的用户，只有<span> {{oilCostPage.lowOilUser}} </span>L/100km<br/>-->
          <!--堪称长安车神，车型为{{oilCostPage.minUserOilCar}}-->
        </p>
      </div>
      <p id="bottomMessage">由于技术原因，油耗存在较大误差，仅供参考</p>
    </div>
</template>

<script>
  import Drawer from "../Drawer/Drawer"
    export default {
        name: "OilStatic",
      components: {Drawer},
      props: ["oilCostPage"],
      data() {
          return {
            bg6: {
              backgroundImage: "url(" + "http://incallcdn.changan.com.cn/static/shamdown/ng/static/img/house.61dfdf2.png" + ")",
              height: window.innerHeight * 0.22 + 'px',
            },
            bg7: {
              backgroundImage: "url(" + "http://incallcdn.changan.com.cn/static/shamdown/ng/static/img/boy-2.8bf5f05.png" + ")",
              height :window.innerHeight * 0.2 +'px',
              marginBottom: '40px'
            },
            bg8: {
              backgroundImage: "url(" + "http://incallcdn.changan.com.cn/static/shamdown/ng/static/img/boy-1.c0d53e5.png" + ")",
              height :window.innerHeight * 0.2 +'px',
            },
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
    padding-bottom: 2%
  }

  #city {
    width: 100%;
    background-size: 90% 90%;
    background-repeat: no-repeat;
    background-position: center;
    text-align: center;
    padding-bottom: 10%;
  }

  #highUser {
    width: 100%;
    background-size: 90% 90%;
    background-repeat: no-repeat;
    background-position: center;
    text-align: center;
    padding-bottom: 10%
  }

  #averageText {
    width: 100%;
    text-align: left;
    margin-left: 20%;
    margin-top:0;
    position: relative;
    font-size: 36px;
  }

  #highText {
    width: 100%;
    text-align: left;
    margin-left: 20%;
    position: relative;
    top:25%;
    font-size: 36px;
  }

  .oilText {
    width: 100%;
    text-align: left;
    margin-left: 67%;
    position: relative;
    top:25%;
    font-size: 36px;
  }

  #secondAverageText {
    position: relative;
    margin: 0 0 0 0
  }

  .secondText {
    position: relative;
    top:17%
  }

  #lowUser {
    width: 100%;
    background-size: 90% 90%;
    background-repeat: no-repeat;
    background-position: center;
    text-align: center;
    padding-bottom: 10%
  }

  #bottomMessage {
    position: absolute;
    width: 100%;
    margin: 0 auto;
    bottom: 40px
  }

  span {
    color: #2894FF;
    font-size: 34px;
  }


  p {
    font-size: 28px;
  }

  .spanText {
    font-size: 30px
  }
</style>
