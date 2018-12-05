<template>
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <!--自定义 用户管理/账户管理员,用户名称 userName-->
    <el-table-column v-for="(th, key) in tableTitleData" v-if="(th.customize == 'userName')?true:false" :key="key" :width="(th.width)?th.width:''" :prop="th.name" :label="th.label">
      <template slot-scope="scope">
        <i class="el-icon-star-off"></i>
        <router-link :to="{name: th.replaceName, params: {userName: scope.row.userName}}">{{scope.row.userName}}</router-link>
      </template>
    </el-table-column>
    <!--自定义 用户管理/渠道名称  channelName-->
    <el-table-column v-for="(th, key) in tableTitleData" v-if="(th.customize == 'channelName')?true:false" :key="key" :width="(th.width)?th.width:''" :prop="th.name" :label="th.label">
      <template slot-scope="scope">
          <span class="spanListBar" v-for="(item, key) in scope.row.channelName" :key="key">{{item}}</span>
      </template>
    </el-table-column>

    <!--自定义 渠道管理/基本信息  channelName-->
    <el-table-column v-for="(th, key) in tableTitleData" v-if="(th.customize == 'basicInformation_channelName')?true:false" :key="key" :width="(th.width)?th.width:''" :prop="th.name" :label="th.label">
      <template slot-scope="scope">
        <router-link :to="{name: th.replaceName, params: {channelName: scope.row.channelName}}">{{scope.row.channelName}}</router-link>
      </template>
    </el-table-column>
    <!--自定义 渠道管理/熔断规则  fuseRule-->
    <el-table-column v-for="(th, key) in tableTitleData" v-if="(th.customize == 'basicInformation_fuseRule')?true:false" :key="key" :width="(th.width)?th.width:''" :prop="th.name" :label="th.label">
      <template slot-scope="scope">
        <span>{{scope.row}}</span>
      </template>
    </el-table-column>
    <!--常规TD-->
    <el-table-column v-for="(th, key) in tableTitleData"
                     v-if="!th.customize"
                     :key="key"
                     :width="(th.width)?th.width:''"
                     :prop="th.name"
                     :label="th.label"></el-table-column>
    <!--按钮TD-->
    <el-table-column fixed="right" v-for="(th, key) in tableTitleData"
                     :key="key"
                     :width="(th.width)?th.width:''"
                     v-if="(th.customize == 'button')?true:false"
                     :label="th.label">
      <template slot-scope="scope">
        <el-button v-for="(item, index) in th.operating"
                   :size="(item.size)?item.size: 'mini'"
                   @click.native="operating(scope.row, item)"
                   :key="index" :type="item.type">{{item.label}}</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>

export default {
  title: '表格',
  message: '表格中带有标签超链接',
  name: 'tableLabelBar',
  props: {
    tableTitleData: {
      type: Array,
      twoWay: true,
      default: []
    },
    tableData: {
      type: Array,
      twoWay: true,
      default: []
    }
  },
  components: {},
  data() {
    return {}
  },
  created() {
    let vue = this
  },
  mounted() {
  },
  methods: {
    // 表格操作
    operating (item, e) {
      let vue = this
      vue.$emit('handleTable', item, e);
    }
  }
}
</script>

<style scoped>

</style>
