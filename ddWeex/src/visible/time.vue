<template>
  <div class="type-view">
    <scroller class="view">
      <div class="box" v-for="item in lists">
        <text class="text">{{item}}</text>
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
          '30分钟以下',
          '30-60分钟',
          '1-2小时',
          '2-3小时',
          '3小时以上'
        ]
      }
    },
    mounted: function(){
      dingtalk.ready(function(){
        const dd = dingtalk.apis;
        // title
        dd.biz.navigation.setTitle({
            title: '访问时长'
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
</style>
