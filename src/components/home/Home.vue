<template>
  <div id="home" @click="closeMenu">
    <!--<Loading  v-show="loading"></Loading>-->
    <transition name="fade">
      <swiper id="swiperBox" :options="swiperOption" ref="mySwiper">
        <swiper-slide class="swiper-slide1">
          <div class="homePage" :style="homeBg">
<!--            <div class="titleMessage">-->
<!--              2019年{{coverPage.statisMonth}}<br/><div id="titleStyle">智能网联数据报告</div>-->
<!--            </div>-->
<!--            <div class="middleMessage">{{coverPage.dateBegin}} &#45;&#45; {{coverPage.dateEnd}}</div>-->
<!--            <div class="bottomMessage">-->
<!--              智能化研究院 客户管理部 管创中心DDM团队<br/>联合出品-->
<!--            </div>-->
          </div>
        </swiper-slide>
<!--        <swiper-slide style="background: #004595;overflow: hidden">-->
<!--          <img class="image" src="./img/guide.png" alt="">-->
<!--        </swiper-slide>-->
        <swiper-slide :style="bg">
          <p class="item cover"></p>
          <p class="menuTitle">目录</p>
          <p class="menuItem" @click="changePage(2)" :style="bg1">总体概况</p>
          <div class="menuItem menuItem1" :style="bg2">
            <p @click="changePage(4)">人群习惯分析</p>
            <ul>
              <li @click="changePage(5)">2.1 按车系区分人群</li>
              <li @click="changePage(11)">2.2 按常驻城市区分人群</li>
              <li @click="changePage(17)">2.3 按用户特性区分人群</li>
            </ul>
          </div>

          <!--<p class="menuItem" @click="changePage(19)" :style="bg5">油耗分析</p>-->
<!--          <div class="newContent">-->
<!--             <br/><br/><span>本期新增：</span><br/>用户手机品牌分布    用户反馈分析<br/>整车功能配置投入产出分析-->
<!--          </div>-->
        </swiper-slide>

        <swiper-slide :style="bg">
          <p class="item cover"></p>
          <Menu ref="menuRef" @changePage="changePage" :clickFlag="clickFlag" :index="index"></Menu>
          <TotalPie :userNumSeriesList="userNumSeriesList" ref="userNumSeriesListRef" @delay="delay"></TotalPie>
        </swiper-slide>
<!--        <swiper-slide :style="bg">-->
<!--          <p class="item cover"></p>-->
<!--          <Menu ref="menuRef" @changePage="changePage" :clickFlag="clickFlag" :index="index"></Menu>-->
<!--          <TrendAnalyse :trendAnalyseList="trendAnalyseList" ref="trendAnalyseRef"></TrendAnalyse>-->
<!--        </swiper-slide>-->
        <swiper-slide :style="bg">
          <p class="item cover"></p>
          <Menu ref="menuRef" @changePage="changePage" :clickFlag="clickFlag" :index="index"></Menu>
          <TotalUser :totalUserList="totalUserList" ref="totalUserRef"></TotalUser>
        </swiper-slide>
        <swiper-slide :style="bg">
          <p class="item cover"></p>
          <Menu ref="menuRef" @changePage="changePage" :clickFlag="clickFlag" :index="index"></Menu>
          <DoublePie  ref="doublePieRef"></DoublePie>
        </swiper-slide>

<!--        <swiper-slide :style="bg">-->
<!--          <p class="item cover"></p>-->
<!--          <Menu ref="menuRef" @changePage="changePage" :clickFlag="clickFlag" :index="index"></Menu>-->
<!--          <MileCondition :milesRanges="milesRanges" ref="milesRangesRef"></MileCondition>-->
<!--        </swiper-slide>-->
<!--        <swiper-slide :style="bg">-->
<!--          <p class="item cover"></p>-->
<!--          <Menu ref="menuRef" @changePage="changePage" :clickFlag="clickFlag" :index="index"></Menu>-->
<!--          <UserAnalyse :userAnalyseData="userAnalyseData" ref="userAnalyseDataRef"></UserAnalyse>-->
<!--        </swiper-slide>-->
        <!--<swiper-slide :style="bg">-->
        <!--<p class="item cover"></p>-->
        <!--<CarVsSUV :seriesGenderRatio="seriesGenderRatio" ref="CarVsSUVRef"></CarVsSUV>-->
        <!--</swiper-slide>-->
<!--        <swiper-slide :style="bg">-->
<!--          <p class="item cover"></p>-->
<!--          <Menu ref="menuRef" @changePage="changePage" :clickFlag="clickFlag" :index="index"></Menu>-->
<!--          <MainCity :cityDistributionPage="cityDistributionPage" ref="cityDistributionPageRef"></MainCity>-->
<!--        </swiper-slide>-->
<!--        <swiper-slide :style="bg">-->
<!--          <p class="item cover"></p>-->
<!--          <Menu ref="menuRef" @changePage="changePage" :clickFlag="clickFlag" :index="index"></Menu>-->
<!--          <PhoneAnalyse></PhoneAnalyse>-->
<!--        </swiper-slide>-->
        <swiper-slide style="background: #004595;overflow: hidden">
          <MenuImage ref="menuRef" @changePage="changePage" :clickFlag="clickFlag" :index="index"></MenuImage>
          <img class="image" src="./img/车系（驾驶里程分析） .png" alt="">
        </swiper-slide>
        <swiper-slide style="background: #004595;overflow: hidden">
          <MenuImage ref="menuRef" @changePage="changePage" :clickFlag="clickFlag" :index="index"></MenuImage>
          <img class="image" src="./img/车系（驾驶行程分析）.png" alt="">
        </swiper-slide>
        <swiper-slide style="background: #004595;overflow: hidden">
          <MenuImage ref="menuRef" @changePage="changePage" :clickFlag="clickFlag" :index="index"></MenuImage>
          <img class="image" src="./img/车系（用车时段分析）.png" alt="">
        </swiper-slide>
        <swiper-slide style="background: #004595;overflow: hidden">
          <MenuImage ref="menuRef" @changePage="changePage" :clickFlag="clickFlag" :index="index"></MenuImage>
          <img class="image" src="./img/车系（行驶道路类型分析）.png" alt="">
        </swiper-slide>
        <swiper-slide style="background: #004595;overflow: hidden">
          <MenuImage ref="menuRef" @changePage="changePage" :clickFlag="clickFlag" :index="index"></MenuImage>
          <img class="image" src="./img/车系（远程控制使用分析）.png" alt="">
        </swiper-slide>
        <swiper-slide style="background: #004595;overflow: hidden">
          <MenuImage ref="menuRef" @changePage="changePage" :clickFlag="clickFlag" :index="index"></MenuImage>
          <img class="image" src="./img/车系（车载应用使用分析） .png" alt="">
        </swiper-slide>
        <swiper-slide style="background: #004595;overflow: hidden">
          <MenuImage ref="menuRef" @changePage="changePage" :clickFlag="clickFlag" :index="index"></MenuImage>
          <img class="image" src="./img/城市（常驻城市）驾驶里程分析.png" alt="">
        </swiper-slide>
        <swiper-slide style="background: #004595;overflow: hidden">
          <MenuImage ref="menuRef" @changePage="changePage" :clickFlag="clickFlag" :index="index"></MenuImage>
          <img class="image" src="./img/城市（常驻城市）驾驶行程分析.png" alt="">
        </swiper-slide>
        <swiper-slide style="background: #004595;overflow: hidden">
          <MenuImage ref="menuRef" @changePage="changePage" :clickFlag="clickFlag" :index="index"></MenuImage>
          <img class="image" src="./img/城市（常驻城市）用车时段分析.png" alt="">
        </swiper-slide>
        <swiper-slide style="background: #004595;overflow: hidden">
          <MenuImage ref="menuRef" @changePage="changePage" :clickFlag="clickFlag" :index="index"></MenuImage>
          <img class="image" src="./img/城市（常驻城市）行驶道路类型分析.png" alt="">
        </swiper-slide>
        <swiper-slide style="background: #004595;overflow: hidden">
          <MenuImage ref="menuRef" @changePage="changePage" :clickFlag="clickFlag" :index="index"></MenuImage>
          <img class="image" src="./img/城市（常驻城市）远程控制使用分析.png" alt="">
        </swiper-slide>
        <swiper-slide style="background: #004595;overflow: hidden">
          <MenuImage ref="menuRef" @changePage="changePage" :clickFlag="clickFlag" :index="index"></MenuImage>
          <img class="image" src="./img/城市（常驻城市）车载应用使用分析.png" alt="">
        </swiper-slide>
        <swiper-slide style="background: #004595;overflow: hidden">
          <MenuImage ref="menuRef" @changePage="changePage" :clickFlag="clickFlag" :index="index"></MenuImage>
          <img class="image" src="./img/用户特征（驾驶里程分析）.png" alt="">
        </swiper-slide>
