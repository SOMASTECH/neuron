<template>
  <Container type="card-full"
             :scorll='false'>
    <div class="dd-title">User Administration</div>
    <el-button @click='handleSubmit'
               type='primary'>submit</el-button>
    <el-form ref="userForm"
             class="dd-mt"
             label-width="140px"
             :model="form">
      <el-form-item label="Neuron user"
                    required
                    prop="name"
                    class="form-item">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="Password"
                    required
                    prop="pass"
                    class="form-item">
        <el-input v-model="form.pass"></el-input>
      </el-form-item>
      <el-form-item label="Time-out(min)"
                    required
                    prop="tout"
                    class="form-item">
        <el-input v-model="form.tout"></el-input>
      </el-form-item>
      <!-- <el-form-item label=""> -->
      <div class="dd-mb dd-ml">
        <el-transfer v-model="form.alwl"
                     @change='handleChange'
                     :titles='["Available levels","Allowed levels"]'
                     :data="data"></el-transfer>
      </div>
      <!-- </el-form-item> -->
      <el-form-item label="Default login level"
                    prop="defl"
                    required>
        <el-select v-model="form.defl">
          <el-option v-for="item in options"
                     :key="item.key"
                     :label="item.label"
                     :value="item.key">
          </el-option>
        </el-select>
      </el-form-item>
    </el-form>
  </Container>
</template>

<script>
import { UserLevels } from '@/config'
export default {
  data () {
    return {
      form: {
        name: '',
        pass: '',
        tout: '',
        alwl: [0],
        defl: 0
      },
      data: UserLevels
    }
  },
  computed: {
    options () {
      return UserLevels.filter(i => this.form.alwl.includes(i.key))
    }
  },
  methods: {
    handleSubmit () {
      this.$refs.userForm.validate(valid => {
        if (valid) {
          if (!this.form.alwl.length) {
            this.$message.error('select allowed levels')
            return
          }
          this.$ws().set({ success: this.callback }).send({
            func: 15,
            'cusr': 1,
            nalw: this.form.alwl.length,
            ...this.form,
            tout: +this.form.tout
          })
        }
      })
    },
    handleChange (val) {
      if (!val.length) {
        this.form.defl = null
      } else if (val.length === 1) {
        this.form.defl = val[0]
      }
    },
    callback (val) {
      if (val.func === 15) {
        this.$ws().remove(this.callback)
        console.log(val)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.form-item {
  width: 400px;
}
</style>
