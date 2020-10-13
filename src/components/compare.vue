<template>
  <div class="mask">
    <div id="map1" class="map" :style="sizeStyle"></div>
    <div id="map2" class="map" :style="[sizeStyle, map2Style]"></div>
    <div ref="bar" class="bar"></div>
    <div @click="onBtnClick" class="button">×</div>
  </div>
</template>

<script>
import Drag from 'utils/drag'
export default {
  data () {
    return {
      size: 0,
      clipWidth: '50vw'
    }
  },
  props: {
    url: String
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
      this.clipWidth = l - (this.W - this.size) / 2 + 'px'
    }
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.onResize, false)
  },
  computed: {
    sizeStyle () {
      return {
        width: this.size + 'px',
        height: this.size + 'px',
        backgroundImage: `url(${this.url || 'http://assets.mjixiang.top/disk/images/0351afba-af7f-4a67-8e19-632ee2b9cad4_1024x512.jpg'})`
      }
    },
    map2Style () {
      return {
        clip: `rect(0px,${this.clipWidth},100vh,0px)`
      }
    }
  },
  methods: {
    onResize () {
      this.H = document.documentElement.clientHeight
      this.W = document.documentElement.clientWidth
      this.size = Math.min(this.H, this.W, 1024)
      this.clipWidth = this.size / 2 + 'px'
    },
    onBtnClick () {
      this.$emit('close')
    }
  }
}

</script>

<style lang="scss" scoped>
.mask {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  width: 100vw;
  height: 100vh;
  background-color: black;
}
.map {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 512px;
  height: 512px;
  transform: translate3d(-50%, -50%, 0);
  z-index: 0;
  background: black no-repeat top left/200% 100%;
}

#map2 {
  background-position: top right;
}

.bar {
  position: absolute;
  left: calc(50vw - 20px);
  top: calc(50vh - 20px);
  height: 40px;
  width: 40px;
  border-radius: 50%;
  z-index: 10;
  -webkit-user-select: none;
  user-select: none;
  cursor: move;
  font-size: 20px;
  padding: 8px 10px;
  box-sizing: border-box;
  background: white url(../common/images/logo.png) no-repeat center/80%;
  box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.4);
}

.bar:before,
.bar:after {
  content: "";
  position: absolute;
  top: 43px;
  left: 18px;
  width: 4px;
  height: calc(50vh - 23px);
  background-color: white;
  z-index: -1;
}

.bar:after {
  bottom: 43px;
  top: auto;
}

.button {
  position: fixed;
  z-index: 10;
  top: 10px;
  right: 10px;
  height: 14vw;
  width: 14vw;
  max-width: 40px;
  max-height: 40px;
  color: white;
  font-size: 36px;
  line-height: 36px;
  text-align: center;
}
</style>
