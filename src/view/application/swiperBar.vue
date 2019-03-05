<template>
  <div class='swipeBar'>
    <swiper loop auto
            :list="swipeList"
            :index="defaultSwipe"></swiper>
  </div>
</template>

<script>
  // 轮播图
  const swipeList = [
    {
      url: '/',
      img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg',
      title: '送你一朵fua'
    }, {
      url: '/',
      img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg',
      title: '送你一辆车'
    }
  ]
  import {Swiper, SwiperItem} from 'vux'
  export default {
    // 组建的名称
    title: '首页轮播图',
    name: 'swipeBar',
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
    components: {Swiper, SwiperItem},
    data() {
      return {
        swipeList: swipeList,
        defaultSwipe: 1
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

</style>
