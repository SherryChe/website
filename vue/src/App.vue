<template>
  <div id="app">
    <router-view name="header"></router-view>
    <router-view name="main"></router-view>
    <router-view name="footer"></router-view>

  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
  body{
    margin: 0;
    padding: 0;
    font:12px Helvetica,Arial,sans-serif;
    line-height: 1.62;
    color: #111;
    background: #fff;
  }
</style>
