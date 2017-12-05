<template>
  <div class="type-view">
    <scroller class="view">
      <div class="box" v-for="item in lists">
        <text class="text">{{item}}</text>
      </div>
      <div class="box other">
        <text class="text">其他</text>
        <div class="right">
          <input type="text" class="input" placeholder="请输入拜访类别"/>
          <text class="ok">确认</text>
        </div>
      </div>
    </scroller>
  </div>
</template>
<script>
  import {toast} from '../../lib/util.js';
  import dingtalk from 'dingtalk-javascript-sdk';
  export default {
    data(){
      return {
        lists:[
          '签单回访',
          '新人初次拜访',
          '团单续签',
          '个人续签',
          '培训',
          '参加活动'
        ]
      }
    },
    mounted: function(){
      dingtalk.ready(function(){
        const dd = dingtalk.apis;
        // title
        dd.biz.navigation.setTitle({
            title: '定位店铺'
        });
        // });
      })
    },
    methods:{
      
    }
  }
</script>

<style scoped>
  .type-view{
    background-color: #fff;
    padding-left: 16px;
  }
  .box{
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: rgba(23,24,26,0.08);
    align-items: center;
    height: 48px;
    line-height: 48px;
    flex-direction: row;
    
  }
  .text{
    font-size: 16px;
    color: #17181A;
  }
  .other{
    justify-content: space-between;
  }
  .right{
    flex-direction: row;
    width: 302px;
  }
  .input{
    width: 237px;
    height: 48px;
    color: #17181A;
    font-size: 16px;
  }
  .ok{
    width: 65px;
    height: 48px;
    line-height: 48px;
    font-size: 16px;
    color: #A1A9B3;
    border-left-width: 1px;
    border-left-style: solid;
    border-left-color: rgba(23,24,26,0.08);
    text-align: center;
  }
</style>
