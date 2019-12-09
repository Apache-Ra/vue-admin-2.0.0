<template>
    <div class='aboutIndex'>aboutIndex</div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: 'index',
        title: '',
        metaInfo: {
          title: '关于我们',
          meta: [{
            name: 'keyWords',
            content: '关于我们，关于你们，关于他们，关于hello world'
          }, {
              name: 'description',
              content: '关于我们的描述(次出省略好多字····)'
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
