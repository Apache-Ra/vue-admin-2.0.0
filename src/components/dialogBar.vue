<template>
  <el-dialog
    :title="dialogData.title"
    :visible.sync="dialogData.dialog" class="dialogBar">
    <!--Form表单组件-->
    <FormBar
      :FormData="dialogData.formData"></FormBar>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogData.dialog = false">取 消</el-button>
      <el-button type="primary" @click="confirm(dialogData.type)">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
import FormBar from './formBar'
import _ from 'lodash'
export default {
  name: "buttonBar",
  components: {FormBar},
  props: {
    dialogData: {
      type: Object,
      twoWay: true
    }
  },
  data() {
    return {}
  },
  created() {
  },
  mounted() {
  },
  methods: {
    // 点击确定按钮
    confirm (type) {
      let vue = this;
      // 获取双向绑定的值 循环取值
      let itemObj = {}
      _.forEach(vue.dialogData.formData.formList, (item) =>{

        itemObj[item.modelName] = item.defaultValue;
        // 如果还存在值的潜逃
        if (item.groupList) {
         _.forEach(item.groupList, (group_item) =>{
           itemObj[group_item.modelName] = group_item.defaultValue;
         })
        }
        // 如果modelName是数组（时间选择器）
      });
      // 把对象形式传递带父组件
     vue.$emit('handleDiaLog', itemObj, type)
      // 关闭弹出组件
      setTimeout(() =>{
        vue.dialogData.dialog = false
      },100)
    }
  }
}
</script>

<style scoped>
.el-select{width: 100%}
</style>
