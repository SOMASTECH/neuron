<template>
  <el-tooltip
    class="item"
    effect="dark"
    :content="isFullScreen ? '退出全屏' : '全屏'"
    placement="bottom">
    <el-button class="dd-mr btn-text" type="text" @click="toggleFullScreen">
      <Icon v-if="isFullScreen" name="compress"></Icon>
      <Icon v-else name="arrows-alt"></Icon>
    </el-button>
  </el-tooltip>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
  computed: {
    ...mapState({
      isFullScreen: state => state.FullScreen.isFullScreen
    })
  },
  methods: {
    ...mapMutations([
      'toggleFullScreen'
    ])
  }
}
</script>

<!--<style scoped lang="scss">-->
<!--@import "@/assets/style/public.scss";-->
  <!--.btn-text{-->
    <!--color:$color-text-normal;-->
  <!--}-->
<!--</style>-->