<!--        <swiper-slide :style="bg">-->
<!--          <p class="item cover"></p>-->
<!--          <Menu ref="menuRef" @changePage="changePage" :clickFlag="clickFlag" :index="index"></Menu>-->
<!--          <FeedbackPie :feedbackData="feedbackData" ref="feedbackRef"></FeedbackPie>-->
<!--        </swiper-slide>-->
        <swiper-slide style="background: #004595;overflow: hidden">
          <MenuImage ref="menuRef" @changePage="changePage" :clickFlag="clickFlag" :index="index"></MenuImage>
          <img class="image" src="./img/用户特征（驾驶行程分析） .png" alt="">
        </swiper-slide>
        <swiper-slide style="background: #004595;overflow: hidden">
          <MenuImage ref="menuRef" @changePage="changePage" :clickFlag="clickFlag" :index="index"></MenuImage>
          <img class="image" src="./img/用户特征（用车时段分析）.png" alt="">
        </swiper-slide>
        <swiper-slide style="background: #004595;overflow: hidden">
          <MenuImage ref="menuRef" @changePage="changePage" :clickFlag="clickFlag" :index="index"></MenuImage>
          <img class="image" src="./img/用户特征（行驶道路类型分析）.png" alt="">
        </swiper-slide>
        <swiper-slide style="background: #004595;overflow: hidden">
          <MenuImage ref="menuRef" @changePage="changePage" :clickFlag="clickFlag" :index="index"></MenuImage>
          <img class="image" src="./img/用户特征（远程控制使用分析）.png" alt="">
        </swiper-slide>
        <swiper-slide style="background: #004595;overflow: hidden">
          <MenuImage ref="menuRef" @changePage="changePage" :clickFlag="clickFlag" :index="index"></MenuImage>
          <img class="image" src="./img/用户特征（车载应用使用分析）.png" alt="">
        </swiper-slide>
        <swiper-slide style="background: #004595;overflow: hidden">
          <MenuImage ref="menuRef" @changePage="changePage" :clickFlag="clickFlag" :index="index"></MenuImage>
          <img class="image" src="./img/专题总结.png" alt="">
        </swiper-slide>
        <!--<swiper-slide :style="bg">-->
          <!--<p class="item cover"></p>-->
          <!--<Menu ref="menuRef" @changePage="changePage" :clickFlag="clickFlag" :index="index"></Menu>-->
          <!--<ThousandFeedback :thousandCarFeedBack="thousandCarFeedBack" ref="thousandFeedbackRef"></ThousandFeedback>-->
        <!--</swiper-slide>-->
        <!--<swiper-slide :style="bg">-->
          <!--<p class="item cover"></p>-->
          <!--<Menu ref="menuRef" @changePage="changePage" :clickFlag="clickFlag" :index="index"></Menu>-->
          <!--<FunctionUseTimes  :carFunctions="carFunctions" ref="carFunctionsRef"></FunctionUseTimes>-->
        <!--</swiper-slide>-->
<!--        <swiper-slide :style="bg">-->
<!--          <p class="item cover"></p>-->
<!--          <Menu ref="menuRef" @changePage="changePage" :clickFlag="clickFlag" :index="index"></Menu>-->
<!--          <FunctionUseNumber :carFunctionActiveUser="carFunctionActiveUser" ref="carFunctionActiveUserRef"></FunctionUseNumber>-->
<!--        </swiper-slide>-->
<!--        <swiper-slide :style="bg">-->
<!--          <p class="item cover"></p>-->
<!--          <Menu ref="menuRef" @changePage="changePage" :clickFlag="clickFlag" :index="index"></Menu>-->
<!--          <inOut></inOut>-->
<!--        </swiper-slide>-->
<!--        <swiper-slide :style="bg">-->
<!--          <p class="item cover"></p>-->
<!--          <Menu ref="menuRef" @changePage="changePage" :clickFlag="clickFlag" :index="index"></Menu>-->
<!--          <C211FuncNumber :carAppSeries="carAppSeries" ref="carAppSeriesRef"></C211FuncNumber>-->
<!--        </swiper-slide>-->
<!--        <swiper-slide :style="bg">-->
<!--          <p class="item cover"></p>-->
<!--          <Menu ref="menuRef" @changePage="changePage" :clickFlag="clickFlag" :index="index"></Menu>-->
<!--          <FuncTrend :carAppTrade="carAppTrade" ref="funcTrendRef"></FuncTrend>-->
<!--        </swiper-slide>-->
<!--        <swiper-slide :style="bg">-->
<!--          <p class="item cover"></p>-->
<!--          <Menu ref="menuRef" @changePage="changePage" :clickFlag="clickFlag" :index="index"></Menu>-->
<!--          <TeleControl :remoteActive="remoteActive" ref="remoteActiveRef"></TeleControl>-->
<!--        </swiper-slide>-->
<!--        <swiper-slide :style="bg">-->
<!--          <p class="item cover"></p>-->
<!--          <Menu ref="menuRef" @changePage="changePage" :clickFlag="clickFlag" :index="index"></Menu>-->
<!--          <TeleControlTrend :remoteTrade="remoteTrade" ref="teleControlTrendRef"></TeleControlTrend>-->
<!--        </swiper-slide>-->
<!--        <swiper-slide :style="bg">-->
<!--          <p class="item cover"></p>-->
<!--          <Menu ref="menuRef" @changePage="changePage" :clickFlag="clickFlag" :index="index"></Menu>-->
<!--          <remotePreferCity ref="remotePreferCityRef"></remotePreferCity>-->
<!--        </swiper-slide>-->
<!--        <swiper-slide :style="bg">-->
<!--          <p class="item cover"></p>-->
<!--          <Menu ref="menuRef" @changePage="changePage" :clickFlag="clickFlag" :index="index"></Menu>-->
<!--          <remotePreferRegion ref="remotePreferRegionRef"></remotePreferRegion>-->
<!--        </swiper-slide>-->
        <!--<swiper-slide :style="bg">-->
        <!--<p class="item cover"></p>-->
        <!--<CarTypeOil :seriesOilCost="seriesOilCost" ref="seriesOilCostRef"></CarTypeOil>-->
        <!--</swiper-slide>-->
        <!--<swiper-slide :style="bg">-->
        <!--<p class="item cover"></p>-->
        <!--<RegionalFuel :RegionalFuelList="RegionalFuelList" ref="regionalFuelRef"></RegionalFuel>-->
        <!--</swiper-slide>-->
        <!--<swiper-slide :style="bg">-->
        <!--<p class="item cover"></p>-->
        <!--<RegionalCityFuel :RegionalCityFuelList="RegionalCityFuelList" ref="regionalCityFuelRef"></RegionalCityFuel>-->
        <!--</swiper-slide>-->
        <!--<swiper-slide :style="bg">-->
        <!--<p class="item cover"></p>-->
        <!--<TotalLine :seriesOnlineList="seriesOnlineList" ref="seriesOnlineListRef"></TotalLine>-->
        <!--</swiper-slide>-->
        <!--<swiper-slide :style="bg">-->
        <!--<p class="item cover"></p>-->
        <!--<UseNumber :drivingNums="drivingNums" ref="drivingNumsRef"></UseNumber>-->
        <!--</swiper-slide>-->
        <!--<swiper-slide :style="bg">-->
          <!--<p class="item cover"></p>-->
          <!--<Menu ref="menuRef" @changePage="changePage" :clickFlag="clickFlag" :index="index"></Menu>-->
          <!--<Algorithm></Algorithm>-->
        <!--</swiper-slide>-->
        <!--<swiper-slide :style="bg">-->
          <!--<p class="item cover"></p>-->
          <!--<Menu ref="menuRef" @changePage="changePage" :clickFlag="clickFlag" :index="index"></Menu>-->
          <!--<CS55Oil ref="CS55OilRef"></CS55Oil>-->
        <!--</swiper-slide>-->
        <!--<swiper-slide :style="bg">-->
          <!--<p class="item cover"></p>-->
          <!--<Menu ref="menuRef" @changePage="changePage" :clickFlag="clickFlag" :index="index"></Menu>-->
          <!--<CS75Oil ref="CS75OilRef"></CS75Oil>-->
        <!--</swiper-slide>-->
        <!--<swiper-slide :style="bg">-->
          <!--<p class="item cover"></p>-->
          <!--<Menu ref="menuRef" @changePage="changePage" :clickFlag="clickFlag" :index="index"></Menu>-->
          <!--<YiDongOil ref="YiDongOilRef"></YiDongOil>-->
        <!--</swiper-slide>-->
        <!--<swiper-slide :style="bg">-->
          <!--<p class="item cover"></p>-->
          <!--<Menu ref="menuRef" @changePage="changePage" :clickFlag="clickFlag" :index="index"></Menu>-->
          <!--<CS75Engine ref="CS75EngineRef" :OilList="OilList"></CS75Engine>-->
        <!--</swiper-slide>-->
        <!--<swiper-slide :style="bg">-->
          <!--<p class="item cover"></p>-->
          <!--<Menu ref="menuRef" @changePage="changePage" :clickFlag="clickFlag" :index="index"></Menu>-->
          <!--<CS75Speed ref="CS75SpeedRef"></CS75Speed>-->
        <!--</swiper-slide>-->
        <!--<swiper-slide :style="bg">-->
          <!--<p class="item cover"></p>-->
          <!--<Menu ref="menuRef" @changePage="changePage" :clickFlag="clickFlag" :index="index"></Menu>-->
          <!--<CS75Accelerate ref="CS75AccelerateRef"></CS75Accelerate>-->
        <!--</swiper-slide>-->
        <!--<swiper-slide :style="bg">-->
        <!--<p class="item cover"></p>-->
        <!--<WorkingDayOil :workingDayOilList="workingDayOilList" ref="WorkingDayOilRef"></WorkingDayOil>-->
        <!--</swiper-slide>-->
        <!--<swiper-slide :style="bg">-->
        <!--<p class="item cover"></p>-->
        <!--<TotalFuncNumber :carActiveApp="carActiveApp" ref="carActiveAppRef"></TotalFuncNumber>-->
        <!--</swiper-slide>-->

        <!--<swiper-slide :style="bg">-->
        <!--<p class="item cover"></p>-->
        <!--<FunctionPreferCity ref="functionPreferCityRef"></FunctionPreferCity>-->
        <!--</swiper-slide>-->
        <!--<swiper-slide :style="bg">-->
        <!--<p class="item cover"></p>-->
        <!--<functionPreferRegion ref="functionPreferRegionRef"></functionPreferRegion>-->
        <!--</swiper-slide>-->
        <swiper-slide :style="bg">
          <p class="item cover"></p>
          <Feedback></Feedback>
        </swiper-slide>
        <swiper-slide :style="endPage">
          <p class="item cover"></p>
          <EndPage :endPageData="endPageData"></EndPage>
        </swiper-slide>
        <swiper-slide :style="endPage">
          <p class="item cover"></p>
          <Presentation></Presentation>
        </swiper-slide>
      </swiper>
    </transition>
  </div>
</template>

