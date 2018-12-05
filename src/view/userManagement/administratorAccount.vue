<template>
  <el-container class="administratorAccount con">
    <el-header>
      <!--面包屑-->
      <breadCrumbBar></breadCrumbBar>
    </el-header>
    <el-main class="content">
      <!--表格操作（查询和添加）-->
      <TableOperationBar :tableOperationData="tableOperationData" @handleTableOperation="handleTableOperation"></TableOperationBar>
      <!--表格部分-->
      <tableLabelBar :tableTitleData="tableTitleData" :tableData="tableData" @handleTable="handleTableOperating"></tableLabelBar>
    </el-main>
    <!--弹出层-->
    <dialogBar :dialogData="dialogData" v-if="showUpdateDiaLog" @handleDiaLog="handleDiaLogConfirm"></dialogBar>
  </el-container>
</template>
<script>
/**
 * 表格表头数据
 * @label: 列表TH名称
 * @replaceName: TD跳转的路由name,默认不跳转
 * @width: TD的宽度，默认平均等分
 * @customize: 自定义TD或者按钮
 * @name: 列表TR显示DATA的别名(重要)
 * @size: 按钮大小（medium/small/mini 默认为medium）
 * @operating：列表操作按钮，包含按钮的名字，按钮类型以及按钮操作（例如：编辑/删除）
*/
const tableTitleData = [
  {label: '用户名称', replaceName: 'legalIP', customize: 'userName', name: 'userName'},
  {label: '用户描述', name: 'userDescription'},
  {label: '创建时间', name: 'createTime'},
  {label: '修改时间', name: 'changeTime'},
  {label: '操作', customize:'button', operating: [
    {label: '编辑', type: 'primary', operating: 'exit'},
    {label: '删除', type: 'danger',operating: 'delete'}]
  }
];
/**
 * 表格操作数据
 * @type {{formData: {labelWidth: string, labelPosition: string, max: string, formList: {type: string, inputType: string, disabled: boolean, inputLabel: string, modelName: string, placeholder: string, required: boolean, defaultValue: null}[]}, buttonList: *[]}}
 * @labelWidth：输入框前名称的宽度(默认为80px)
 * @labelPosition：输入框位置（默认left）
 * @max 表单宽度（默认block）
 * @formList： 循环input
 * @type：input的类型（输入框/下拉框/文本域/···）
 * @inputType： 输入框类型（text/tel/email），此处为了后面做验证的扩展
 * @disabled：是否禁用
 * @inputLabel：input前面label(名称)
 * @modelName：用于操作后返回数据时候KEY
 * @placeholder：input说明
 * @required: 是否必须填写(前面加*)
 * @defaultValue：默认值
 * @buttonList：按钮
 * @type：按钮类型（button/sunmit）
 * @operating: 按钮操作类型
 * @size: 按钮大小（medium/small/mini 默认为medium）
 * @buttonName：按钮名称
 */
