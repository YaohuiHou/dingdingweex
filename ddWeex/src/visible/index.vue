<template>
  <div class="visible">
    <scroller>
      <!-- 没有定位，去定位 -->
      <div class="goto-location" @click="tomap">
        <text class="go-text">店铺地址待维护，需重新定位</text>
        <div class="location">
          <image src="https://s.kcimg.cn/dingtalk/image/location-error.png" class="zone-img" style="width:10px;height:14px;"></image>
          <text class="go-text">去定位</text>
        </div>
      </div>
      <!-- 拜访头 -->
      <headerView></headerView>
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
  import {toast} from '../lib/util.js';
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
        
      }
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
      tomap(){
        dingtalk.ready(function(){
          dingtalk.apis.biz.map.search({
            // latitude: 39.903578, // 纬度
            // longitude: 116.473565, // 经度
            scope: 20000, // 限制搜索POI的范围；设备位置为中心，scope为搜索半径
        
            onSuccess: function (poi) {
              toast(poi)
                /* result 结构 */
                // {
                //     province: 'xxx', // POI所在省会
                //     provinceCode: 'xxx', // POI所在省会编码
                //     city: 'xxx', // POI所在城市
                //     cityCode: 'xxx', // POI所在城市
                //     adName: 'xxx', // POI所在区名称
                //     adCode: 'xxx', // POI所在区编码
                //     distance: 'xxx', // POI与设备位置的距离
                //     postCode: 'xxx', // POI的邮编
                //     snippet: 'xxx', // POI的街道地址
                //     title: 'xxx', // POI的名称
                //     latitude: 39.903578, // POI的纬度
                //     longitude: 116.473565, // POI的经度
                // }
            },
            onFail: function (err) {
              toast(err)
            }
          });
        })
      },
      gotolink(type){
        // 到定位页
        this.$router.push({
          path:"/"+type,
          name: type
        })
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
