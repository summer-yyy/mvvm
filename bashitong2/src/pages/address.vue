<template>
  <div class="commonPlace">
    <div class="itemWrapper">
      <div class="item">
        <img class="item-icon" src="@/assets/image/add-home-icon@2x.png" />
        <div class="content">
          <p class="title">家</p>
          <p class="text">南京西路2000路</p>
        </div>
        <div class="control">
          <span @click="showReset=true">设置家的位置</span>
          <img class="icon" src="@/assets/image/more-normal@2x.png" @click="showModal=true"/>
        </div>
      </div>
      <div class="item">
        <img class="item-icon" src="@/assets/image/add-company-icon@2x.png" />
        <div class="content">
          <p class="title">公司</p>
          <p class="text">南京西路2000路</p>
        </div>
        <div class="control">
          <span @click="showReset=true">设置公司的位置</span>
          <img class="icon" src="@/assets/image/more-normal@2x.png" @click="showModal=true"/>
        </div>
      </div>
    </div>
    <Modal v-show="showModal" :btnList="btnList" @click="btnClick"></Modal>
    <ResetPlace v-show="showReset"></ResetPlace>
  </div>
</template>

<script>
import Modal from '@/components/Modal/Modal'
import ResetPlace from '@/pages/ResetPlace'
export default {
  name: 'commonPlace',
  data () {
    return {
      showModal: false,
      showReset: false,
      btnList: [{
        color: '#2F3338',
        text: '重新设置地址',
        cb: () => {
          this.showReset = true
          this.showModal = false
        }
      }, {
        color: '#FB7629',
        text: '删除地址'
      }, {
        color: '#9B9B9B',
        text: '取消',
        cb: () => {
          this.showModal = false
        }
      }]
    }
  },
  methods: {
    btnClick (index) {
      if (this.btnList[index].cb && typeof this.btnList[index].cb === 'function') {
        this.btnList[index].cb()
      }
    }
  },
  components: {
    Modal,
    ResetPlace
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.commonPlace
  background #F2F2F2
  position absolute
  top 0
  left 0
  right 0
  bottom 0
  overflow hidden
  .itemWrapper
    padding 0 0.44rem
    background #ffffff
  .item
    display flex
    align-items center
    overflow hidden
    border-bottom 1px solid rgba(237, 237, 237, 1)
    height 1.45rem
    .item-icon
      width 0.27rem
      height 0.27rem
    .content
      float left
      margin-left 0.13rem
      flex 1
    .title
      height: 0.4rem;
      line-height: 0.4rem;
      color: rgba(47, 51, 56, 1);
      font-size: 0.28rem;
    .text
      height: 0.30rem;
      line-height: .30rem;
      color: rgba(155, 155, 155, 1);
      font-size: 0.22rem;
    .control
      color: rgba(155, 155, 155, 1);
      height 1.45rem
      span
        font-size: 0.26rem;
</style>
