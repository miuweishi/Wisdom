// 注册
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

      <el-form-item>
        <el-checkbox v-model="agree"></el-checkbox>
        <span class="agree">
          我已阅读并同意<a href="javascript:void(0)">《注册协议》</a>
        </span>
      </el-form-item>

      <el-form-item>
        <el-button
          type="primary"
          @click="submitForm('ruleForm')"
        >注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// import qs from "qs";
export default {
  data () {
    return {
      targeturl: '',
      agree: false,
      ruleForm: {
        phone: "",
        password: ""
      },
      rules: {
        phone: [{ required: true, validator: CheckTel, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm (formName) {
      let targeturl = this.targeturl;
      if (this.agree) {
        let uphone = this.ruleForm.phone;
        this.$refs[formName].validate(async valid => {
          if (valid) {
            let { data } = await this.$axios.get(
              "http://47.112.39.163:1912/users/check?phone=" + uphone
            );
            if (data.code) {
              this.$router.push({ path: "/password", query: { phone: uphone, targeturl: targeturl } });
            } else {
              this.$message.error("该手机号已注册！");
            }
          } else {
            this.$message.error("请填写正确的手机号！");
            return false;
          }
        });
      } else {
        this.$message.error("请同意注册协议！");
        return false;
      }
    },
    resetForm (formName) {
      this.$refs[formName].resetFields();
    }
  },
  created () {
    let { targeturl } = this.$route.query;
    this.targeturl = targeturl;
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
