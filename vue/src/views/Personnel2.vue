//现场缴费确认

<script>
export default {
  name: "Personnel2",
  data(){
    return{
      personnelName: "王张李",
      courses: [],
      state: '',
      result:{},
      resultStudents: [],
      visible:false
    }
  },
  methods: {
    handleCommand(command) {
      this.$router.push("/")
    },
    querySearch(queryString, cb) {
      var courses = this.courses;
      var results = queryString ? courses.filter(this.createFilter(queryString)) : courses;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return (course) => {
        const regex = new RegExp(queryString, 'i');
        return regex.test(course.value);
      };
    },
    handleConfirm(student) {
      console.log(student.confirmed);
      this.$set(student, 'confirmed', true);
    },
    loadAll() {
      return [
        { "value": "高级软件测试", "id": "100903114" ,
          "students":[{"name":"张三","id":"10083"},{"name":"李四","id":"10084"},{"name":"王五","id":"10085"},
            {"name":"王五","id":"10086"},{"name":"王五","id":"10087"},{"name":"王五","id":"10088"},
            {"name":"王五","id":"10089"},{"name":"王五","id":"10090"},{"name":"王五","id":"10091"},
            {"name":"王五","id":"10092"},{"name":"王五","id":"10093"},{"name":"王五","id":"10094"},
            {"name":"王五","id":"10095"},
            {"name":"王五","id":"10096"},{"name":"王五","id":"10097"},
          ]},
        { "value": "软件过程与项目管理", "id": "100839096" },
        { "value": "Java软件开发", "id": "100839077" },
        { "value": "敏捷开发过程", "id": "100867890" },
      ];
    },
    showSearchResults() {
      // 手动触发搜索框中的查询
      const matchedCourse = this.courses.find(course => course.value === this.state);
      if (matchedCourse) {
        this.result = matchedCourse; // 只显示完全匹配的结果
      } else {
        this.result = {}; // 如果没有匹配项，则清空结果
      }
      this.visible = true;
      this.resultStudents = this.result.students;
      // for(const student of this.resultStudents)
      // {student.confirmed = false;}
      this.resultStudents.forEach(student => {
        this.$set(student, 'confirmed', false);
      });
      console.log(this.result.value);
    }
  },
  handleSelect(item) {
    console.log(item);
  },
  mounted() {
    this.courses = this.loadAll();
  }
}
</script>

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
          <el-menu-item index="/Personnel">
            <template slot="title">
              <i class="el-icon-house"></i>
              现场工作人员端首页
            </template>
          </el-menu-item>
          <el-submenu>
            <template slot="title">
              <i class="el-icon-menu"></i>
              功能选项
            </template>
            <el-menu-item index="/Personnel/1">现场签到确认</el-menu-item>
            <el-menu-item index="/Personnel/2">现场缴费确认</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header style="display: flex; align-items: center; justify-content: space-between;">
          <el-breadcrumb separator-class="el-icon-arrow-right" style="margin:20px">
            <el-breadcrumb-item :to="{ path: '/Personnel' }">现场工作人员端首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/Personnel/2' }">现场缴费确认</el-breadcrumb-item>
          </el-breadcrumb>

          <div style="display: flex; align-items: center;">
            <el-dropdown placement="bottom-end" @command="handleCommand">
              <div style="display: flex; align-items: center;">
                <span>{{ personnelName }},您好！  欢迎来到HQ培训管理系统</span>
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
          <div style="margin-top: 15px;">
            <el-autocomplete
                class="iws"
                v-model="state"
                :fetch-suggestions="querySearch"
                placeholder="输入课程名称选择现场课程"
                :trigger-on-focus="false"
                @select="handleSelect"
            >
              <el-button slot="append" icon="el-icon-search" @click="showSearchResults"></el-button>
            </el-autocomplete>
            <div v-if="visible" class="search-results">
              <p>课程名称: {{ result.value }}, ID: {{ result.id }}</p>
              <el-table :data="resultStudents" class="centered-table" style="width: 100%" stripe="true">
                <el-table-column prop="name" label="学员姓名" width="200" align="center"></el-table-column>
                <el-table-column prop="id" label="ID" width="200" align="center"></el-table-column>
                <el-table-column label="操作" width="220">
                  <template slot-scope="scope">
                    <div class="action-container">
                      <el-button v-if="!scope.row.confirmed" type="primary" style="margin-top: 10px; display: block; margin: 0 auto;" @click="handleConfirm(scope.row)">确认缴费</el-button>
                      <i v-else class="el-icon-check"></i>
                    </div>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </div>
        </el-main>
      </el-container>

    </el-container>
  </div>
</template>

<style scoped>

</style>