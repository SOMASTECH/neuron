<template>
  <div class="dd-card-full"
       :style="cardStyle">
    <div v-if="$slots.header"
         class="dd-card-full__header"
         ref="header">
      <slot name="header"></slot>
    </div>
    <div class="dd-card-full__body"
         ref="wrapper">
      <slot />
    </div>
    <div v-if="$slots.footer"
         class="dd-card-full__footer"
         ref="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
// 插件
export default {
  props: {
    top: {
      type: Number,
      required: false,
      default: 0
    },
    right: {
      type: Number,
      required: false,
      default: 0
    },
    bottom: {
      type: Number,
      required: false,
      default: 0
    },
    left: {
      type: Number,
      required: false,
      default: 0
    }
  },
  data () {
    return {
      headerHeight: 0,
      footerHeight: 0
    }
  },
  computed: {
    cardStyle () {
      return `
      top:${this.top}px;
      right:${this.right}px;
      bottom:${this.bottom}px;
      left:${this.left}px`
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/style/public.scss";
.dd-card-full {
  position: absolute;
  border: 1px solid #ebeef5;
  background-color: #fff;
  border-radius: $border-radius;
  overflow: hidden;
  transition: 0.3s;
  color: $color-text-main;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  &:hover {
    box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6),
      0 2px 4px 0 rgba(232, 237, 250, 0.5);
  }
  .dd-card-full__header {
    padding: $margin;
    border-bottom: 1px solid #ebeef5;
    box-sizing: border-box;
  }
  .dd-card-full__body {
    flex-grow: 1;
    overflow: auto;
    padding: $margin;
    position: relative;
  }
  .dd-card-full__footer {
    border-top: 1px solid #ebeef5;
    box-sizing: border-box;
    padding: $margin;
  }
}
</style>
