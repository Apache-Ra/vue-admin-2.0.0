<template>
  <el-container class="applicationAccount con">
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
   * @customize: 自定义TD或者按钮
   * @name: 列表TR显示DATA的别名(重要)
   * @operating：列表操作按钮，包含按钮的名字，按钮类型以及按钮操作（例如：编辑/删除）
   */
  const tableTitleData = [
    {label: '用户名称', width:'150', replaceName: 'legalIP', customize: 'userName', name: 'userName'},
    {label: '渠道名称', width:'150', name: 'channelName', customize:'channelName',},
    {label: '是否启用', width:'80', name: 'whetherEnable'},
    {label: '用户描述', name: 'userDescription'},
    {label: '创建时间', name: 'createTime'},
    {label: '修改时间', name: 'changeTime'},
    {label: '操作', width:'300', customize:'button', operating: [
        {label: '编辑信息', type: 'primary', operating: 'exitInfo'},
        {label: '编辑权限', type: 'primary', operating: 'exitPermission'},
        {label: '禁用', type: 'danger',operating: 'disable'},
        {label: '删除', type: 'danger',operating: 'delete'}]
    }
  ];
  /**
   * 表格操作数据
   * @type {{formData: {labelWidth: string, labelPosition: string, max: string, formList: {type: string, inputType: string, disabled: boolean, inputLabel: string, modelName: string, placeholder: string, required: boolean, defaultValue: null}[]}, buttonList: *[]}}
   * 参数信息详情说明文档
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
    title: '应用账户',
    name: 'applicationAccount',
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
      vue.tableData = Data.data.applicationAccount;
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
              {type: 'select', inputType: 'select',  disabled: true, inputLabel: '用户级别', modelName: 'userLevel', placeholder: '请选择选择用户级别', options: [{value: '0', label: '超级管理员'}, {value: '1', label: '测试管理员'}], required: true, defaultValue: null},
              {type: 'select', inputType: 'select',  disabled: false, inputLabel: '是否启用', modelName: 'whetherEnable', placeholder: '请选择是否启用', options: [{value: '0', label: '启用'}, {value: '1', label: '禁用'}], required: true, defaultValue: null},
              {type: 'select', inputType: 'select', multiple: true, disabled: false, inputLabel: '渠道类型', modelName: 'channelType', placeholder: '请选择渠道类型', options: [{value: '0', label: '全部'}, {value: '1', label: '华为渠道'}, {value: '2', label: '小米渠道'}], required: false, defaultValue: []},
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
        // 编辑信息
        if (operating == 'exitInfo') {
          vue.showUpdateDiaLog = true
          vue.editInfoClick(item)
          // 编辑权限
        } else if (operating == 'exitPermission') {
          vue.showUpdateDiaLog = true
          vue.editPermissionClick(item)
          // 禁用
        } else if (operating == 'disable') {
          vue.disableClick(item)
          // 删除
        } else if (operating == 'delete') {
          vue.deleteClick(item)
        }
      },
      // 处理dialog弹窗确定
      handleDiaLogConfirm (item, type) {
        let vue = this
        // 编辑信息
        if (type =='exitInfo') {
          vue.handleDiaLogExitConfirm(item);
          // 编辑权限
        } else if (type == 'exitPermission') {
          vue.handleDiaLogPermissionConfirm(item);
          // 创建用户
        } else if (type= 'create') {
          vue.handleDiaLogCreatedConfirm (item);
        }
      },
      // 编辑信息
      editInfoClick (item) {
        let vue = this;
        let formObj = {
          dialog: true,
          title: '编辑信息',
          type:'exitInfo',
          formData: {
            formList:[
              {type: 'input', inputType: 'text', disabled: false, inputLabel: '用户名称', modelName: 'userName', placeholder: '请输入用户名', required: true, defaultValue: item.name},
              {type: 'input', inputType: 'password', disabled: false, inputLabel: '用户密码', modelName: 'userPwd', placeholder: '请输入密码', required: true, defaultValue: item.userPwd},
              {type: 'select', inputType: 'select', disabled: true, inputLabel: '用户级别', modelName: 'userLevel', placeholder: '请选择选择用户级别', options: [{value: '0', label: '超级管理员'}, {value: '1', label: '测试管理员'}], required: true, defaultValue: item.userLevel},
              {type: 'select', inputType: 'select', disabled: false, inputLabel: '是否启用', modelName: 'whetherEnable', placeholder: '请选择是否启用', options: [{value: '0', label: '启用'}, {value: '1', label: '禁用'}], required: true, defaultValue: item.whetherEnable},
              {type: 'textarea', inputType: 'textarea', disabled: false, inputLabel: '用户描述', modelName: 'userDescription', placeholder: '请输入用户描述', required: false, defaultValue: item.userDescription}
            ]
          }
        };
        item.dialog = true;
        vue.dialogData = formObj;
      },
      // 确认编辑信息
      handleDiaLogExitConfirm (item) {
        console.log('编辑用户信息成功,信息如下============================>')
        console.log(item)
      },

      // 编辑权限
      editPermissionClick (item) {
        let vue = this;
        console.log(item)
        let formObj = {
          dialog: true,
          title: '编辑权限',
          type:'exitPermission',
          formData: {
            formList:[
              {type: 'select', inputType: 'select', multiple: true, disabled: false, inputLabel: '渠道类型', modelName: 'channelType', placeholder: '请选择渠道类型', options: [{value: '0', label: '全部'}, {value: '1', label: '华为渠道'}, {value: '2', label: '小米渠道'}], required: false, defaultValue: item.channelName}
            ]
          }
        };
        item.dialog = true;
        vue.dialogData = formObj;
      },
      // 确认编辑权限
      handleDiaLogPermissionConfirm (item) {
        console.log('编辑用户权限成功,信息如下============================>')
        console.log(item)
      },
      // 删除用户
      deleteClick (item) {
        let vue = this
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
      },
      // 禁用
      disableClick (item) {
        let vue = this
        // 确认删除操作
        vue.$confirm('此操作将禁用'+item.userName+'('+item.userDescription+')', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          vue.$message({type: 'success', message: '已禁用!'});
        }).catch(() => {
          vue.$message({type: 'info', message: '已取消禁用'});
        });
      }
    }
  }
</script>

<style>

</style>
