<template>
  <div class='home'>
    <listBar></listBar>
  </div>
</template>

<script>
  import listBar from './listBar'
    export default {
        // 组建的名称
        title: '首页',
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
        components: {listBar},
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
