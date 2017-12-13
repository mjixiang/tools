
<template>
  <div class="qrcode-box" ref="qrcodeBox"></div>
</template>

<script>
var Qrcode = require('arale-qrcode')
export default {
  props: {
    url: String,
    size: {
      type: Number,
      default: 180
    },
    logo: String,
    logoSize: {
      type: Number,
      default: 48
    }
  },
  watch: {
    url () {
      this.drawImage()
    }
  },
  methods: {
    drawImage () {
      if (!this.$refs.qrcodeBox) return
      this.$refs.qrcodeBox.innerHTML = ''
      if (!this.url) return
      var qrnode = new Qrcode({
        text: this.url,
        size: this.size,
        image: this.logo,
        imageSize: this.logoSize
      })
      qrnode.style.display = 'block'
      this.$refs.qrcodeBox.appendChild(qrnode)
    }
  },
  mounted () {
    this.drawImage()
  }
}
</script>

<style lang="scss" scoped>
.qrcode-box {
  background-color: white;
  box-shadow: 0 0 8px #ccc;
  padding: 10px;
  border-radius: 4px;
  display: inline-block;
}
</style>

