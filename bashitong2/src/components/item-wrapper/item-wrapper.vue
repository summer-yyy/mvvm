<template>
  <div class="item-wrapper">
    <div class="header">
      <span>{{title}}</span>
      <img class="icon" :src="icon" @click="iconClick">
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'item-wrapper',
  data () {
    return {
    }
  },
  props: {
    icon: {
      type: String,
      defalut: ''
    },
    title: {
      type: String,
      defalut: ''
    }
  },
  methods: {
    iconClick (e) {
      this.$emit('iconClick', e)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.item-wrapper
  background-color: rgba(255,255,255,1);
  height 100%
  width 100%
  .header
    display:flex
    align-items:center
    background #F8F8F8
    display flex
    justify-content space-between
    color #9B9B9B
    height 0.8rem
    line-height  0.8rem
    font-size 0.22rem
    padding 0 0.3rem
    .icon
      height 0.22rem
      width 0.22rem
</style>
