<template>
  <div class="man-list">
    <div class="item">
      <div class="vicible">
        <text class="name">哈哈哈</text>
        <text class="type">新人签到</text>
      </div>
      <div class="right">
        <text class="time">2017-12-03 12：00</text>
        <div class="icon"></div>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .man-list{
    padding-top: 8px;
  }
  .item{
    height: 78px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 16px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: rgba(23,24,26,0.12);
    background-color: #fff;
  }
  .vicible{
    height: 58px;
  }
  .name{
    color: #17181A;
    font-size: 18px;
    line-height: 30px;
    font-weight: bold;
  }
  .type{
    font-size: 16px;
    color: #17181A;
    line-height: 28px;
  }
  .right{
    align-items: center;
    flex-direction: row;
  }
  .time{
    color: #17181A;
    font-size: 12px;
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

