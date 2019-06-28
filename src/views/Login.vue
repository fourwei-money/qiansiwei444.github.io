<template>
  <el-row type="flex" class="row-bg" justify="center" align="middle">
    <el-col :xs="12" :sm="10" :md="8" :lg="6">
      <el-form ref="form" :model="form" label-width="80px" class="login-form" label-position="top" :rules="loginRules">
        <el-form-item label="用户名" prop="suername">
          <el-input v-model="form.suername"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">登录</el-button>
          <el-button>重置</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>
<script>
export default {
  data() {
    return {
      form: {
        suername: "",
        password: ""
      },
      loginRules: {
        suername: [
          {
            required: true,
            message: "请输入您的用户名",
            trigger: "blur"
          }
        ],
        password:[
          {
            required: true,
            message: "请输入您的密码",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
     submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
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