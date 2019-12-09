<template>
    <div class='homeIndex'>
      homeIndex
    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: 'index',
        title: '',
        metaInfo: {
          title: '首页',
          meta: [{
            name: 'keyWords',
            content: '首页，主页，第一页'
          }, {
            name: 'description',
            content: '关于首页的描述(次出省略好多字····)'
          }],
          link: [{
            rel: 'asstes',
            href: 'http://www.omyall.cn'
          }]
        },
        inject: ['reload'],
        components: {},
        computed: {
            ...mapState({
                // showLoader: state => state.vux.showLoader,
            })
        },
        props: {
            Data: {
                type: Object,
                twoWay: true,
                default: () => ({})
            }
        },
        data() {
            return {
                test: ''
            }
        },
        updated() {
        },
        mounted() {
        },
        methods: {},
        watch: {},
        destroyed() {
        }
    }
</script>

<style scoped lang="less">

</style>
