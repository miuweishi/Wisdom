// 修改密码
<template>
  <div class="login-box">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="0px"
      class="demo-ruleForm"
    >
      <el-form-item prop="password">
        <el-input
          v-model="ruleForm.password"
          placeholder="输入原密码"
          type="password"
        ></el-input>
      </el-form-item>

      <el-form-item prop="newpassword">
        <el-input
          v-model="ruleForm.newpassword"
          placeholder="输入新密码"
          type="password"
        ></el-input>
      </el-form-item>

      <el-form-item prop="passwordCheck">
        <el-input
          v-model="ruleForm.passwordCheck"
          placeholder="确认密码"
          type="password"
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-button
          type="primary"
          @click="submitForm('ruleForm')"
        >提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import qs from "qs";
export default {
  data () {
    //原密码验证
    var OldPwd = (rule, value, callback) => {
      if (value != this.$store.state.login.user.password) {
        callback(new Error("密码错误！"));
      } else {
        callback();
      }
    };

    //自定义确认密码验证
    var CheckPwd = (rule, value, callback) => {
      if (value != this.ruleForm.newpassword) {
        callback(new Error("确认密码不一致！"));
      } else {
        callback();
      }
    };
    return {
      targeturl: '',
      phone: '',
      ruleForm: {
        password: "",
        newpassword: "",
        passwordCheck: ""
      },
      rules: {
        password: [{ required: true, validator: OldPwd, trigger: "blur" }],
        newpassword: [{ required: true, message: '请输入密码！', trigger: "blur" }],
        passwordCheck: [{ required: true, validator: CheckPwd, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          let { data } = await this.$axios.put("http://47.112.39.163:1912/users/changePWD", qs.stringify({
            phone: this.$store.state.login.user.phone,
            password: this.ruleForm.newpassword
          }));
          if (data.code) {
            if (data.result) {
              this.$router.push({ path: "/info" });
            } else {
              this.$message.error("修改失败！");
            }
          } else {
            this.$message.error("请求失败！");
          }
        } else {
          this.$message.error("请完成表单！");
          return false;
        }
      });
    },
    resetForm (formName) {
      this.$refs[formName].resetFields();
    }
  },
  components: {},
};


</script>

<style src="../../public/css/login.css"></style>
