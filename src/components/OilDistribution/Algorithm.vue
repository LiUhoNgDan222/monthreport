<template>
  <div>
    <!--<Drawer></Drawer>-->

    <div id="title">油耗分布(油浮算法)</div>
    <div class="info-wrap">
      <div class="algorithm">单车油耗=自然月的总消耗油量/总里程*100</div>
      <div class="subTitle">油浮算法</div>
      <div class="desc">采用油浮信号，<span style="color: #00a0e9;">单次行程油量=熄火油浮-点火油浮</span></div>
      <div class="desc"><span style="font-weight: bold">优势：</span>多个车型采集此信号</div>
      <div class="desc desc1"><span style="font-weight: bold">劣势：</span>油浮信号仅支持整数，油量累计存在1L左右误差。</div>
      <div class="subTitle">油喷算法</div>
      <div class="desc">采用百毫秒油耗信号，
        <span style="color: #00a0e9;">单次行程油量=百毫秒油耗的累计值</span>
        <div>（若中途漏帧，则根据线性规律补全数据）</div>
      </div>
      <div class="desc"><span style="font-weight: bold">优势：</span>数据更准确</div>
      <div class="desc desc1"><span style="font-weight: bold">劣势：</span>目前只有cs75-18款采集此信号</div>
    </div>

    <!--<p>{{remoteActive.carTypeUsed}}</p>-->
  </div>
</template>

<script>
    export default {
        name: "Algorithm"
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
  .info-wrap {
    padding: 0.4rem 0.8rem;
    text-align: left;
  }
  .algorithm {
    margin-bottom: 0.533333rem;
    font-size: 0.426667rem;
    color: #00a0e9;
  }
  .subTitle {
    margin-bottom: 0.4rem;
    font-size: 0.4rem;
    color: #444;
    font-weight: bold;
  }
  .desc {
    font-size: 0.32rem;
    color: #444;
    margin-bottom: 0.373333rem;
  }
  .desc1 {
    margin-bottom: 1rem;
  }
</style>
