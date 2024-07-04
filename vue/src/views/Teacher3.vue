//编辑学员成绩

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
                        <el-breadcrumb-item :to="{ path: '/Teacher/3' }">编辑学员成绩</el-breadcrumb-item>
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
            <el-table :data="courses" class="centered-table" style="width: 80%" stripe>
              <el-table-column prop="name" label="课程名称" width="255" align="center"></el-table-column>
              <el-table-column prop="time" label="开设时间" width="255" align="center"></el-table-column>
              <el-table-column prop="executor" label="执行人" width="255" align="center"></el-table-column>
              <el-table-column label="操作" width="255">
                <template slot-scope="scope">
                  <el-button v-if="!scope.row.submitted" @click="handleShowDetails(scope.row)" type="primary" size="small">编辑成绩</el-button>
                  <i v-else class="el-icon-check"></i>
                </template>
              </el-table-column>
            </el-table>

            <el-dialog :visible.sync="dialogVisible" title="编辑课程成绩">
              <div class="course-info">
                <span>课程名称: {{ selectedCourse.name }}</span>
                <span>开设时间: {{ selectedCourse.time }}</span>
                <span>执行人: {{ selectedCourse.executor }}</span>
              </div>
              <div v-if="selectedCourse.students && selectedCourse.students.length">
                <h3>学生列表：</h3>
                <el-form ref="gradeForm" :model="selectedCourse" label-width="80px">
                  <el-form-item label-width="200px" v-for="(student, index) in selectedCourse.students" :key="student.id" :label="student.name + '（学号：' + student.id + '）'">
                    <el-input width="20px" v-model="student.grade" placeholder="请输入成绩"></el-input>
                  </el-form-item>
                </el-form>
              </div>
              <el-button type="primary" @click="handleSubmit" style="margin-top: 10px; display: block;
              margin: 0 auto;" v-if="!selectedCourse.submitted">提交</el-button>
            </el-dialog>
          </div>
        </el-main>
      </el-container>

    </el-container>
  </div>
</template>

<style scoped>

</style>

<script>
export default {
  name: 'Teacher3',
  data() {
    return {
      teacherName: '范老师',
      courses: [
        { name: '课程1', time: '2024-01', executor: '张三', students: [{ name: 'Jack', id: 1001, grade: '' },
            { name: 'Tom', id: 1002, grade: '' }, { name: 'Jerry', id: 1003, grade: '' }, { name: 'Kris', id: 1004, grade: '' }], submitted: false },
        { name: '课程2', time: '2024-02', executor: '张三', students: [{ name: '于', id: 2001, grade: '' },
            { name: '罗', id: 2002, grade: '' }, { name: '张', id: 2003, grade: '' }, { name: '李', id: 2004, grade: '' }], submitted: false },
        { name: '课程3', time: '2024-03', executor: '张三', students: [{ name: 'xxx', id: 3001, grade: '' },
            { name: 'xxx', id: 3002, grade: '' }, { name: 'xxx', id: 3003, grade: '' }, { name: 'xxx', id: 3004, grade: '' }], submitted: false },
      ],
      dialogVisible: false,
      selectedCourse: {}
    };
  },
  methods: {
    handleCommand(command) {
      this.$router.push("/");
    },
    handleShowDetails(course) {
      this.selectedCourse = JSON.parse(JSON.stringify(course));
      this.dialogVisible = true;
    },
    // handleSubmit() {
    //   console.log('Submitted grades:', this.selectedCourse.students);
    //   this.selectedCourse.submitted = true; // Mark course as submitted
    //   this.dialogVisible = false; // Close dialog after submission
    // }
  // }
    handleSubmit() {
      // 提交成绩处理
      console.log('Submitted grades:', this.selectedCourse.students);
      // 找到对应课程在数组中的索引
      const index = this.courses.findIndex(course => course.name === this.selectedCourse.name);
      if (index !== -1) {
        // 更新课程的 submitted 属性为 true
        this.$set(this.courses[index], 'submitted', true);
      }
      this.dialogVisible = false; // 关闭对话框
    }
  }
};
</script>
