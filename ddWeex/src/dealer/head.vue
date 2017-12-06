<template>
  <div class="list">
    <!-- 经销商 -->
    <div class="dealer item" @click="gotoLink('SearchDealer')">
      <text class="text-left">经销商</text>
      <div class="right">
        <text class="text-right">请选择经销商</text>
        <div class="icon"></div>
      </div>
    </div>
    <!-- 店铺 -->
    <div class="shop item" @click="gotoLink('SearchShop')">
      <text class="text-left">店铺</text>
      <div class="right">
        <text class="text-right">请选择店铺</text>
        <div class="icon"></div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {
      }
    },
    methods:{
      gotoLink(type){
        // 跳到搜索页
        this.$router.push({
          path: "/"+type,
          name: type
        })
      }
    }
  }
</script>

<style scoped>
  .list{
    background-color: #fff;
    padding-left: 16px;
    border-top-width: 1px;
    border-top-style: solid;
    border-top-color: #D8D8D8;
  }
  .item{
    padding-top: 12px;
    padding-bottom: 12px;
    height: 48px;
    flex-direction: row;
    justify-content: space-between;
  }
  .dealer{
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: rgba(23,24,26,0.08);
  }
  .right{
    flex-direction: row;
    align-items: center;
  }
  .text-left,.text-right{
    font-size: 16px;
    line-height: 24px;
    
  }
  .text-left{
    color: #17181A;
  }
  .text-right{
    color: #A1A9B3;
    max-width: 200px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
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
</style>

