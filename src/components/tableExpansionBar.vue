<template>
  <el-table :data="tableData" border>
    <el-table-column type="expand">
      <template slot-scope="scope">
        <el-table :data="scope.row.subData" border style="width: 4800px">
          <el-table-column v-for="(th, key) in tableTitleData.subTitle"
                           :key="key"
                           :width="(th.width)?th.width: ''"
                           :prop="th.name"
                           :label="th.label"></el-table-column>
        </el-table>
      </template>
    </el-table-column>
    <el-table-column v-for="(th, key) in tableTitleData.tableTitle"
                     width="200"
                     :key="key"
                     :prop="th.name"
                     :label="th.label">
    </el-table-column>

  </el-table>
</template>

<script>

export default {
  title: '表格',
  message: '常规附加扩展',
  name: 'tableExpansionBar',
  props: {
    tableTitleData: {
      type: Object,
      twoWay: true,
    },
    tableData: {
      type: Array,
      twoWay: true
    }
  },
  components: {},
  data() {
    return {}
  },
  created() {
    let vue = this
    console.log(vue.tableData)
  },
  mounted() {
  },
  methods: {
  }
}
</script>

<style scoped>

</style>
