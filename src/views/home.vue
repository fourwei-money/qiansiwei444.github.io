<template>
  <el-container>
    <el-header>
      <el-row type="flex" justify="space-between" align="middle">
        <el-col :span="6">
          <img src="../assets/1.png" alt>
        </el-col>
        <el-col >
          <h1>黑马大前端</h1>
        </el-col>
        <el-col :span="7" class="colRight">
          <span>
            欢迎上海前端31期星曜会员

            </span>
            <a href="#">退出</a>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside width="200px">
         <el-menu
      default-active="$route.path"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :unique-opened="true"
      :router="true"
      >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>用户管理</span>
        </template>
          <el-menu-item index="/user">
             <i class="el-icon-menu"></i>
          <span>用户列表</span>
          </el-menu-item>
      </el-submenu>
       <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>权限管理</span>
        </template>
          <el-menu-item index="1-1-1">
             <i class="el-icon-menu"></i>
          <span>角色列表</span>
          </el-menu-item>
          <el-menu-item index="1-1-2">
             <i class="el-icon-menu"></i>
          <span>权限列表</span>
          </el-menu-item>
      </el-submenu>
       <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>商品管理</span>
        </template>
          <el-menu-item index="1-1-3">
             <i class="el-icon-menu"></i>
          <span>商品列表</span>
          </el-menu-item>
           <el-menu-item index="1-1-4">
             <i class="el-icon-menu"></i>
          <span>分类参数</span>
          </el-menu-item>
           <el-menu-item index="1-1-5">
             <i class="el-icon-menu"></i>
          <span>商品分类</span>
          </el-menu-item>
      </el-submenu>
       <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>订单管理</span>
        </template>
          <el-menu-item index="1-1-6">
             <i class="el-icon-menu"></i>
          <span>订单列表</span>
          </el-menu-item>
      </el-submenu>
       <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>数据统计</span>
        </template>
          <el-menu-item index="1-1-7">
             <i class="el-icon-menu"></i>
          <span>数据报表</span>
          </el-menu-item>
      </el-submenu>
      
    </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<style lang="less">
.el-container {
  .el-header {
    background-color: #b3c1cd;
    padding: 0;
  }
  .el-row {
    h1 {
      padding: 0;
      font-size: 28px;
      margin: 0;
      font-weight: 700;
      text-align: center;
      color: #fff;
    }
    img{
      width: 200px;
    }
    .colRight {
      text-align: right;
      padding-right: 20px;
      font-weight: bolder;
      a {
        color: #daa520;
        // display: inline-block;
      }
    }
  }
}
.el-container{
  height: 100%;
  .el-menu{
    height: 100%;
  }
}
</style>