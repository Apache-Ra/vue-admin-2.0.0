<template>
  <div class="login">
    <el-form label-position="left" label-width="0px" class="demo-ruleForm login-container">
      <h4 class="loginTitle">管理员登陆</h4>
      <el-form-item prop="account">
        <el-input type="text" v-model="userAccountInfo.userAccount" auto-complete="off" placeholder="账号"></el-input>
      </el-form-item>
      <el-form-item prop="checkPass">
        <el-input type="password" v-model="userAccountInfo.userPwd" auto-complete="off" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item style="width:100%;">
        <el-button type="primary" style="width:100%;" @click.native.prevent="handleLogin" :loading="loading">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// 极验
import GT from '../assets/lib/gt'
import {mapState} from 'vuex'
import LocalStorage from '../kit/LocalStorage'
export default {
  title:'登陆',
  name: 'login',
  components: {},
  computed: {
    ...mapState({
      loginStatus: state => state.vux.loginStatus,
    })
  },
  data() {
    return {
      userAccountInfo:{},
      rememberPwd: true,
      loading: false
    }
  },
  created() {
    let vue = this
    console.log(vue.loginStatus)
    // 判断登录状态
    let UNCIOM_setting = LocalStorage.getKey('UNCIOM_setting')
    if (UNCIOM_setting.loginStatus) {
      vue.$router.push({name: 'administratorAccount'});
    }

  },
  mounted() {
  },
  methods: {
    handleLogin () {
      let vue = this
      vue.loading = true
      setTimeout( () =>{
        vue.loading = false;
        vue.$message({
          type: 'success',
          duration: 1000,
          message: '登录成功',
          onClose: ()=> {
            // 存储登录信息
            LocalStorage.setKey('UNCIOM_setting',{loginStatus: true, activeMenu: 'administratorAccount'});
            // 更改登录状态
            vue.$store.commit('uploadLoginStatus', true);
            // 跳转页面
            vue.$router.push({name: 'administratorAccount'});
            //
            // vue.$router.replace({name: 'administratorAccount'})
            console.log(this)
          }
        })
      },1000)
    }
  }
}
</script>

<style>

</style>
