<template>
  <el-row type="flex" class="row-bg" justify="center" align="middle">
    <el-col :xs="12" :sm="10" :md="8" :lg="6">
      <el-form
        ref="formName"
        :model="form"
        label-width="80px"
        class="login-form"
        label-position="top"
        :rules="loginRules"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('formName')">登录</el-button>
          <el-button @click="resetForm('formName')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      form: {
        username: "",
        password: ""
      },
      loginRules: {
        username: [
          {
            required: true,
            message: "请输入您的用户名",
            trigger: "blur"
          },
          {
            min: 5,
            max: 12,
            message: "用户名必须在 5 到 12 个字符",
            trigger: "change"
          }
        ],
        password: [
          {
            required: true,
            message: "请输入您的密码",
            trigger: "blur"
          },
          {
            min: 6,
            max: 12,
            message: "密码必须在 6 到 12 个字符",
            trigger: "change"
          }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          axios({
            url: "http://localhost:8888/api/private/v1/login",
            method: "post",
            data: this.form
          }).then(({ data: { data, meta } }) => {
            // console.log(data)
            
            if (meta.status === 200) {
              localStorage.setItem("token",data.token)
              this.$router.push("/home");
            }
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      // console.log(formName)

      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style>
.row-bg {
  height: 100%;
  background-color: #2d434c;
}
.login-form {
  background-color: #fff;
  border-radius: 12px;
  padding: 30px 20px;
  min-width: 400px;
}
</style>