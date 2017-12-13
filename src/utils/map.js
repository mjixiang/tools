import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const black = L.tileLayer('http://{s}.tiles.mapbox.com/v3/spatialdev.map-c9z2cyef/{z}/{x}/{y}.png', {maxZoom: 19})
const road = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {maxZoom: 19})
// const google = L.tileLayer('http://mt{s}.google.cn/vt/lyrs=m&hl=zh-CN&gl=cn&x={x}&y={y}&z={z}', {maxZoom: 19, subdomains: '123'})
// const satellite = L.tileLayer('http://mt{s}.google.cn/vt/lyrs=s&hl=zh-CN&gl=cn&x={x}&y={y}&z={z}', {maxZoom: 19, subdomains: '123'})
const tianMap = L.tileLayer('http://t7.tianditu.com/DataServer?T=vec_w&x={x}&y={y}&l={z}', {maxZoom: 19, subdomains: '1234567'})
const areaName = L.tileLayer('http://t{s}.tianditu.com/DataServer?T=cva_w&x={x}&y={y}&l={z}', {maxZoom: 19, subdomains: '1234567'})
const baseMaps = {
  '炫酷黑': black,
  '天地图': tianMap,
  '道路图': road
}
const overlays = {
  '地名': areaName
}

const getMap = (container) => {
  let map = L.map(container, {
    center: [32.76880048488168, 97.119140625],
    zoom: 3,
    layers: [black],
    zoomControl: false,
    attributionControl: false
  })
  L.control.layers(baseMaps, overlays).addTo(map)
  return map
}

export {getMap, L}
