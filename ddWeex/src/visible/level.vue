<template>
  <div class="type-view">
    <scroller class="view">
      <div class="box" v-for="item in lists">
        <image class="img" :src="selected[0]" style="width:18px;height:18px;"></image>
        <text class="text">{{item}}</text>
      </div>
      <div class="box other">
        <div class="left">
          <image class="img" :src="selected[0]" style="width:18px;height:18px;"></image>
          <text class="text">其他</text>
        </div>
        <div class="right">
          <input type="text" class="input" placeholder="请输入职位"/>
          <text class="ok">确认</text>
        </div>
      </div>
    </scroller>
  </div>
</template>
<script>
  import {toast} from '../lib/util.js';
  import dingtalk from 'dingtalk-javascript-sdk';
  export default {
    data(){
      return {
        lists:[
          '老板',
          '总经理',
          '店长',
          '销售经理',
          '财务',
          '信息员'
        ],
        selected:[
          'https://s.kcimg.cn/dingtalk/image/circle.png',
          'https://s.kcimg.cn/dingtalk/image/yes.png'
        ]
      }
    },
    mounted: function(){
      dingtalk.ready(function(){
        const dd = dingtalk.apis;
        // title
        dd.biz.navigation.setTitle({
            title: '选择被访人级别'
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
  .selected{
    font-size: 16px;
    color: #1571E5;
  }
  .img{
    margin-right: 10px;
  }
  .other{
    justify-content: space-between;
  }
  .left{
    flex-direction: row;
    align-items: center;
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
