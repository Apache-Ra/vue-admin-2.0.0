<template>
  <div id="app">
    <el-container class="app-container">
      <el-header class="header-container">
        <HeaderBar></HeaderBar>
      </el-header>
      <el-container class="container">
        <el-aside width="200px" class="aside-container" v-if="loginStatus">
          <LeftBar></LeftBar>
        </el-aside>
        <el-main class="main-container">
          <router-view  v-if="isRouterAlive"></router-view>
        </el-main>
      </el-container>
    </el-container>

  </div>
</template>

<script>
import {mapState} from 'vuex'
import LocalStorage from './kit/LocalStorage'
import HeaderBar from './view/layout/headerBar'
import LeftBar from './view/layout/leftBar'
export default {
  name: 'App',
  components: {HeaderBar, LeftBar},
  computed: {
    ...mapState({
      loginStatus: state => state.vux.loginStatus,
    })
  },
  provide() {
    return {
      reload: this.reload
    }
  },
  data() {
    return {
      isRouterAlive: true,
    }
  },
  created () {

  },
  methods: {
    reload() {
      let vue = this
      vue.isRouterAlive = false
      //在修改数据之后使用 $nextTick，则可以在回调中获取更新后的 DOM
      vue.$nextTick(() => {
        vue.isRouterAlive = true
      })
    }
  }
}
</script>

<style lang="less">
@import "../node_modules/element-ui/lib/theme-chalk/index.css";
@import "./assets/theme/customize.elementUI";
@import "./assets/theme/base.less";
</style>
