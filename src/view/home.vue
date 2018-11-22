<template>
  <div>123</div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  name: "home",
  inject: ['reload'],
  computed: {
    ...mapState({
      showLoader: state => state.vux.showLoader,
    })
  }
}
</script>

<style scoped>

</style>
