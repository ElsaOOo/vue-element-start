<template>
 <el-aside width="200px"
  style="background-color: #545c64">
  <slot></slot>
  <el-menu default-active="1-1"
    class="side-menu-wrapper side-menu"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    :collapse="isCollapse">
   <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span slot="title">导航一</span>
      </template>
      <el-menu-item index="1-1">选项1</el-menu-item>
      <el-menu-item index="1-2">选项2</el-menu-item>
    </el-submenu>
    <el-menu-item index="2">
      <i class="el-icon-menu"></i>
      <span slot="title">导航二</span>
    </el-menu-item>
    <el-menu-item index="4">
      <i class="el-icon-setting"></i>
      <span slot="title">导航四</span>
    </el-menu-item>`
  </el-menu>
 </el-aside>
</template>

<script>
import EventBus from '@/utils/event-bus';

export default {
  name: 'PageSiders',
  props: {
    menuList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      isCollapse: false,
    };
  },
  methods: {},
  mounted() {
    EventBus.$on('collapseChange', (isCollapsed) => {
      this.isCollapsed = isCollapsed;
    });
  },
};
</script>
<style lang="less" scoped>
@import './side-menu.less';
</style>