const tableOperationData = {
  formData: {
    labelWidth:'0',
    labelPosition: 'right',
    max: 'inline-block',
    formList: [
      {type: 'input', inputType: 'text', disabled: false, inputLabel: '', modelName: 'userName', placeholder: '用户名称', required: false, defaultValue: null}
    ]
  },
  buttonList: [
    {type: 'button', operating: 'inquire', buttonName: '查询'},
    {type: 'button', operating: 'addAccount', buttonName: '创建用户'}
  ]
};
// 表格假数据
import Data from '../../mock/userManagement'
// 面包屑
import breadCrumbBar from '../../components/breadCrumbBar'
// 表格操作组件
import TableOperationBar from '../../components/tableOperationBar'
// 表格组件
import tableLabelBar from '../../components/tableLabelBar'
// 弹出表单组件
import dialogBar from '../../components/dialogBar'
// 请求类
import Request from '../../kit/Axios'
export default {
  title: '管理员帐户',
  name: 'administratorAccount',
  components: {breadCrumbBar, tableLabelBar, TableOperationBar, dialogBar},
  data() {
    return {
      // 表头数据
      tableTitleData: tableTitleData,
      // 列表操作数据
      tableOperationData: tableOperationData,
      // 列表数据
      tableData: [],
      // 弹出层更新数据
      showUpdateDiaLog: false,
      dialogData: {},
      // 分页组件
    }
  },
  created() {
    let vue = this
    vue.tableData = Data.data.administratorAccount;
  },
  mounted() {
  },
  methods: {
    // 操作表格部分
    handleTableOperation (item, e) {
      let vue = this
      // 操作类型
      const operating = e.operating
      if (operating == 'addAccount') {
        vue.createClick(item)
      } else if (operating == 'inquire') {
        vue.inquireClick(item)
      }
    },
    // 条件查询
    inquireClick (item) {
      let vue = this
      console.log('查询用户成功,信息如下============================>')
      console.log(item)
    },
    // 创建用户
    createClick () {
      /**
       * @type {default.methods}
       * @dialog: dialog的开启或者是关闭
       * @title： dialog提示内容（title）
       * @type：dialog的类型（用于区分多个dialog）
       * @multiple：select是否多选，默认为单选
       */
      let vue = this
      // 开启dialog
      vue.showUpdateDiaLog = true
      let formObj = {
        dialog: true,
        title: '创建用户',
        type: 'create',
        formData: {
          formList:[
            {type: 'input', inputType: 'text', disabled: false, inputLabel: '用户名称', modelName: 'userName', placeholder: '请输入用户名', required: true, defaultValue: null},
            {type: 'input', inputType: 'password', disabled: false, inputLabel: '用户密码', modelName: 'userPwd', placeholder: '请输入密码', required: true, defaultValue: null},
            {type: 'select', inputType: 'select', disabled: true, inputLabel: '用户级别', modelName: 'userLevel', placeholder: '请输入选择用户级别', options: [{value: '0', label: '超级管理员'}, {value: '1', label: '测试管理员'}], required: true, defaultValue: null},
            {type: 'textarea', inputType: 'textarea', disabled: false, inputLabel: '用户描述', modelName: 'userDescription', placeholder: '请输入用户描述', required: false, defaultValue: null}
          ]
        }
      };
      vue.dialogData.dialog = true;
      vue.dialogData = formObj;
    },
    // 确认创建
    handleDiaLogCreatedConfirm (item) {
      let vue = this;
      console.log('创建用户成功,信息如下============================>')
      console.log(item)
    },
    // 表格部分列表操作
    handleTableOperating (item, e) {
      let vue = this
      // 操作类型
      const operating = e.operating
      if (operating == 'exit') {
        vue.showUpdateDiaLog = true
        vue.editClick(item)
      } else if (operating == 'delete') {
        vue.deleteClick(item)
      }
    },
    // 编辑用户
    editClick (item) {
      let vue = this;
      let formObj = {
        dialog: true,
        title: '编辑用户',
        type:'exit',
        formData: {
          formList:[
            {type: 'input', inputType: 'text', disabled: false, inputLabel: '用户名称', modelName: 'userName', placeholder: '请输入用户名', required: true, defaultValue: item.userName},
            {type: 'input', inputType: 'password', disabled: false, inputLabel: '用户密码', modelName: 'userPwd', placeholder: '请输入密码', required: true, defaultValue: null},
            {type: 'select', inputType: 'select', disabled: true, inputLabel: '用户级别', modelName: 'userLevel', placeholder: '请输入选择用户级别', options: [{value: '0', label: '超级管理员'}, {value: '1', label: '测试管理员'}], required: true, defaultValue: item.userLevel},
            {type: 'textarea', inputType: 'textarea', disabled: false, inputLabel: '用户描述', modelName: 'userDescription', placeholder: '请输入用户描述', required: false, defaultValue: item.userDescription}
          ]
        }
      };
      item.dialog = true;
      vue.dialogData = formObj;
    },
    // 确认编辑
    handleDiaLogExitConfirm (item) {
      console.log('编辑用户成功,信息如下============================>')
      console.log(item)
    },
    // 处理dialog弹窗确定
    handleDiaLogConfirm (item, type) {
      let vue = this
      // 区分是创建还是修改
      if (type=='exit') {
        vue.handleDiaLogExitConfirm(item);
      } else if (type= 'create') {
        vue.handleDiaLogCreatedConfirm (item);
      }
    },
    // 删除用户
    deleteClick (item) {
      let vue = this
      console.log(item);
      // 确认删除操作
      vue.$confirm('此操作将永久删除'+item.userName+'('+item.userDescription+')', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        vue.$message({type: 'success', message: '删除成功!'});
      }).catch(() => {
        vue.$message({type: 'info', message: '已取消删除'});
      });
    }
  }
}
</script>

<style>

</style>
