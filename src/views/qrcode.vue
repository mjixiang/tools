<template>
  <div>
    <div class="form-title">输入待生成文本、地址</div>
    <textarea v-model="snString" class="xa-textarea" rows="6" placeholder="输入待生成文本、地址(空格或换行分隔)"></textarea>
    <div v-for="sn in sns" :key="sn" class="qrcode-container">
      <div class="form-title" style="overflow: auto;padding: 0 10px;height:auto;line-height: 24px;">{{ sn }}</div>
      <xa-qrcode :url="sn"></xa-qrcode>
    </div>
  </div>
</template>

<script>
import xaQrcode from '@/components/qrcode.vue'
export default {
  name: 'qrcode',
  components: { xaQrcode },
  data () {
    return {
      snString: '',
      key: 'demo_qrcode_sns'
    }
  },
  computed: {
    sns () {
      localStorage.setItem(this.key, this.snString)
      return this.snString.split(/\s+/g).filter(sn => !!sn)
    }
  },
  created () {
    this.snString = localStorage.getItem(this.key) || ''
  }
}
</script>

<style lang="scss" scoped>
.form-title{height:36px;line-height:24px;position:relative;padding:7px 14px 5px;font-size:13px;color:#999;background-color:#f2f2f2;text-align:left;}
.xa-textarea{display:block;border:0;resize:none;width:100%;color:inherit;font-size:1em;line-height:inherit;outline:0;padding: 6px 14px;}
.qrcode-container {width: 200px;float: left;margin: 10px;overflow: hidden;}
</style>