<script>
  import $ from 'jquery'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import { Toast } from 'mint-ui';
  // import Loading from "../Loading/Loading";
  import Menu from "../menu/Menu";
  import MenuImage from "../menu/MenuImage";
  import TotalPie from "../totalPie/TotalPie";
  import DoublePie from "../doublePie/DoublePie";
  import TotalUser from "../totalUser/TotalUser";
  import TrendAnalyse from "../TrendAnalyse/TrendAnalyse"
  import UserAnalyse from "../userAnalyse/UserAnalyse"
  import TotalLine from "../totalLine/TotalLine"
  // import CarVsSUV from "../CarVsSUV/CarVsSUV"
  import MainCity from "../MainCity/MainCity"
  import CarTypeOil from "../CarTypeOil/CarTypeOil"
  import RegionalFuel from "../RegionalFuel/RegionalFuel"
  import RegionalCityFuel from "../RegionalCityFuel/RegionalCityFuel"
  import WorkingDayOil from "../WorkingDayOil/WorkingDayOil"
  import MileCondition from "../MileCondition/MileCondition"
  import UseNumber from "../UseNumber/UseNumber"
  import TotalFuncNumber from "../TotalFuncNumber/TotalFuncNumber"
  import C211FuncNumber from "../C211FuncNumber/C211FuncNumber"
  import FunctionPreferCity from "../regionalPrefer/functionPreferCity"
  import functionPreferRegion from "../regionalPrefer/functionPreferRegion"
  import remotePreferCity from "../regionalPrefer/remotePreferCity"
  import remotePreferRegion from "../regionalPrefer/remotePreferRegion"
  import FunctionUseNumber from "../FunctionUseNumber/FunctionUseNumber"
  import inOut from "../inOut/inOut"
  // import FunctionUseTimes from "../FunctionUseTimes/FunctionUseTimes"
  import TeleControl from "../TeleControl/TeleControl"
  // import Algorithm from "../OilDistribution/Algorithm"
  // import CS55Oil from "../OilDistribution/CS55Oil"
  // import CS75Oil from "../OilDistribution/CS75Oil"
  // import YiDongOil from "../OilDistribution/YiDongOil"
  // import CS75Engine from "../CS75Distribution/CS75Engine"
  // import CS75Speed from "../CS75Distribution/CS75Speed"
  // import CS75Accelerate from "../CS75Distribution/CS75Accelerate"
  import FeedbackPie from "../FeedbackAnalyse/FeedbackPie"
  // import ThousandFeedback from "../FeedbackAnalyse/ThousandFeedback"
  import TeleControlTrend from "../TeleControl/TeleControlTrend"
  import PhoneAnalyse from "../PhoneAnalyse/PhoneAnalyse"
  import Feedback from "../Feedback/Feedback"
  import Presentation from "../presentation/Presentation"
  import FuncTrend from "../C211FuncNumber/FuncTrend"
  import EndPage from "../EndPage/EndPage"
  import {getAllData} from '@/service/getData'
  import * as swiperAni from '../../assets/js/swiper.animate1.0.3.min.js';
  import moment from 'moment'
  export default {
    name: "Home",
    components: {
      // Loading,
      Menu,
      MenuImage,
      TotalPie,
      DoublePie,
      TotalUser,
      TotalLine,
      TrendAnalyse,
      UserAnalyse,
      // CarVsSUV,
      MainCity,
      CarTypeOil,
      RegionalFuel,
      RegionalCityFuel,
      WorkingDayOil,
      MileCondition,
      UseNumber,
      TotalFuncNumber,
      C211FuncNumber,
      FunctionPreferCity,
      functionPreferRegion,
      remotePreferCity,
      remotePreferRegion,
      FunctionUseNumber,
      // FunctionUseTimes,
      TeleControl,
      // Algorithm,
      // CS55Oil,
      // CS75Oil,
      // YiDongOil,
      // CS75Engine,
      // CS75Speed,
      // CS75Accelerate,
      FeedbackPie,
      // ThousandFeedback,
      FuncTrend,
      TeleControlTrend,
      PhoneAnalyse,
      Feedback,
      Presentation,
      EndPage,
      inOut,
      swiper,
      swiperSlide,
      Toast,
    },
    data () {
      return {
        clickFlag: 0,
        index: 0,
        homeBg: {
          backgroundImage: "url(" + require("./img/home.png") + ")",
          backgroundSize: "100% 100%"
        },
        bg: {
          backgroundImage: "url(" + require("@/components/home/img/main.jpg") + ")",
          backgroundSize: "100% 100%"
        },
        endPage: {
          backgroundImage: "url(" + require("@/components/home/img/end.jpg") + ")",
          backgroundSize: "100% 100%"
        },
        bg1: {
          backgroundImage: "url(" + require("./img/1.png") + ")",
          backgroundSize: "100% 90%",
          backgroundRepeat: "no-repeat"
        },
        bg2: {
          backgroundImage: "url(" + require("./img/2.png") + ")",
          backgroundSize: "100% 90%",
          backgroundRepeat: "no-repeat"
        },
        bg3: {
          backgroundImage: "url(" + require("./img/3.png") + ")",
          backgroundSize: "100% 90%",
          backgroundRepeat: "no-repeat"
        },
        bg4: {
          backgroundImage: "url(" + require("./img/4.png") + ")",
          backgroundSize: "100% 90%",
          backgroundRepeat: "no-repeat"
        },
        bg5: {
          backgroundImage: "url(" + require("./img/5.png") + ")",
          backgroundSize: "100% 90%",
          backgroundRepeat: "no-repeat"
        },
        loading: true,
        userAnalyseFlag: 0,
        FunctionUseTimesFlag : 0,
        C211FuncNumberFlag: 0,
        respondData: {},
        monthFlag: '',
        //手指滑页组件swiper的参数设置
        swiperOption: {
          notNextTick: true,
          direction: 'vertical',
          grabCursor: true,
          setWrapperSize: true,
          autoHeight: true,
          slidesPerView: 1,
          mousewheel: false,
          mousewheelControl: false,
          height: window.innerHeight,
          resistanceRatio: 0,
          observeParents: true,
          // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
          debugger: true,
          // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
          onTransitionStart(swiper) {
            console.log(swiper)
          },
          on: {
            slideChangeTransitionStart: function(e){
            },
          }
          // on: {
          //   init: function () {
          //     swiperAni.swiperAnimateCache(this);
          //     swiperAni.swiperAnimate(this);
          //   },
          //   slideChange: function () {
          //     swiperAni.swiperAnimate(this);
          //   }
          // }
        },
        coverPage: {
          statisMonth: '',
          dateBegin: '',
          dateEnd: '',
        },
        userNumSeriesList: {
          accUserNum: '',
          newUserNum : '',
          statisMonth: '',
          totalUserNum: '',
          totalItem: [],
          totalData: [],
          qoq: '',
          yoy: ''
        },
        totalUserList: {
          legend: ['期间产量','联网搭载','终端实销','车辆激活'],
          funnelData: [
            {value:80, name:'期间产量'},
            {value:60, name:'联网搭载 31.1%'},
            {value:40, name:'终端实销 67.2%'},
            {value:20, name:'车辆激活 80.2%'},
          ],
          monthList: ['2019-01','2019-02','2019-03','2019-04','2019-05','2019-06','2019-07','2019-08'],
          userPerMonthAlls: [16.9,17.9,19.6,20.5,20.8,21.3,20.3,23.3],
          userPerMonthCAs: [91.2,92.1,93.3,93.8,93.2,93.1,94.5,94.7],
        },
        trendAnalyseList: {
          monthList: [],
          userPerMonthAlls: [],
          userPerMonthCAs: [],
          userC211: [],
          userCS35Plus: [],
          userCS55: [],
          userCS7518: [],
        },
        seriesOnlineList: {
          favoriteCarType: '--',
          highestUseRate: '--',
          higherCarType: '--',
          lowerCarType: '--',
          seriesName: [],
          minRate: [],
          maxRate: [],
          avgRate: [],
        },
        userAnalyseData: {
          mainUserAge: '--',
          mainUserAgeRate: '--',
          maxUserAge: '--',
          ageRange: [],
          userNum: [],
          maleRate: 4.1,
          femaleRate: 1,
          carNameOne: '',
          carNameTwo: '',
          carNameThree: '',
          carNameFour: '',
          ageItem: [],
          ageDataOne: [],
          ageDataTwo: [],
          ageDataThree: [],
          ageDataFour: [],
          sexRatio: 1,
          detailListSeriesName: ['逸动','全新CS35plus','CS55','新CS75'],
          ageRange1: [],
          ageRange2: [],
          ageRange3: [],
          ageRange4: [],
          ageRange5: [],
          ageRange6: [],
          ageRange7: [],
          ageRange8: [],
          ageRange9: [],
        },
        seriesGenderRatio: {
          saloonRatio: 3.78,
          suvRatio: 4.31,
          sexRised: '--',
          carRateListOne: [],
          carRateListTwo: [],
        },
        cityDistributionPage: {
          mainCityDistribution: '--、--、--、--、--、--、--、--、--',
          mainUserAgeRate: '--',
          maxUserAge: '--、--',
          allListCityType: [],
          allListResidentNum: [],
          detailListSeriesName: [],
          firstCityNum: [],
          secondCityNum: [],
          thirdCityNum: [],
          fourthCityNum: [],
          fifthCityNum: [],
          sixthCityNum: [],
        },
        seriesOilCost: {
          seriesAvgOilCostsItem: [],
          seriesAvgOilCostsData: [],
          avgOilCost: ''
        },
        RegionalFuelList: {
          regionalItem: [],
          regionalData: [],
          cityItem: [],
          cityData: []
        },
        CS75List: {
          speedItem: ['0-20','20-40','40-60','60-80','80-100','100-120','120-140','140-160'],
          speedData: [2,3,4,5,6,10,20,4],
          aSpeedItem: ['0-0.2','0.2-0.4','0.4-0.6','0,6-0.8','0.8-1.0','1.0-1.2','1.2-1.4','1.4-1.6','1.6-1.8','1.8-2.0','2.-以上'],
          aSpeedData: [3,4,6,7,4,5,4,2,1],
          speedFrequencyData1: [2,3,4,5,2,10,8,4],
          speedFrequencyData2: [2,4,4,5,6,3,2,1],
          aSpeedFrequencyData1: [2,5,4,5,4,2,2,5],
          aSpeedFrequencyData2: [2,3,4,5,6,3,4,4]
        },
        OilList: {
          oilItem: ['0-3','3-6','6-9','9-12','12-15','15-18','18-21','21-24','24-27','27-30','30以上'],
          CS35plusOilData: [2,3],
          CS55OilData: [2,3],
          CS75OilData: [3,6],
          CS95OilData: [2,3],
          YiDongOilData1: [2,3],
          YiDongOilData2: [2,3],
          CCOilData: [2,3],
          CS75OilData1: [2,3],
          CS75OilData2: [4,5]
        },
        RegionalCityFuelList: {
          regionalItem: [],
          regionalData: [],
        },
        workingDayOilList: {
          weekDay: [],
          AlloilCost: [],
          CQoilCost: [],
        },
        milesRanges: {
          milesRangesItem: [],
          milesRangesData: [],
          timeRangesItem: [],
          timeRangesData: []
        },
        drivingNums: {
          drivingNumsData: [],
          month: '',
        },
        carFunctions: {
          carFunctionsItem: [],
          carFunctionsData: [],
          monthList: [],
          oneUseTimes: [],
          twoUseTimes: [],
          threeUseTimes: [],
          funcList:[],
        },
        carFunctionActiveUser: {
          autoUserNumsItem: [],
          autoUserNumsData: [],
          manualUserNumsItem: [],
          manualUserNumsData: [],
        },
        carActiveApp: {
          carActiveAppItem: [],
          carActiveAppData: [],
        },
        carAppSeries: {
          appName: [],
          carType: [],
          c211Freq: [],
          c212Freq: [],
          c301Freq: [],
          s401Freq: [],
        },
        remoteActive: {
          month: '--月',
          carNumber: '--',
          carTypeUsed: '-- > -- ',
          totalFunctionCode: [],
          totalUseTimes: [],
        },
        feedbackData: {
          intelligentClassifyItem: [],
          intelligentClassifyData: [],
          intelligentRecordNum: 0,
          nonIntelligentRecordNum: 0,
          smartConnectionNumItem: [],
          smartConnectionNumData: [],
          smartConnectionLine: [],
          carEntertainmentNumItem: [],
          carEntertainmentNumData: [],
          carEntertainmentLine: [],
          electricalAccessoriesNumItem: [],
          electricalAccessoriesNumData: [],
          electricalAccessoriesLine: [],
          drivingAssistanceNumItem: [],
          drivingAssistanceNumData: [],
          drivingAssistanceLine: [],
        },
        // thousandCarFeedBack: {
        //   recordNumPerSeries: [],
        //   seriesName: [],
        // },
        carAppTrade: {
          carAppTradeItem: [],
          gaoDeTimesMonthTrade: [],
          kuWoTimesMonthTrade: [],
          gaoDeTimeMonthTrade: [],
          kuWoTimeMonthTrade: [],
        },
        remoteTrade: {
          item : [],
          closeAir: [],
          flashLight: [],
          lockDoor: [],
          openAir: [],
          openClosePurifier: [],
          openTrunk: [],
          unLockDoor: [],
        },
        endPageData: {
          releseDate: '',
        },
        swiperTimeStart: null,
        swiperTimeEnd: null,
      }
    },

    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },

    created() {
      let me = this;
      console.log(window);
      console.log("进入父组件的created函数");
      me.swiperTimeStart = new Date();
      var reg = /([^$]+)$/;
      const monthSingle = window.location.href.match(reg);
      var reg1 = /([^-]+)$/;
      me.monthFlag = monthSingle[0].match(reg1)[0];
      let getDataSuccess = function (response) {
        if(response.data.code !== 0){
          Toast({
            message: '获取数据失败',
            duration: 1000,
            position: 'bottom',
          })
        }
        me.respondData = response;
        let data = response.data.data;

        me.setInfo(response);

        //存入首页home的数据
        me.coverPage.statisMonth = data.coverPage.statisMonth.substring(5, 7)+'月';
        me.coverPage.dateBegin = data.coverPage.dateBegin.substring(0,10).replace(/-/g,".");
        me.coverPage.dateEnd = data.coverPage.dateEnd.substring(0,10).replace(/-/g,".");
        // me.coverPage.statisMonth = '上半年';
        // me.coverPage.dateBegin = '2019.01.01';
        // me.coverPage.dateEnd = data.coverPage.dateEnd.substring(0,10).replace(/-/g,".");


        //存入组件endPage的数据
        me.endPageData.releseDate = data.coverPage.statisMonth;
      };
      let getDataFail = function (response) {
        console.log("进入error的回调");
        Toast({
          message: '暂无该月的数据，请重新选择',
          duration: 2000,
        })
      };
      var month;
      if(me.getMonth() !=null && me.getMonth ().toString().length>1){
        month = me.getMonth();
      }
      getAllData(month, getDataSuccess, getDataFail);
      me.swiperOption.on.slideChangeTransitionStart = me.slideChangeTransitionStartFunc;
    },

    mounted() {
      const s = document.createElement('script');
      s.type = 'text/jsvascript';
      s.innerHTML = 'var cnzz_protocol = (("https:" == document.location.protocol) ? "https://" : "http://");document.write(unescape("%3Cspan style=\'display:none;\' id=\'cnzz_stat_icon_1277679135\'%3E%3C/span%3E%3Cscript src=\'" + cnzz_protocol + "s23.cnzz.com/z_stat.php%3Fid%3D1277679135%26show%3Dpic1\' type=\'text/javascript\'%3E%3C/script%3E"));';
      document.body.appendChild(s);
      //声明_czc对象:
      var _czc = _czc || [];
      //绑定siteid，请用您的siteid替换下方"XXXXXXXX"部分
      _czc.push(["_setAccount", "1277679135"]);
      console.log('this is current swiper instance object', this.swiper);
      this.swiper.slideTo(0, 1000, false);
      this.show=false;

    },

    methods: {
      getMonth: function() {
        var reg = /([^$]+)$/;
        var month = window.location.href.match(reg);
        console.log('获得地址'+month);
        if(month[0]!=null) return month[0];
        return moment().subtract(1, 'months').format('YYYY-MM');
      },

      delay: function() {
        let me =this;
        setTimeout(function() {
          me.loading = false;
        },500)
      },

      slideChangeTransitionStartFunc: function(e) {
        let me = this;
        $(".swiper-slide-active").find('.item').fadeOut(500);
        $(".swiper-slide-prev,.swiper-slide-next").find('.item').fadeIn(500);
        me.index = me.swiper.activeIndex;
        // me.$refs.menuRef.menuClose(me.swiper.activeIndex);
        this.clickFlag++;
        me.setInfo(this.respondData);
        me.swiperTimeEnd = new Date();
        let timeGap = (me.swiperTimeEnd.getTime()-me.swiperTimeStart.getTime())/1000;
        let index = this.swiper.activeIndex + 1;
        me.swiperTimeStart = new Date();
        _czc.push(["_trackEvent",'8月月报','浏览页面',index.toString(),timeGap.toString(),'']);
      },

      changePage: function(index) {
        let me = this;
        let a = this.swiper.activeIndex + 1;
        let b = index + 1;
        _czc.push(["_trackEvent",'点击目录','在此页点击',a.toString(),b.toString(),'']);
        _czc.push(["_trackEvent",'点击目录','点击','','','']);
        this.swiper.slideTo(index, 0, false);
        this.slideChangeTransitionStartFunc();
        // this.$refs.menuRef.menuClose(index);
        me.index = me.swiper.activeIndex;
      },

      closeMenu: function(){
        let me = this;
        // this.$refs.menuRef.menuClose(this.swiper.activeIndex);
        me.index = me.swiper.activeIndex;
        this.clickFlag++;
      },


      setInfo: function(response) {
        let data = response.data.data;
        let me = this;

        //存入组件totalPie的数据
        if(me.$refs.userNumSeriesListRef.$parent.$el.classList[1] === 'swiper-slide-next' || me.$refs.userNumSeriesListRef.$parent.$el.classList[1] === 'swiper-slide-active'){
          const totalItem = [];
          const totalData = [];
          for (var i = 0; i < data.generalOverView.seriesUserNums.length; i++) {
            totalItem.push(data.generalOverView.seriesUserNums[i].seriesName);
            totalData.push(data.generalOverView.seriesUserNums[i].userNum);
          }
          me.userNumSeriesList.totalItem = totalItem;
          me.userNumSeriesList.totalData = totalData;
          me.userNumSeriesList.newUserNum = data.generalOverView.newUserNum;
          me.userNumSeriesList.accUserNum = data.generalOverView.accUserNum;
          me.userNumSeriesList.totalUserNum = data.generalOverView.totalUserNum;
          me.userNumSeriesList.statisMonth = data.generalOverView.statisMonth.substring(5, 7) + '月';
          me.userNumSeriesList.qoq = data.generalOverView.qoqGrowthRatio;
          me.userNumSeriesList.yoy = data.generalOverView.yoyGrowthRatio;
          if(me.$refs.userNumSeriesListRef){
            me.$refs.userNumSeriesListRef.initTotalPie();
          }
          return;
        }

        // //存入组件trendAnalyse的数据
        // if(me.$refs.trendAnalyseRef.$parent.$el.classList[1] === 'swiper-slide-next' || me.$refs.trendAnalyseRef.$parent.$el.classList[1] === 'swiper-slide-active'){
        //   const monthList = [],userPerMonthCAs = [],userPerMonthAlls = [], userC211 = [],userCS55 = [], userCS7518= [],userCS35Plus = [0,0];
        //   for (var i = 0; i < data.trendAnalysisPage.userPerMonthCAs.length; i++) {
        //     monthList.push(data.trendAnalysisPage.userPerMonthCAs[i].statisMonth);
        //     userPerMonthCAs.push(data.trendAnalysisPage.userPerMonthCAs[i].userNum);
        //     userPerMonthAlls.push(data.trendAnalysisPage.userPerMonthAlls[i].userNum);
        //     userC211.push(data.trendAnalysisPage.userC211[i].userNum);
        //     userCS55.push(data.trendAnalysisPage.userCS55[i].userNum);
        //     userCS7518.push(data.trendAnalysisPage.userCS7518[i].userNum);
        //   }
        //   for (var i = 0; i < data.trendAnalysisPage.userCS35Plus.length; i++) {
        //     userCS35Plus.push(data.trendAnalysisPage.userCS35Plus[i].userNum);
        //   }
        //   me.trendAnalyseList.monthList = monthList;
        //   me.trendAnalyseList.userPerMonthCAs = userPerMonthCAs;
        //   me.trendAnalyseList.userPerMonthAlls = userPerMonthAlls;
        //   me.trendAnalyseList.userC211 = userC211;
        //   me.trendAnalyseList.userCS55 = userCS55;
        //   me.trendAnalyseList.userCS7518 = userCS7518;
        //   me.trendAnalyseList.userCS35Plus = userCS35Plus;
        //   if(me.$refs.trendAnalyseRef){
        //     me.$refs.trendAnalyseRef.initTrend();
        //   }
        //   return;
        // }

        //存入组件totalUser的数据
        if(me.$refs.totalUserRef.$parent.$el.classList[1] === 'swiper-slide-next' || me.$refs.totalUserRef.$parent.$el.classList[1] === 'swiper-slide-active'){

          if(me.$refs.totalUserRef){
            me.$refs.totalUserRef.init();
          }
          return;
        }

        //存入组件doublePie的数据
        if(me.$refs.doublePieRef.$parent.$el.classList[1] === 'swiper-slide-next' || me.$refs.doublePieRef.$parent.$el.classList[1] === 'swiper-slide-active'){
          if(me.$refs.doublePieRef){
            me.$refs.doublePieRef.init();
          }
          return;
        }



        // //存入组件totalLine的数据
        // if(me.$refs.seriesOnlineListRef.$parent.$el.classList[1] === 'swiper-slide-next') {
        //   const seriesName = [];
        //   const rateMin = [];
        //   const rateMax = [];
        //   const rateAverage = [];
        //   for (var i = 0; i < data.seriesOnlineRatioPage.seriesOnlineRatios.length; i++) {
        //     seriesName.push(data.seriesOnlineRatioPage.seriesOnlineRatios[i].seriesName);
        //     rateMin.push(data.seriesOnlineRatioPage.seriesOnlineRatios[i].minRate);
        //     rateMax.push(data.seriesOnlineRatioPage.seriesOnlineRatios[i].maxRate);
        //     rateAverage.push(data.seriesOnlineRatioPage.seriesOnlineRatios[i].avgRate);
        //   }
        //   me.seriesOnlineList.seriesName = seriesName;
        //   me.seriesOnlineList.minRate = rateMin;
        //   me.seriesOnlineList.maxRate = rateMax;
        //   me.seriesOnlineList.avgRate = rateAverage;
        //   if(me.$refs.seriesOnlineListRef){
        //     me.$refs.seriesOnlineListRef.initTotalLine();
        //   }
        //   return;
        // }



        // //存入组件userAnalyse中全部用户年龄分析的数据
        // if(!me.userAnalyseFlag) {
        //   const ageRange = [];
        //   const userNum = [];
        //   for (var i = 0; i < data.userAnalysis.userAges.length; i++) {
        //     ageRange.push(data.userAnalysis.userAges[i].ageRange);
        //     userNum.push(data.userAnalysis.userAges[i].userNum);
        //   }
        //   me.userAnalyseData.ageRange = ageRange;
        //   me.userAnalyseData.userNum = userNum;
        //   // me.userAnalyseData.sexRatio = data.userAnalysis.sexRatio;
        //
        //   const ageDataOne = [], ageDataTwo = [], ageDataThree = [], ageDataFour = [];
        //   let age = 0;
        //   me.userAnalyseData.carNameOne = '第二代逸动';
        //   me.userAnalyseData.carNameTwo = '全新CS35Plus';
        //   me.userAnalyseData.carNameThree = 'CS55';
        //   me.userAnalyseData.carNameFour = 'CS75';
        //   for(var i=14;i < 85;i++) {
        //     me.userAnalyseData.ageItem.push(i);
        //     if(data.userAnalysis.seriesBuyUserAges[age].seriesCode === 'C211' && data.userAnalysis.seriesBuyUserAges[age].age === i){
        //       ageDataOne.push(data.userAnalysis.seriesBuyUserAges[age].userCount);
        //       age++;
        //     }else{
        //       ageDataOne.push(0);
        //     }
        //   }
        //
        //   for(var i=14;i < 85;i++) {
        //     if(data.userAnalysis.seriesBuyUserAges[age].seriesCode === 'S111' && data.userAnalysis.seriesBuyUserAges[age].age === i){
        //       ageDataTwo.push(data.userAnalysis.seriesBuyUserAges[age].userCount);
        //       age++;
        //     }else{
        //       ageDataTwo.push(0);
        //     }
        //   }
        //   for(var i=14;i < 85;i++) {
        //     if(data.userAnalysis.seriesBuyUserAges[age].seriesCode === 'S201' && data.userAnalysis.seriesBuyUserAges[age].age === i){
        //       ageDataThree.push(data.userAnalysis.seriesBuyUserAges[age].userCount);
        //       age++;
        //     }else {
        //       ageDataThree.push(0);
        //     }
        //   }
        //   for(var i=14;i < 74;i++) {
        //     if(data.userAnalysis.seriesBuyUserAges[age].seriesCode === 'S301-18' && data.userAnalysis.seriesBuyUserAges[age].age === i){
        //       ageDataFour.push(data.userAnalysis.seriesBuyUserAges[age].userCount);
        //       age++;
        //     }else {
        //       ageDataFour.push(0);
        //     }
        //   }
        //   me.userAnalyseData.ageDataOne = ageDataOne;
        //   me.userAnalyseData.ageDataTwo = ageDataTwo;
        //   me.userAnalyseData.ageDataThree = ageDataThree;
        //   me.userAnalyseData.ageDataFour = ageDataFour;
        //
        //   let ageData = data.userAnalysis.seriesBuyUserAgeRanges;
        //   const ageRange1 = [], ageRange2 = [], ageRange3 = [], ageRange4 = [], ageRange5 = [],
        //     ageRange6 = [],ageRange7 = [],ageRange8 = [], ageRange9 = [];
        //   for (var i = 0; i < ageData.length; i++) {
        //     if(ageData[i].ageRange === "18-23"){
        //       ageRange1.push(ageData[i].userCount);
        //     }
        //     if(ageData[i].ageRange === "23-28"){
        //       ageRange2.push(ageData[i].userCount);
        //     }
        //     if(ageData[i].ageRange === "28-33"){
        //       ageRange3.push(ageData[i].userCount);
        //     }
        //     if(ageData[i].ageRange === "33-38"){
        //       ageRange4.push(ageData[i].userCount);
        //     }
        //     if(ageData[i].ageRange === "38-43"){
        //       ageRange5.push(ageData[i].userCount);
        //     }
        //     if(ageData[i].ageRange === "43-48"){
        //       ageRange6.push(ageData[i].userCount);
        //     }
        //     if(ageData[i].ageRange === "48-53"){
        //       ageRange7.push(ageData[i].userCount);
        //     }
        //     if(ageData[i].ageRange === "53-58"){
        //       ageRange8.push(ageData[i].userCount);
        //     }
        //     if(ageData[i].ageRange === "58以上"){
        //       ageRange9.push(ageData[i].userCount);
        //     }
        //   }
        //   me.userAnalyseData.ageRange1 = ageRange1;
        //   me.userAnalyseData.ageRange2 = ageRange2;
        //   me.userAnalyseData.ageRange3 = ageRange3;
        //   me.userAnalyseData.ageRange4 = ageRange4;
        //   me.userAnalyseData.ageRange5 = ageRange5;
        //   me.userAnalyseData.ageRange6 = ageRange6;
        //   me.userAnalyseData.ageRange7 = ageRange7;
        //   me.userAnalyseData.ageRange8 = ageRange8;
        //   me.userAnalyseData.ageRange9 = ageRange9;
        //
        //   if(me.$refs.userAnalyseDataRef){
        //     me.$refs.userAnalyseDataRef.initUserAnalyse();
        //   }
        //   me.userAnalyseFlag = 1;
        //   return;
        // }

        // //存入组件carVsUSUV的数据
        // if(me.$refs.CarVsSUVRef.$parent.$el.classList[1] === 'swiper-slide-next') {
        //   const carRateListOne = [], carRateListTwo = [];
        //   me.seriesGenderRatio.saloonRatio = data.genderRatioPage.saloonRate;
        //   me.seriesGenderRatio.suvRatio = data.genderRatioPage.suvRate;
        //   for(var i =0; i<4; i++){
        //     const json1 = {};
        //     json1.name = data.genderRatioPage.seriesGenderRatios[i].seriesName;
        //     json1.value = data.genderRatioPage.seriesGenderRatios[i].genderRatio + ' : 1';
        //     json1.flag = data.genderRatioPage.seriesGenderRatios[i].ratioMax;
        //     if(json1.flag === 0){
        //       json1.flag = false;
        //     }else if(json1.flag === 1){
        //       json1.flag = true;
        //     }
        //     carRateListOne.push(json1);
        //   }
        //   for(var i =4; i<data.genderRatioPage.seriesGenderRatios.length; i++){
        //     const json2 = {};
        //     json2.name = data.genderRatioPage.seriesGenderRatios[i].seriesName;
        //     json2.value = data.genderRatioPage.seriesGenderRatios[i].genderRatio + ' : 1';
        //     json2.flag = data.genderRatioPage.seriesGenderRatios[i].ratioMax;
        //     if(json2.flag === 0){
        //       json2.flag = false;
        //     }else if(json2.flag === 1){
        //       json2.flag = true;
        //     }
        //     carRateListTwo.push(json2);
        //   }
        //   me.seriesGenderRatio.carRateListOne = carRateListOne;
        //   me.seriesGenderRatio.carRateListTwo = carRateListTwo;
        //   return;
        // }

        // //存入组件mainCity的数据
        // if(me.$refs.cityDistributionPageRef.$parent.$el.classList[1] === 'swiper-slide-next' || me.$refs.cityDistributionPageRef.$parent.$el.classList[1] === 'swiper-slide-active' ) {
        //   const allListCityType = [];
        //   const allListResidentNum = [];
        //   const detailListResidentNum = [];
        //   for (var i = 0; i < data.residentialCityPage.cityStatis.length; i++) {
        //     allListCityType.push(data.residentialCityPage.cityStatis[i].cityType);
        //     allListResidentNum.push(data.residentialCityPage.cityStatis[i].residentNum);
        //   }
        //   me.cityDistributionPage.allListCityType = allListCityType;
        //   me.cityDistributionPage.allListResidentNum = allListResidentNum;
        //   let cityData = data.residentialCityPage.seriesCityStatis;
        //   const detailListSeriesName = [];
        //   const firstCityNum = [], secondCityNum = [], thirdCityNum = [], fourthCityNum = [], fifthCityNum = [], sixthCityNum = [];
        //   for (var i = 0; i < cityData.length; i++) {
        //     if(cityData[i].cityType === "一线"){
        //       firstCityNum.push(cityData[i].residentNum);
        //       detailListSeriesName.push(cityData[i].seriesName);
        //     }
        //     if(cityData[i].cityType === "二线"){
        //       secondCityNum.push(cityData[i].residentNum);
        //     }
        //     if(cityData[i].cityType === "三线"){
        //       thirdCityNum.push(cityData[i].residentNum);
        //     }
        //     if(cityData[i].cityType === "四线"){
        //       fourthCityNum.push(cityData[i].residentNum);
        //     }
        //     if(cityData[i].cityType === "五线"){
        //       fifthCityNum.push(cityData[i].residentNum);
        //       // if(cityData[i].seriesName === "逸动"){
        //       //   fifthCityNum.push(0);
        //       // }
        //     }
        //     if(cityData[i].cityType === "新一线"){
        //       sixthCityNum.push(cityData[i].residentNum);
        //     }
        //   }
        //   me.cityDistributionPage.detailListSeriesName = detailListSeriesName;
        //   me.cityDistributionPage.firstCityNum = firstCityNum;
        //   me.cityDistributionPage.secondCityNum = secondCityNum;
        //   me.cityDistributionPage.thirdCityNum = thirdCityNum;
        //   me.cityDistributionPage.fourthCityNum = fourthCityNum;
        //   me.cityDistributionPage.fifthCityNum = fifthCityNum;
        //   me.cityDistributionPage.sixthCityNum = sixthCityNum;
        //   if(me.$refs.cityDistributionPageRef){
        //     me.$refs.cityDistributionPageRef.initMainCity();
        //   }
        //   return;
        // }

        // //存入组件carTypeOil的数据
        // if(me.$refs.seriesOilCostRef.$parent.$el.classList[1] === 'swiper-slide-next'){
        //   const seriesAvgOilCostsItem = [], seriesAvgOilCostsData = [];
        //   for(var i=0;i< data.seriesOilCostPage.seriesAvgOilCosts.length;i++){
        //     seriesAvgOilCostsItem.push(data.seriesOilCostPage.seriesAvgOilCosts[i].seriesName);
        //     seriesAvgOilCostsData.push(data.seriesOilCostPage.seriesAvgOilCosts[i].oilConsume);
        //   }
        //   me.seriesOilCost.seriesAvgOilCostsItem = seriesAvgOilCostsItem;
        //   me.seriesOilCost.seriesAvgOilCostsData = seriesAvgOilCostsData;
        //   me.seriesOilCost.avgOilCost = data.seriesOilCostPage.avgOilCost;
        //   if(me.$refs.seriesOilCostRef){
        //     me.$refs.seriesOilCostRef.initCarTypeOil();
        //   }
        //   return;
        // }
        //
        // //存入组件RegionalFuel的数据
        // if(me.$refs.regionalFuelRef.$parent.$el.classList[1] === 'swiper-slide-next'){
        //   const regionalItem = [], regionalData = [],cityItem = [], cityData = [];
        //   for(var i=0;i< data.regionOilPage.regionOilCost.length;i++){
        //     regionalItem.push(data.regionOilPage.regionOilCost[i].region);
        //     regionalData.push(data.regionOilPage.regionOilCost[i].oilCost);
        //   }
        //   for(var i=0;i< data.regionOilPage.cityGradeOilCost.length;i++){
        //     cityItem.push(data.regionOilPage.cityGradeOilCost[i].cityLevel);
        //     cityData.push(data.regionOilPage.cityGradeOilCost[i].oilCost);
        //   }
        //   me.RegionalFuelList.regionalItem = regionalItem;
        //   me.RegionalFuelList.regionalData = regionalData;
        //   me.RegionalFuelList.cityItem = cityItem;
        //   me.RegionalFuelList.cityData = cityData;
        //   if(me.$refs.regionalFuelRef){
        //     me.$refs.regionalFuelRef.initRegionalFuel();
        //   }
        //   return;
        // }
        //
        // //存入组件RegionalCityFuel的数据
        // if(me.$refs.regionalCityFuelRef.$parent.$el.classList[1] === 'swiper-slide-next'){
        //   const regionalItem = [], regionalData = [];
        //   for(var i=0;i< data.regionOilPage.cityGroupOilCost.length;i++){
        //     regionalItem.push(data.regionOilPage.cityGroupOilCost[i].cityGroup);
        //     regionalData.push(data.regionOilPage.cityGroupOilCost[i].oilCost);
        //   }
        //   me.RegionalCityFuelList.regionalItem = regionalItem;
        //   me.RegionalCityFuelList.regionalData = regionalData;
        //   if(me.$refs.regionalCityFuelRef){
        //     me.$refs.regionalCityFuelRef.initRegionalCityFuel();
        //   }
        //   return;
        // }

        // //存入组件workingDayOil的数据
        // if(me.$refs.WorkingDayOilRef.$parent.$el.classList[1] === 'swiper-slide-next'){
        //   const AlloilCost = [], CQoilCost = [], weekDay = [];
        //   let arr1 = data.workDayOilPage.nationalWorkDayOilCost;
        //   let arr2 = data.workDayOilPage.workDayOilCostCQ;
        //   for(var i=0;i< arr1.length;i++){
        //     weekDay.push(arr1[i].weekDay);
        //     AlloilCost.push(arr1[i].oilCost);
        //     CQoilCost.push(arr2[i].oilCost);
        //   }
        //   me.workingDayOilList.weekDay = weekDay;
        //   me.workingDayOilList.AlloilCost = AlloilCost;
        //   me.workingDayOilList.CQoilCost = CQoilCost;
        //   if(me.$refs.WorkingDayOilRef){
        //     me.$refs.WorkingDayOilRef.initWorkingDayOil();
        //   }
        //   return;
        // }

        //存入组件MileCondition的数据
        // if(me.$refs.milesRangesRef.$parent.$el.classList[1] === 'swiper-slide-next' || me.$refs.milesRangesRef.$parent.$el.classList[1] === 'swiper-slide-active'){
        //   const milesRangesItem = [], milesRangesData = [], timeRangesItem = [], timeRangesData = [];
        //   for(var i=0;i< data.milesRangePage.milesRanges.length;i++){
        //     milesRangesItem.push(data.milesRangePage.milesRanges[i].mileRange);
        //     milesRangesData.push(data.milesRangePage.milesRanges[i].userNums/10000);
        //   }
        //   for(var i=0;i< data.milesRangePage.timeRanges.length;i++){
        //     timeRangesItem.push(data.milesRangePage.timeRanges[i].timeRange);
        //     timeRangesData.push(data.milesRangePage.timeRanges[i].userNums/10000);
        //   }
        //   me.milesRanges.milesRangesItem = milesRangesItem;
        //   me.milesRanges.milesRangesData = milesRangesData;
        //   me.milesRanges.timeRangesItem = timeRangesItem;
        //   me.milesRanges.timeRangesData = timeRangesData;
        //   if(me.$refs.milesRangesRef){
        //     me.$refs.milesRangesRef.initMileCondition();
        //   }
        //   return;
        // }

        // //存入组件useNumber的数据
        // if(me.$refs.drivingNumsRef.$parent.$el.classList[1] === 'swiper-slide-next'){
        //   me.drivingNums.month = data.drivingStaticPage.drivingNums[0].drivingDate.substring(0,7);
        //   const drivingNumsData = [];
        //   for(var i=0;i< data.drivingStaticPage.drivingNums.length;i++){
        //     const item = [];
        //     item.push(data.drivingStaticPage.drivingNums[i].drivingDate.substring(0,10));
        //     item.push(data.drivingStaticPage.drivingNums[i].drivingTimes/600);
        //     drivingNumsData.push(item);
        //   }
        //   me.drivingNums.drivingNumsData = drivingNumsData;
        //   if(me.$refs.drivingNumsRef){
        //     me.$refs.drivingNumsRef.initUseNumber();
        //   }
        //   return;
        // }

        // //存入组件functionUseTimes的数据
        // if(!me.FunctionUseTimesFlag){
        //   const carFunctionsItem = [], carFunctionsData = [];
        //   for(var i=0;i< data.carFunctionPage.carFunctions.length;i++){
        //     carFunctionsItem.push(data.carFunctionPage.carFunctions[i].funcName);
        //     carFunctionsData.push(data.carFunctionPage.carFunctions[i].useTimes / 10000);
        //   }
        //   const monthList = [], oneUseTimes = [], twoUseTimes = [], threeUseTimes = [];
        //   for(var i=0;i< data.carFunctionPage.oneUseTimes.length;i++){
        //     monthList.push(data.carFunctionPage.oneUseTimes[i].statisMonth);
        //     oneUseTimes.push(data.carFunctionPage.oneUseTimes[i].useTimes / 10000);
        //     twoUseTimes.push(data.carFunctionPage.twoUseTimes[i].useTimes / 10000);
        //     threeUseTimes.push(data.carFunctionPage.threeUseTimes[i].useTimes / 10000);
        //   }
        //   me.carFunctions.carFunctionsItem = carFunctionsItem;
        //   me.carFunctions.carFunctionsData = carFunctionsData;
        //   me.carFunctions.monthList = monthList;
        //   me.carFunctions.oneUseTimes = oneUseTimes;
        //   me.carFunctions.twoUseTimes = twoUseTimes;
        //   me.carFunctions.threeUseTimes = threeUseTimes;
        //   me.carFunctions.funcList = ['360°全景系统','多色氛围灯','组合仪表亮度可调节'];
        //   if(me.$refs.carFunctionsRef){
        //     me.$refs.carFunctionsRef.initFunctionUseTimes();
        //   }
        //   me.FunctionUseTimesFlag = 1;
        // }

        // //存入组件functionUseNumber的数据
        // if(!me.FunctionUseTimesFlag){
        //   const autoUserNumsItem = [], autoUserNumsData = [],manualUserNumsItem = [], manualUserNumsData = [];
        //   for(var i=0;i< data.carFunctionActiveUserPage.autoUserNums.length;i++){
        //     autoUserNumsItem.push(data.carFunctionActiveUserPage.autoUserNums[i].funcName);
        //     autoUserNumsData.push(data.carFunctionActiveUserPage.autoUserNums[i].userNums);
        //     manualUserNumsItem.push(data.carFunctionActiveUserPage.manualUserNums[i].funcName);
        //     manualUserNumsData.push(data.carFunctionActiveUserPage.manualUserNums[i].userNums);
        //   }
        //   me.carFunctionActiveUser.autoUserNumsItem = autoUserNumsItem;
        //   me.carFunctionActiveUser.autoUserNumsData = autoUserNumsData;
        //   me.carFunctionActiveUser.manualUserNumsItem = manualUserNumsItem;
        //   me.carFunctionActiveUser.manualUserNumsData = manualUserNumsData;
        //   if(me.$refs.carFunctionActiveUserRef){
        //     me.$refs.carFunctionActiveUserRef.initFunctionUseNumber();
        //   }
        //   me.FunctionUseTimesFlag = 1;
        // }

        // //存入组件cruiseControl的数据
        // if(me.$refs.cruiseControlRef.$parent.$el.classList[1] === 'swiper-slide-next'){
        //   const fixedCCsItem = [], fixedCCsData = [], adaptiveCCsData = [],carFuncAllsData = [];
        //   for(var i=0;i< data.cruiseControlPage.adaptiveCCs.length;i++){
        //     fixedCCsItem.push(data.cruiseControlPage.adaptiveCCs[i].ageRange);
        //     fixedCCsData.push(data.cruiseControlPage.adaptiveCCs[i].userRatio * 100);
        //     adaptiveCCsData.push(data.cruiseControlPage.fixedCCs[i].userRatio * 100);
        //     carFuncAllsData.push(data.cruiseControlPage.carFuncAlls[i].userRatio * 100);
        //   }
        //   me.cruiseControl.fixedCCsItem = fixedCCsItem;
        //   me.cruiseControl.fixedCCsData = fixedCCsData;
        //   me.cruiseControl.adaptiveCCsData = adaptiveCCsData;
        //   me.cruiseControl.carFuncAllsData = carFuncAllsData;
        //   if(me.$refs.cruiseControlRef){
        //     me.$refs.cruiseControlRef.initCruiseControl();
        //   }
        //   return;
        // }

        // //存入组件totalFuncNumber
        // if(me.$refs.carActiveAppRef.$parent.$el.classList[1] === 'swiper-slide-next'){
        //   const carActiveAppItem = [], carActiveAppData = [];
        //   for(var i=0;i< data.carActiveAppPage.carAppActivities.length;i++){
        //     carActiveAppItem.push(data.carActiveAppPage.carAppActivities[i].appNameCN);
        //     carActiveAppData.push(data.carActiveAppPage.carAppActivities[i].useTimes/10000);
        //   }
        //   me.carActiveApp.carActiveAppItem = carActiveAppItem;
        //   me.carActiveApp.carActiveAppData = carActiveAppData;
        //   if(me.$refs.carActiveAppRef){
        //     me.$refs.carActiveAppRef.initTotalFuncNumber();
        //   }
        //   return;
        // }

        // //存入组件C211FuncNumber的数据
        // if(!me.C211FuncNumberFlag){
        //   const c211Freq = [], c212Freq = [], c301Freq = [], s401Freq = [], appName = [];
        //   const arr = data.carAppSeriesPage.seriesCarAppActivitys;
        //   for(var i=0;i< arr.length;i++){
        //     if(arr[i].seriesCode === "C211"){
        //       c211Freq.push(arr[i].useFrequency);
        //       appName.push(arr[i].appNameCN)
        //     }
        //     if(arr[i].seriesCode === "C212"){
        //       c212Freq.push(arr[i].useFrequency)
        //     }
        //     if(arr[i].seriesCode === "C301"){
        //       c301Freq.push(arr[i].useFrequency)
        //     }
        //     if(arr[i].seriesCode === "S401-MCA1"){
        //       s401Freq.push(arr[i].useFrequency)
        //     }
        //   }
        //   me.carAppSeries.c211Freq = c211Freq;
        //   me.carAppSeries.c212Freq = c212Freq;
        //   me.carAppSeries.c301Freq = c301Freq;
        //   me.carAppSeries.s401Freq = s401Freq;
        //   me.carAppSeries.appName = appName;
        //   me.carAppSeries.carType = ['逸动','逸动两厢','睿骋CC','全新CS95'];
        //   if(me.$refs.carAppSeriesRef){
        //     me.$refs.carAppSeriesRef.initC211FuncNumber();
        //   }
        //   me.C211FuncNumberFlag = 1;
        // }

        // //触发组件functionprefercity的函数
        // if(me.$refs.functionPreferCityRef.$parent.$el.classList[1] === 'swiper-slide-next'){
        //   if(me.$refs.functionPreferCityRef){
        //     me.$refs.functionPreferCityRef.initFunctionPreferCity();
        //   }
        // }
        //
        // //触发组件functionpreferRegion的函数
        // if(me.$refs.functionPreferRegionRef.$parent.$el.classList[1] === 'swiper-slide-next'){
        //   if(me.$refs.functionPreferRegionRef){
        //     me.$refs.functionPreferRegionRef.initFunctionPreferRegion();
        //   }
        // }

        // //触发组件remoteprefercity的函数
        // if(me.$refs.remotePreferCityRef.$parent.$el.classList[1] === 'swiper-slide-next' || me.$refs.remotePreferCityRef.$parent.$el.classList[1] === 'swiper-slide-active'){
        //   if(me.$refs.remotePreferCityRef){
        //     me.$refs.remotePreferCityRef.initRemotePreferCity();
        //   }
        // }

        // //触发组件remotepreferregion的函数
        // if(me.$refs.remotePreferRegionRef.$parent.$el.classList[1] === 'swiper-slide-next' || me.$refs.remotePreferRegionRef.$parent.$el.classList[1] === 'swiper-slide-prev'){
        //   if(me.$refs.remotePreferRegionRef){
        //     me.$refs.remotePreferRegionRef.initRemotePreferRegion();
        //   }
        // }

        // //触发组件CS55Oil的函数
        // if(me.$refs.CS55OilRef.$parent.$el.classList[1] === 'swiper-slide-next'){
        //   if(me.$refs.CS55OilRef){
        //     me.$refs.CS55OilRef.initRegionalFuel();
        //   }
        // }
        //
        // //触发组件CS75Oil的函数
        // if(me.$refs.CS75OilRef.$parent.$el.classList[1] === 'swiper-slide-next'){
        //   if(me.$refs.CS75OilRef){
        //     me.$refs.CS75OilRef.initRegionalFuel();
        //   }
        // }
        //
        // //触发组件YiDongOil的函数
        // if(me.$refs.YiDongOilRef.$parent.$el.classList[1] === 'swiper-slide-next'){
        //   if(me.$refs.YiDongOilRef){
        //     me.$refs.YiDongOilRef.initRegionalFuel();
        //   }
        // }

        // //触发组件CS75Engine的函数
        // if(me.$refs.CS75EngineRef.$parent.$el.classList[1] === 'swiper-slide-next'){
        //   if(me.$refs.CS75EngineRef){
        //     me.$refs.CS75EngineRef.drawOil();
        //   }
        // }
        // //触发组件CS75Speed的函数
        // if(me.$refs.CS75SpeedRef.$parent.$el.classList[1] === 'swiper-slide-next'){
        //   if(me.$refs.CS75SpeedRef){
        //     me.$refs.CS75SpeedRef.initRegionalFuel();
        //   }
        // }
        // //触发组件CS75Accelerate的函数
        // if(me.$refs.CS75AccelerateRef.$parent.$el.classList[1] === 'swiper-slide-next'){
        //   if(me.$refs.CS75AccelerateRef){
        //     me.$refs.CS75AccelerateRef.initRegionalFuel();
        //   }
        // }

        //存入组件teleControl的数据
        // if(me.$refs.remoteActiveRef.$parent.$el.classList[1] === 'swiper-slide-next' || me.$refs.remoteActiveRef.$parent.$el.classList[1] === 'swiper-slide-active') {
        //   const totalFunctionCode = [];
        //   const totalUseTimes = [];
        //   for (var i = 0; i < data.remoteFunctionPage.remoteActivities.length; i++) {
        //     totalFunctionCode.push(data.remoteFunctionPage.remoteActivities[i].functionName);
        //     totalUseTimes.push(data.remoteFunctionPage.remoteActivities[i].useTimes / 10000);
        //   }
        //   me.remoteActive.totalFunctionCode = totalFunctionCode;
        //   me.remoteActive.totalUseTimes = totalUseTimes;
        //   if(me.$refs.remoteActiveRef){
        //     me.$refs.remoteActiveRef.initTeleControl();
        //   }
        // }

        // //存入组件feedbackpie的数据
        // if(me.$refs.feedbackRef.$parent.$el.classList[1] === 'swiper-slide-next' || me.$refs.feedbackRef.$parent.$el.classList[1] === 'swiper-slide-active') {
        //   const intelligentClassifyItem = [], intelligentClassifyData = [];
        //   const smartConnectionNumItem = [], smartConnectionNumData = [], carEntertainmentNumItem = [], carEntertainmentNumData = [];
        //   const electricalAccessoriesNumItem = [], electricalAccessoriesNumData = [], drivingAssistanceNumItem = [], drivingAssistanceNumData = [];
        //   let a = data.feedbackPage;
        //   me.feedbackData.intelligentRecordNum = a.intelligentRecordNum;
        //   me.feedbackData.nonIntelligentRecordNum = a.nonIntelligentRecordNum;
        //   for (var i = 0; i < a.intelligentClassify.length; i++) {
        //     intelligentClassifyItem.push(a.intelligentClassify[i].itemName);
        //     intelligentClassifyData.push(a.intelligentClassify[i].recordNum);
        //   }
        //   for (var i = 0; i < a.smartConnectionNum.length; i++) {
        //     smartConnectionNumItem.push(a.smartConnectionNum[i].itemName);
        //     smartConnectionNumData.push(a.smartConnectionNum[i].recordNum);
        //   }
        //   for (var i = 0; i < a.carEntertainmentNum.length; i++) {
        //     carEntertainmentNumItem.push(a.carEntertainmentNum[i].itemName);
        //     carEntertainmentNumData.push(a.carEntertainmentNum[i].recordNum);
        //   }
        //   for (var i = 0; i < a.electricalAccessoriesNum.length; i++) {
        //     electricalAccessoriesNumItem.push(a.electricalAccessoriesNum[i].itemName);
        //     electricalAccessoriesNumData.push(a.electricalAccessoriesNum[i].recordNum);
        //   }
        //   for (var i = 0; i < a.drivingAssistanceNum.length; i++) {
        //     drivingAssistanceNumItem.push(a.drivingAssistanceNum[i].itemName);
        //     drivingAssistanceNumData.push(a.drivingAssistanceNum[i].recordNum);
        //   }
        //   me.feedbackData.intelligentClassifyItem = intelligentClassifyItem;
        //   me.feedbackData.intelligentClassifyData = intelligentClassifyData;
        //   me.feedbackData.smartConnectionNumItem = smartConnectionNumItem;
        //   me.feedbackData.smartConnectionNumData = smartConnectionNumData;
        //   me.feedbackData.carEntertainmentNumItem = carEntertainmentNumItem;
        //   me.feedbackData.carEntertainmentNumData = carEntertainmentNumData;
        //   me.feedbackData.electricalAccessoriesNumItem = electricalAccessoriesNumItem;
        //   me.feedbackData.electricalAccessoriesNumData = electricalAccessoriesNumData;
        //   me.feedbackData.drivingAssistanceNumItem = drivingAssistanceNumItem;
        //   me.feedbackData.drivingAssistanceNumData = drivingAssistanceNumData;
        //
        //   // 折线图的数据
        //   me.feedbackData.smartConnectionLine =  data.feedbackPage.smartConnectionLine;
        //   me.feedbackData.carEntertainmentLine =  data.feedbackPage.carEntertainmentLine;
        //   me.feedbackData.drivingAssistanceLine =  data.feedbackPage.drivingAssistanceLine;
        //   me.feedbackData.electricalAccessoriesLine =  data.feedbackPage.electricalAccessoriesLine;
        //
        //   if(me.$refs.feedbackRef){
        //     me.$refs.feedbackRef.initFeedbackPie();
        //   }
        // }

        // //存入组件ThousandFeedback的数据
        // if(me.$refs.thousandFeedbackRef.$parent.$el.classList[1] === 'swiper-slide-next' || me.$refs.thousandFeedbackRef.$parent.$el.classList[1] === 'swiper-slide-active') {
        //   const recordNumPerSeries = [];
        //   const seriesName = [];
        //   let a = data.feedbackPage;
        //   for (var i = 0; i < a.thousandCarFeedBack.length; i++) {
        //     recordNumPerSeries.push(a.thousandCarFeedBack[i].recordNumPerSeries);
        //     seriesName.push(a.thousandCarFeedBack[i].seriesName);
        //   }
        //   me.thousandCarFeedBack.recordNumPerSeries = recordNumPerSeries;
        //   me.thousandCarFeedBack.seriesName = seriesName;
        //   if(me.$refs.thousandFeedbackRef){
        //     me.$refs.thousandFeedbackRef.initThousand();
        //   }
        // }

        // //存入组件funcTrend的数据
        // if(me.$refs.funcTrendRef.$parent.$el.classList[1] === 'swiper-slide-next' || me.$refs.funcTrendRef.$parent.$el.classList[1] === 'swiper-slide-active') {
        //   const carAppTradeItem = [];
        //   const gaoDeTimesMonthTrade = [], kuWoTimesMonthTrade = [], gaoDeTimeMonthTrade = [], kuWoTimeMonthTrade = [];
        //   let a = data.carAppTradePage;
        //   for (var i = 0; i < a.gaoDeTimesMonthTrade.length; i++) {
        //     carAppTradeItem.push(a.gaoDeTimesMonthTrade[i].retentionMonth);
        //     gaoDeTimesMonthTrade.push(a.gaoDeTimesMonthTrade[i].useTimes);
        //     kuWoTimesMonthTrade.push(a.kuWoTimesMonthTrade[i].useTimes);
        //     gaoDeTimeMonthTrade.push(a.gaoDeTimeMonthTrade[i].useTime);
        //     kuWoTimeMonthTrade.push(a.kuWoTimeMonthTrade[i].useTime);
        //   }
        //   me.carAppTrade.carAppTradeItem = carAppTradeItem;
        //   me.carAppTrade.gaoDeTimesMonthTrade = gaoDeTimesMonthTrade;
        //   me.carAppTrade.kuWoTimesMonthTrade = kuWoTimesMonthTrade;
        //   me.carAppTrade.gaoDeTimeMonthTrade = gaoDeTimeMonthTrade;
        //   me.carAppTrade.kuWoTimeMonthTrade = kuWoTimeMonthTrade;
        //   if(me.$refs.funcTrendRef){
        //     me.$refs.funcTrendRef.initTrend();
        //   }
        // }

        // //存入组件TeleControlTrend的数据
        // if(me.$refs.teleControlTrendRef.$parent.$el.classList[1] === 'swiper-slide-next' || me.$refs.teleControlTrendRef.$parent.$el.classList[1] === 'swiper-slide-active') {
        //   const item = [];
        //   const closeAir = [], flashLight = [], lockDoor = [], openAir = [], openClosePurifier = [], openTrunk = [], unLockDoor = [];
        //   let a = data.remoteTradePage;
        //   for (var i = 0; i < a.closeAir.length; i++) {
        //     item.push(a.closeAir[i].retentionMonth);
        //     closeAir.push(a.closeAir[i].avgUseTimes);
        //     flashLight.push(a.flashLight[i].avgUseTimes);
        //     lockDoor.push(a.lockDoor[i].avgUseTimes);
        //     openAir.push(a.openAir[i].avgUseTimes);
        //     openClosePurifier.push(a.openClosePurifier[i].avgUseTimes);
        //     openTrunk.push(a.openTrunk[i].avgUseTimes);
        //     unLockDoor.push(a.unLockDoor[i].avgUseTimes);
        //   }
        //   me.remoteTrade.item = item;
        //   me.remoteTrade.closeAir = closeAir;
        //   me.remoteTrade.flashLight = flashLight;
        //   me.remoteTrade.lockDoor = lockDoor;
        //   me.remoteTrade.openAir = openAir;
        //   me.remoteTrade.openClosePurifier = openClosePurifier;
        //   me.remoteTrade.openTrunk = openTrunk;
        //   me.remoteTrade.unLockDoor = unLockDoor;
        //   if(me.$refs.teleControlTrendRef){
        //     me.$refs.teleControlTrendRef.initTeleControlTrend();
        //   }
        // }
      }
    }
  }
