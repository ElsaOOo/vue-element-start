<template>
 <div style="height: 100%" class="content-wrapper">
   <page-sider></page-sider>
   <el-container>
     <router-view></router-view>
   </el-container>
 </div>
</template>

<script>
import PageSider from './components/side-bar';

export default {
  name: 'Main',
  components: {
    PageSider,
  },
  data() {
    return {
    };
  },
  methods: {},
};
</script>
<style lang="less" scoped>


</style>
