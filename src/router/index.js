import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
/**
 *  配置滚动条的位置
 *  通过这个这个属性（是个函数），可以让应用像浏览器的原生表现那样，在按下 后退/前进 按钮时，简单地让页面滚动到顶部或原来的位置。
 */
const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition
  } else {
    return {x: 0, y: 0}
  }
}
/**
 *  路由配置
 *  @mode: 配置路由模式（"hash" | "history" | "abstract"）
 *  @base: 如果整个单页应用服务在 /app/ 下，然后 base 就应该设为 "/app/"。
 *  @linkActiveClass: 点击触发的class
 *  @scrollBehavior: 配置滚动条的位置
 */
const router = new VueRouter({
  // mode: 'history',
  base: __dirname,
  likActiveClass: 'link-active',
  scrollBehavior,
  routes: [
    {
      path: '/',
      name: 'application',
      component: resolve => require.ensure([], () => resolve(require('@/view/home/home')), 'home'),
      meta: {title: '首页', requireAuth: false}
    }, {
      path: '/application',
      name: 'application',
      component: resolve => require.ensure([], () => resolve(require('@/view/application/application')), 'application'),
      meta: {title: '应用', requireAuth: false}
    }, {
      path: '/release',
      name: 'release',
      component: resolve => require.ensure([], () => resolve(require('@/view/releaseInfo/release')), 'release'),
      meta: {title: '发布', requireAuth: false}
    }, {
      path: '/message',
      name: 'message',
      component: resolve => require.ensure([], () => resolve(require('@/view/message/message')), 'message'),
      meta: {title: '消息', requireAuth: false}
    }, {
      path: '/mine',
      name: 'mine',
      component: resolve => require.ensure([], () => resolve(require('@/view/mine/mine')), 'message'),
      meta: {title: '消息', requireAuth: false}
    }
  ]
})
/**
 *  修改网站title的值
 */
router.afterEach((transition) => {
  if (transition.meta.title) {
    document.title = transition.meta.title
  }
})
/**
 * 路由拦截器
 * 1.判断该路由是否需要登录权限
 * 2.通过vuex state获取当前的token是否存在
 * 3.将跳转的路由path作为参数，登录成功后跳转到该路由
 */
router.beforeEach((to, from, next) => {
  next()
})
/**
 * 路由输出
 */
export default router
