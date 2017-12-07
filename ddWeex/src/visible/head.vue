<template>
  <div class="header">
    <div class="item" @click="gotoLink('dealer/index')">
      <div class="left">
        <text class="left-text">拜访客户</text>
        <text class="must">*</text>
      </div>
      <div class="right">
        <text class="right-text">商铺地址乱七八糟</text>
        <div class="icon"></div>
      </div>
    </div>
    <div class="item" @click="gotoLink('visible/location')">
      <div class="left">
        <text class="left-text">定位地址</text>
      </div>
      <div class="right">
        <text class="zone-text">地址地址地址地址地址地址</text>
        <text class="no-text">未匹配</text>
      </div>
    </div>
    <div class="item reason">
      <div class="left">
        <text class="left-text">未匹配原因</text>
        <text class="must">*</text>
      </div>
      <div class="input-box">
        <textarea type="text" placeholder="请输入未匹配原因，待审核" class="input" rows="4"/>
      </div>
    </div>
    <div class="item change">
      <div class="left">
        <text class="left-text">经销商级别</text>
      </div>
      <div class="right">
        <div class="select-box">
          <image class="img" :src="selected[0]" style="width:18px;height:18px;"></image>
          <text class="text">一级</text>
        </div>
        <div class="select-box">
          <image class="img" :src="selected[1]" style="width:18px;height:18px;"></image>
          <text class="text">二级</text>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {toast,openLink} from '../lib/util.js';
  export default {
    data(){
      return {
        selected:[
          'https://s.kcimg.cn/dingtalk/image/circle.png',
          'https://s.kcimg.cn/dingtalk/image/select.png'
        ]
      }
    },
    methods:{
      location(){
        // 到定位页
        // this.$router.push({
        //   path:"/locationView",
        //   name:"locationView"
        // })
      },
      // 页面跳转
      gotoLink(go){
        openLink(go)
      }
    }
  }
</script>

<style scoped>
  .header{
    background-color: #fff;
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
  .zone-text{
    color: #A1A9B3;
    font-size: 16px;
  }
  .no-text{
    color: #F7411C;
    font-size: 16px;
    margin-left: 12px;
    margin-right: 16px;
  }
  .reason{
    align-items: flex-start;
    flex-direction: column;
    height: 173px;
  }
  .input-box{
    width: 368px;
    height: 96px;
    padding-left: 12px;
    padding-right: 12px;
    padding-top: 8px;
    padding-bottom: 8px;
    margin-bottom: 17px;
    border-width: 1px;
    border-style: solid;
    border-color: #D8D8D8;
    align-items: flex-start;
  }
  .input{
    width: 344px;
    color: #17181A;
    font-size: 16px;
    line-height: 24px;
  }
  .change{
    justify-content: flex-start;
  }
  .select-box{
    margin-left: 32px;
    flex-direction: row;
    align-items: center;
  }
  .img{
    margin-right: 3px;
  }
  .text{
    font-size: 16px;
    color: #17181A;
  }
</style>
