import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const satellite = L.tileLayer(
  'http://mt{s}.google.cn/vt/lyrs=s&hl=zh-CN&gl=cn&x={x}&y={y}&z={z}',
  { maxZoom: 19, subdomains: '123', zIndex: 1 }
)
const areaName = L.tileLayer(
  'http://t{s}.tianditu.com/DataServer?T=cia_w&x={x}&y={y}&l={z}&tk=d29e6dbe443138767f824c9461b138df',
  { maxZoom: 19, subdomains: '1234567', zIndex: 3 }
)

const CreateMap = container => {
  let map = L.map(container, {
    center: [32.76880048488168, 97.119140625],
    zoom: 3,
    layers: [satellite, areaName],
    zoomControl: false,
    attributionControl: false
  })
  return map
}

export { CreateMap, L }
