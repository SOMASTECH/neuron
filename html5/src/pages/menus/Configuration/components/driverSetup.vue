<template>
  <div style="display:inline-block;">
    <el-button @click="dialogTableVisible=true">{{driverData.chdv===''?'New':'Edit'}} Driver</el-button>
    <el-dialog title="Driver Setup"
               @closed='close'
               :visible.sync="dialogTableVisible">
      <div class="row">
        <el-select v-model="chdv">
          <el-option v-for="item in driverList"
                     :key="item.val"
                     :label="item.label"
                     :value="item.val">
          </el-option>
        </el-select>
        &nbsp;&nbsp;
        {{driverType}}
      </div>
      <div class="row">
        <template v-if="driverType==='Ethernet drivers'">
          <h3>Ethernet driver setup</h3>
          <el-button @click="addEthernetFormItem">add</el-button>
          <el-form ref="driverSetupForm"
                   label-width="100px">
            <div v-for="(item,index) in chnl"
                 :key="index"
                 class="EthernetFormItem">
              <el-form-item :label="`Host name ${index+1}`">
                <el-input v-model="chnl[index].tcph"></el-input>
              </el-form-item>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <el-form-item :label="`Port no ${index+1}`">
                <el-input-number v-model="chnl[index].tcpp"
                                 :controls='false'
                                 :precision='0'
                                 :min="0" />
              </el-form-item>
            </div>
          </el-form>
        </template>
        <template v-else-if="driverType==='Serial drivers'">
          <h3>Serial driver setup</h3>
          <el-form ref="driverSetupForm"
                   label-width="100px"
                   :model="chnl[0]">
            <el-form-item label="Device name">
              <el-input v-model="chnl[0].ttyc"></el-input>
            </el-form-item>
            <el-form-item label="Baud rate">
              <el-input v-model="chnl[0].ttyb"></el-input>
            </el-form-item>
            <el-form-item label="Data bit">
              <el-input v-model="chnl[0].ttyd"></el-input>
            </el-form-item>
            <el-form-item label="Stop bit">
              <el-input v-model="chnl[0].ttys"></el-input>
            </el-form-item>
            <el-form-item label="Parity bit">
              <el-input v-model="chnl[0].ttyp"></el-input>
            </el-form-item>
          </el-form>
        </template>
      </div>
      <el-button @click="submit">submit</el-button>
    </el-dialog>
  </div>
</template>

<script>
// import { Ethernet, Serial } from '@/config/index'
import { mapMutations, mapState } from 'vuex'
export default {
  data () {
    return {
      dialogTableVisible: false,
      chdv: '', // Channel driver name
      chnl: [{}] // Channel Details
    }
  },
  methods: {
    ...mapMutations({
      setDriverData: 'setDriverData'
    }),
    addEthernetFormItem () {
      if (this.chnl.length && this.chnl.length < 9) {
        this.chnl.push({
          tcph: '',
          tcpp: '',
          'ttyc': '',
          'ttyb': 0,
          'ttyd': 0,
          'ttys': '',
          'ttyp': ''
        })
      }
    },
    submit () {
      this.dialogTableVisible = false
      this.setDriverData({ chdv: this.chdv, chnl: this.chnl })
    },
    close () {
      this.$nextTick(this.init)
    },
    init () {
      const { chdv, chnl } = this.driverData
      this.chdv = chdv
      this.chnl = chnl
    }
  },
  mounted () {
    this.init()
  },
  watch: {
    chdv () {
      if (this.dialogTableVisible) {
        this.chnl = [{
          tcph: '',
          tcpp: '',
          'ttyc': '',
          'ttyb': 0,
          'ttyd': 0,
          'ttys': '',
          'ttyp': ''
        }]
      }
    }
  },
  computed: {
    driverType () {
      let tmp = this.driverList.find(i => i.val === this.chdv)
      return tmp ? tmp.type : ''
      // const chdv = this.chdv
      // let tmp
      // tmp = Ethernet.filter(i => i.val === chdv)[0]
      // if (tmp) return 'Ethernet drivers'
      // tmp = Serial.filter(i => i.val === chdv)[0]
      // if (tmp) return 'Serial drivers'
      // return ''
    },
    ...mapState({
      driverData: state => state.SetUpData.driverData
    }),
    driverList () {
      return this.$store.state.Device.deviceList
    }
  }
}
</script>

<style scoped lang="scss">
.EthernetFormItem {
  display: flex;
}
</style>
