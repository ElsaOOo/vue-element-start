/*
 * @Author: yezi
 * @Date: 2019-04-24 16:51:47
 * @Last Modified by: yezi
 * @Last Modified time: 2019-06-02 13:33:23
 * 404页面
 */

<template>
 <div class="page">
   <div class="content">
    <div class="img-wrapper">
      <img src="@/assets/svg/404.svg" alt="404.icon">
    </div>
    <div class="img-wrapper">
      <img src="@/assets/svg/404-cry.svg" alt="404.icon">
    </div>
    <div class="link">
      <span class="back" @click="$router.back()">点我返回哦~</span>
    </div>
  </div>
 </div>
</template>

<script>
export default {
  name: 'NotFound',
  data() {
    return {
    };
  },
  methods: {},
};
</script>
<style lang="less" scoped>
.content {
  padding-top: 50px;
  .fl-col;
  .img-wrapper {
    &:first-child {
      width: 100px;
      height: 100px;
      margin-bottom: 20px;
      img {
        height: 100%;
      }
    }
  }
  .back {
    .point-text(#79CEED, 18px);
  }
}
</style>
