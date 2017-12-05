<template>
  <div class="other">
    <div class="item" @click="gotoLink('typeView')">
      <div class="left">
        <text class="left-text">拜访类别</text>
        <text class="must">*</text>
      </div>
      <div class="right">
        <text class="right-text">商铺地址乱七八糟</text>
        <div class="icon"></div>
      </div>
    </div>
    <div class="item" @click="gotoLink('timeView')">
      <div class="left">
        <text class="left-text">拜访时长</text>
        <text class="must">*</text>
      </div>
      <div class="right">
        <text class="right-text">商铺地址乱七八糟</text>
        <div class="icon"></div>
      </div>
    </div>
    <div class="item" @click="gotoLink('levelView')">
      <div class="left">
        <text class="left-text">被访人级别</text>
        <text class="must">*</text>
      </div>
      <div class="right">
        <text class="right-text">商铺地址乱七八糟</text>
        <div class="icon"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{

      }
    },
    methods:{
      gotoLink(view){
        // 到定位页
        this.$router.push({
          path:"/"+view,
          name:view
        })
      }
    }
  }
</script>

<style scoped>
  .other{
    background-color: #fff;
    margin-top: 8px;
    margin-bottom: 16px;
    padding-left: 16px;
  }
  .item{
    height: 48px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: rgba(23,24,26,0.08);
  }
  .left,.right{
    flex-direction: row;
    align-items: center;
  }
  .left-text{
    color: #17181A;
    font-size: 16px;
    height: 48px;
    line-height: 48px;
  }
  .must{
    color: #F7411C;
    font-size: 16px;
  }
  .icon{
    margin-right: 16px;
    margin-left: 8px;
    width: 8px;
    height: 8px;
    border-top-width: 1px;
    border-right-width: 1px;
    border-style: solid;
    border-color: #A1A9B3;
    transform: rotate(45deg)
  }
  .right-text{
    font-size: 16px;
    color: #17181A;
  }
</style>
