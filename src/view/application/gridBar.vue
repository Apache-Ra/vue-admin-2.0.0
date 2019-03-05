<template>
  <div class='gridBar'>
    <grid
      :show-lr-borders="true"
      :show-vertical-dividers="true"
      :cols="3">

      <grid-item
        v-for="(item, key) in gridList"
        :key="key"
        :link="item.link"
        :label="item.label">
        <badge text="1"></badge>
        <img slot="icon"
             :src="item.ico">
      </grid-item>

    </grid>
  </div>
</template>

<script>
  // 菜单栏
  const gridList = [
    {link: '/', label: 'A', ico: ''},
    {link: '/', label: 'B', ico: ''},
    {link: '/', label: 'C', ico: ''},
    {link: '/', label: 'D', ico: ''},
    {link: '/', label: 'E', ico: ''},
    {link: '/', label: 'F', ico: ''}
  ]
  import {Grid, GridItem, Badge} from 'vux'

  export default {
    // 组建的名称
    title: '首页菜单栏目组件',
    name: 'gridBar',
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
    components: {Grid, GridItem, Badge},
    data() {
      return {
        gridList: gridList
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
  .gridBar {
    .grid-center {
      display: block;
      text-align: center;
      color: #666;
    }

    .weui-grids {
      background-color: #fff;
    }

    .vux-badge-single {
      position: absolute;
      top: 10px;
      right: 30px;
    }
  }
</style>
