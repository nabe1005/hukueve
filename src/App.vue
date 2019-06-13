<template>
  <div id="app">
    <div id="nav">
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand :to="{name: 'Top'}">Hukueve</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item-dropdown text="イベント一覧">
              <b-dropdown-item :to="{name: 'AllList'}">全件表示</b-dropdown-item>
              <b-dropdown-item :to="{name: 'EachList', params: {each: 10}}">10件ずつ</b-dropdown-item>
              <b-dropdown-item :to="{name: 'EachList', params: {each: 30}}">30件ずつ</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item :to="{name: 'Category'}">カテゴリごと表示</b-nav-item>
            <b-nav-item :to="{name: 'Month'}">月ごと表示</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  width: 100%;
  margin-bottom: 30px;
}
</style>
