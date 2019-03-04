<template>
  <div class='messageListBar'>
    <panel
      :header="messageTitle"
      :list="messageList"
      :type="messageType"></panel>
  </div>
</template>

<script>
  import { Panel, Group } from 'vux'
  const messageList = [
    {
      src: '',
      title: '车找人',
      desc: '明天上午8:00-12:00 上海前往昆山，小车（私家车顺路）',
      url: '/component/cell',
      meta: {
        source: '站内信',
        date: '2019-03-03',
        other: 'Ra'
      }
    }, {
      src: '',
      title: '人找车',
      desc: '明天下午江苏南通回上海长宁区域（中山公园附近），两个人，一个行李',
      url: '/component/cell',
      meta: {
        source: '站内信',
        date: '2019-03-03',
        other: 'Ra'
      }
    }
  ]
  export default {
    // 组建的名称
    title: '消息列表组件',
    name: 'messageListBar',
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
    components: {Panel, Group},
    data() {
      return {
        messageTitle: '',
        messageType: '5',
        messageList: messageList
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
