import { App, InjectionKey } from 'vue';
import {
    createStore,
    useStore as baseUseStore,
    Store,
    Module,
    GetterTree,
    DispatchOptions,
} from 'vuex';
import { RootStateTypes } from './interface/index';
// The import.meta object exposes context-specific metadata to a JavaScript module.
// It contains information about the module, like the module 's URL.
// https://developer.mozilla.org/zh-cn/docs/web/javascript/reference/statements/import.meta
const modulesGlob = import.meta.globEager('./**/*.ts'),
    modules: Record<string, Module<unknown, RootStateTypes>> = {};
// Set global vuex getters
let getters: GetterTree<unknown, unknown> = {};
// Get all the folders under the modules folder,
// traverse the file object to set Vuex modules and getters
// console.log(modulesGlob);
Object.keys(modulesGlob).forEach((keys) => {
    if (keys.indexOf('modules') >= 0) {
        modules[keys.split('/')[keys.split('/').length - 1].replace(/\.ts|.js/, '')] =
            modulesGlob[keys].default;
    } else {
        getters = modulesGlob[keys].default;
    }
});

//  定义注入类型 InjectionKey 将store安装到Vue应用程序时提供类型,将类型传递InjectionKey给useStore方法
const key: InjectionKey<Store<RootStateTypes>> = Symbol();

// Create vuex store
// set modules getters and strict
// https://next.vuex.vuejs.org/
console.log(modules);
const store = createStore<RootStateTypes>({
    modules,
    getters,
    strict: false,
});

// 将类型注入useStore
export function useStore(): Store<RootStateTypes> {
    return baseUseStore(key);
}

/**
 * 执行 dispatch
 * @param {string} module 模块名
 * @param {string} type
 * @param {any} payload
 * @param {DispatchOptions} options
 * @returns {Promise<any>}
 */
export function usedispatch(
    module: string,
    type: string,
    payload?: any,
    options?: DispatchOptions,
): Promise<any> {
    return store.dispatch(module.length <= 0 ? `${type}` : `${module}/${type}`, payload, options);
}

export function setupStore(app: App<Element>) {
    app.use(store, key);
}

// Throw current store
export default store;
