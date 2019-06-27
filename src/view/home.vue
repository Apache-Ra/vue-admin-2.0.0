<template>
  <div class='home'>
    <flexbox :gutter="0" wrap="wrap" orient="horizontal">
      <flexbox-item v-for="(item, key) in 8" :key="key" :span="1/2">
        <div class="img_con" @click="activeBox(item)">{{key+1}}</div>
      </flexbox-item>
    </flexbox>
  </div>
</template>

<script>
  import {Flexbox, FlexboxItem} from 'vux'

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
    components: {Flexbox, FlexboxItem},
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
    methods: {
      // 点击进入详情
      activeBox(item){
        console.log(item)
      }
    },
    // 离开路由的操作
    destroyed() {
    }
  }
</script>

<style scoped lang='less'>
  @import '~vux/src/styles/1px.less';

  .home {
    .img_con {
      height: 200px;
      border: 1px solid red;
      margin: 2px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .img_con:active {
      border: 1px solid green;
      background: #CCC;
    }
  }
</style>
