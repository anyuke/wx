/*
 * 配置自定义菜单
 */
'use strict'
 
module.exports = {
  'button':[
  {
    'name':'最新',
    'type':'click',
    'key':'menu_click'
  },
  {
    'name':'类别',
    'sub_button':[
      {
        'name':'百度',
        'type':'view',
        'url':'http://www.baidu.com'
      },
      {
        'name':'二维码1',
        'type':'scancode_push',
        'key':'qr_scan'
      },
      {
        'name':'二维码2',
        'type':'scancode_waitmsg',
        'key':'qr_scan_wait'
      },
      {
        'name':'拍照或从相册中选择',
        'type':'pic_photo_or_album',
        'key':'pic_photo_album'
      }
    ]
  },
  {
    'name':'其他',
    'sub_button':[
      {
        'name':'微信图片',
        'type':'pic_weixin',
        'key':'pic_weixin'
      },
      {
        'name':'地图',
        'type':'location_select',
        'key':'location_select'
      }
    ]
  }]
}