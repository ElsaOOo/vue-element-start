<template>
 <div style="height: 100%" class="content-wrapper">
   <page-sider>
     <div class="logo">
      <span v-if="!isCollapsed">Admin</span>
      <img class="img" src="@/assets/svg/letter-y.svg" alt="letter-y.svg" v-else>
    </div>
   </page-sider>
   <el-container class="content-area">
     <page-header></page-header>
     <div class="content">
        <router-view/>
      </div>
   </el-container>
 </div>
</template>

<script>
import EventBus from '@/utils/event-bus';
import PageSider from './components/side-bar';
import PageHeader from './components/header';

export default {
  name: 'Main',
  components: {
    PageSider,
    PageHeader,
  },
  data() {
    return {
      isCollapsed: false,
      menuList: [
        {
          name: 'dashboard',
          icon: 'ios-home-outline',
          meta: {
            title: 'Dashboard',
          },
        },
        {
          name: 'Tabels',
          icon: 'ios-albums-outline',
          meta: {
            title: 'Tables',
          },
          children: [
            {
              name: 'basic-table',
              meta: {
                title: 'Basic Table',
              },
            },
            {
              name: 'advanced-table',
              meta: {
                title: 'Advanced Table',
              },
            },
          ],
        },
        {
          name: 'Charts',
          icon: 'ios-analytics-outline',
          meta: {
            title: 'Charts',
          },
        },
      ],
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
.content-wrapper {
  display: flex;
  .content-area {
    height: 100%;
    flex: 1;
    position: relative;
    .content {
      padding: 10px 15px;
      margin-top: 64px;
      overflow-y: scroll;
      width: 100%;
      &::-webkit-scrollbar {
        width: 5px;
        background-color: #F5F5F5;
      }
      &::-webkit-scrollbar-thumb {
        background-color: #000000;
        border: 1px solid #555555;
      }
    }
  }
}
.logo {
  height: 60px;
  line-height: 60px;
  text-transform: uppercase;
  font-weight: 600;
  text-align: center;
  color: #fff;
  font-size: 22px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  .img {
    margin-top: 10px;
  }
}
</style>
