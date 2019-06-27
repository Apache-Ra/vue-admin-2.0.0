<template>
  <div id="app" class="layout">
    <view-box ref="viewBox">
      <HeaderBar class="headerBar"></HeaderBar>
      <router-view v-if="isRouterAlive" class="contentBar"></router-view>
      <FooterBar class="footerBar"></FooterBar>
    </view-box>
  </div>
</template>

<script>
  import {ViewBox} from 'vux'
  import HeaderBar from './components/layout/headerBar'
  import FooterBar from './components/layout/footerBar'

  export default {
    name: 'App',
    components: {ViewBox, HeaderBar, FooterBar},
    provide() {
      return {
        reload: this.reload
      }
    },
    data() {
      return {
        isRouterAlive: true
      }
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
    },
  }
</script>

<style lang="less">
  @import "./assets/theme/base.less";

  .layout {
    .headerBar {
      width: 100%;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 100;
    }

    .contentBar {
      padding-top: 50px;
    }

    .footerBar {
    }
  }
</style>
