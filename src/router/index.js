import Vue from 'vue'
import VueRouter from 'vue-router'
import { routers } from './router'
import store from '../store'
import iView from 'iview'
import { setTitle } from '../common/utils/util'

Vue.use(VueRouter)

// 路由配置
const RouterConfig = {
  // mode: 'history',
  base: '/hteam/',
  routes: routers
}

export const router = new VueRouter(RouterConfig)

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start()
  setTitle(to.meta.title)
  if (!store.state.app.currentUser && to.name !== 'login') {
    next({
      name: 'login'
    })
  } else if (store.state.app.currentUser && to.name === 'login') {
    next({
      name: 'project'
    })
  } else {
    next()
  }
})

router.afterEach(to => {
  iView.LoadingBar.finish()
  window.scrollTo(0, 0)
})
