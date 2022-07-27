import { defineComponent } from 'vue';
import { RouteRecordNormalized, RouteRecordRaw } from 'vue-router';

type Component<T = any> =
    | ReturnType<typeof defineComponent>
    | (() => Promise<typeof import('*.vue')>)
    | (() => Promise<T>);

export interface App {
    count: number;
    configModel: clientEnv;
}

// 主接口(顶级类型声明)
export interface RootStateTypes {
    /**
     * @param {number} count 数量
     * @param {clientEnv} configModel 全局环境变量
     */
    app: App;
}
