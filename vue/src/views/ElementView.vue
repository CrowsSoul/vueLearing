<script>
export default {
  name: "ElementView"
}
</script>

<template>
  <div>
    <el-menu router :default-active = "$route.path">
      <el-menu-item index="/">
        <template slot="title">
          <i class="el-icon-house"></i>
          系统首页
        </template>
      </el-menu-item>
      <el-menu-item index="/Element">
        <template slot="title">
          <i class="el-icon-menu"></i>
          Element
        </template>
      </el-menu-item>
      <el-submenu>
        <template slot="title">
          <i class="el-icon-menu"></i>
          功能选项
        </template>
        <el-menu-item index="1-1">查看课程评价</el-menu-item>
        <el-menu-item index="1-2">确认课程信息</el-menu-item>
        <el-menu-item index="1-3">编辑学员成绩</el-menu-item>
      </el-submenu>
    </el-menu>
<!--    每一行默认长度是24个单位。每一列的空间已被限制，所以width100%只会填满一部分-->
    <el-row style="padding:20px; display: flex; justify-content: center;">
      <el-col :span="4" style="padding:20px;">
        <img src="@/assets/logo.png" alt="" style="width:100%">
        <div style="text-align: center">这是一个图片</div>
      </el-col>
      <el-col :span="4" style="padding:20px;">
        <img src="@/assets/logo.png" alt="" style="width:100%">
        <div style="text-align: center">这是一个图片</div>
      </el-col>
      <el-col :span="4" style="padding:20px;">
        <img src="@/assets/logo.png" alt="" style="width:100%">
        <div style="text-align: center">这是一个图片</div>
      </el-col>
      <el-col :span="4" style="padding:20px;">
        <img src="@/assets/logo.png" alt="" style="width:100%">
        <div style="text-align: center">这是一个图片</div>
      </el-col>

    </el-row>
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary" size="mini">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
      <el-button icon="el-icon-search" circle></el-button>
      <el-button type="primary" icon="el-icon-edit" circle></el-button>
      <el-button type="success" icon="el-icon-check" circle></el-button>
      <el-button type="info" icon="el-icon-message" circle></el-button>
      <el-button type="warning" icon="el-icon-star-off" circle></el-button>
      <el-button type="danger" icon="el-icon-delete" circle></el-button>
    </el-row>
    <el-row style="padding: 20px;">
      <el-col :span="4">
<!--        强制v-model属性-->
        <el-input v-model="value" placeholder="请输入内容"></el-input>
      </el-col>
      <el-col :span="4">
        <!--        强制v-model属性-->
        <el-input show-password v-model="password" placeholder="请输入密码"></el-input>
      </el-col>
      <el-col :span="4">
        <!--        强制v-model属性-->
        <el-row type="flex" justify="space-between" style="padding-left:10px;">
          <el-input clearable="true" v-model="searchText" placeholder="请搜索" prefix-icon="el-icon-search"></el-input>
          <el-button icon="el-icon-search" circle></el-button>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
    export default {
        name: "ElementView",
        data() {
            return {
                value: "",
                password: "",
                searchText: ""
            }
        },
    }
</script>

<style>

</style>