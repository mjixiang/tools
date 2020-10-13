import Vue from 'vue'
import Router from 'vue-router'
import {setDocumentTitle} from 'utils/index'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: resolve => require(['views/index'], resolve),
      meta: {
        title: '工具'
      }
    },
    {
      path: '/qrcode',
      name: 'qrcode',
      component: resolve => require(['views/qrcode'], resolve),
      meta: {
        title: '批量生成二维码'
      }
    },
    {
      path: '/exif',
      name: 'exif',
      component: resolve => require(['views/exif'], resolve),
      meta: {
        title: '在地图中显示照片'
      }
    },
    {
      path: '/compare',
      name: 'compare',
      component: resolve => require(['views/compare'], resolve),
      meta: {
        title: '图片对比'
      }
    },
    {
      path: '/disk',
      name: 'disk',
      component: resolve => require(['views/disk/index'], resolve),
      meta: {
        title: '图库'
      }
    },
    {
      path: '/disk/upload',
      name: 'disk-upload',
      component: resolve => require(['views/disk/upload'], resolve),
      meta: {
        title: '上传图片'
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    setDocumentTitle(to.meta.title)
  }
  next()
})

export default router
