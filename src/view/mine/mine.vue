<template>
  <div class='mine'>
    <BlurBar></BlurBar>

    <group title="基本信息">
      <cell title="A" :value="12"></cell>
      <cell title="A" :value="12"></cell>

      <cell title="C" is-link></cell>
    </group>

    <group title="设置中心">
      <cell title="A" is-link></cell>
      <cell title="C" is-link></cell>
    </group>
  </div>
</template>

<script>
  import BlurBar from './blurBar'
  import {Group, Cell, CellBox} from 'vux'
  export default {
    // 组建的名称
    title: '个人中心',
    name: 'mine',
    /**
     * 子组建传值
     * objData: {
     *   type: Object,
     *   default: () => ({ })
     * }
     * arrData: {
     *   type: Array,
     *   twoWay: true,
     *   default: []
     * }
     */
    props: {},
    // 组建刷新
    inject: ['reload'],
    // 挂在组建
    components: {BlurBar, Group, Cell, CellBox},
    data() {
      return {
      }
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
