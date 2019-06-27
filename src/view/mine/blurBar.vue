<template>
  <div class='blurBar'>
    <div class="blur">
      <img :src="blurData.bg_src">
    </div>
    <div class="blurInfo">
      <div class="blurInfo_con">
      <p class="center"><img :src="blurData.img_src"></p>
      <p class="center">{{blurData.tel}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    // 组建的名称
    title: '',
    name: 'blurBar',
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
      blurData: {
        type: Object,
        default: () => ({
          bg_src: './static/img/default_user_bg.jpg',
          img_src: './static/img/default_user.jpeg',
          nickName: '',
          tel: '188 XXXX 8888'
        })
      }
    },
    // 组建刷新
    inject: ['reload'],
    // 挂在组建
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
  .blurBar {
    .blur {
      height: 250px;

      img {
        width: 100%;
        height: 100%;
        -webkit-filter: blur(1px); /* Chrome, Opera */
        -moz-filter: blur(1px);
        -ms-filter: blur(1px);
        filter: blur(1px);
      }
    }

    .blurInfo {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 250px;
      top: 0;
      .blurInfo_con{height: 100px;}
    }

    .center {
      text-align: center;
      padding-top: 20px;
      color: #fff;
      font-size: 18px;
    }

    .center img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      border: 4px solid #ececec;
    }
  }
</style>
