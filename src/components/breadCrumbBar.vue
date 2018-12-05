<template>
  <el-breadcrumb separator="/" class="breadCrumbBar">

    <el-breadcrumb-item v-for="(item, key) in breadCrumbList" :key="key" v-if="!item.routerName">
      <a :href="item.routerName">{{item.name}}</a>
    </el-breadcrumb-item>

    <el-breadcrumb-item v-else>{{item.name}}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
import RouterList from '../router/routerJSON'
import _ from 'lodash'
export default {
  title:'面包屑',
  name: "breadCrumbBar",
  prop:['routerItem'],
  components: {},
  data() {
    return {
      breadCrumbList: []
    }
  },
  created() {
    let vue = this
    _.forEach(RouterList, (item) =>{
      if (item.children) {
        _.forEach(item.children, (item_) =>{
          if (item_.routerName == vue.$route.name) {
            vue.breadCrumbList.push({
              name: item.name
            });
            vue.breadCrumbList.push({
              routerName: item_.routerName,
              name: item_.name
            });
          }
        })
      }
    });
  },
  mounted() {
  },
  methods: {}
}
</script>

<style scoped>

</style>
