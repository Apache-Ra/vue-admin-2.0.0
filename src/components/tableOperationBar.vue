<template>
  <div class="tableOperatingBar">
    <FormBar
      :FormData="tableOperationData.formData"></FormBar>
    <!--操作按钮-->
    <el-button v-for="(btn, key) in tableOperationData.buttonList"
               :size="(btn.size)?btn.size: 'medium'"
               :key="key"
               @click="handleButton(btn)">{{btn.buttonName}}</el-button>

  </div>
</template>

<script>
import FormBar from './formBar'
import _ from 'lodash'
export default {
  title: '表格操作(查询、添加)',
  name: 'tableOperationBar',
  components: {FormBar},
  props: {
    tableOperationData: {
      type: Object,
      twoWay: true
    }
  },
  data() {
    return {
    }
  },
  created() {},
  mounted() {
  },
  methods: {
    // 处理操作表格
    handleButton (e) {
      let vue = this
      let itemObj = {}
      _.forEach(vue.tableOperationData.formData.formList, (item) =>{
        itemObj[item.modelName] = item.defaultValue
      })
      vue.$emit('handleTableOperation', itemObj, e)
    }
  }
}
</script>

<style scoped>

</style>
