<template>
  <div id="login">
    <div id="particles"></div>
    <Form ref="formInline" :model="formInline" :rules="ruleInline">
      <img class="logo" src="../../assets/images/logo-gb.png" alt="">
      <FormItem prop="user">
        <i-input size="large" type="text" v-model="formInline.user" placeholder="请输入账号">
          <Icon class="icon" type="md-person" slot="prepend" size="16"></Icon>
        </i-input>
      </FormItem>
      <FormItem prop="password">
        <i-input size="large" type="password" v-model="formInline.password" placeholder="请输入密码">
          <Icon class="icon" type="md-key" slot="prepend" size="16"></Icon>
        </i-input>
      </FormItem>
      <FormItem prop="verification" class="verification">
        <i-input size="large" type="text" v-model="formInline.verification" placeholder="请输入验证码">
          <Icon class="icon" type="md-lock" slot="prepend" size="16"></Icon>
          <img class="verification-img" slot="append" src="../../assets/images/v9am.png" />
        </i-input>
      </FormItem>
      <FormItem>
        <Button :disabled="submit" class="button" size="large" type="primary" @click="handleSubmit('formInline')">登录</Button>
      </FormItem>
    </Form>
  </div>
</template>
<script>
import "particles.js";
import particlesConfig from "./js/default.js";

export default {
  data() {
    return {
      formInline: {
        user: "",
        password: "",
        verification: ""
      },
      ruleInline: {
        user: [
          {
            required: true,
            message: "账号不能为空",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "密码不能为空",
            trigger: "blur"
          },
          {
            type: "string",
            min: 6,
            message: "密码长度不能小于6位",
            trigger: "blur"
          }
        ],
        verification: [
          {
            required: true,
            message: "验证码不能为空",
            trigger: "blur"
          }
        ]
      },
      submit: false
    };
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.submit = true;
          // eslint-disable-next-line
          this.$axios
            .post("/mock/user", {
              user: this.formInline.user,
              password: this.formInline.password,
              verification: this.formInline.verification
            })
            .then(res => {
              if (res === "1") {
                this.$Message.success("登录成功!");
                this.$router.push({ path: "/main" });
              } else {
                this.$Message.error("信息错误！");
              }
            })
            .catch(() => {
              this.$Message.error("登录失败！");
            })
            .finally(() => {
              this.submit = false;
            });
        } else {
          this.$Message.error("请注意填写登录信息！");
        }
      });
    }
  },
  mounted() {
    // 背景动画
    // eslint-disable-next-line
    particlesJS("particles", particlesConfig);
  }
};
</script>
<style lang="less">
@import "./login.less";
</style>
