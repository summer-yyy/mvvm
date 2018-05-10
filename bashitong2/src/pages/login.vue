<template>
  <div class="wrapper">
    <div class="contentWrapper">
      <Dialog :title="title" :error="error" :btnText="btnText" :btnActive="btnActive" @btnClick="btnClick" @close="close">
        <div class="content" v-show="step===1">
          <span>+86</span>
          <img src="@/assets/image/phone-arrrow@2x.png">
          <div class="input">
           <bst-input v-model="phoneNum" :placeHolder="placeHolder" :iconShow="false" :maxLength="11" @input="input"></bst-input>
          </div>
        </div>
        <div class="content codeWrapper" v-show="step===2">
          <p>验证码发送至 135 2474 3231</p>
          <div class="sendCode">
            60s后重发
          </div>
          <div class="code">
            <input class="codeInput" v-model="code" @input="codeInput($event.target.value)" maxlength="4">
            <div class="box" :class="{active: 1 === codeActive}">{{code.charAt(0)}}</div>
            <div class="box" :class="{active: 2 === codeActive}">{{code.charAt(1)}}</div>
            <div class="box" :class="{active: 3 === codeActive}">{{code.charAt(2)}}</div>
            <div class="box" :class="{active: 4 === codeActive}">{{code.charAt(3)}}</div>
          </div>
        </div>
        <div class="agreenment" v-show="step===2">
          <img class="icon-check" src="@/assets/image/code-agree-icon@2x.png" alt="">
          您已阅读并同意
          <router-link to="/agreement" tag="span">《用户注册协议》</router-link>
        </div>
      </Dialog>
    </div>
  </div>
</template>

<script>
import Dialog from '@/components/dialog/dialog'
import BstInput from '@/components/bst-input/bst-input'
export default {
  name: 'login',
  data () {
    return {
      step: 1,
      title: '输入手机号',
      error: '',
      btnText: '下一步',
      placeHolder: '请输入手机号码',
      phoneNum: '',
      btnActive: false,
      codeActive: 1,
      code: ''
    }
  },
  methods: {
    input (val) {
      if (val.length < 11) {
        this.btnActive = false
        this.error = ''
      } else {
        if (isNaN(val)) {
          this.error = '手机号有误'
          this.btnActive = false
        } else {
          this.btnActive = true
        }
      }
    },
    btnClick () {
      if (this.step === 1) {
        this.title = '输入验证码'
        this.btnText = '完成'
        this.btnActive = false
      }
      this.step++
    },
    codeInput (val) {
      this.codeActive = val.length + 1
      if (val.length < 4) {
        this.btnActive = false
      } else {
        this.btnActive = true
      }
    },
    close () {
      this.$router.push('/')
    }
  },
  components: {
    Dialog,
    BstInput
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.wrapper
  background-color: rgba(0, 0, 0, 0.2);
  position absolute
  top 0
  left 0
  right 0
  bottom 0
  .contentWrapper
    width 5.40rem
    margin 2.17rem auto
    .content
      display flex
      color #9B9B9B;
      font-size 0.26rem;
      margin-top 0.54rem
      margin-bottom 0.93rem
      justify-content center
      align-items center
      img
        width 0.12rem
        height 0.24rem
        margin 0 .18rem
      .input
        width 2rem
      .sendCode
        width: 1.66rem;
        height: .58rem;
        line-height .58rem
        border-radius: .04rem;
        border: 1px solid rgba(204, 204, 204, 1);
        margin-top 0.35rem
      .code
        display flex
        margin-top 0.35rem
        position relative
        overflow hidden
        .codeInput
          opacity 0
          height 100%
          width 200%
          left -100%
          top 0
          position absolute
        .box
          width: .90rem;
          height: .90rem;
          border-radius: 0.02rem;
          border: 1px solid rgba(204, 204, 204, 1);
          margin-right .24rem
          line-height: .90rem;
          color: rgba(51, 51, 51, 1);
          font-size: .48rem;
          text-align: center;
          &:nth-last-child(1)
            margin-right 0
          &.active
            border: 1px solid rgba(255, 183, 64, 1);
    .codeWrapper
      flex-direction column
      margin-top 0
    .agreenment
      margin-top 0.28rem
      margin-bottom 0.38rem
      font-size 0.22rem
      color #cccc
      .icon-check
        width: .22rem;
        height: .22rem;
      span
        color: #FFB740

</style>
