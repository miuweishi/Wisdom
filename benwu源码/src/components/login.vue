// 登录
<template>
  <div class="login-box">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="0px"
      class="demo-ruleForm"
    >
      <el-form-item prop="phone">
        <el-input
          v-model="ruleForm.phone"
          placeholder="手机号"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="ruleForm.password"
          placeholder="密码"
          show-password
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="submitForm('ruleForm')"
        >登录</el-button>
      </el-form-item>
    </el-form>

    <p class="footer-word">
      还没有账号？
      <router-link :to="{ path: '/register', query: { targeturl: link } }">立即注册</router-link>
    </p>
  </div>
</template>

<script>
import qs from "qs";
export default {
  data () {
    return {
      link: "/register",
      ruleForm: {
        phone: "",
        password: ""
      },
      rules: {
        phone: [{ required: true, validator: CheckTel, trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    loginFail () {
      this.$message.error("登录失败");
    },
    loginWarning () {
      this.$message({
        message: "请正确填写登录信息",
        type: "warning"
      });
    },
    submitForm (formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          let { data } = await this.$axios.post(
            "http://47.112.39.163:1912/users/login",
            qs.stringify({
              phone: this.ruleForm.phone,
              password: this.ruleForm.password,
              keep: true
            })
          );
          if (data.code) {
            //存储token
            this.$store.commit("login", {
              data: data.data[0],
              Authorization: data.authorization
            });
            //退回上一页
            let { targeturl } = this.$route.query;
            this.$router.push({ path: targeturl || "/center" });
          } else {
            //登录失败
            this.loginFail();
          }
        } else {
          //未通过表单验证
          this.loginWarning();
          return false;
        }
      });
    },
    resetForm (formName) {
      this.$refs[formName].resetFields();
    }
  },
  created () {
    let { targeturl } = this.$route.query;
    this.link = targeturl;
  },
  components: {}
};

// 手机号自定义验证
var CheckTel = (rule, value, callback) => {
  const reg = /^1[3|4|5|7|8][0-9]\d{8}$/;
  if (!reg.test(value)) {
    callback(new Error("手机号格式不正确！"));
  } else {
    callback();
  }
};
</script>

<style src="../../public/css/login.css"></style>
