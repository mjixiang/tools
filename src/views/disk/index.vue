<template>
  <div style="height: 100vh;overflow: auto;">
    <div class="photo-album">
      <div
        @click="onItemClick(item)"
        v-for="item in files"
        :key="item.key"
        class="image"
        :style="{backgroundImage: 'url('+assetsUrl + item.key+'?imageView2/1/w/200/h/200)'}"
      ></div>
    </div>
    <infiniteScroll
      @load="onLoadMore"
      :loading="isLoading"
      :endText="!files.length ? '点击右下角按钮上传第一张照片' : ''"
      :end="isEnd"
    />
    <div
      @click="onBtnClick"
      class="button"
    >+</div>
  </div>
</template>

<script>
import { GetFileList } from 'apis/disk'
import infiniteScroll from 'components/infiniteScroll'
export default {
  components: { infiniteScroll },
  data () {
    return {
      assetsUrl: 'http://assets.mjixiang.top/',
      currentIx: 0,
      tabs: [
        { text: '全部' },
        { text: '图片' },
        { text: '音视频' }
      ],
      query: {
        marker: '',
        limit: 30
      },
      files: [],
      isLoading: false
    }
  },
  computed: {
    isEnd () {
      return this.query.marker === -1
    },
    images () {
      return this.files.map(item => this.assetsUrl + item.key)
    }
  },
  created () {
    this.getFileList()
    // setTimeout(this.getFileList, 3000)
  },
  methods: {
    onItemClick (item) {
      window.wx.previewImage({
        current: this.assetsUrl + item.key,
        urls: this.images
      })
    },
    onBtnClick () {
      this.$router.push({ name: 'disk-upload' })
    },
    onLoadMore () {
      if (this.isEnd || this.isLoading) return
      this.getFileList()
    },
    async getFileList () {
      this.isLoading = true
      try {
        let rs = await GetFileList(this.query)
        this.isLoading = false
        this.files = this.query.marker ? this.files.concat(rs.items) : rs.items
        this.query.marker = rs.marker || -1
      } catch (err) {
        this.isLoading = false
        this.query.marker = -1
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  height: 14vw;
  width: 14vw;
  max-width: 50px;
  max-height: 50px;
  border-radius: 100%;
  background-color: #20a0ff;
  color: white;
  font-size: 40px;
  text-align: center;
  line-height: 40px;
  box-shadow: 0 0 8px #20a0ff;
}
.photo-album {
  padding-left: 2px;
  padding-top: 2px;
  display: flex;
  flex-wrap: wrap;
}
.image {
  width: calc(25% - 2.5px);
  padding-top: calc(25% - 2.5px);
  margin-right: 2px;
  margin-bottom: 2px;
  background: #f2f2f2 no-repeat center/cover;
}
</style>
