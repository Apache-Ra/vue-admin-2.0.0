<template>
  <el-container class="sendingTime con">
    <el-header>
      <!--面包屑-->
      <breadCrumbBar></breadCrumbBar>
    </el-header>
    <el-main class="content">
      <!--表格操作（查询和添加）-->
      <TableOperationBar :tableOperationData="tableOperationData" @handleTableOperation="handleTableOperation"></TableOperationBar>
      <!--表格部分-->
      <tableBar :tableTitleData="tableTitleData" :tableData="tableData" @handleTable="handleTableOperating"></tableBar>
    </el-main>
    <!--弹出层-->
    <dialogBar :dialogData="dialogData" v-if="showUpdateDiaLog" @handleDiaLog="handleDiaLogConfirm"></dialogBar>
  </el-container>
</template>
<script>
  /**
   * 表格表头数据
   */
  const tableTitleData = [
    {label: '渠道名称', replaceName: 'fuseRule', customize: 'basicInformation_channelName', name: 'channelName'},
    {label: '渠道类型', width:'80', name: 'channelType'},
    {label: '发送时间', name: 'sendingTime'},
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
   */
  const tableOperationData = {
    formData: {
      labelWidth:'0',
      labelPosition: 'right',
      max: 'inline-block',
      formList: [
        {type: 'select', inputType: 'select', disabled: false, inputLabel: '', modelName: 'channelName', placeholder: '请选择渠道名称', options: [{value: '0', label: '全渠道'}, {value: '1', label: '华为专场'}], required: true, defaultValue: '全渠道'}
      ]
    },
    buttonList: [
      {type: 'button', operating: 'inquire', buttonName: '查询'},
      {type: 'button', operating: 'addAccount', buttonName: '添加发送时间'}
    ]
  };
  // 表格假数据
  import Data from '../../mock/channelManagement'
  // 面包屑
  import breadCrumbBar from '../../components/breadCrumbBar'
  // 表格操作组件
  import TableOperationBar from '../../components/tableOperationBar'
  // 表格组件
  import tableBar from '../../components/tableBar'
  // 弹出表单组件
  import dialogBar from '../../components/dialogBar'
  // 请求类
  import Request from '../../kit/Axios'
  // 时间Format
  import Format from '../../kit/Format'
  export default {
    title: '发送时间',
    name: 'sendingTime',
    components: {breadCrumbBar, tableBar, TableOperationBar, dialogBar},
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
      vue.tableData = Data.data.sendingTime;
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
      // 创建用户合法IP地址
      createClick () {
        let vue = this
        // 开启dialog
        vue.showUpdateDiaLog = true
        let formObj = {
          dialog: true,
          title: '添加发送时间',
          type: 'create',
          formData: {
            labelWidth: '90px',
            formList: [
              {type: 'select', inputType: 'select', disabled: false, inputLabel: '渠道名称', modelName: 'channelName', placeholder: '请选择渠道名称', options: [{value: '0', label: '华为测试'}, {value: '1', label: '小米测试'}], required: true, defaultValue: '小米测试'},
              {type: 'time_picker', inputType: 'text', disabled: false, inputLabel: '发送时间', modelName: 'startTime', placeholder: '开始时间', pickerOptions: {selectableRange: '18:30:00 - 20:30:00'}, required: true, defaultValue: new Date(2016, 9, 10, 18, 40)},
              {type: 'time_picker', inputType: 'text', disabled: false, inputLabel: '终止时间', modelName: 'endTime', placeholder: '终止时间', pickerOptions: {selectableRange: '18:30:00 - 20:30:00'}, required: true, defaultValue: new Date(2016, 9, 10, 18, 40)},
            ]
          }
        };
        vue.dialogData.dialog = true;
        vue.dialogData = formObj;
      },
      // 确认创建
      handleDiaLogCreatedConfirm (item) {
        let vue = this;
        console.log('添加添加熔断规则成功,信息如下============================>')
        const startTime = Format.TimeFormat(item.startTime, 'HH:MM:SS')
        const endTime = Format.TimeFormat(item.endTime, 'HH:MM:SS')
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
      // 编辑用户合法IP地址
      editClick (item) {
        let vue = this;
        const startTime = Format.TimeFormat('2018-01-01 '+item.startTime, ',');
        const endTime = Format.TimeFormat('2018-01-01 '+item.endTime, ',');
        let formObj = {
          dialog: true,
          title: '编辑发送时间',
          type: 'exit',
          formData: {
            labelWidth: '90px',
            formList: [
              {type: 'select', inputType: 'select', disabled: false, inputLabel: '渠道名称', modelName: 'channelName', placeholder: '请选择渠道名称', options: [{value: '0', label: '华为测试'}, {value: '1', label: '小米测试'}], required: true, defaultValue: '小米测试'},
              {type: 'time_picker', inputType: 'text', disabled: false, inputLabel: '发送时间', modelName: 'startTime', placeholder: '开始时间', pickerOptions: {selectableRange: '00:00:00 - 00:00:00'}, required: true, defaultValue: new Date(2018,1,1, 19,0,1)},
              {type: 'time_picker', inputType: 'text', disabled: false, inputLabel: '终止时间', modelName: 'endTime', placeholder: '终止时间', pickerOptions: {selectableRange: '00:00:00 - 00:00:00'}, required: true, defaultValue: new Date(2018,1,1, 20,0,0)},
            ]
          }
        };
        item.dialog = true;
        vue.dialogData = formObj;
      },
      // 确认编辑
      handleDiaLogExitConfirm (item) {
        console.log('编辑熔断规则成功,信息如下============================>')
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
        vue.$confirm('此操作将永久删除熔断规则'+item.channelName+'('+item.fuseRule+')', '提示', {
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
