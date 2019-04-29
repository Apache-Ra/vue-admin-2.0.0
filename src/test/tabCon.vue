<template>
    <div class='tabCon con'>
      <p>我是页面：{{tabData.id}}</p>
      <p>我是中文名叫：{{tabData.label}}</p>
      <p>我的英文名叫：{{tabData.name}}</p>
    </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
        // 组建的名称
        title: '',
        name: 'tabCon_1',
        computed: {
            ...mapState({
                // showLoader: state => state.vux.showLoader,
            })
        },
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
        props: {
          tabData:{
            type: Object,
            towWay: true,
            default:() =>({

            })
          }
        },
        // 组建刷新
        inject: ['reload'],
        // 挂载组建
        components: {},
        data() {
            return {}
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
  .con {
    height: 100%;
    background: #FFF;
    padding: 10px;
    p{height: 45px; line-height: 45px; font-size: 16px;}
  }
</style>
