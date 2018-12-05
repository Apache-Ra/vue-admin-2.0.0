<template>
  <div class="tableOperatingBar">
    <el-form ref="barForm" :model="barForm" label-position="left" label-width="100px">
      <el-form-item class="formItem" label="渠道流水号">
        <el-input v-model="barForm.channelSerialNumber"></el-input>
      </el-form-item>
      <el-form-item class="formItem" label="应用流水号">
        <el-input v-model="barForm.ApplicationSerialNumber"></el-input>
      </el-form-item>
      <el-form-item label="最近修改时间" class="formItem el-form-group-item">
        <el-date-picker v-model="barForm.startTime" type="datetime" placeholder="选择起始日期时间" :defaultTime="defaultTime"></el-date-picker>
        <el-date-picker v-model="barForm.endTime" type="datetime" placeholder="选择终止日期时间" :defaultTime="defaultTime"></el-date-picker>
      </el-form-item>
      <el-form-item class="formItem" label="渠道类型">
        <el-select v-model="barForm.channelType" placeholder="请选择渠道类型">
          <el-option v-for="(option, key) in channelTypeOptions" :key="key" :label="option.label" :value="option.value"></el-option>
        </el-select>
      </el-form-item>
      <!----->
      <el-form-item class="formItem" label="发送者">
        <el-input v-model="barForm.channelSerialNumber"></el-input>
      </el-form-item>
      <el-form-item class="formItem" label="中间件状态">
        <el-input v-model="barForm.ApplicationSerialNumber"></el-input>
      </el-form-item>
      <el-form-item label="中间状态时间" class="formItem el-form-group-item">
        <el-date-picker v-model="barForm.startTime" type="datetime" placeholder="选择起始日期时间" :defaultTime="defaultTime"></el-date-picker>
        <el-date-picker v-model="barForm.endTime" type="datetime" placeholder="选择终止日期时间" :defaultTime="defaultTime"></el-date-picker>
      </el-form-item>
      <el-form-item class="formItem" label="发送类型">
        <el-select v-model="barForm.channelType" placeholder="请选择渠道类型">
          <el-option v-for="(option, key) in channelTypeOptions" :key="key" :label="option.label" :value="option.value"></el-option>
        </el-select>
      </el-form-item>
      <!---->
      <el-form-item class="formItem" label="接收者">
        <el-input v-model="barForm.channelSerialNumber"></el-input>
      </el-form-item>
      <el-form-item class="formItem" label="序列号/ID	">
        <el-input v-model="barForm.ApplicationSerialNumber" placeholder="序列号/节点ID"></el-input>
      </el-form-item>
      <el-form-item label="计划发送时间" class="formItem el-form-group-item">
        <el-date-picker v-model="barForm.startTime" type="datetime" placeholder="选择起始日期时间" :defaultTime="defaultTime"></el-date-picker>
        <el-date-picker v-model="barForm.endTime" type="datetime" placeholder="选择终止日期时间" :defaultTime="defaultTime"></el-date-picker>
      </el-form-item>
      <el-form-item class="formItem" label="是否拆分">
        <el-select v-model="barForm.channelType" placeholder="请选择渠道类型">
          <el-option v-for="(option, key) in channelTypeOptions" :key="key" :label="option.label" :value="option.value"></el-option>
        </el-select>
      </el-form-item>
      <!---->
      <el-form-item class="formItem" label="序列/时间戳	">
        <el-input v-model="barForm.channelSerialNumber"></el-input>
      </el-form-item>
      <el-form-item class="formItem" label="序列/流水号">
        <el-input v-model="barForm.ApplicationSerialNumber"></el-input>
      </el-form-item>
      <el-form-item label="最终状态时间" class="formItem el-form-group-item">
        <el-date-picker v-model="barForm.startTime" type="datetime" placeholder="选择起始日期时间" :defaultTime="defaultTime"></el-date-picker>
        <el-date-picker v-model="barForm.endTime" type="datetime" placeholder="选择终止日期时间" :defaultTime="defaultTime"></el-date-picker>
      </el-form-item>
      <el-form-item class="formItem" label="优先级">
        <el-select v-model="barForm.channelType" placeholder="请选择渠道类型">
          <el-option v-for="(option, key) in channelTypeOptions" :key="key" :label="option.label" :value="option.value"></el-option>
        </el-select>
      </el-form-item>
      <!---->
      <el-form-item class="formItem el-group-item" label="应用标识">
        <div class="formGroup">
          <el-input v-model="barForm.defaultValue" placeholder="应用标识"></el-input>
          <el-select v-model="barForm.channelType" placeholder="请选择渠道类型">
            <el-option v-for="(option, key) in channelTypeOptions" :key="key" :label="option.label" :value="option.value"></el-option>
          </el-select>
        </div>
      </el-form-item>
      <!---->
      <el-form-item class="formItem el-group-item" label="应用标识">
        <div class="formGroup">
          <el-input v-model="barForm.defaultValue" placeholder="应用标识"></el-input>
          <el-select v-model="barForm.channelType" placeholder="请选择渠道类型">
            <el-option v-for="(option, key) in channelTypeOptions" :key="key" :label="option.label" :value="option.value"></el-option>
          </el-select>
        </div>
      </el-form-item>
      <!---->
      <el-form-item class="formBtnGroup el-form-group-item">
        <el-button type="primary" @click="handleBarForm">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  /**
   * 渠道类型
   */
  const channelTypeOptions = [
    {value: '0', label: '全部'},{value: '1', label: '小米'},{value: '2', label: '华为'}
  ]
  export default {
  title: '消息查询/原始信息-操作表格专项组件',
  name: 'tableOperatingBar',
  components: {},
  data() {
    return {
      channelTypeOptions: channelTypeOptions,
      barForm:{
        channelSerialNumber: '',
        ApplicationSerialNumber: '',
        startTime: '',
        endTime: '',
        channelType: ''
      },
      defaultTime: '00:00:00'
    }
  },
  created() {
  },
  mounted() {
  },
  methods: {
    handleBarForm () {
      let vue = this
      console.log(vue.barForm)
    }
  }
}
</script>

<style lang="less" scoped>
.tableOperatingBar{ text-align: left;
  .el-form-item{width: 20%;display: inline-block; }
  .el-date-editor{width: 100%}
  .el-form-group-item{width: 38%;
  .el-date-editor{width: 48%;} }

  .el-group-item{width: 30%}
  .formGroup{display: flex;
    .el-input{width: 50%;display: inline-block;}
    .el-select{display: inline-block;}
  }
}
</style>
