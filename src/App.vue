<template>
  <div id="app" :class="{'light-mode': isDarkMode === false }">
   
    <a-layout id="components-layout-demo-top-side">
      <a-layout-header theme="dark" class="header">
        <div class="logo" />
        <a-menu
          mode="horizontal"
          :default-selected-keys="['2']"
          :style="{ lineHeight: '64px' }"
        >
          <a-menu-item key="1"> <a-icon type="home" /> Overview </a-menu-item>
          <a-menu-item key="2">
            nav 2
          </a-menu-item>
          <a-menu-item key="3">
            nav 3
          </a-menu-item>
        </a-menu>
      </a-layout-header>
      <a-layout-content style="padding: 0 50px">
        <a-layout style="padding: 24px 0; background: #fff">
          <a-layout-content :style="{ padding: '0 24px', minHeight: '280px' }">
            <router-view />
          </a-layout-content>
        </a-layout>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </div>
</template>
<script>
export default {
  components:{
  
  },
  data() {
    return {
      isDarkMode:false
    };
  },
}
</script>

<style lang="less">
#components-layout-demo-top-side .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 28px 16px 0;
  float: left;
}
#app {
  font-family: "Lato-Regular";
  .ant-menu {
    background: transparent;
  
  }
}

#nav {
  padding: 30px;
}
</style>
