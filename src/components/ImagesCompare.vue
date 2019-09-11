<template>
  <div class="compare-mask">
    <div @click="$emit('close')" class="close">×</div>
    <div class="images overlap">
      <img
        class="image"
        :style="[sizeStyle, { order: 1 }]"
        v-if="images[1]"
        :src="images[1].src"
      />
      <img
        class="image"
        :style="[sizeStyle, map2Style, { order: 0 }]"
        v-if="images[0]"
        :src="images[0].src"
      />
      <div ref="bar" class="hander-bar"></div>
    </div>
  </div>
</template>

<script>
import Drag from 'utils/drag'
export default {
  data () {
    return {
      size: 0,
      clipWidth: '50vw',
      imageWidth: 600,
      imageHeight: 600
    }
  },
  props: {
    images: Array
  },
  computed: {
    sizeStyle () {
      return {
        width: this.imageWidth + 'px',
        height: this.imageHeight + 'px'
      }
    },
    map2Style () {
      return {
        clip: `rect(0px,${this.clipWidth},100vh,0px)`
      }
    }
  },
  mounted () {
    this.onResize()
    window.addEventListener('resize', this.onResize, false)
    let dragger = new Drag({
      box: this.$refs.bar,
      direction: 'h'
    })
    dragger.onmoving = (e, l) => {
      l += 20
      this.clipWidth = l - (this.W - this.imageWidth) / 2 + 'px'
    }
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.onResize, false)
  },
  methods: {
    onResize () {
      if (!this.images[0]) return
      this.H = document.documentElement.clientHeight
      this.W = document.documentElement.clientWidth
      let imageH = this.images[0].height
      let imageW = this.images[0].width
      this.radio = Math.min(this.H / imageH, this.W / imageW)
      this.imageHeight = this.radio * imageH
      this.imageWidth = this.radio * imageW
      this.clipWidth = this.imageWidth / 2 + 'px'
    }
  }
}
</script>

<style lang="scss" scoped>
.compare-mask {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: black;
  .close {
    position: absolute;
    z-index: 2;
    top: 10px;
    right: 10px;
    height: 40px;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(22, 22, 22, 0.4);
    cursor: pointer;
    color: white;
    font-size: 20px;
  }
  .images {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    &.overlap {
      .hander-bar {
        display: block;
      }
      .image {
        position: absolute;
        max-width: 100%;
        max-height: 100%;
      }
    }
    .image {
      width: 50%;
    }
  }

  .hander-bar {
    display: none;
    position: absolute;
    left: calc(50vw - 20px);
    top: calc(50vh - 20px);
    height: 40px;
    width: 40px;
    border-radius: 50%;
    z-index: 1;
    -webkit-user-select: none;
    user-select: none;
    cursor: move;
    font-size: 20px;
    padding: 8px 10px;
    box-sizing: border-box;
    background: white url(https://avatars1.githubusercontent.com/u/11973454?s=40&v=4) no-repeat center/cover;
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 1);
  }

  .hander-bar:before,
  .hander-bar:after {
    content: "";
    position: absolute;
    top: 43px;
    left: 18px;
    width: 4px;
    height: calc(50vh - 23px);
    background-color: white;
    z-index: -1;
  }

  .hander-bar:after {
    bottom: 43px;
    top: auto;
  }
}
</style>
