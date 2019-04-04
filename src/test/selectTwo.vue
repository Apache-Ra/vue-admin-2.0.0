<template>
  <el-container class="sendTest con">
    <el-header>
      <!--面包屑-->
      <el-breadcrumb separator="/" class="breadCrumbBar">
        <el-breadcrumb-item>组件测试</el-breadcrumb-item>
      </el-breadcrumb>
    </el-header>
    <el-main class="content">
      <div class="tableQuery">
        <el-form ref="contentForm" :model="contentForm" label-position="left" label-width="100px">
          <el-button size="medium" @click="onClickAdd">添加</el-button>
        </el-form>
      </div>
      <!---->
      <el-dialog title="提示" :visible.sync="dialogVisible" width="50%" :before-close="handleClose">
        <el-form ref="dialogForm" :model="dialogForm" label-width="80px">

          <el-form-item label="科目名称">
            <el-select v-model="dialogForm.subject" multiple placeholder="请选择">
              <el-option
                v-for="(item, key) in subjectOptions"
                :key="key"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>

          <el-form-item>
            <el-button size="medium" @click="onClickFromAdd">添加</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>

      <!---->
      <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
          v-for="(item, key) in tableTitle"
          :key="key"
          :prop="item.prop"
          :label="item.label"
          width="">
        </el-table-column>

        <el-table-column
          fixed="right"
          label="操作"
          width="100">
          <template slot-scope="scope">
            <el-button @click="handleClickEdit(scope.row)" type="text" size="small">编辑</el-button>
            <el-button @click="handleClickDelete(scope.row)" type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

    </el-main>
  </el-container>
</template>

<script>
  import {SUBJECT} from '../dictionary/index'
  import _ from 'lodash'

  const getTableData = (vue, APIData) =>{
    vue.tableData = []
    _.forEach(APIData, item =>{
      // 清空数组
      let subjectArray = [];
      let subject = '';
      // 通过数据字典转义key
      _.forEach(item.subject.split(','), item =>{
        const subject_ = SUBJECT.find(item_ => +item_.value == item).label
        subjectArray.push(subject_);
      });
      // 拼接成字符串
      subject = subjectArray.toString();
      // push到数组
      vue.tableData.push({
        id: item.id,
        dateTime: item.dateTime,
        subjectKeyArray: item.subject,
        subject: subject
      })
    })
  }

  // 学科下拉选项模拟数据
  const subjectOptions = [
    {label: '语文', value: '1'},
    {label: '数学', value: '2'},
    {label: '英语', value: '3'},
    {label: '体育', value: '4'},
    {label: '化学', value: '5'},
    {label: '物理', value: '6'}
  ]
  // 表格表头数据
  const tableTitle = [
    {prop: 'dateTime', label: '日期'},
    {prop: 'subject', label: '学科'}
  ]
  // 模拟接口返回的数据
  const APIData = [
    {id: 1, dateTime: '2019-04-04', subject: '1,2,3,4,5,6'},
    {id: 2, dateTime: '2019-04-03', subject: '1,2,3'},
    {id: 3, dateTime: '2019-04-02', subject: '3'},
  ]

  export default {
    // 组建的名称
    title: 'selectTwo测试组件',
    name: 'selectTwo',
    /**
     * 子组建传值
     * objData: {
     *   type: Object,
     *   twoWay: true,
     *   default: () => ({ })
     * }
     * arrData: {
     *   type: Array,
     *   twoWay: true,
     *   default: []
     * }
     */
    props: {},
    // 组建刷新
    inject: ['reload'],
    // 挂在组建
    components: {},
    data() {
      return {
        contentForm: {},
        dialogVisible: false,
        dialogForm:{
          subject: []
        },
        subjectOptions: subjectOptions,
        tableTitle: tableTitle,
        tableData: []
      }
    },
    // 初始化记载
    created() {
      let vue = this;
      // 初始化数据
      getTableData(vue, APIData)
    },
    // DOM加载完毕执行操作
    mounted() {
    },
    // 事件处理
    methods: {
      // 执行添加
      onClickAdd(){
        let vue = this;
        vue.dialogForm.subject = []
        vue.dialogVisible = true
      },
      // 关闭弹出层
      handleClose(done){
        let vue = this;
        vue.dialogVisible = false
      },
      // 表格编辑
      handleClickEdit(item){
        let vue = this;
        vue.dialogForm.subject = item.subjectKeyArray.split(',')
        vue.dialogVisible = true
      },
      // 表格删除
      handleClickDelete(item){
        console.log(item)
      },
      // 弹出层保存
      onClickFromAdd(){
        let vue = this;
        console.log('%c 保存提交的数据: '+vue.dialogForm.subject ,'background:#CCC;color:#FFF');
        vue.dialogVisible = false
      }
    },
    // 离开路由的操作
    destroyed() {
    }
  }
</script>

<style scoped lang='less'>
  .tableQuery {
    border: 1px solid #F3F3F3;
    margin-bottom: 10px;
    padding: 10px;
    text-align: right;
  }
</style>
