/**
 * routerJSON: 用于LeftBar菜单显示
 */
export default [
  {
    name: "用户管理",
    children: [
      {name: '账户管理员', routerName: 'administratorAccount'},
      {name: '应用账户', routerName: 'applicationAccount'},
      {name: '用户合法IP', routerName: 'legalIP'}
    ]
  }, {
    name: '渠道管理',
    children: [
      {name: '基本信息', routerName: 'basicInformation'},
      {name: '熔断规则', routerName: 'fuseRule'},
      {name: '黑名单', routerName: 'blacklist'},
      {name: '发送时间', routerName: 'sendingTime'}
    ]
  }, {
    name: '消息查询',
    children: [
      {name: '原始信息', routerName: 'originalInformation'},
      {name: '上行短信', routerName: 'upstreamSMS'}
    ]
  }, {
    name: ' 发送测试', routerName: 'sendTest'
  }, {
    name: '运行监控',
    children: [
      {name: '运行指标', routerName: 'operationalIndicator'}
    ]
  }, {
    name: '运行日志',
    children: [
      {name: '短信发送状态', routerName: 'SMS_sendingStatus'},
      {name: '短信接收量', routerName: 'SMS_reception'},
      {name: '接口调用历史', routerName: 'apiCallHistory'},
      {name: '等待队列', routerName: 'waitingQueue'},
      {name: '项目日志', routerName: 'projectLog'}
    ]
  }
]
