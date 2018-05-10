<template>
  <div class="wrapper">
    <div class="searchWrapper">
      <div class="search">
        <bst-input v-model="place" :placeHolder="placeHolder" style=""></bst-input>
      </div>
      <div class="btnGrounp">
        <div class="btn location">
          <img class="icon" src="@/assets/image/location-normal@2x.png"/>
          当前位置
        </div>
        <div class="btn">
          <img class="icon" src="@/assets/image/map-normal@2x.png"/>
          地图选点
        </div>
      </div>
    </div>
    <div class="historyWrapper" v-show="historyList.length>0">
      <History :list="historyList" @clear="historyList = []"></History>
    </div>
  </div>
</template>

<script>
import BstInput from '@/components/bst-input/bst-input'
import History from '@/components/history/history'
export default {
  name: 'resetPlace',
  data () {
    return {
      showModal: false,
      place: '',
      placeHolder: '请输入目的地',
      btnList: [{
        color: '#2F3338',
        text: '重新设置地址'
      }, {
        color: '#FB7629',
        text: '删除地址'
      }, {
        color: '#9B9B9B',
        text: '取消',
        cb: () => {
          this.showModal = false
        }
      }],
      historyList: [{
        title: '人民广场',
        text: '南京西路2000号'
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
    BstInput,
    History
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.wrapper
  background #F2F2F2
  padding 0.2rem
  position absolute
  top 0
  left 0
  right 0
  bottom 0
  .icon
    height 0.28rem
    width 0.28rem
    vertical-align middle
    margin-right 0.18rem
  .searchWrapper
    background #ffffff
    .search
      height 1rem
      margin 0 0.2rem
      overflow hidden
      border-bottom 1px solid #E7E7E7
    .btnGrounp
      display flex
      height 1rem
      line-height 1rem
      font-size 0.28rem
      align-items center
      .btn
        flex 1
        text-align center
        &.location
          color #70C1FF
          border-right 1px #E7E7E7 solid
  .historyWrapper
    margin-top 0.3rem
</style>
