<template>
  <div class="header">
    <scroller>
      <!-- 输入 -->
      <div class="item" v-for="item in lists">
        <div class="left">
          <text class="left-text">{{ item.name }}</text>
          <text class="must" v-if="item.must">*</text>
        </div>
        <div class="right">
          <text class="right-text" v-if="item.value.length > 0">{{ item.value }}</text>
          <input type="text" v-else class="input" :value="item.value" :placeholder="item.placeholder" />
        </div>
      </div>

      <!-- 选择 -->
      <div class="item">
        <div class="left">
          <text class="left-text">客户意向类型</text>
          <text class="must">*</text>
        </div>
        <div class="right change-box">
          <text class="right-text">请选择</text>
          <div class="icon"></div>
        </div>
      </div>

      <!-- 选择 输入 -->
      <div class="change">
        <div class="top">
          <div class="left top-left">
            <text class="left-text">是否知道卡车之家</text>
            <text class="must">*</text>
          </div>
          <div class="right">
            <div class="select-box">
              <image class="img" :src="selected[0]" style="width:18px;height:18px;"></image>
              <text class="text">知道</text>
            </div>
            <div class="select-box">
              <image class="img" :src="selected[1]" style="width:18px;height:18px;"></image>
              <text class="text">不知道</text>
            </div>
          </div>
        </div>
        <div class="input-box">
          <textarea type="text" placeholder="请输入对卡车之家的印象和评价" class="input" rows="4"/>
        </div>
      </div>
      <!-- 选择 输入 -->
      <div class="change">
        <div class="top">
          <div class="left top-left">
            <text class="left-text">是否合作其他家</text>
            <text class="must">*</text>
          </div>
          <div class="right">
            <div class="select-box">
              <image class="img" :src="selected[0]" style="width:18px;height:18px;"></image>
              <text class="text">有</text>
            </div>
            <div class="select-box">
              <image class="img" :src="selected[1]" style="width:18px;height:18px;"></image>
              <text class="text">无</text>
            </div>
          </div>
        </div>
        <div class="input-box">
          <textarea type="text" placeholder="请输入合作的企业" class="input" rows="4"/>
        </div>
      </div>

      <!-- 销量 拜访结果 -->
      <div class="item">
        <div class="left">
          <text class="left-text">客户年销量</text>
          <text class="must" v-if="item.must">*</text>
        </div>
        <div class="right">
          <input type="text" class="input" placeholder="请输入销量" />
        </div>
      </div>
      <div class="item">
        <div class="left">
          <text class="left-text">拜访结果</text>
          <text class="must" v-if="item.must">*</text>
        </div>
        <div class="right">
          <input type="text" class="input" placeholder="请输入拜访结果" />
        </div>
      </div>
      <!-- 计划 -->
      <div class="change">
        <div class="top">
          <div class="left top-left">
            <text class="left-text">谈判计划</text>
            <text class="must">*</text>
          </div>
        </div>
        <div class="input-box">
          <textarea type="text" placeholder="请输入下一步谈判计划" class="input" rows="4"/>
        </div>
      </div>
      <div class="change">
        <div class="top">
          <div class="left top-left">
            <text class="left-text">发现问题</text>
            <text class="must">*</text>
          </div>
        </div>
        <div class="input-box">
          <textarea type="text" placeholder="请输入发现的问题" class="input" rows="4"/>
        </div>
      </div>
    </scroller>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        selected:[
          'https://s.kcimg.cn/dingtalk/image/circle.png',
          'https://s.kcimg.cn/dingtalk/image/yes.png'
        ],
        lists:[
          {
            name:'拜访客户',
            value:'xx经销商  xx店铺',
            must: false,
            placeholder:"请输入拜访客户"
          },
          {
            name:'拜访类别',
            value:'初次拜访',
            must:false,
            placeholder:"选择拜访类别"
          },
          {
            name:'老板',
            value:'',
            must:true,
            placeholder:"请输入老板姓名或称呼"          
          },
          {
            name:'老板联系方式',
            value:'',
            must:false,
            placeholder:"请输入老板联系电话"
          },
          {
            name:'其他联系人',
            value:'',
            must:true,
            placeholder:"请输入其姓名或称呼"          
          },
          {
            name:'联系方式',
            value:'',
            must:false,
            placeholder:"请输入其手机号"
          }
        ]
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
      location(){
        // 到定位页
        this.$router.push({
          path:"/locationView",
          name:"locationView"
        })
      }
    }
  }
</script>

<style scoped>
  .header{
    background-color: #fff;
    padding-left: 16px;
  }
  .item,.change{
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: rgba(23,24,26,0.08);
  }
  .item{
    height: 48px;
  }
  .left{
    width: 117px;
  }
  .top-left{
    width: 150px;
  }
  .right{
    width: 265px;
  }
  .change-box{
    align-items: center;
    justify-content: flex-end;
  }
  .left,.right{
    flex-direction: row;
    align-items: center;
  }
  .left-text{
    color: #17181A;
    font-size: 16px;
    height: 48px;
    line-height: 48px;
  }
  .must{
    color: #F7411C;
    font-size: 16px;
  }
  .icon{
    margin-right: 16px;
    margin-left: 8px;
    width: 8px;
    height: 8px;
    border-top-width: 1px;
    border-right-width: 1px;
    border-style: solid;
    border-color: #A1A9B3;
    transform: rotate(45deg)
  }
  .right-text{
    font-size: 16px;
    color: #17181A;
  }
  .zone-text{
    color: #A1A9B3;
    font-size: 16px;
  }
  .no-text{
    color: #F7411C;
    font-size: 16px;
    margin-left: 12px;
    margin-right: 16px;
  }
  .reason{
    align-items: flex-start;
    flex-direction: column;
    height: 173px;
  }
  .input-box{
    width: 368px;
    height: 96px;
    padding-left: 12px;
    padding-right: 12px;
    padding-top: 8px;
    padding-bottom: 8px;
    margin-bottom: 17px;
    border-width: 1px;
    border-style: solid;
    border-color: #D8D8D8;
    align-items: flex-start;
  }
  .input{
    width: 344px;
    color: #17181A;
    font-size: 16px;
    line-height: 24px;
  }
  .top{
    justify-content: flex-start;
    flex-direction: row;
    align-items: center;
  }
  .change{
    flex-direction: column;
  }
  .select-box{
    margin-left: 30px;
    flex-direction: row;
    align-items: center;
  }
  .img{
    margin-right: 3px;
  }
  .text{
    font-size: 16px;
    color: #17181A;
  }
</style>
