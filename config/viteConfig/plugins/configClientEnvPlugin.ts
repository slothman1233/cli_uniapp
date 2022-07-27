/**
 *  客户端环境变量初始化
 */

import { IndexHtmlTransformContext, Plugin } from 'vite';
import path from 'path';

let envName = 'dev';

const transformIndexHtml = (html: string, ctx?: IndexHtmlTransformContext) => {
    return html.replace('@/common/config/dev', `@/common/config/${envName}`);
};

export default (mode: viteMode): Plugin | null => {
    //main文件的位置
    const mainPath = path.resolve(__dirname, '../../../', './src/App.vue');
    switch (mode) {
        case 'production':
            envName = 'ga';
            break;
        case 'development':
            envName = 'dev';
            break;
        case 'test':
        case 'pre':
        case 'dev':
        case 'ga':
        case 'mock':
            envName = mode;
            break;
    }

    return {
        name: 'configClientEnvPlugin',
        enforce: 'pre',
        transform(html, id) {
            if (path.resolve(id) === mainPath) {
                return { code: transformIndexHtml(html), map: null };
            }
        },
        transformIndexHtml,
    };
};
