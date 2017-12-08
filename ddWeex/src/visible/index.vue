<template>
  <div class="visible">
    <scroller>
      <!-- 没有定位，去定位 -->
      <div class="goto-location" @click="tomap" v-if="golocation">
        <text class="go-text">店铺地址待维护，需重新定位</text>
        <div class="location">
          <image src="https://s.kcimg.cn/dingtalk/image/location-error.png" class="zone-img" style="width:10px;height:14px;"></image>
          <text class="go-text">去定位</text>
        </div>
      </div>
      <!-- 拜访头 -->
      <headerView
        :CheckInRecord="CheckInRecord"
        :DealerName="DealerName"
      ></headerView>
      <!-- 类型 -->
      <otherView></otherView>
      <!-- 下一步 -->
      <div class="next" @click="gotolink('registerView')">
        <text class="text">下一步</text>
      </div>
    </scroller>
  </div>
</template>
<script>
  import {toast,getItem,jsapifun} from '../lib/util.js';
  import dingtalk from 'dingtalk-javascript-sdk';
  import headerView from './head.vue';
  import otherView from './other.vue';
  export default {
    components:{
      headerView,
      otherView
    },
    data(){
      return {
        // 签到信息
        CheckInRecord:{},
        latitude: 0, // 纬度
        longitude: 0, // 经度
        list:{},
        // 是否需要定位
        golocation:false,
        DealerName:'请选择拜访客户'
      }
    },
    created(){
      // 获取签到信息
      getItem('CheckInRecord',event=>{
        this.$set(this,'CheckInRecord',JSON.parse(event.data))
        // 获取签到详情
        
      })
      // 授权
      const dd = dingtalk.apis;
      jsapifun((res) => {
        me.list = JSON.parse(res.data)
        me.newTimer = me.list.Head.RspTime
        dingtalk.config({
          agentId: me.list.Body.AgentId, // 必填，微应用ID
          corpId: me.list.Body.CorpId,//必填，企业ID
          timeStamp: me.list.Body.TimeStamp, // 必填，生成签名的时间戳
          nonceStr: me.list.Body.NonceStr, // 必填，生成签名的随机串
          signature: me.list.Body.Signature, // 必填，签名
          type:0,   //选填。0表示微应用的jsapi,1表示服务窗的jsapi。不填默认为0。该参数从dingtalk.js的0.8.3版本开始支持
          jsApiList : [ 
            "biz.map.locate"
          ] // 必填，需要使用的jsapi列表，注意：不要带dd。
        });
      })

      // 实时获取缓存数据
      this.realTime()
    },
    mounted: function(){
      dingtalk.ready(function(){
        const dd = dingtalk.apis;
        // title
        dd.biz.navigation.setTitle({
            title: '拜访记录'
        });
        // });
      })
    },
    methods:{
      // 实时刷新数据
      realTime(){
        setInterval(()=>{
        // 获取经销商
        getItem('DealerDetail',event=>{
          let data = JSON.parse(event.data)
          if (data !== undefined) {
            this.DealerId = data.DealerName
          }
        })
        // 获取店铺
        getItem('StoreInfo',event=>{
          let data = JSON.parse(event.data)
          if (data !== undefined) {
            this.DealerName = data.StoreName
          }
        })
      }, 300);
      },
      // 调取地图
      tomap(){
        var me = this
        dingtalk.ready(function(){
          const dd = dingtalk.apis
          dd.biz.map.locate({
            latitude: me.CheckInRecord.Latitude, // 纬度
            longitude: me.CheckInRecord.Longitude, // 经度
            onSuccess: function (result) {
              toast(poi)
            },
            onFail: function (err) {
              toast(err)
            }
          });
        })
      },

      gotolink(type){
        // 到定位页
        
      },
      getDetail(){

      }
    }
  }
</script>

<style scoped>
  .visible{
    background-color: #F3F4F5;
  }
  .next{
    width: 368px;
    height: 44px;
    background-color: #1571E5;
    align-items: center;
    justify-content: center;
    line-height: 44px;
    text-align: center;
    border-left-style: 4px;
    border-top-style: 4px;
    border-right-style: 4px;
    border-bottom-style: 4px;
    margin-left: 16px;
  }
  .text{
    color: #fff;
    font-size: 16px;
  }
  .goto-location{
    flex-direction: row;
    height: 35px;
    background-color: #F7411C;
    padding-left: 16px;
    padding-right: 16px;
    align-items: center;
    justify-content: space-between;
  }
  .go-text{
    font-size: 16px;
    color: #fff;
  }
  .location{
    flex-direction: row;
    align-items: center;
  }
  .zone-img{
    margin-right: 8px;
  }
</style>
