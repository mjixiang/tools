<template>
<div style="padding: 15px;background-color: white;height: 100%;">
    <h2>小工具</h2>
    <ul>
      <li>1. <router-link :to="{ name: 'qrcode' }">批量生成二维码</router-link></li>
      <li>2. <router-link :to="{ name: 'exif' }">在地图中显示照片</router-link></li>
      <li>3. <router-link :to="{ name: 'compare' }">图片对比</router-link></li>
    </ul>
    <h3 style="margin: 15px 0 10px;">扫码预览</h3>
    <div>
      <img src="../../examples.png" alt="">
    </div>
</div>
</template>

<script>
import config from '@/config'
export default {
  name: 'index',
  data () {
    return {
      apps: config.apps
    }
  }
}
</script>

<style lang="scss" scoped>
h2 {
  line-height: 36px;
  margin: 5px 0;
}
h3 {
  line-height: 30px;
  margin: 5px 0;
}
a {
  color: mediumseagreen;
}
</style>
