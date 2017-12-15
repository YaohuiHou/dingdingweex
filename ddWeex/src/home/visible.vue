<template>
  <div class="visible">
    <div class="head" v-if="index == 0 && !month">
      <text class="day">{{ dayNum }}</text>
      <text class="month">/{{ monthNum }}月</text>
      <div class="link"></div>
    </div>
    <div class="sign" @click="gotoLink(list)">
      <text class="time">{{timer}}</text>
      <div class="zone">
        <text class="place">{{list.Place}}</text>
        <text class="detail-place">{{list.DetailPlace}}</text>
      </div>
      <div class="type">
        <!-- 三种状态 未匹配：no-mate ； 未拜访：need-mate ； 已完成：mate -->
        <text :class="[styleType[list.VisitStatus]]">{{mate[list.VisitStatus]}}</text>
        <div class="mate-icon"></div>
      </div>
    </div>
  </div>
</template>
<script>
  import {toast,setItem,openLink,removeItem,getItem} from '../lib/util.js';
  export default {
    props:['list','index','newTimer','month'],
    data(){
      return {
        monthNum:0,
        dayNum:0,
        timer:0,
        mate:['','未拜访','未匹配','已完成'],
        styleType:['','need-mate','no-mate','mate']
      }
    },
    created(){
      // 时间换算
      var now = new Date(this.list.CheckinTimestamp*1000)
      this.monthNum = ((now.getMonth()+1)<10?"0":"")+(now.getMonth()+1)
      this.dayNum = (now.getDate()<10?"0":"")+now.getDate();
      var hours = (now.getHours()<10?"0":"") + now.getHours();                              // 小时
      var minutes = (now.getMinutes()<10?"0":"") + now.getMinutes();              // 分钟
      this.timer = hours +":"+ minutes
      // toast(this.list.CheckinTime)
    },
    methods:{
      // 页面跳转
      gotoLink(obj){
        if(this.SomeOpen) return;
        this.SomeOpen = true

        // 清除缓存数据
        removeItem('DealerDetail')
        removeItem('StoreInfo')
        removeItem('visibleType')
        removeItem('visibleTimer')
        removeItem('visibleLevel')
        removeItem('intentionType')
        removeItem('visibleActivity')
        removeItem('TrainingReason')
        removeItem('TrainingContent')
        // 存储签到记录
        setItem('CheckInRecord',JSON.stringify(this.list),event=>{
          // 成功之后跳转页面
          if(this.list.VisitStatus === 1){  // 未拜访
            openLink('visible/index',res=>{
              this.SomeOpen = false
            })
          }else{
            openLink('detail/index',res=>{
              this.SomeOpen = false
            })
          }
          // toast(getItem('CheckInRecord'))
          
        })
      }
    }
  }
</script>
<style scoped>
  .visible{
  }
  .head{
    position: relative;
    height: 66px;
    padding-left: 16px;
    padding-top: 20px;
    padding-bottom: 18px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-end;
    overflow: hidden;
  }
  .link{
    height: 12px;
    width: 310px;
    border-top-width: 1px;
    border-top-style: solid;
    border-top-color: #D8D8D8;
    margin-left: 7px;
  }
  .day{
    color: #17181A;
    font-size: 28px;
    font-weight: 400;
  }
  .month{
    color: #17181A;
    line-height: 24px;
    font-size: 16px;
  }
  .sign{
    height: 72px;
    padding-top: 12px;
    padding-bottom: 12px;
    flex-direction: row;
    align-items: center;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: rgba(23,24,26,0.08);;
  }
  .time{
    color: #17181A;
    font-size: 20px;
    font-weight: bold;
    width: 82px;
    text-align: center;
  }
  .zone{
    width: 230px;
  }
  .place{
    line-height: 26px;
    font-size: 18px;
    color: #17181A;
    width: 230px;
    height: 26px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .detail-place{
    line-height: 20px;
    font-size: 12px;
    color: #5C6066;
    width: 230px;
    height: 20px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .type{
    width: 88px;
    flex-direction: row;
    align-items: center;
  }
  .need-mate,.no-mate,.mate{
    font-size: 16px;
  }
  .need-mate{
    color: #A1A9B3;
  }
  .no-mate{
    color: #F7411C;
  }
  .mate{
    color: #80C220;
  }
  .mate-icon{
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
