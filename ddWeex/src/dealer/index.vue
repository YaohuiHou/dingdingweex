<template>
  <div class="dealer">
    <scroller>
      <!-- 拜访地 -->
      <headerView
        :DealerId="DealerId"
        :StoreName="StoreName"
      ></headerView>
      <!-- 拜访人 -->
      <listView v-if="!nothing"></listView>
      <!-- 空 -->
      <div class="nothing" v-if="nothing">
        <image src="https://s.kcimg.cn/dingtalk/image/nothing.png" style="width:200px;height:150px;"></image>
        <text class="no-text">还没有人拜访~</text>
      </div>
    </scroller>
  </div>
</template>
<script>
  var globalEvent = weex.requireModule('globalEvent');
  import headerView from './head.vue';
  import listView from './list.vue';
  import dingtalk from 'dingtalk-javascript-sdk';
  import {openLink,getItem,toast} from '../lib/util.js';
  export default {
    name: 'dealer',
    components:{
      headerView,
      listView
    },
    data(){
      return {
        nothing:true,
        CheckInRecord:{},
        DealerId:'请选择经销商',
        StoreName:'请选择店铺'
      }
    },
    created(){
      // 获取签到信息
      getItem('CheckInRecord',event=>{
        this.CheckInRecord = event.data
      })
      // 实时获取缓存数据
      setInterval(()=>{
        // 获取经销商
        getItem('DealerDetail',event=>{
          let data = JSON.parse(event.data)
          if (data !== undefined || data !== '') {
            this.DealerId = data.DealerName
          }
        })
        // 获取店铺
        getItem('StoreInfo',event=>{
          let data = JSON.parse(event.data)
          if (data !== undefined || data !== '') {
            this.StoreName = data.StoreName
          }
        })
      }, 200);
    },
    mounted: function(){
      dingtalk.ready(function(){
        const dd = dingtalk.apis;
        // title
        dd.biz.navigation.setTitle({
            title: '经销商拜访记录'
        });
      })

      // 通信监听
      // webSocketMessage(
        // res=>{
        //   toast('success')
        //   this.success = res.data
        // },err=>{
        //   toast('error')
        //   this.error = err.data
        // }
      // )
    }
  }
</script>
<style scoped>
  .dealer{
    background-color: #f3f4f5;
  }
  .nothing{
    padding-top: 48px;
    justify-content: center;
    align-items: center;
  }
  .no-text{
    color: #A1A9B3;
    font-size: 12px;
    margin-top: 16px;
  }
</style>