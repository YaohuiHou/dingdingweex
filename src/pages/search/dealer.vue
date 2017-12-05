<template>
  <div class="search">
    <list>
      <!-- 搜索框 -->
      <header>
        <div class="soso">
          <image class="img" src="https://s.kcimg.cn/dingtalk/image/soso.png" style="width:18px;height:18px;"></image>
          <input type="text" placeholder="搜索经销商" class="input" value="" />
        </div>
      </header>
      <!-- 查询 -->
      <cell class="item" v-for="(items,index) in lists" v-bind:key="index">
        <div class="box">
          <text class="text">{{items}}</text>
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
          '天水隆顺达东风汽车销售服务有限公司',
          '天水隆顺达东风asdf士大夫阿斯顿发生发阿斯顿发送到汽车销售服务有限公司',
          '天水隆顺达东风汽车销售服务有公司',
          '天水隆顺达东风汽车销售服务有限公司',
          '天水隆顺达东风汽服务有限公司'
        ]
      }
    },
    mounted: function(){
      dingtalk.ready(function(){
        const dd = dingtalk.apis;
        // title
        dd.biz.navigation.setTitle({
            title: '选择经销商'
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
  .soso{
    height: 40px;
    background-color: #fff;
    width: 368px;
    margin-left: 16px;
    margin-right: 16px;
    margin-top: 12px;
    margin-bottom: 12px;
    border-bottom-left-radius : 4px;
    border-bottom-right-radius : 4px;
    border-top-left-radius : 4px;
    border-top-right-radius : 4px;
    flex-direction: row;
    align-items: center;
  }
  .img{
    margin-left: 11px;
    margin-right: 11px;
  }
  .input{
    height: 40px;
    line-height: 40px;
    width: 350px;
    font-size: 16px;
    placeholder-color: #A1A9B3;
    color: #17181A;
  }
  .item{
    background-color: #fff;
    padding-left: 16px;
    height: 48px;
  }
  .box{
    width: 384px;
    height: 48px;
    line-height: 48px;
    padding-right: 16px;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: rgba(23,24,26,0.08);
    justify-content: flex-start;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .box:last-child{
    border-top-width: none;
  }
  .text{
    height: 48px;
    line-height: 48px;
    font-size: 16px;
    color: #17181A;
  }
</style>
