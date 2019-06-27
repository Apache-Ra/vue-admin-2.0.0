<template>
  <div class='footerBar'>
    <tabbar>
      <tabbar-item v-for="(item, key) in footerBarList"
                   v-model="active"
                   :key="key"
                   :link="item.link"
                   :badge="item.badge"
                   @on-item-click="onItemClick(item)">
        <img slot="icon" :src="item.src">
        <span slot="label">{{item.label}}</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>
<script>
  import {Tabbar, TabbarItem} from 'vux'
// Footer
const footerBarList = [
  {src: '', label: '首页',link: '/', badge: ''},
  {src: '', label: '应用',link: '/application', badge: ''},

  {src: '', label: '消息',link: '/message', badge: ''},
  {src: '', label: '我的',link: '/mine', badge: ''}
]
export default {
  // 组建的名称
  title: '底部组件',
  name: 'footerBar',
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
  components: {Tabbar, TabbarItem},
  data() {
    return {
      footerBarList: footerBarList,
      active: '1'
    }
  },
  // 初始化记载
  created() {
  },
  // DOM加载完毕执行操作
  mounted() {
  },
  // 事件处理
  methods: {
    onItemClick(item) {
console.log(item)
    }
  },
  // 离开路由的操作
  destroyed() {
  }
}
</script>

<style scoped lang='less'>
.footerBar{position: fixed;bottom: 0;width: 100%;}
</style>
