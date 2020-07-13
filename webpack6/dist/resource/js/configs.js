// 发布（线上）环境
var configs = {
    name: 'Steward.Web',
    version: '1.0.0-beta.0',
    productName: '福禄管家-系统总管',
    productVersion: 'X1',
    clientId: '10000063', //通行证使用的appid(一般与appid保持一致，目前只有erp的与appid不一样)
    authorId: '10000063', //当前应用对应的appid
    id: '',//商户id(临时))
    accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjE3OEJBNEJGMDZGQzkzMDY1QUEyNTgyRjU1QzcyMkE2IiwiY2xpZW50X2lkIjoiMTAwMDAwMDMiLCJuYW1lIjoiODAwMSIsIm5pY2tuYW1lIjoi56ym54aZIiwicGhvbmVfbnVtYmVyIjoiMTg2MjcxMTU2NTciLCJlbWFpbCI6Ijc3NTE0NTU0QHFxLmNvbSIsInJvbGUiOiJVc2VyIiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDoxNTMxIiwiYXVkIjoiYXBpIiwiZXhwIjoxNTIxNzcyNDYxLCJuYmYiOjE1MTY1ODg0NjF9.cfYs3h1KmMdExHPNevec1s2CLOSEcAuN1aIXiTiouhc',
    // host: {
    //   passport: {
    //     'getUserInfo': 'http://10.0.0.138:8087', //获取用户信息，判断用户是否登录
    //     'authCode': 'http://dev.h5-merchant.k8s.ichnb.com', //使用code换取access_token
    //     // 'authCode': 'http://10.0.1.35:10001', //使用code换取access_token
    //     'auth': 'http://10.0.0.138:8090' // 通行证登录页 登录成功后会带上code跳转到回调地址
    //   },
    //   //test: 'http://dev.h5-merchant.k8s.ichnb.com',//商户侧
    //   test: 'http://10.0.1.35:10001',//邓
    //   menage: 'http://dev.h5-manage.k8s.ichnb.com',//运营侧xccccccc xcvcxxxxxxc
    //   common: 'http://dev.merchant.k8s.ichnb.com', //左侧导航和头部导航 福禄管家通用接口
    //   log: 'http://10.0.0.189:10090', //日志管理 接口
    //   //main: 'http://10.0.0.96:10095',//商户中心的
    //   main: 'http://10.0.0.213:10095',//商户中心的
    // }
    // host: {
    //   passport: {
    //     'getUserInfo': 'http://10.0.0.138:8087', //获取用户信息，判断用户是否登录
    //     'authCode': 'http://test.h5-merchant.k8s.ichnb.com', //使用code换取access_token
    //     //'authCode': 'http://10.0.1.35:10001', //使用code换取access_token
    //     'auth': 'http://10.0.0.138:8090' // 通行证登录页 登录成功后会带上code跳转到回调地址
    //   },
    //   test: 'http://test.h5-merchant.k8s.ichnb.com', //商户侧
    //   //test: 'http://10.0.1.35:10001', //商户侧
    //   menage: 'http://test.h5-manage.k8s.ichnb.com', //运营侧
    //   common: 'http://test.merchant.k8s.ichnb.com', //左侧导航和头部导航 福禄管家通用接口
    //   log: 'http://10.0.0.189:10090', //日志管理 接口
    //   webapi: 'http://test.openplatform.k8s.ichnb.com', //新接口的地址
    //   main: 'http://10.0.0.213:10095',//商户中心的
    // }
    // host: {
    //   passport: {
    //     'getUserInfo': 'https://pre-api-passport.suuyuu.cn', //获取用户信息，判断用户是否登录
    //     'authCode': 'https://pre-console-mall-api-admin.suuyuu.cn',//使用code换取access_token
    //     'auth': 'https://pre-passport.suuyuu.cn' // 通行证登录页 登录成功后会带上code跳转到回调地址
    //   },
    //   test: 'https://pre-console-mall-api-admin.suuyuu.cn',//商户侧
    //   menage: 'https://pre-manage-mall-api-admin.suuyuu.cn',//运营侧
    //   common: 'https://pre-console-api-admin.suuyuu.cn',//商户控制台接口 //左侧导航和头部导航 福禄管家通用接口 商户中心的
    //   log: 'https://pre-api-log.suuyuu.cn', //日志管理 接口
    //   webapi: 'https://pre-openplateform.suuyuu.cn', //开发平台  新接口的地址
    //   main: 'https://pre-console.suuyuu.cn',//商户中心
    // }
    host: {
        passport: {
            'getUserInfo': 'https://it-api-passport.suuyuu.cn', //获取用户信息，判断用户是否登录
            'authCode': 'http://it.console.mall.api-admin.suuyuu.cn', //使用code换取access_token
            //'authCode': 'http://10.0.1.35:10001', //使用code换取access_token
            'auth': 'https://it-passport.suuyuu.cn', // 通行证登录页 登录成功后会带上code跳转到回调地址
        },
        test: 'http://it.console.mall.api-admin.suuyuu.cn',//商户侧
        // test: 'http://10.0.1.146:10001', // 商户侧
        // test: 'http://10.0.1.235:10001',

        // test: 'http://10.0.1.225:10001', // 陈杰商户侧
        // test: 'http://10.0.1.146:10001', // 张瑞商户侧
        menage: 'http://it.manage.mall.api-admin.suuyuu.cn',//运营侧  
        common: 'http://it.console.api-admin.suuyuu.cn', //左侧导航和头部导航 福禄管家通用接口 商户中心的
        log: 'http://it.api.log.admin.fulu.com', //日志管理 接口
        webapi: 'http://it.api.open.admin.fulu.com', //开发平台 新接口的地址
        main: 'http://it.console.suuyuu.cn',//商户中心的
    }
};
