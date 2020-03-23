// 注册验证手机成功后跳转输入密码表单
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
          placeholder="输入密码"
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
    //自定义确认密码验证
    var CheckPwd = (rule, value, callback) => {
      if (value != this.ruleForm.password) {
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
        passwordCheck: ""
      },
      rules: {
        password: [{ required: true, message: '请输入密码！', trigger: "blur" }],
        passwordCheck: [{ required: true, validator: CheckPwd, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          let info = {
            uname: this.phone,
            phone: this.phone,
            password: this.ruleForm.password,
            imgurl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576922981371&di=556ffc7f24dea3d50496ce7ffa297df2&imgtype=0&src=http%3A%2F%2Fku.90sjimg.com%2Felement_origin_min_pic%2F01%2F31%2F87%2F96573b585a7c9c4.jpg',
            identity: 0
          };
          let { data } = await this.$axios.post("http://47.112.39.163:1912/users/reg", qs.stringify(info));
          if (data.code) {
            this.$router.push({ path: this.targeturl || "/login" });
          } else {
            this.$message.error("注册失败！");
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
  async created () {
    let { phone, targeturl } = this.$route.query;
    this.phone = phone;
    this.targeturl = targeturl;
  }
};


</script>

<style src="../../public/css/login.css"></style>
