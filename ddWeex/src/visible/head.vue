<template>
  <div class="header">
    <div class="item" @click="gotoLink('search/dealer')">
      <div class="left">
        <text class="left-text">拜访客户</text>
        <text class="must">*</text>
      </div>
      <div class="right">
        <text :class="[ DealerName != '请选择拜访客户' ? 'selected' : 'right-text' ]">{{DealerName}}</text>
        <div class="icon"></div>
      </div>
    </div>
    <div class="item">
      <div class="left">
        <text class="left-text">定位地址</text>
      </div>
      <div class="right">
        <text class="zone-text">{{ CheckInRecord.DetailPlace }}</text>
        <text :class="[ matchText == '未匹配' ? 'no-text' : 'ok-text' ]">{{matchText}}</text>
      </div>
    </div>
    <div class="item reason" v-if="matchText == '未匹配'">
      <div class="left">
        <text class="left-text">未匹配原因</text>
        <text class="must">*</text>
      </div>
      <div class="input-box">
        <textarea type="text" placeholder="请输入未匹配原因，待审核" class="input" rows="4" @input="inputFun"/>
      </div>
    </div>

    <div class="item change">
      <div class="left">
        <text class="left-text">经销商级别</text>
      </div>
      <div class="right">
        <div class="select-box" @click="changeBoxFun(0)">
          <image class="img" :src="selected[ changeBox ? 0 : 1 ]" style="width:18px;height:18px;"></image>
          <text class="text">一级</text>
        </div>
        <div class="select-box" @click="changeBoxFun(1)">
          <image class="img" :src="selected[ changeBox ? 1 : 0 ]" style="width:18px;height:18px;"></image>
          <text class="text">二级</text>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {toast,openLink,setItem,getItem} from '../lib/util.js';
  export default {
    props:['CheckInRecord','DealerName','matchText','visibleData'],
    data(){
      return {
        selected:[
          'https://s.kcimg.cn/dingtalk/image/circle.png',
          'https://s.kcimg.cn/dingtalk/image/select.png'
        ],
        changeBox:false,
        nextIndex:-1
      }
    },
    created(){
    },
    methods:{
      changeBoxFun(n){
        if(this.nextIndex === n) return
        this.nextIndex = n
        this.changeBox = !this.changeBox
        // this.$emit('changeValue',n++)
        this.visibleData.DealerLevel = n+1
        setItem('visibleData',JSON.stringify(this.visibleData))
      },
      // 页面跳转
      gotoLink(go){
        if(this.SomeOpen) return;
        this.SomeOpen = true
        openLink(go,res=>{
          this.SomeOpen = false
        })
      },
      inputFun(event){
        this.$emit('inputValue',event.value)
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
  .left{
    width: 100px;
  }
  .right{
    width: 284px;
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
    color: #A1A9B3;
    width: 252px;
    height: 48px;
    line-height: 48px;
    overflow: hidden;
    text-align: right;
  }
  .selected{
    font-size: 16px;
    color: #17181A;
    width: 252px;
    height: 48px;
    line-height: 48px;
    overflow: hidden;
    text-align: right;
  }
  .zone-text{
    color: #A1A9B3;
    font-size: 16px;
    width: 200px;
    overflow: hidden;
    height: 48px;
    line-height: 48px;
  }
  .no-text{
    color: #F7411C;
    font-size: 16px;
    margin-left: 12px;
    margin-right: 16px;
    width: 54px;
  }
  .ok-text{
    color:#80C220;
    font-size: 16px;
    margin-left: 12px;
    margin-right: 16px;
    width: 54px;
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