</script>

<style scoped>
  @import '../../assets/css/animate.min.css';

  #home {
    width: 100%;
    height: 100%;
  }

  #titleStyle {
    font-size: 0.75rem
  }

  .menuTitle {
    width: 100%;
    margin: 0 auto;
    font-size: 0.63rem;
    color: #444444;
    font-weight: bold;
    padding-top: 9%;
    padding-bottom: 11%
  }

  .text {
    text-align: left;
    padding: 0 0.8rem;
    color: #555;
    text-indent: 0.7rem;
    line-height: 2.2;
    margin: 0;
  }

  .image {
    position: absolute;
    top: 50%;
    left: 50%;
    width: auto;
    max-width: 100%;
    transform: translate(-50%, -50%);
  }

  .menuItem {
    width:7.74rem;
    height:2.4rem;
    margin: 0 auto;
    padding-left: 1.8rem;
    text-align: left;
    line-height: 2.4rem;
    color: #00A0E9;
    font-size: 0.43rem;
    font-weight: bold;
  }

  .menuItem1 {
    height:4.5rem;
    line-height: normal;
  }
  .menuItem1 p {
    padding-top: 0.9rem;
    margin-bottom: 0.2rem;
  }

  .menuItem1 ul {
    margin: 0;
    padding: 0;
    font-size: 0.38rem;
    font-weight: normal;
    line-height: 1.8;
  }

  .newContent {
    color: #5a5a5a;
  }

  .bottomMessage {
    position:absolute;
    width: 100%;
    margin: 0 auto;
    bottom: 4.1%;
    font-size: 0.32rem;
  }

  .middleMessage {
    position: absolute;
    width: 100%;
    margin: 0 auto;
    top:36%;
    font-size: 0.32rem;
  }

  .titleMessage {
    position: absolute;
    width: 100%;
    margin: 0 auto;
    top:22.8%;
    font-size: 0.64rem;
  }

  .homePage {
    height: 100%;
    width: 100%;
    color: #fff;
  }

  #swiperBox {
    /*font-family: "Arial","Microsoft YaHei","黑体","宋体",sans-serif;*/
    font-family: "Microsoft YaHei",Georgia,serif;
    color: #D0D0D0;
  }

  .cover{
    position:absolute;
    left: 0;
    top: 0;
    margin: 0 0 0 0;
    background:white;
    width:100%;  /*宽度设置为100%，这样才能使隐藏背景层覆盖原页面*/
    height:100%;
    filter:alpha(opacity=60);  /*设置透明度为60%*/
    opacity:0.6;  /*非IE浏览器下设置透明度为60%*/
    z-Index:999;
  }

  .menuClicked{
    margin-left: 200px
  }

  /*.fade-enter-active, .fade-leave-active {*/
  /*transition: opacity 2s;*/
  /*}*/
  /*.fade-enter, .fade-leave-to !* .fade-leave-active below version 2.1.8 *! {*/
  /*opacity: 0;*/
  /*}*/

  /*.nopage{display: none;}*/
  /*.showpage{display: block;}*/

  span {
    font-weight: bold;
  }
</style>
