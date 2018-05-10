<template>
  <div class="modal">
    <div class="button-group">
      <div class="button" v-for="(btn, index) in btnList" :key="index" :style="{color: btn.color}" @click="btnClick(index)">
       {{btn.text}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'modal',
  data () {
    return {
    }
  },
  props: {
    btnList: {
      type: Array,
      defalut: []
    }
  },
  methods: {
    btnClick (index) {
      this.$emit('click', index)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.modal
  background-color: rgba(0, 0, 0, 0.6);
  position absolute
  top 0
  left 0
  right 0
  bottom 0
  .button-group
    background #ffffff
    text-align center
    color: rgba(47, 51, 56, 1);
    font-size: 0.32rem;
    position absolute
    bottom 0
    left 0
    width 100%
    .button
      height: 1rem;
      line-height: 1rem;
      border-bottom: 1px solid rgba(241, 241, 241, 1);

</style>
