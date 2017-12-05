<template>
  <div class="search">
    <list>
      <!-- 店铺 -->
      <cell class="item" v-for="(item,index) in lists"  v-bind:key="index">
        <div class="box">
          <image class="img" :src="selected[0]" style="width:18px;height:18px;"></image>
          <text class="text">{{item}}</text>
        </div>
      </cell>
    </list>
  </div>
</template>
<script>
  import dingtalk from 'dingtalk-javascript-sdk';
  export default {
    data(){
      return {
        lists:[
          '重庆市巴南区九公里渝南汽车超市C1-1-15',
          '重庆市巴南区九公里渝南汽车超市C1-1-15销售服务有限公司有限公司有限公司有限公司有限公司',
          '重庆市巴南区九公里渝南汽车超市C1-1-15阿斯顿发',
          '天水隆顺达东风汽车销售服务有限公司',
          '重庆市巴南区九公里渝南汽车超市C1-1-15',
          '重庆市巴南区九公里渝南汽车超市C1-1-15'
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
            title: '选择店铺'
        });
        // });
      })
    }
  }
</script>

<style scoped>
  .search{
    background-color: #F3F4F5;
  }
  .item{
    background-color: #fff;
    padding-left: 16px;
  }
  .box{
    width: 384px;
    padding-top: 12px;
    padding-right: 20px;
    padding-bottom: 12px;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: rgba(23,24,26,0.08);
    flex-direction: row;
  }
  .text{
    width: 344px;
    font-size: 16px;
    color: #17181A;
    line-height: 24px;
    word-wrap:break-word;
  }
  .img{
    margin-left: 3px;
    margin-right: 7px;
    margin-top: 3px;
  }
</style>
