import config from './config.js';
export default function permission() {
    /**
     * 页面跳转拦截器
     */
    const list = ['navigateTo', 'redirectTo', 'reLaunch', 'switchTab'];
    list.forEach((item) => {
        //用遍历的方式分别为,uni.navigateTo,uni.redirectTo,uni.reLaunch,uni.switchTab这4个路由方法添加拦截器
        uni.addInterceptor(item, {
            /**
             * 拦截前触发
             */
            invoke(e) {
                // console.log(e);
                //获取用户的token
                // const token = uni.getStorageSync('uni_id_token'),
                //     //token是否已失效
                //     tokenExpired = uni.getStorageSync('uni_id_token_expired') < Date.now(),
                //     //获取要跳转的页面路径（url去掉"?"和"?"后的参数）
                //     url = e.url.split('?')[0];
                // const notNeed = config.whiteList.includes(url);
                // // 如果在whiteList里面就不需要登录
                // if (notNeed) {
                //     return e;
                // } else {
                //     //需要登录
                //     if (token == '' || tokenExpired) {
                //         uni.showToast({
                //             title: '请先登录',
                //             icon: 'none',
                //         });
                //         uni.navigateTo({
                //             url: config.loginPage,
                //         });
                //         return false;
                //     } else {
                //         return e;
                //     }
                // }
            },
            /**
             * 成功回调拦截
             */
            success: (result: any) => {
                // console.log(result);
            },
            /**
             * 失败回调拦截
             */
            fail(err) {
                // console.log(err);
                // if (Debug) {
                //     console.log(err);
                //     uni.showModal({
                //         content: JSON.stringify(err),
                //         showCancel: false,
                //     });
                // }
            },

            /**
             * 完成回调拦截
             */
            complete: (result: any) => {
                console.log(result);
            },
        });
    });
}
