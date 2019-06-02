/*
 * @Author: yezi
 * @Date: 2019-04-24 16:51:09
 * @Last Modified by: yezi
 * @Last Modified time: 2019-06-02 13:34:02
 * 登录页
 */

<template>
 <div class="page">
   <div class="form-wrapper">

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
  .login-card {

  }
}

</style>
