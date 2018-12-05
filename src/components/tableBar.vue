<template>
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column v-for="(th, key) in tableTitleData"
                     v-if="!th.operating"
                     :key="key"
                     :prop="th.name"
                     :label="th.label"></el-table-column>
    <el-table-column fixed="right" v-else :label="th.label">
      <template slot-scope="scope">
        <el-button size="mini"
                   v-for="(item, index) in th.operating"
                   @click.native="operating(scope.row, item)"
                   :key="index" :type="item.type">{{item.label}}</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>

export default {
  title: '表格',
  message: '常规表格',
  name: 'tableBar',
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
