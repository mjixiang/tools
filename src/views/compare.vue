<template>
  <div>
    <div class="padding"></div>
    <div class="preview-items">
      <div class="preview-item" :class="{ empty: !leftImage }">
        <img v-if="leftImage" :src="leftImage.src" class="preview-image" />
        <div class="button" @click="chooseImages(0)">
          {{ leftImage ? "更换图片" : "添加图片" }}
        </div>
      </div>
      <div class="preview-item" :class="{ empty: !rightImage }">
        <img v-if="rightImage" :src="rightImage.src" class="preview-image" />
        <div class="button" @click="chooseImages(1)">
          {{ rightImage ? "更换图片" : "添加图片" }}
        </div>
      </div>
    </div>
    <div class="tip">请确保两张图片尺寸一致</div>
    <div
      @click="startCompare"
      class="footer-button button"
      :style="{ opacity: compareImages.length >= 2 ? 1 : 0.6 }"
    >
      开始对比
    </div>
    <ImagesCompare
      v-if="isStartCompare"
      @close="isStartCompare = false"
      :images="compareImages"
    />
  </div>
</template>

<script>
import FileUpload from 'utils/fileUpload'
import ImagesCompare from 'components/ImagesCompare'
export default {
  components: { ImagesCompare },
  data () {
    return {
      isStartCompare: false,
      leftImage: null,
      rightImage: null
    }
  },
  computed: {
    compareImages () {
      let imgs = []
      if (this.leftImage) imgs[0] = this.leftImage
      if (this.rightImage) imgs[1] = this.rightImage
      return imgs
    }
  },
  mounted () {
    this.uploader = new FileUpload()
  },
  methods: {
    async chooseImages (index) {
      let files = await this.uploader.chooseImages()
      if (index === 1) {
        let image = await FileUpload.getImageBaseInfo(files[0])
        this.rightImage = image
      } else {
        for (let i = 0; i < files.length; i++) {
          if (i >= 2) break
          let file = files[i]
          let image = await FileUpload.getImageBaseInfo(file)
          if (i === 0) this.leftImage = image
          if (i === 1) this.rightImage = image
        }
      }
    },
    startCompare () {
      if (this.compareImages.length >= 2) {
        this.isStartCompare = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.padding {
  height: 120px;
}
.preview-items {
  width: 630px;
  display: flex;
  flex-wrap: wrap;
  padding: 5px;
  margin: auto;
  .preview-item {
    position: relative;
    width: 300px;
    height: 300px;
    margin: 5px;
    overflow: hidden;
    background-color: #f7f7f7;
    &.empty {
      .button {
        display: block;
      }
    }
    .preview-image {
      display: block;
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
    .button {
      display: none;
      transition: 0.3s;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate3d(-50%, -50%, 0);
    }
    &:hover {
      .preview-image {
        filter: blur(10px);
      }
      .button {
        display: block;
      }
    }
  }
}

.button {
  display: block;
  text-align: center;
  cursor: pointer;
  line-height: 24px;
  padding: 5px 20px;
  font-size: 14px;
  border-radius: 20px;
  user-select: none;
  background-color: mediumseagreen;
  color: white;
  &:hover {
    opacity: 0.8;
  }
}

.footer-button {
  margin: 15px auto;
  padding: 10px 20px;
  border-radius: 4px;
  max-width: 620px;
}

.tip {
  font-size: 13px;
  color: orange;
  margin: auto;
  max-width: 620px;
}

@media (max-width: 700px) {
  .padding {
    display: none;
  }
  .preview-items {
    width: 100%;
    padding: 5px 0;
    margin: 0;
    .preview-item {
      width: 100%;
      height: 220px;
      margin: 5px 0;
    }
  }
  .footer-button {
    margin: 15px;
  }

  .tip {
    margin: 15px;
  }
}
</style>
