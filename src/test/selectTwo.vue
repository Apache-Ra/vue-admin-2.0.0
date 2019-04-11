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
      <el-table :data="tableData" :span-method="objectSpanMethod" border style="width: 100%">
        <el-table-column
          v-for="(item, key) in tableTitle"
          :width="(item.width)"
          :key="key"
          :prop="item.prop"
          :label="item.label">
        </el-table-column>

        <el-table-column
          fixed="right"
          label="学科代码">
          <template slot-scope="scope">
            <el-select v-model="scope.row.subjectKey" multiple placeholder="请选择">
              <el-option
                v-for="(item, key) in scope.row.subjectOptions"
                :key="key"
                :label="item.value"
                :value="item.value">
              </el-option>
            </el-select>
          </template>
        </el-table-column>

        <el-table-column
          fixed="right"
          label="操作"
          width="180">
          <template slot-scope="scope">
            <el-button @click="handleClickCopy(scope.row)" type="text" size="small">复制</el-button>
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

  const getTableData = (vue, APIData) => {
    vue.tableData = []
    _.forEach(APIData, item => {
      // 清空数组
      let subjectVal = [];
      let subjectKey = []
      let subjectOptions = []
      let subject = '';
      // 通过数据字典转义key
      _.forEach(item.subject.split(','), item => {
        subjectKey.push(item)
        const subject_ = SUBJECT.find(item_ => +item_.value == item).label
        subjectVal.push(subject_);
        subjectOptions.push({
          label: SUBJECT.find(item_ => +item_.value == item).label,
          value: item
        })
      });

      // push到数组
      vue.tableData.push({
        id: item.id,
        period: item.period,
        dateTime: item.dateTime,
        subjectKey: subjectKey,
        subjectVal: subjectVal.toString(),
        subjectOptions: subjectOptions
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
    {prop: 'dateTime', label: '日期', width: '180'},
    {prop: 'period', label: '时段', width: '180'},
    {prop: 'subjectVal', label: '学科名称'}
  ]
  // 模拟接口返回的数据
  const APIData = [
    {id:1, dateTime: '2019-03-01', period: '上午', subject: '1,4,6'},
    {id:2, dateTime: '2019-03-01', period: '中午', subject: '2,4,6'},
    {id:3, dateTime: '2019-03-01', period: '下午', subject: '1,2,5'},

    {id:4, dateTime: '2019-03-02', period: '上午', subject: '1,4,6'},
    {id:5, dateTime: '2019-03-02', period: '中午', subject: '3,5,6'},
    {id:6, dateTime: '2019-03-02', period: '下午', subject: '2,5,6'}
  ]


  const ArrayList = [
    {
      list_1:[],
      list_2:[]
    },
    {
      list_1:[],
      list_2:[]
    }
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
        dialogForm: {
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
      console.log(vue.tableData)
    },
    // DOM加载完毕执行操作
    mounted() {
    },
    // 事件处理
    methods: {
      // 执行添加
      onClickAdd() {
        let vue = this;
        vue.dialogForm.subject = []
        vue.dialogVisible = true
      },
      // 关闭弹出层
      handleClose(done) {
        let vue = this;
        vue.dialogVisible = false
      },
      // 表格数据复制
      handleClickCopy(item) {

      },
      // 表格编辑
      handleClickEdit(item) {
        let vue = this;
        console.log(item.subjectKey)
        vue.dialogForm.subject = item.subjectKey
        vue.dialogVisible = true
      },
      // 表格删除
      handleClickDelete(item) {
        console.log(item)
      },
      // 弹出层保存
      onClickFromAdd() {
        let vue = this;
        console.log('%c 保存提交的数据: ' + vue.dialogForm.subject, 'background:#CCC;color:#FFF');
        vue.dialogVisible = false
      },

      objectSpanMethod({row, column, rowIndex, columnIndex}) {
        if (columnIndex === 0) {
          if (rowIndex % 3 === 0) {
            return {
              rowspan: 3,
              colspan: 1
            };
          } else {
            return {
              rowspan: 0,
              colspan: 0
            };
          }
        }
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

  .el-table__row {
    .el-select {
      width: 100%;
    }
  }

  .el-dialog__body {
    .el-select {
      width: 100%;
    }
  }
</style>
