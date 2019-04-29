<template>
  <div class='tab'>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane v-for="(item, key) in tabList"
                   :key="key"
                   :label="item.label"
                   :name="item.name">
        <!--你的页面--START-->
        <tabCon :tabData="item"></tabCon>
        <!--你的页面--END-->
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  // tab 滑动门假数据
  const tabList = [
    {id: 1, label: '用户管理', name: 'first'},
    {id: 2, label: '用户管理', name: 'second'},
    {id: 3, label: '用户管理', name: 'third'},
    {id: 4, label: '用户管理', name: 'fourth'}
  ]
  import {mapState} from 'vuex'
  // 自定义组件
  import tabCon  from './tabCon'
  export default {
    // 组建的名称
    title: '',
    name: 'tab',
    computed: {
      ...mapState({
        // showLoader: state => state.vux.showLoader,
      })
    },
    props: {},
    // 组建刷新
    inject: ['reload'],
    // 挂载组建
    components: {tabCon},
    data() {
      return {
        tabList: tabList,
        activeName: 'second'
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
      handleClick(tab, event) {
        console.log(tab, event);
      }
    },
    // 离开路由的操作
    destroyed() {
    }
  }
</script>

<style scoped lang='less'>
.tab{height: 100%;}
  .el-tabs{height: 100%;}

</style>
