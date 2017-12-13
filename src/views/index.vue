<template>
  <div>
    <router-link :to="{name: 'qrcode'}">批量生成二维码</router-link>
    <router-link :to="{name: 'exif'}">在地图中显示照片</router-link>
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
