
<template>
  <div>
    <el-container>
      <el-aside style="width: 200px; min-height: 100vh; background-color: #001529">
        <div style="height: 100px; display: flex; flex-direction: column;
        justify-content: center; align-items: center; color: white;">
          <img  src="@/assets/logo.png" alt="logo" style="width: 50px; height: 40px; margin-top: 10px;">
          <p style="margin-top: 10px;">HQ培训管理系统</p>
        </div>
        <el-menu background-color="#001529" text-color="rgba(255,255,255,0.65)" active-text-color="#fff" router er :default-active = "$route.path">
          <el-menu-item index="/Teacher">
            <template slot="title">
              <i class="el-icon-house"></i>
              讲师端首页
            </template>
          </el-menu-item>
          <el-submenu>
            <template slot="title">
              <i class="el-icon-menu"></i>
              功能选项
            </template>
            <el-menu-item index="/Teacher/1">查看课程评价</el-menu-item>
            <el-menu-item index="/Teacher/2">确认课程信息</el-menu-item>
            <el-menu-item index="/Teacher/3">编辑学员成绩</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header style="display: flex; align-items: center; justify-content: space-between;">
          <el-breadcrumb separator-class="el-icon-arrow-right" style="margin:20px">
            <el-breadcrumb-item :to="{ path: '/Teacher' }">讲师端首页</el-breadcrumb-item>
<!--            <el-breadcrumb-item :to="{ path: '/Teacher/1' }">查看课程评价</el-breadcrumb-item>-->
<!--            <el-breadcrumb-item :to="{ path: '/Teacher/2' }">确认课程信息</el-breadcrumb-item>-->
<!--            <el-breadcrumb-item :to="{ path: '/Teacher/3' }">编辑学员成绩</el-breadcrumb-item>-->
          </el-breadcrumb>

          <div style="display: flex; align-items: center;">
            <el-dropdown placement="bottom-end" @command="handleCommand">
              <div style="display: flex; align-items: center;">
                <span>{{ teacherName }},您好！  欢迎来到HQ培训管理系统</span>
                <img src="@/assets/user.png" alt="" style="width: 40px; height: 40px; margin-left: 10px;">
              </div>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>个人信息</el-dropdown-item>
                <el-dropdown-item command = "logout">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>

        </el-header>

        <el-main style="  display: flex;
            justify-content: center;
            align-items: flex-start; /* 将内容向顶部对齐 */
            min-height: 100vh; /* 使 main 占据整个视口高度 */">
          <img src="@/assets/TeacherMainView.png" alt="TeacherMainView"
          style="width: 60%; height: 90%; object-fit: cover;">
        </el-main>
      </el-container>

    </el-container>
  </div>
</template>

<style>

.el-menu--inline .el-menu-item {
  background-color: #000c17 !important;
}
.el-menu-item:hover {
  color: #fff !important;
}
.el-menu-item.is-active {
  background-color: #40a9ff !important;
  border-radius: 5px !important;
  margin: 4px !important;
}

.el-aside {
  box-shadow: 2px 0 6px rgba(0,0,0,0.3);
}

.el-header {
  background-color: #ffffff;
  box-shadow: 2px 0 6px rgba(0,0,0,0.3);
}
</style>

<script>
export default {
  name: 'TeacherView',
  data() {
    return {
      teacherName: '范老师' // 替换为实际的教师姓名变量
    };
  },
  methods: {
    handleCommand(command) {
      this.$router.push("/")
    }
  }
};
</script>
