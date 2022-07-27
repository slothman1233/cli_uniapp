// import Vue, { createSSRApp } from "vue";
// import App from "./App.vue";
import { createSSRApp } from 'vue';
import App from './App.vue';
// import ElementPlus from 'element-plus'
// import router from './router/index'
// import router, { setupRouter } from './router'; // 路由
// import { setupElementPlus } from './common/utils/libs/element';
// import { setupVant } from './common/utils/libs/vant';
import { setupStore, useStore } from './store';

import setupUView from '@/common/utils/uview/uview';

// import './styles/plugin/index.less';
import './styles/public/index.less';

export function createApp() {
    const app = createSSRApp(App);

    // setupRouter(app); // 引入路由

    setupStore(app); // 引入状态管理

    setupUView(app);

    // setupElementPlus(app); // 引入element组件

    // setupVant(app); // 引入vant组件

    // setupGlobalCom(app); // 注册全局公用组件

    return {
        app,
    };
}
