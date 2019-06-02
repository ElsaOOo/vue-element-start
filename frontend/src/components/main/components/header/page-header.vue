<template>
  <el-header class="compo" :class="{'is-collapsed': isCollapsed}">
    <img class="menu-img" src="@/assets/svg/menu.svg" alt="menu.icon" @click="collapseChange">
    <div class="header-bar">
      <user :userAvatar="userAvatar"></user>
    </div>
  </el-header>
</template>

<script>
import EventBus from '@/utils/event-bus';
import User from '../user';
import userAvatar from '@/assets/image/avatar.svg';

export default {
  name: 'PageHeader',
  components: {
    User,
  },
  data() {
    return {
      userAvatar,
      isCollapsed: false,
    };
  },
  methods: {
    collapseChange() {
      this.isCollapsed = !this.isCollapsed;
      EventBus.$emit('collapseChange', this.isCollapsed);
    },
  },
  mounted() {
    window.addEventListener('resize', () => {
      if (window.innerWidth <= 992 && window.innerWidth >= 768) {
        this.isCollapsed = true;
        EventBus.$emit('collapseChange', true);
      }
      if (window.innerWidth >= 1200) {
        this.isCollapsed = false;
        EventBus.$emit('collapseChange', false);
      }
    });
  },
};
</script>

<style lang="less" scoped>
.compo {
  background: #fff;
  border-bottom: solid 1px #dddddd4d;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  width: calc(100% - 200px);
  transition: all 0.2s ease;
  z-index: 999;
  &.is-collapsed {
    width: calc(100% - 78px);
  }
  .menu-img {
    margin: 0 10px;
    height: 32px;
    width: 32px;
    cursor: pointer;
  }
  .header-bar {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
