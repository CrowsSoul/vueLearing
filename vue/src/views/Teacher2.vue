// 确认课程信息

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
                        <el-breadcrumb-item :to="{ path: '/Teacher/2' }">确认课程信息</el-breadcrumb-item>
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

        <el-main>
          <div class="table-container">
            <el-table :data="courses" class="centered-table" style="width: 80%" stripe="true">
              <el-table-column prop="name" label="课程名称" width="200" align="center"></el-table-column>
              <el-table-column prop="time" label="开设时间" width="200" align="center"></el-table-column>
              <el-table-column prop="students" label="学生规模" width="200" align="center"></el-table-column>
              <el-table-column prop="executor" label="执行人" width="200" align="center"></el-table-column>
              <el-table-column label="操作" width="220">
                <template slot-scope="scope">
                  <div class="action-container">
                    <el-select v-model="scope.row.status" placeholder="请选择" :disabled="scope.row.processed">
                      <el-option label="接受" value="accepted"></el-option>
                      <el-option label="拒接" value="rejected"></el-option>
                      <el-option label="待协商" value="pending"></el-option>
                    </el-select>
                    <el-button v-if="!scope.row.processed" :disabled="!scope.row.status" @click="handleProcess(scope.row)">提交</el-button>
                    <i v-else class="el-icon-check"></i>
                  </div>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-main>
      </el-container>

    </el-container>
  </div>
</template>

<style scoped>
.table-container {
  margin-top: 20px;
}

.action-container {
  display: flex;
  justify-content: space-between; /* 或者其他适当的 justify-content 设置 */
  align-items: center; /* 垂直居中对齐 */
}

.processed-status {
  display: flex;
  justify-content: center;
}
</style>

<script>
export default {
  name: 'Teacher2',
  data() {
    return {
      teacherName: '范老师',
      courses: [
        { name: '课程1', time: '2024-01', students: '30', executor: '张三', status: '', processed: false },
        { name: '课程2', time: '2024-02', students: '25', executor: '李四', status: '', processed: false },
        { name: '课程3', time: '2024-03', students: '20', executor: '王五', status: '', processed: false },
      ],
    };
  },
  methods: {
    handleCommand(command) {
      this.$router.push("/")
    },
    handleProcess(row) {
      row.processed = true;
      // 可以在这里添加提交逻辑，例如向后端发送数据等
    }
  }
};
</script>