<template>
  <el-menu
    router
    :defaultActive="defaultActive"
    :uniqueOpened=true
    class="el-menu-vertical-demo"
    @select="handleSelect"
    @open="handleOpen"
    @close="handleClose">
    <el-submenu v-for="(menu, key) in leftBarList" :key="key" :index="key+''" v-if="menu.children">
      <template slot="title">
        <i class="el-icon-menu"></i>
        <span>{{menu.name}}</span>
      </template>
        <el-menu-item
          v-for="(item, index) in menu.children"
          :key="index"
          :index="item.routerName">{{item.name}}</el-menu-item>
    </el-submenu>

    <el-menu-item :index="menu.routerName" class="el-submenu" v-else>
      <i class="el-icon-menu"></i>
      <span slot="title">{{menu.name}}</span>
    </el-menu-item>

  </el-menu>
</template>
<script>
import {mapState} from 'vuex'
import LocalStorage from '../../kit/LocalStorage'
import RouterList from '../../router/routerJSON'
import _ from 'lodash'
export default {
  title:'右侧菜单栏',
  name: "leftBar",
  components: {},
  computed: {
    ...mapState({
      defaultActive: state => state.vux.activeMenu,
    })
  },
  data() {
    return {
      leftBarList: RouterList
    }
  },
  created() {
    let vue = this
  },
  mounted() {
  },
  methods: {
    handleOpen(key, keyPath) {
    },
    handleClose(key, keyPath) {
    },
    handleSelect(key, keyPath) {
      let vue = this
      // 把当前激活的状态存储到LocalStorage
      let UNCIOM_setting = LocalStorage.getKey('UNCIOM_setting')
      UNCIOM_setting.activeMenu = key
      LocalStorage.setKey('UNCIOM_setting', UNCIOM_setting)
    }
  }
}
</script>

<style scoped>

</style>
