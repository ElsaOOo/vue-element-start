<template>
 <div class="user-avatar-dropdown">
   <el-dropdown @on-click="handleClick">
    <el-badge>
      <img class="avatar" :src="userAvatar"/>
    </el-badge>
    <i class="el-icon-arrow-down" :size="18"></i>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item name="logout">退出登录</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
 </div>
</template>

<script>

export default {
  name: 'User',
  props: {
    userAvatar: {
      type: String,
    },
  },
  data() {
    return {

    };
  },
  methods: {
    logout() {
      this.$router.push('/login');
    },

    handleClick(name) {
      switch (name) {
        case 'logout':
          this.logout();
          break;
        default:
          break;
      }
    },
  },
};
</script>
<style lang="less" scoped>
.user-avatar-dropdown {
  margin-right: 10px;
}
.avatar {
  width: 32px;
}
</style>
