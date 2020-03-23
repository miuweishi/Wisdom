//修改昵称
<template>
  <div class="content content-form">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="0px"
      class="demo-ruleForm"
    >
      <el-form-item prop="name">
        <el-input
          v-model="ruleForm.name"
          placeholder="请输入新昵称"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="submitForm('ruleForm')"
        >保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import qs from "qs";
export default {
  data () {
    return {
      ruleForm: {
        name: this.$store.state.login.user.uname
      },
      rules: {
        name: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 3, max: 8, message: '长度在 3 到 8 个字符', trigger: 'blur' }]
      }
    };
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          let { data } = await this.$axios.put(
            "http://47.112.39.163:1912/users/update",
            qs.stringify({
              phone: this.$store.state.login.user.phone,
              newName: this.ruleForm.name
            })
          );
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
          //未通过表单验证
          this.$message.error("昵称格式不正确！");
          return false;
        }
      });
    },
    resetForm (formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>

<style src="../../public/css/center.css"></style>