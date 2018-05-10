<template>
  <div id="app">
    <keep-alive>
     <router-view/>
    </keep-alive>
    <div class="tabWrapper">
      <div>首页</div>
      <div>线路</div>
      <div>我的</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
