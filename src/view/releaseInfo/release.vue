<template>
  <div class='release'>
    <group>
      <selector title="选择类型" :options="optionsList" v-model="releaseForm.type"></selector>
    </group>

    <group title="启始XX">
      <x-input title="开始XX" name="username" placeholder="请输入开始XX" is-type="china-name"></x-input>
      <x-input title="结束XX" name="username" placeholder="请输入结束XX" is-type="china-name"></x-input>
    </group>

    <group title="发布类型">
      <selector title="选择类型" :options="optionsList" v-model="releaseForm.type"></selector>
    </group>

    <group title="发布有效期">
      <datetime title="发布时间" v-model="releaseForm.dateTime" format="YYYY-MM-DD HH:mm"></datetime>
    </group>

    <group title="备注">
      <x-textarea :max="20" placeholder="备注信息" v-model="releaseForm.remarks"></x-textarea>
    </group>
    <group class="padding_20">
      <x-button type="primary" link="/">发布</x-button>
    </group>
  </div>
</template>

<script>
  import {
    GroupTitle,
    Group,
    Cell,
    XInput,
    Selector,
    XButton,
    XTextarea,
    PopupPicker,
    Datetime,
    XNumber,
    ChinaAddressData,
    XAddress,
    XSwitch
  } from 'vux'

  const optionsList = [
    {key: '1', value: 'A'},
    {key: '2', value: 'B'},
    {key: '3', value: 'C'},
    {key: '4', value: 'D'},
    {key: '5', value: 'E'}
  ]
  export default {
    // 组建的名称
    title: '信息发布',
    name: 'release',
    /**
     * 子组建传值
     * objData: {
     *   type: Object,
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
    components: {GroupTitle, Group, Cell, XInput, Selector, XTextarea, XButton, Datetime},
    data() {
      return {
        releaseForm: {},
        optionsList: optionsList,
        type: '1'
      }
    },
    // 初始化记载
    created() {

    },
    // DOM加载完毕执行操作
    mounted() {
    },
    // 事件处理
    methods: {},
    // 离开路由的操作
    destroyed() {
    }
  }
</script>

<style scoped lang='less'>
  .weui-cells{margin-top: 0}
</style>
