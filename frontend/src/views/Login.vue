/*
 * @Author: yezi
 * @Date: 2019-04-24 16:51:09
 * @Last Modified by: yezi
 * @Last Modified time: 2019-06-03 22:23:31
 * 登录页
 */

<template>
 <div class="page">
   <div class="form-wrapper">
     <el-card style="width:400px" class="login-card">
      <div slot="header">
        欢迎登录
      </div>
      <el-form ref="login-form" :model="loginForm" :rules="rules" label-width="80px">
        <el-form-item label="用户" prop="name">
          <el-input type="password" v-model="loginForm.name"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="loginForm.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleSubmit('loginForm')">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
   </div>
 </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        name: '',
        password: '',
      },
      rules: {

      },
    };
  },
  methods: {
    handleSubmit() {

    },
  },
};
</script>
<style lang="less" scoped>
.page {
  background: #e9faff;
  height: 100%;
  margin: 0 auto;
  .form-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }
}

</style>
