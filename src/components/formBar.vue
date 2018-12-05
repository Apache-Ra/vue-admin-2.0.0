<template>
  <div class="formBar" :style="{display: (FormData.max)?FormData.max: 'block'}">
    <el-form
      :model="formBarForm"
      :label-width="FormData.labelWidth || '80px'"
      :label-position="FormData.labelPosition || 'left'">
      <!--input-->
      <el-form-item v-for="(inputItem, key) in FormData.formList"
                    :key="key"
                    :required="inputItem.required"
                    v-if="inputItem.type == 'input'"
                    :label="inputItem.inputLabel">
        <el-input
          :ref="inputItem.modelName"
          :type="inputItem.inputType"
          :disabled="inputItem.disabled"
          :placeholder="inputItem.placeholder"
          v-model="inputItem.defaultValue"></el-input>
      </el-form-item>
      <!--select-->
      <el-form-item v-for="(inputItem, key) in FormData.formList"
                    :key="key"
                    :required="inputItem.required"
                    v-if="inputItem.type == 'select'"
                    :label="inputItem.inputLabel">
        <el-select v-model="inputItem.defaultValue"
                   :multiple=inputItem.multiple?true:false
                   :disabled="inputItem.disabled"
                   :placeholder="inputItem.placeholder">
          <el-option v-for="(item, key) in inputItem.options"
                     :key="key" :value="item.value"
                     :label="item.label">
          </el-option>
        </el-select>
      </el-form-item>
      <!--select_input_group-->
      <el-form-item class="select_input_group"
                    v-for="(inputItem, key) in FormData.formList"
                    :key="key"
                    :required="inputItem.required"
                    v-if="inputItem.type == 'select_input_group'"
                    :label="inputItem.inputLabel">
        <div class="group" v-for="(group_item, key) in inputItem.groupList" :key="key">
          <el-input
            v-if="group_item.type == 'input'"
            :ref="group_item.modelName"
            :type="group_item.inputType"
            :disabled="group_item.disabled"
            :placeholder="group_item.placeholder"
            v-model="group_item.defaultValue"></el-input>
          <el-select v-if="group_item.type == 'select'"
                     :model="group_item.defaultValue"
                     :disabled="group_item.disabled"
                     :placeholder="group_item.placeholder">
            <el-option v-for="(item, key) in group_item.options"
                       :key="key" :value="item.value"
                       :label="item.label">
            </el-option>
          </el-select>
        </div>
      </el-form-item>

      <el-form-item  class="time_picker"
                     v-for="(inputItem, key) in FormData.formList"
                    :key="key"
                    :required="inputItem.required"
                    v-if="inputItem.type == 'time_picker'"
                    :label="inputItem.inputLabel">
        <el-time-picker
          format="HH:mm:ss"
          v-model="inputItem.defaultValue"
          :picker-options="inputItem.pickerOptions"
          :placeholder="inputItem.placeholder">
        </el-time-picker>

      </el-form-item>
      <!--textArea-->
      <el-form-item v-for="(inputItem, key) in FormData.formList"
                    :key="key"
                    :required="inputItem.required"
                    v-if="inputItem.type == 'textarea'"
                    :label="inputItem.inputLabel">
      <el-input
        :type="inputItem.inputType"
        :disabled="inputItem.disabled"
        :placeholder="inputItem.placeholder"
        v-model="inputItem.defaultValue"></el-input>
      </el-form-item>
      <!--<InputBar v-for="(item, key) in FormData.formList" :key="key" :inputItem="item"></InputBar>-->
      <!--<el-form-item>-->
        <!--<el-button type="primary" @click="handleFormBarForm">确定</el-button>-->
        <!--<el-button>取消</el-button>-->
      <!--</el-form-item>-->
    </el-form>

  </div>
</template>

<script>
export default {
  name: "formBar",
  props: {
    FormData: {
      type: Object,
      twoWay: true
    }
  },
  components: {},
  data() {
    return {
      formBarForm: {}
    }
  },
  created() {
  },
  mounted() {
  },
  methods: {
    handleFormBarForm () {
      let vue = this
    }
  }
}
</script>

<style scoped>

</style>
