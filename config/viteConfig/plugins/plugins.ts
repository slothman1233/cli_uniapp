import vue from '@vitejs/plugin-vue';
//一个自动导入组件库样式的vite插件。
import vueJsx from '@vitejs/plugin-vue-jsx';
import configClientEnvPlugin from './configClientEnvPlugin';
import configCompressPlugin from './configCompressPlugin';
import configMockPlugin from './configMockPlugin';
// import autoprefixer from 'autoprefixer';
// import configLegacyPlugin from './configLegacyPlugin';
// 以下钩子在服务器启动时被调用：
// options
// buildStart

// 以下钩子会在每个传入模块请求时被调用：
// resolveId
// load
// transform

// 以下钩子在服务器关闭时被调用：
// buildEnd
// closeBundle

export default (isBuild: boolean, mode: viteMode, viteEnv: ImportMetaEnv) => {
    const { VITE_USE_MOCK, VITE_BUILD_COMPRESS, VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE } = viteEnv;
    return [
        //客户端环境变量初始化处理
        configClientEnvPlugin(mode),

        // vue(),
        vueJsx(),

        //注入mock
        configMockPlugin(VITE_USE_MOCK, isBuild, mode),

        // configSvgIconsPlugin(isBuild), // svg 处理

        //使用 gzip 或者 brotli 来压缩资源
        configCompressPlugin(VITE_BUILD_COMPRESS, VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE),
    ];
};
