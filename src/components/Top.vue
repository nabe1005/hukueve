<template>
  <div id="top">
    <img src="../assets/top.jpg">
    <div id="text">
      <h1>福井イベント情報局、hukueveへようこそ</h1>
      <p>本サイトでは、福井県のイベントについて紹介しております。<br>
        イベントを一覧で見たい方は<router-link :to="{name: 'AllList' }">イベント一覧</router-link>から、<br>
        カテゴリごとに見たい方は<router-link :to="{name: 'Category'}">カテゴリ</router-link>をご覧ください。</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Top'
}
</script>

<style scoped>
#top {
  position: relative;
}
#text p {
  text-align: center;
  font-size: 3vmin;
  color: #f5f5f5;
}
#text h1 {
  text-align: center;
  font-size: 5vmin;
  color: #f5f5f5;
}
#text {
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%,-50%);
  -webkit-transform: translate(-50%,-50%);
  transform: translate(-50%,-50%);
  margin:0;
  padding:0;
  background-color: #606060;
}
#top img {
  width: 100vw;
  height: 90vh;
}
</style>
