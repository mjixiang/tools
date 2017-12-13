<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import headerNav from 'components/headerNav'
export default {
  name: 'app-root',
  components: { headerNav }
}
</script>

<style>
html,
body,
#app {
  height: 100%;
}
</style>
