import { defineComponent } from 'vue';
import { RouteRecordNormalized, RouteRecordRaw } from 'vue-router';

type Component<T = any> =
    | ReturnType<typeof defineComponent>
    | (() => Promise<typeof import('*.vue')>)
    | (() => Promise<T>);

// 主接口(顶级类型声明)
export interface RootStateTypes {
    /**
     * @param {App} app 全局的状态管理
     * @param {Demo} demo 测试的状态管理
     */
    app: App;
    demo: Demo;
}

/**
 * 底层接口
 * @param {string} module 模块名--相当于文件夹名
 */
export interface root {
    module: string;
}

/**
 * @param {number} count 数量
 * @param {clientEnv} configModel 全局环境变量
 */
export interface App extends root {
    count: number;
    configModel: clientEnv;
}

export interface Demo extends root {
    text: string;
}
