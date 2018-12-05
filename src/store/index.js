import Vue from 'vue'
import Vuex from 'vuex'
import LocalStorage from '../kit/LocalStorage'
Vue.use(Vuex)
/**
 * 状态监听
 */
const store = new Vuex.Store({})
// 获取存储的站点信息
const UNCIOM_setting = LocalStorage.getKey('UNCIOM_setting');
// 获取站点信息的登录状态
const loginStatus = UNCIOM_setting.loginStatus;
// 获取站点信息激活的菜单
const activeMenu = (UNCIOM_setting.activeMenu) ? UNCIOM_setting.activeMenu: 'administratorAccount';
store.registerModule('vux', {
  state: {
    loginStatus: loginStatus,
    showLoader: false,
    activeMenu: activeMenu
  },
  mutations: {
    // 全局Loading
    uploadShowLoader(state, showLoader) {
      state.showLoader = showLoader
    },
    // 登录状态
    uploadLoginStatus(state, loginStatus) {
      state.loginStatus = loginStatus
    },
    // 开启状态的菜单
    uploadActiveMenu(state, activeMenu) {
      state.activeMenu = activeMenu
    }
  },
  getters: {},
  actions: {},
  moudles: {}
})
/**
 * 出口
 */
export default store
