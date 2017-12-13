<template>
  <div class="search">
    <list>
      <!-- 店铺 -->
      <cell class="item" v-for="(item,index) in lists"  v-bind:key="index">
        <div class="box" @click="selectedFun(index)">
          <image class="img" :src="selected[ item.selected === true ? 1 : 0 ]" style="width:18px;height:18px;"></image>
          <text :class="[item.selected === true ? 'slected' : 'text']">{{item.StoreName}}</text>
          <!-- :class="item.selected === true ? 'slected' : 'text'" -->
        </div>
      </cell>
    </list>
  </div>
</template>
<script>
  import dingtalk from 'dingtalk-javascript-sdk';
  import {toast,getItem,setItem,openLink,replaceLink,goBackLink} from '../lib/util.js';
  export default {
    data(){
      return {
        lists:[
        ],
        selected:[
          'https://s.kcimg.cn/dingtalk/image/circle.png',
          'https://s.kcimg.cn/dingtalk/image/yes.png'
        ],
        nextIndex: -1
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
    },
    created(){
      // 获取选中的经销商
      getItem('DealerDetail',event=>{
        let shop = JSON.parse(event.data)
        this.lists = shop.DealerSubList
      })
    },
    methods:{
      // 选中店铺
      selectedFun(index){
        if(this.SomeOpen) return;
          this.SomeOpen = true
        /*
        *  判断是否有上一个，有就干掉
        *  保存index，为下次准备
        */
        if(this.nextIndex !== -1){
          this.$set(this.lists[this.nextIndex],'selected',false)
        }
        this.nextIndex = index

        if(!this.lists[index].selected){
          this.$set(this.lists[index],'selected',true)
        }
        // // 存储到提交json
        // getItem('visibleData',event=>{
        //   let data = JSON.parse(event.data)
        //   data.StoreIdList = this.lists[index].StoreId
        //   setItem('visibleData',JSON.stringify(data))
        // })
        // 储存选择
        setItem('StoreInfo',this.lists[index],event=>{
          // 返回上一页
          goBackLink()
          this.SomeOpen = false
        })
      }
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
  .slected{
    width: 344px;
    font-size: 16px;
    color: #1571E5;
    line-height: 24px;
    word-wrap:break-word;
  }
  .img{
    margin-left: 3px;
    margin-right: 7px;
    margin-top: 3px;
  }
</style>
