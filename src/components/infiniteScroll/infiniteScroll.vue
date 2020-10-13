<template>
  <div class="xa-infinite-scroll" :style="{'padding-bottom': $runtime.isNeedAdapt ? '26px' : '8px'}">
    <div v-show="loading" class="weui-loading"></div>
    <span v-show="loading || end" class="xa-infinite-scroll-text" :style="{'margin-left': end ? '0' : '10px'}">{{ end ? endText : loadingText}}</span>
  </div>
</template>

<script>
import scrollMixin from './scroll.js'

export default {
  name: 'infinite-scroll',
  mixins: [scrollMixin],
  props: {
    loading: Boolean,
    loadingText: {
      type: String,
      default: '正在加载'
    },
    end: Boolean,
    endText: {
      type: String,
      default: '暂无更多'
    }
  },
  methods: {
    onScroll () {
      if (this.loading || this.end) return
      const scrollTop = this.scroller.scrollTop
      const scrollHeight = this.scroller.scrollHeight
      let h = scrollHeight - scrollTop - 5
      let sh = this.scroller.offsetHeight
      if (h <= sh) {
        this.$emit('load')
      }
    }
  }
}
</script>

<style scoped>
.xa-infinite-scroll{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  line-height: 24px;
  width: 100%;
  margin-top: 20px;
}
.xa-infinite-scroll-text{
  font-size: 14px;
  color: #666;
}
</style>
