export default {
  data () {
    return {
      scroller: null
    }
  },
  mounted () {
    this.scroller = this.$el.parentNode || document.body
    this.$bindScroll()
  },
  methods: {
    $bindScroll () {
      if (!this.scroller) return
      this._handleScroll = (e) => {
        if (this.onScroll) this.onScroll()
      }
      this.scroller.addEventListener('scroll', this._handleScroll)
    },
    $unbindScroll (scroller) {
      scroller = scroller || this.scroller
      if (this._handleScroll) scroller.removeEventListener('scroll', this._handleScroll)
    }
  },
  beforeDestroy () {
    this.$unbindScroll()
  },
  watch: {
    scroller (scroller, oldScroller) {
      if (scroller === oldScroller) return
      this.$unbindScroll(oldScroller)
      this.$bindScroll(scroller)
    }
  }
}
