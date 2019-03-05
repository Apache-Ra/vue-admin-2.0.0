<template>
  <div id="app">
    <!--<HeaderBar></HeaderBar>-->
    <router-view  v-if="isRouterAlive"></router-view>
    <FooterBar></FooterBar>
  </div>
</template>

<script>
  import HeaderBar from './components/layout/headerBar'
  import FooterBar from './components/layout/footerBar'
export default {
  name: 'App',
  components: {HeaderBar, FooterBar},
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
</style>
