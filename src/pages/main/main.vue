<template>
  <div id="main">
    <Menu mode="horizontal" theme="light" active-name="1">
        <img class="logo" src="../../assets/images/logo-gb.png" alt="">
        <menu-item name="1">
            <Icon type="md-paper" />
            栏目管理
        </menu-item>
        <menu-item name="2">
            <Icon type="md-people" />
            用户管理
        </menu-item>
        <menu-item name="3">
            <Icon type="md-sync" />
            数据更新
        </menu-item>
    </Menu>
    <Menu mode="vertical" theme="light">
      <Submenu name="1">
        <template slot="title">
            <Icon type="ios-paper" />
            内容管理
        </template>
        <MenuItem name="1-1">文章管理</MenuItem>
        <MenuItem name="1-2">评论管理</MenuItem>
        <MenuItem name="1-3">举报管理</MenuItem>
      </Submenu>
        <menu-item name="2">
            <Icon type="md-people" />
            用户管理
        </menu-item>
        <menu-item name="3">
            <Icon type="md-sync" />
            数据更新
        </menu-item>
    </Menu>
  </div>  
</template>
<script>
export default {
  data() {
    return {
      name: "hehe"
    };
  }
};
</script>
<style lang="less" scoped="scoped">
@import "./main.less";
</style>
