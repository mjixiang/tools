<template>
  <div class="exif-container">
    <div id="map"></div>
    <footer>
      <transition-group name="image" tag="div" :style="{width: (images.length + 1) * 70 + 10 + 'px'}" class="image-items">
        <div @click="choose" :key="-1" class="image-item xa-flex-center">+</div>
        <div @click="onImageClick(image)" v-for="image in images" :key="image.bolb" :style="{backgroundImage: 'url('+ image.bolb +')'}" class="image-item"></div>
      </transition-group>
    </footer>
  </div>
</template>

<script>
import FileUpload from 'utils/fileUpload'
import { L, getMap } from 'utils/map'
let map = null
let featureGroup = null
let fu = new FileUpload()
export default {
  name: 'exif',
  data () {
    return {
      images: []
    }
  },
  computed: {

  },
  methods: {
    async choose () {
      try {
        let files = await fu.chooseImages()
        for (let file of files) {
          try {
            let image = await fu.getImageBaseExif(file)
            this.images.push(image)
            var height = 220
            var width = 220
            var rate = Math.min(220 / image.width, 220 / image.height)
            height = image.height * rate
            width = image.width * rate
            image.marker = L.marker(image, { icon: L.divIcon({ html: `<div class="my-div-icon" style="background-image:url(${image.bolb})"></div>`, iconSize: [32, 32], iconAnchor: [16, 16], popupAnchor: [0, -16] }) }).bindPopup(`
              <div class="popup-img" style="height:${height}px;width:${width}px;line-height:${height}px;">
                <span class="time">${image.time}</span>
                <img style="height:${height}px;width:${width}px;" src="${image.bolb}">
              </div>
            `, { closeButton: false, autoClose: true, className: 'popup-diy' }).on('popupopen', function (e) {
            }).addTo(map)
            featureGroup.addLayer(image.marker)
            map.fitBounds(featureGroup.getBounds())
          } catch (err) {
            console.log(err.message)
          }
        }
      } catch (err) {
        console.log(err.message)
      }
    },
    onImageClick (image) {
      map.panTo(image, { animate: true })
      image.marker.togglePopup()
    }
  },
  mounted () {
    map = getMap('map')
    featureGroup = L.featureGroup([]).addTo(map)
  }
}
</script>

<style lang="scss">
.exif-container {
  height: 100%;
}
#map {
  height: 100%;
  width: 100%;
  z-index: 0;
  position: relative;
}
#box {
  height: 300px;
  width: 300px;
  border-radius: 8px;
  border: 5px #ccc dashed;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ccc;
  font-size: 100px;
  & > img {
    max-height: 300px;
    max-width: 300px;
  }
}
footer {
  height: 80px;
  width: 100%;
  position: absolute;
  z-index: 1;
  bottom: 0;
  overflow-x: auto;
  overflow-y: hidden;
}
.image-items {
  padding: 5px;
  overflow: hidden;
  .image-item {
    height: 60px;
    width: 60px;
    background: #f2f2f2 no-repeat center;
    background-size: cover;
    float: left;
    margin: 5px;
    transition: 0.3s;
    &:first-child {
      font-size: 40px;
      font-weight: bold;
      color: #aaa;
      &:active {
        background-color: #f2f2f2;
      }
    }
  }
}
.image-enter,
.image-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.image-leave-active {
  position: absolute;
}
.popup-img {
  overflow: hidden;
  background: #f3f3f3;
  text-align: center;
  color: #aaa;
  position: relative;
  .time {
    position: absolute;
    width: 100%;
    height: 30px;
    line-height: 30px;
    bottom: 0;
    left: 0;
    text-align: center;
    color: white;
    text-shadow: 0 0 8px black;
  }
  img {
    max-width: 220px;
    max-height: 220px;
    display: block;
    margin: auto;
  }
}
.popup-diy .leaflet-popup-content {
  margin: 3px;
  max-width: 220px;
  max-height: 220px;
}
.popup-diy .leaflet-popup-content-wrapper {
  border-radius: 0px !important;
}
.popup-diy .leaflet-popup-tip {
  height: 12px;
  width: 12px;
  margin-top: -8px;
}
.leaflet-div-icon {
  border: 0 !important;
  background-color: #f2f2f2 !important;
}
.my-div-icon {
  height: 32px;
  width: 32px;
  background: #f2f2f2 no-repeat center;
  background-size: cover;
}
</style>

