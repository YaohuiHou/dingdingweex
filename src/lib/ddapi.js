// 钉钉api
import dingtalk from 'weex-dingtalk';

// load调取
// export function showPreloader(msg, callback) {
//   dingtalk.ready(function() {
//     dingtalk.apis.device.notification.showPreloader({
//       text: msg, //loading显示的字符，空表示不显示文字
//       showIcon: true, //是否显示icon，默认true
//       onSuccess: function(result) {
//         // callback(result)
//       },
//       onFail: function(err) {}
//     })
//   });
// }
export function setTitle(title) {
  dingtalk.ready(function() {
    dingtalk.apis.biz.navigation.setTitle({
      title: title
    })
  });
}

// export function removeRightEvent(cb) {
//   dingtalk.ready(function() {
//     dingtalk.apis('navRightButton', cb);
//   });
// }