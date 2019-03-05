<template>
    <div class='message'>
      <ListBar></ListBar>
    </div>
</template>

<script>
  import ListBar from './listBar'
    export default {
        // 组建的名称
        title: '消息',
        name: 'message',
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
        components: {ListBar},
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
