<template>
  <div class="visible">
    <div class="head" v-if="index == 0">
      <text class="day">03</text>
      <text class="month">/11月</text>
      <div class="link"></div>
    </div>
    <div class="sign" @click="gotolink">
      <text class="time">15:23</text>
      <div class="zone">
        <text class="place">远通桥</text>
        <text class="detail-place">北京市朝阳区高碑店镇s50东五环</text>
      </div>
      <div class="type">
        <!-- 三种状态 未匹配：no-mate ； 待匹配：need-mate ； 已完成：mate -->
        <text class="need-mate">待匹配</text>
        <div class="mate-icon"></div>
      </div>
    </div>
  </div>
</template>
<script>
  import {toast} from '../../lib/util.js';
  export default {
    props:['list','index'],
    data(){
      return {
      }
    },
    created(){
      // toast(JSON.stringify(this.list))
    },
    methods:{
      gotolink(){
        this.$router.push({
          path: "/visible",
          name: "visible"
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
  }
  .detail-place{
    line-height: 20px;
    font-size: 12px;
    color: #5C6066;
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
