<template>
  <div>
    <!--轮播图--START-->
    <SwipeBar></SwipeBar>
    <!--轮播图--END-->

    <!--菜单栏--START-->
    <GridBar></GridBar>
    <!--菜单栏--END-->

    <messageListBar></messageListBar>

    <!--Footer--START-->
    <FooterBar></FooterBar>
    <!--Footer--END-->
  </div>
</template>
<script>
import SwipeBar from '../components/home/swiperBar'
import GridBar from '../components/home/gridBar'
import messageListBar from '../components/message/messageListBar'
import FooterBar from '../components/layout/footerBar'
import {mapState} from 'vuex'


export default {
  name: "home",
  inject: ['reload'],
  computed: {
    ...mapState({
      showLoader: state => state.vux.showLoader,
    })
  },
  components:{ SwipeBar, FooterBar, GridBar, messageListBar},
  data () {
    return {
    }
  }
}
</script>

<style scoped>

</style>
