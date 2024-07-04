// 查看课程评价
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
                        <el-breadcrumb-item :to="{ path: '/Teacher/1' }">查看课程评价</el-breadcrumb-item>
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
              <el-table-column prop="name" label="课程名称" width="240" align="center"></el-table-column>
              <el-table-column prop="time" label="开设时间" width="240" align="center"></el-table-column>
              <el-table-column prop="rating" label="课程评分" width="240" align="center"></el-table-column>
              <el-table-column label="操作" width="240">
                <template slot-scope="scope">
                  <el-button @click="handleShowDetails(scope.row)" type="primary" size="small">查看详情</el-button>
                </template>
              </el-table-column>
            </el-table>

            <el-dialog :visible.sync="dialogVisible" title="课程详情">
              <div class="course-info">
                <span>课程名称: {{ selectedCourse.name }}</span>
                <span>开设时间: {{ selectedCourse.time }}</span>
                <span>课程评分: {{ selectedCourse.rating }}</span>
              </div>
              <div v-if="selectedCourse.reviews && selectedCourse.reviews.length">
                <el-collapse>
                  <el-collapse-item title="学生评价">
                    <ul>
                      <li v-for="(review, index) in selectedCourse.reviews" :key="index">学生评价{{ index + 1 }}: {{ review }}</li>
                    </ul>
                  </el-collapse-item>
                </el-collapse>
              </div>
            </el-dialog>
          </div>
        </el-main>
      </el-container>

    </el-container>
  </div>
</template>

<style>
.table-container {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 0; /* 确保表格贴紧上侧边界 */
}

.centered-table {
  width: 80%;
  margin: 0; /* 确保表格居中 */
}

.course-info span {
  flex: 1;
  text-align: center;
  margin-right: 20px;
}
</style>

<script>
export default {
  name: 'Teacher1',
  data() {
    return {
      teacherName: '范老师', // 替换为实际的教师姓名变量
      courses: [
        { name: '课程1', time: '2024-01', rating: 8, reviews: ["非常好", "讲得很详细"] },
        { name: '课程2', time: '2024-02', rating: 9, reviews: ["内容丰富", "老师讲课有趣"] },
        { name: '课程3', time: '2024-03', rating: 7, reviews: ["还不错", "需要更多实例"] },
      ],
      dialogVisible: false,
      selectedCourse: {}
    };
  },
  methods: {
    handleCommand(command) {
      this.$router.push("/")
    },
    handleShowDetails(course) {
      this.selectedCourse = course;
      this.dialogVisible = true;
    }
  }
};


</script>


