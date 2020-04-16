<template>
  <Container type="card-full"
             :scorll='false'>
    <div class="dd-title">Historical Alarms</div>
    <el-row :gutter="20">
      <el-col :span="8">
        date: <el-date-picker v-model="time"
                        class="input"
                        range-separator="-"
                        start-placeholder="start"
                        end-placeholder="end"
                        type="datetimerange">
        </el-date-picker>
      </el-col>
      <el-col :span="4">
        srch: <el-select v-model="srch"
                   class="input"
                   clearable>
          <el-option v-for="item in srchList"
                     :key="item"
                     :label="item"
                     :value="item">
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="4">
        sett: <el-select v-model="sett"
                   class="input"
                   clearable>
          <el-option v-for="item in settList"
                     :key="item"
                     :label="item"
                     :value="item">
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="4">
        cate: <el-select v-model="cate"
                   class="input"
                   clearable>
          <el-option v-for="item in cateList"
                     :key="item"
                     :label="item"
                     :value="item">
          </el-option>
        </el-select>
      </el-col>
    </el-row>
    <el-row :gutter="20"
            class="dd-mt">
      <el-col :span='6'>
        patn: <el-input v-model="patn"
                  class="input"></el-input>
      </el-col>
      <el-col :span="6">
        <el-button class="btn"
                   @click='handleSubmit("")'>submit</el-button>
      </el-col>
    </el-row>
    <el-table :data='data'
              border
              :height='tableHeight'
              style="width: 100%;margin-top:20px;">
      <el-table-column min-width="30"
                       prop="anum"
                       label="Index" />
      <el-table-column min-width="130"
                       label="Time">
        <template slot-scope="scope">
          {{format(scope.row.tstp||'')}}
        </template>
      </el-table-column>
      <el-table-column min-width="60"
                       prop="cate"
                       label="Categ" />
      <el-table-column prop="stat"
                       label="State"
                       min-width="50" />
      <el-table-column prop="uack"
                       min-width="50"
                       label="Uack">
      </el-table-column>
      <el-table-column prop="comt"
                       min-width="400"
                       label="Alarm message" />
    </el-table>
  </Container>
</template>

<script>
import Mixins from '@/mixins'
import moment from 'moment'
export default {
  mixins: [Mixins],
  data () {
    return {
      data: [],
      params: {},
      time: [moment().subtract(1, 'hours'), moment()],
      srch: '',
      srchList: ['FromFirst', 'FromLast', 'UseID', 'Blank'],
      sett: '',
      settList: ['Today', 'Yesterday', 'ThisWeek', 'LastWeek', 'ThisMonth', 'LastMonth'],
      cate: '',
      cateList: ['critical', 'alarm', 'warning', 'event', 'view'],
      patn: ''
    }
  },
  methods: {
    handleSubmit (tokn) {
      if (tokn === '') this.data = []
      let [start, end] = this.time
      const { srch, sett, cate, patn } = this
      start = moment(start)
      end = moment(end)
      this.params = {
        'func': 81,
        srch,
        sett,
        'ofst': 0,
        'tokn': tokn,
        cate,
        patn,
        'fryr': start.year(),
        'frmo': start.month() + 1,
        'frda': start.date(),
        'frhr': start.hour(),
        'frmi': start.minute(),
        'toyr': end.year(),
        'tomo': end.month() + 1,
        'toda': end.date(),
        'tohr': end.hour(),
        'tomi': end.minute()
      }
      this.$ws().set({ success: this.setData }).send(this.params)
    },
    setData (data) {
      if (data.func === 81) {
        if (data.rows) {
          data.rows.forEach(i => this.data.push(i))
        }
        if (data.tokn) {
          if (data.tokn === '-1') {
            this.$ws().remove(this.setData)
          } else {
            this.handleSubmit(data.tokn)
          }
        }
      }
    },
    format (time) {
      return moment(time * 1000).format('YYYY-MM-DD HH:mm:ss')
    }
  },
  computed: {
    tableHeight () {
      return window.innerHeight - 60 - 50 - 40 - 50 - 120
    }
  }
}
</script>

<style lang='scss' scoped>
.input {
  width: calc(100% - 46px);
}
</style>
