<template>
  <div class="dealer">
    <scroller>
      <!-- 拜访地 -->
      <headerView></headerView>
      <!-- 拜访人 -->
      <listView v-if="nothing"></listView>

      <!-- 空 -->
      <div class="nothing">
        <image src="https://s.kcimg.cn/dingtalk/image/nothing.png" style="width:200px;height:150px;"></image>
        <text class="no-text">还没有人拜访~</text>
      </div>
    </scroller>
  </div>
</template>
<script>
  import headerView from './head.vue';
  import listView from './list.vue';
  import dingtalk from 'dingtalk-javascript-sdk';
  export default {
    name: 'dealer',
    components:{
      headerView,
      listView
    },
    data(){
      return {
        nothing:false
      }
    },
    created(){
      
    },
    mounted: function(){
      dingtalk.ready(function(){
        const dd = dingtalk.apis;
        // title
        dd.biz.navigation.setTitle({
            title: '经销商拜访记录'
        });

        // 左侧导航
        // dd.biz.navigation.setLeft({
        //   control: true,
        //   onSuccess:res=>{
        //     this.$router.go(-1);
        //   }
        // });
      })
    }
  }
</script>
<style scoped>
  .dealer{
    background-color: #f3f4f5;
    height: 100%;
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