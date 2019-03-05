<template>
  <div class='listBar'>
    <panel
      :header="title"
      :list="list"
      :type="type"></panel>
  </div>
</template>

<script>
  import { Panel, Group } from 'vux'
  const list = [
    {
      src: '', title: '',
      desc: '您的账户实名认证通过啦,您的账户实名认证通过啦,您的账户实名认证通过啦,您的账户实名认证通过啦',
      url: '/',
      meta: {
        source: '置顶',
        date: '2019-03-03',
        other: 'Ra'
      }
    }, {
      src: '',
      title: '',
      desc: '头像审核通过啦，头像审核通过啦，头像审核通过啦，头像审核通过啦，头像审核通过啦，头像审核通过啦',
      url: '/',
      meta: {
        source: '置顶',
        date: '2019-03-03',
        other: 'Ra'
      }
    }, {
      src: '',
      title: '',
      desc: '注册成功，注册成功，注册成功，注册成功，注册成功，注册成功，注册成功，注册成功，注册成功',
      url: '/',
      meta: {
        source: '置顶',
        date: '2019-03-03',
        other: 'Ra'
      }
    }, {
      src: '',
      title: '',
      desc: '注册成功，注册成功，注册成功，注册成功，注册成功，注册成功，注册成功，注册成功，注册成功',
      url: '/',
      meta: {
        source: 'new',
        date: '2019-03-03',
        other: 'Ra'
      }
    }, {
      src: '',
      title: '',
      desc: '注册成功，注册成功，注册成功，注册成功，注册成功，注册成功，注册成功，注册成功，注册成功',
      url: '/',
      meta: {
        source: 'new',
        date: '2019-03-03',
        other: 'Ra'
      }
    }, {
      src: '',
      title: '',
      desc: '注册成功，注册成功，注册成功，注册成功，注册成功，注册成功，注册成功，注册成功，注册成功',
      url: '/',
      meta: {
        source: 'new',
        date: '2019-03-03',
        other: 'Ra'
      }
    }, {
      src: '',
      title: '',
      desc: '注册成功，注册成功，注册成功，注册成功，注册成功，注册成功，注册成功，注册成功，注册成功',
      url: '/',
      meta: {
        source: 'new',
        date: '2019-03-03',
        other: 'Ra'
      }
    }, {
      src: '',
      title: '',
      desc: '注册成功，注册成功，注册成功，注册成功，注册成功，注册成功，注册成功，注册成功，注册成功',
      url: '/',
      meta: {
        source: 'new',
        date: '2019-03-03',
        other: 'Ra'
      }
    }, {
      src: '',
      title: '',
      desc: '注册成功，注册成功，注册成功，注册成功，注册成功，注册成功，注册成功，注册成功，注册成功',
      url: '/',
      meta: {
        source: 'new',
        date: '2019-03-03',
        other: 'Ra'
      }
    }
  ]
  export default {
    // 组建的名称
    title: '列表',
    name: 'listBar',
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
        title: '',
        type: '5',
        list: list
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
.listBar{margin-bottom: 55px;}
</style>
