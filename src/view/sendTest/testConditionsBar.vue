<template>
  <el-form :model="formBarForm" ref="formBarForm" :label-width="'80px'" label-position="left">
    <el-form-item label="活动名称">
      <el-input v-model="formBarForm.name"></el-input>
    </el-form-item>
    <el-form-item label="活动名称">
      <el-input v-model="formBarForm.name"></el-input>
    </el-form-item>
    <el-form-item label="活动名称">
      <el-input v-model="formBarForm.name"></el-input>
    </el-form-item>
    <el-form-item label="活动名称">
      <el-input v-model="formBarForm.name"></el-input>
    </el-form-item>
    <el-form-item label="活动区域">
      <el-select v-model="formBarForm.region" placeholder="请选择活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="活动区域">
      <el-select v-model="formBarForm.region" placeholder="请选择活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="活动区域">
      <el-date-picker v-model="formBarForm.value" type="datetime" placeholder="选择日期时间">
      </el-date-picker>
    </el-form-item>
    <el-form-item label="活动区域">
      <el-date-picker v-model="formBarForm.value" type="datetime" placeholder="选择日期时间">
      </el-date-picker>
    </el-form-item>
    <el-form-item label="活动名称">
      <el-input v-model="formBarForm.name"></el-input>
    </el-form-item>
    <el-form-item label="活动名称">
      <el-input v-model="formBarForm.name"></el-input>
    </el-form-item>
    <el-form-item label="活动名称">
      <el-input v-model="formBarForm.name"></el-input>
    </el-form-item>
    <el-form-item label="活动区域">
      <el-select v-model="formBarForm.region" placeholder="请选择活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="活动形式" prop="desc">
      <el-input type="textarea" v-model="formBarForm.desc"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button @click="handleResetFrom('formBarForm')">重置</el-button>
      <el-button type="primary" @click="handleTestConditionsBarForm('formBarForm')">测试</el-button>
    </el-form-item>
  </el-form>
</template>

<script>

export default {
  title: '测试条件组件',
  name: 'testConditionsBar',
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
    handleResetFrom (formName) {
      this.$refs[formName].resetFields();
    },
    handleTestConditionsBarForm () {}
  }
}
</script>

<style scoped>

</style>
