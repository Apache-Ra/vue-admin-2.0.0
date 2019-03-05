<template>
  <div class='application'>
    <!--轮播图--START-->
    <SwipeBar></SwipeBar>
    <!--轮播图--END-->

    <!--菜单栏--START-->
    <GridBar></GridBar>
    <!--菜单栏--END-->

    <ListBar></ListBar>
  </div>
</template>

<script>
  import SwipeBar from './swiperBar'
  import GridBar from './gridBar'
  import ListBar from '../message/listBar'
  export default {
    // 组建的名称
    title: '应用',
    name: 'application',
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
    components: {SwipeBar, GridBar, ListBar},
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
