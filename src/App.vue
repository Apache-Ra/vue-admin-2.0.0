<template>
  <div id="app">
    <router-view  v-if="isRouterAlive"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
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
