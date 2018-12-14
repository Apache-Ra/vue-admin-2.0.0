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
      {name: '规则管理', routerName: 'fuseRule'},
      {name: '黑名单', routerName: 'blacklist'},
      {name: '发送管理', routerName: 'sendingTime'}
    ]
  }, {
    name: '消息查询',
    children: [
      {name: '信息管理', routerName: 'originalInformation'},
      {name: '短信管理', routerName: 'upstreamSMS'}
    ]
  }, {
    name: ' 测试管理', routerName: 'sendTest'
  }, {
    name: '监控管理',
    children: [
      {name: '运行指标', routerName: 'operationalIndicator'}
    ]
  }, {
    name: '日志管理',
    children: [
      {name: '短信状态', routerName: 'SMS_sendingStatus'},
      {name: '短信接收', routerName: 'SMS_reception'},
      {name: '接口历史', routerName: 'apiCallHistory'},
      {name: '等待队列', routerName: 'waitingQueue'},
      {name: '项目日志', routerName: 'projectLog'}
    ]
  }
]
