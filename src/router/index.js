import Vue from 'vue'
import VueRouter from 'vue-router'
import LocalStorage from '../kit/LocalStorage'
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
  mode: 'history',
  base: __dirname,
  likActiveClass: 'link-active',
  scrollBehavior,
  routes: [
    {
      path: '/',
      name: 'login',
      component: resolve => require(['../view/login.vue'], resolve),
      meta: {title: '登陆', requireAuth: false}
    }, {
      path: '/administratorAccount',
      name: 'administratorAccount',
      component: resolve => require(['../view/userManagement/administratorAccount.vue'], resolve),
      meta: {title: '账户管理员', requireAuth: true}
    }, {
      path: '/applicationAccount',
      name: 'applicationAccount',
      component: resolve => require(['../view/userManagement/applicationAccount.vue'], resolve),
      meta: {title: '应用账户', requireAuth: true}
    }, {
      path: '/legalIP',
      name: 'legalIP',
      component: resolve => require(['../view/userManagement/legalIP.vue'], resolve),
      meta: {title: '用户合法IP', requireAuth: true}

    }, {
      path: '/basicInformation',
      name: 'basicInformation',
      component: resolve => require(['../view/channelManagement/basicInformation.vue'], resolve),
      meta: {title: '基本信息', requireAuth: true}
    }, {
      path: '/fuseRule',
      name: 'fuseRule',
      component: resolve => require(['../view/channelManagement/fuseRule.vue'], resolve),
      meta: {title: '设定规则', requireAuth: true}
    }, {
      path: '/blacklist',
      name: 'blacklist',
      component: resolve => require(['../view/channelManagement/blacklist.vue'], resolve),
      meta: {title: '黑名单', requireAuth: true}
    }, {
      path: '/sendingTime',
      name: 'sendingTime',
      component: resolve => require(['../view/channelManagement/sendingTime.vue'], resolve),
      meta: {title: '发送时间', requireAuth: true}
    }, {
      path: '/originalInformation',
      name: 'originalInformation',
      component: resolve => require(['../view/messageInquire/originalInformation.vue'], resolve),
      meta: {title: '原始信息', requireAuth: true}
    }, {
      path: '/upstreamSMS',
      name: 'upstreamSMS',
      component: resolve => require(['../view/messageInquire/upstreamSMS.vue'], resolve),
      meta: {title: '短信配置', requireAuth: true}
    }, {
      path: '/sendTest',
      name: 'sendTest',
      component: resolve => require(['../view/sendTest/sendTest.vue'], resolve),
      meta: {title: '发送管理', requireAuth: true}
    }, {
      path: '/operationalIndicator',
      name: 'operationalIndicator',
      component: resolve => require(['../view/operationMonitoring/operationalIndicator.vue'], resolve),
      meta: {title: '运行管理', requireAuth: true}
    }, {
      path: '/SMS_sendingStatus',
      name: 'SMS_sendingStatus',
      component: resolve => require(['../view/runningLog/SMS_sendingStatus.vue'], resolve),
      meta: {title: '短信状态', requireAuth: true}
    }, {
      path: '/SMS_reception',
      name: 'SMS_reception',
      component: resolve => require(['../view/runningLog/SMS_reception.vue'], resolve),
      meta: {title: '短信接收', requireAuth: true}
    }, {
      path: '/apiCallHistory',
      name: 'apiCallHistory',
      component: resolve => require(['../view/runningLog/apiCallHistory.vue'], resolve),
      meta: {title: '调用历史', requireAuth: true}
    }, {
      path: '/waitingQueue',
      name: 'waitingQueue',
      component: resolve => require(['../view/runningLog/waitingQueue.vue'], resolve),
      meta: {title: '队列管理', requireAuth: true}
    }, {
      path: '/projectLog',
      name: 'projectLog',
      component: resolve => require(['../view/runningLog/projectLog.vue'], resolve),
      meta: {title: '日志管理', requireAuth: true}
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
  // 用户是否登录
  const UNCIOM_setting = LocalStorage.getKey('UNCIOM_setting');
  const loginStatus = UNCIOM_setting.loginStatus;
  // 访问的页面需要登录权限
  if (to.meta.requireAuth) {
    // 判断用户是否已经登录
    if (loginStatus){
      next()
    } else {
      next({
        path: '/',
        query: {redirectUrl: to.fullPath}
      })
    }
  } else {
    next()
  }
})
/**
 * 路由输出
 */
export default router
