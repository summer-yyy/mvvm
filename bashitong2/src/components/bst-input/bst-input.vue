<template>
  <div class="bst-input">
      <img class="icon search" src="./reset-search@2x.png" v-show="iconShow">
      <input ref="input" type="input" class="input" :value="value" @input="updateValue($event.target.value)" :placeholder="placeHolder" :maxLength="maxLength"/>
      <img v-show="value.length>0" class="close icon" src="./reset-closed-normal@2x.png" @click="$emit('input', '')">
  </div>
</template>

<script>
export default {
  name: 'bst-input',
  data () {
    return {
    }
  },
  props: {
    placeHolder: {
      type: String,
      defalut: ''
    },
    value: {
      type: String,
      defalut: ''
    },
    maxLength: {
      type: Number,
      defalut: ''
    },
    iconShow: {
      type: Boolean,
      defalut: true
    }
  },
  methods: {
    // 不是直接更新值，而是使用此方法来对输入值进行格式化和位数限制
    updateValue (value) {
      var formattedValue = value
      // 删除两侧的空格符
        .trim()
        // 如果值尚不合规，则手动覆盖为合规的值
      if (formattedValue !== value) {
        this.$refs.input.value = formattedValue
      }
      // 通过 input 事件带出数值
      this.$emit('input', formattedValue)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.bst-input
  background-color: rgba(255,255,255,1);
  display:flex
  align-items:center
  height 100%
  .icon
    height 0.3rem
    width 0.3rem
  .input
    border none
    height 100%
    flex 1
    margin 0 0.14rem
    color #2F3338
</style>
