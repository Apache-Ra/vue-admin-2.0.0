import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
/**
 * 状态监听
 */
const store = new Vuex.Store({})
store.registerModule('vux', {
  state: {
    showLoader: false
  },
  mutations: {
    uploadShowLoader(state, showLoader){
      state.showLoader = showLoader
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
