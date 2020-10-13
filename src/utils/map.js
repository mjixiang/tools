import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const satellite = L.tileLayer(
  'http://mt{s}.google.cn/vt/lyrs=s&hl=zh-CN&gl=cn&x={x}&y={y}&z={z}',
  { maxZoom: 21, subdomains: '123', zIndex: 1 }
)
const areaName = L.tileLayer(
  'https://t{s}.tianditu.gov.cn/DataServer?T=cia_w&x={x}&y={y}&l={z}&tk=0bd654cc9e61e8f307b0b3599f61bfa1',
  { maxZoom: 21, subdomains: '01234567', zIndex: 3 }
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
