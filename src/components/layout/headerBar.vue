<template>
  <div class='headerBar'>
    <x-header></x-header>
  </div>
</template>
<script>
import { XHeader } from 'vux'
export default {
  // 组建的名称
  title: '顶部组件',
  name: 'headerBar',
  /**
   * 子组建传值
   * objData:{
   *   type: Object,
   *   default: () => ({ })
   * }
   * arrData:{
   *   type: Array,
   *   twoWay: true,
   *   default: []
   * }
   */
  props: {},
  // 组建刷新
  inject: ['reload'],
  // 挂在组建
  components: {XHeader},
  data() {
    return {}
  },
  // 初始化记载
  created() {
  },
  // DOM加载完毕执行操作
  mounted() {
  },
  // 事件处理
  methods: {},
  // 离开路由的操作
  destroyed() {
  }
}
</script>

<style scoped lang='less'>

</style>
