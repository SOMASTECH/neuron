<template>
  <div class="login-page">
    <div class="layer bg"></div>
    <div class="flex-center">
      <div class="form-group">
        <el-card>
          <el-form :model="formLogin"
                   :rules="rules"
                   label-width="100px"
                   ref="loginForm">
            <div class="logo-group">
              <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAA0JCgsKCA0LCgsODg0PEyAVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5aYVpQYEpRUk//2wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCACYAWUDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD06iiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAA8DJrzLxD441K41kWnhyUrEreWpWJXMzZxkZB49K0viL4mFrbto1k/7+Zf37A/cQ/wAP1P8AL61T+GOhBy+tXKZ2kx24I7/xN/T866KUEo88tjOcn8K3PQbLz/sUH2v/AI+PLXzen3sc9OOvpU1FFYN3ZaVlYKKKKQwoormfE3jOw0PdbxYub4D/AFSnhP8A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">
            </div>
            <el-form-item prop="username"
                          label="Username:">
              <el-input type="text"
                        v-model="formLogin.username"
                        placeholder="username">
              </el-input>
            </el-form-item>
            <el-form-item prop="password"
                          label="Password:">
              <el-input type="password"
                        v-model="formLogin.password"
                        placeholder="password">
              </el-input>
            </el-form-item>
            <div class="button-login">
              <el-button @click="submit"
                         type="primary">Login</el-button>
            </div>
          </el-form>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      formLogin: {
        username: '',
        password: ''
      },
      rules: {
        username: { required: true, trigger: 'blur' },
        password: { required: true, trigger: 'blur' }
      }
    }
  },
  methods: {
    submit () {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.$ws({
            name: this.formLogin.username,
            pass: this.formLogin.password
          }).connect().then(userInfo => {
            sessionStorage.setItem('user', JSON.stringify(userInfo))
            this.$router.push({ name: 'index' })
          })
        } else {
          return false
        }
      })
    },
    init () {
      sessionStorage.removeItem('user')
      this.$dataSource && this.$dataSource.close()
    }
  },
  mounted () {
    this.init()
  },
  created () {
    if (this.$env) {
      this.formLogin = {
        username: 'root',
        password: '0000'
      }
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/style/public.scss";
.login-page {
  background-color: $color-info;
  height: 100%;
  position: relative;
  // 层
  .layer {
    position: absolute;
    height: 100%;
    width: 100%;
  }
  .flex-center {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  // 背景
  .bg {
    canvas {
      display: block;
      margin: 0px;
      padding: 0px;
    }
  }
  // logo
  .logo-group {
    text-align: center;
    margin-bottom: $margin;
  }
  // 登陆表单
  .form-group {
    width: 600px;
    // 重新设置卡片阴影
    .el-card {
      box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6), 0 2px 4px 0 #e8edfa80;
      padding: 2 * $margin 0;
    }
    // 登陆按钮
    .button-login {
      button {
        width: 300px;
      }
      margin-top: $margin;
      text-align: center;
    }
    // 输入框左边的图表区域缩窄
    .el-input-group__prepend {
      padding: 0px 14px;
    }
    .login-code {
      height: 40px - 2px;
      display: block;
      margin: 0px -20px;
      border-top-right-radius: 2px;
      border-bottom-right-radius: 2px;
    }
  }
  // 帮助按钮
  .button-help {
    width: 300px;
    margin-top: $margin;
  }
}
</style>
