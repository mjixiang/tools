<template>
  <div class="index-page">
    <h2>小工具</h2>
    <ul>
      <li>
        1. <router-link :to="{ name: 'qrcode' }">批量生成二维码</router-link>
        <div class="qrcode-container">
          <xa-qrcode :url="origin + '/qrcode'"></xa-qrcode>
        </div>
      </li>
      <li>
        2. <router-link :to="{ name: 'exif' }">在地图中显示照片</router-link>
        <div class="qrcode-container">
          <xa-qrcode :url="origin + '/exif'"></xa-qrcode>
        </div>
      </li>
      <li>
        3. <router-link :to="{ name: 'disk' }">图库</router-link>
        <div class="qrcode-container">
          <xa-qrcode :url="origin + '/disk'"></xa-qrcode>
        </div>
      </li>
      <!-- <li>3. <router-link :to="{ name: 'compare' }">图片对比</router-link></li> -->
    </ul>
  </div>
</template>

<script>
import xaQrcode from '@/components/qrcode.vue'
export default {
  name: 'index',
  components: { xaQrcode },
  data () {
    return {
      origin: window.location.origin
    }
  }
}
</script>

<style lang="scss" scoped>
.index-page {
  padding: 15px;
  background-color: white;
  height: 100%;
  overflow: auto;
}
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

.qrcode-container {
  width: 200px;
  margin: 10px;
}
</style>
