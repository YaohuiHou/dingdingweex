<template>
  <div class="wrapper">
    <list>
      <header>
        <!-- 头 -->
        <headerView 
          :newTimer="newTimer" 
          :dayCount="visibleList.DayCheckInCount" 
          :monthCount="visibleList.MonthCheckInCount"
        ></headerView>
      </header>
      <cell v-for="(item,index) in visibleList.CheckInRecordList" v-bind:key="item.Id">
          <!-- 签到列表 -->
          <visibleView 
            :list="item"
            :index="index"
          ></visibleView>
      </cell>
    </list>
  </div>
</template>
<script>
  var stream = weex.requireModule('stream');
  var modal = weex.requireModule('modal');

  import dingtalk from 'dingtalk-javascript-sdk';
  import {jsapifun,toast,getUserId,getVisitList} from '../../lib/util.js';
  import headerView from './head.vue';
  import visibleView from './visible.vue';
  
  export default {
      name: 'home',
      components:{
        headerView,
        visibleView
      },
      data: function(){
          return {
              link: 'DingTalk',
              list: {},
              DingTalkUserIds: '',
              newTimer:'',
              visible:false,
              // 拜访列表
              visibleList:{
                "MonthCheckInCount": 1,
                "DayCheckInCount": 0,
                "CheckInRecordList": [
                  {
                    "Id": 1,// 签到编号ID
                    "CheckinTimestamp": 2,//签到时间(毫秒)
                    "CheckinTime": "2017-11-27",//签到时间
                    "DingTalkUserId": "sample string 4",//员工在企业内的UserID(钉钉)
                    "Place": "sample string 5",//签到地址
                    "DetailPlace": "sample string 6",//签到详细地址
                    "ImageList": [//签到照片url列表
                      "sample string 1",
                      "sample string 2"
                    ],
                    "Remark": "sample string 7",//签到备注
                    "VisitStatus": 8,//拜访状态（1：未拜访，2：未匹配，3：已完成）
                    "UserId": 9,//系统用户ID
                    "UserName": "sample string 10",//系统用户名称
                    "Latitude": 11.0,//签到位置纬度
                    "Longitude": 12.0//签到位置经度
                  }
                ]
              }
          }
      },
      created (){
        // JsApi()
        // 获取cofig
        var me = this;
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
              'runtime.permission.requestAuthCode',
              'device.notification.showPreloader',
              "device.notification.hidePreloader",
              "biz.navigation",
              "biz.map.search"
            ] // 必填，需要使用的jsapi列表，注意：不要带dd。
          });
          // 获取requestAuthCode
          dingtalk.ready(function(){
            const dd = dingtalk.apis;
            // title
            dd.biz.navigation.setTitle({
                title: '拜访记录'
            });
            // 加载
            dd.device.notification.showPreloader({
                text: "使劲加载中..", //loading显示的字符，空表示不显示文字
                showIcon: true, //是否显示icon，默认true
                onSuccess : function(result) {
                    /*{}*/
                },
                onFail : function(err) {}
            })
            // 获取code
            dd.runtime.permission.requestAuthCode({
              corpId: me.list.Body.CorpId,
              onSuccess: function(result) {

                // 通过CODE换取用户身份
                getUserId( result.code, res=>{
                  var o = JSON.parse(res.data)  
                  me.DingTalkUserIds = o.Body.DingTalkUserId

                  // 获取数据
                  me.getlist(me.DingTalkUserIds,me.list.Head.RspTime)
                })
              },
              onFail : function(err) {
                toast(err)
              }
            })
          })

        })
      },
      mounted: function(){
        var me = this;
        // dingtalk.ready(function(){
        //   const dd = dingtalk.apis;
        // });
      //   dingtalk.ready(function(){
      //   dingtalk.apis.biz.navigation.setLeft({
      //       control: true,//是否控制点击事件，true 控制，false 不控制， 默认false
      //       text: '返回',//控制显示文本，空字符串表示显示默认文本
      //       onSuccess : (result)=> {
      //           this.$router.push({ path: 'home' })
      //       },
      //       onFail : function(err) {}
      //   });
      // })

      },
      watch: {
        // 监测 Did 变化
        DingTalkUserIds(val,oldval){
          // toast(val)
          // this.getlist(val,this.list.Head.RspTime)
        },
        visibleList(val,oldval){
          
        }
      },
      methods: {
        // 获取拜访记录
          getlist (id,time){
            var me = this;
            var now = new Date(time);
            var timeDate = this.newTimer = now.getFullYear()+"-"+((now.getMonth()+1)<10?"0":"")+(now.getMonth()+1)+"-"+(now.getDate()<10?"0":"")+now.getDate();
            
            // ajax
            getVisitList(
              JSON.stringify({
                 "Body": { 
                   "DingTalkUserId": id,
                   "SpecDate" : timeDate,
                   "IsGetMonth": true
                   },
                   "Paged": {
                      "PageIndex": 1,
                      "PageSize": 10
                    }
                 }) 
            ,res=>{
              var obj = JSON.parse(res.data) 
              // this.$set(this,'visibleList',obj.Body)
              me.visibleList = obj.Body

              // 关闭load
              dingtalk.ready(function(){
                dingtalk.apis.device.notification.hidePreloader()
              })
            })
          },
          getClick: function(){
            // 获取
            
        }
      }
  }
</script>
<style scoped>
  
</style>
