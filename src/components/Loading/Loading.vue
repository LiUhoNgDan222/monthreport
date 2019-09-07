<template>
  <div class="loading">
    <img src="./img/loading.gif">
  </div>
</template>
<script>
  export default {
    name: 'Loading',
    data() {
      return {
      }
    },
  }
</script>
<style>
  .loading {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 999;
    width: 100%;
    height: 100%;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.8);
  }
  img {
    width: 80px;
    height: 80px;
  }
</style>
