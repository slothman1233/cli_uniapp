type storageFun = (result: any) => void;

export type storageModel = {
    key: string;
    success?: storageFun;
    fail?: storageFun;
    complete?: storageFun;
};
export type setStorageModel = storageModel & {
    data: string;
};

/**
 * 本地存储
 */
export default class StorageUtils {
    /**
     * 本地存储 存 异步
     * @param {setStorageModel} data
     * @param {string} key key
     * @param {string} data data
     * @param {storageFun} success 成功后的回调
     * @param {storageFun} fail  失败后的回调
     * @param {storageFun} complete  接口调用结束的回调函数（调用成功、失败都会执行）
     */
    public static setStorage({ key, data, success, fail, complete }: setStorageModel) {
        uni.setStorage({
            key: key,
            data: data,
            success: function(result: any) {
                success && success(result);
            },
            fail: function(result: any) {
                fail && fail(result);
            },
            complete: function(result: any) {
                complete && complete(result);
            },
        });
    }

    /**
     * 同步本地存储 存 同步
     * @param {string} key key
     * @param {string} data data
     */
    public static setStorageSync(key: string, data: string) {
        return uni.setStorageSync(key, data);
    }

    /**
     * 本地存储 取 异步
     * @param {setStorageModel} data
     * @param {string} key key
     * @param {storageFun} success 成功后的回调
     * @param {storageFun} fail  失败后的回调
     * @param {storageFun} complete  接口调用结束的回调函数（调用成功、失败都会执行）
     */
    public static getStorage({ key, success, fail, complete }: storageModel) {
        uni.getStorage({
            key: key,
            success: function(result: any) {
                success && success(result);
            },
            fail: function(result: any) {
                fail && fail(result);
            },
            complete: function(result: any) {
                complete && complete(result);
            },
        });
    }

    /**
     * 同步本地存储 取 同步
     * @param {string} key key
     */
    public static getStorageSync(key: string) {
        return uni.getStorageSync(key);
    }

    /**
     * 获取当前 storage 的相关信息 异步
     * @param {storageFun} success 成功后的回调
     * @param {storageFun} fail  失败后的回调
     * @param {storageFun} complete  接口调用结束的回调函数（调用成功、失败都会执行）
     */
    public static getStorageInfo(
        success: (res: UniApp.GetStorageInfoSuccess) => void,
        fail?: storageFun,
        complete?: storageFun,
    ) {
        uni.getStorageInfo({
            success: function(res) {
                success(res);
            },
            fail: function(result: any) {
                fail && fail(result);
            },
            complete: function(result: any) {
                complete && complete(result);
            },
        });
    }

    /**
     * 获取当前 storage 的相关信息 同步
     */
    public static getStorageInfoSync(): UniApp.GetStorageInfoSuccess | null {
        try {
            return uni.getStorageInfoSync();
        } catch (e) {
            return null;
        }
    }

    /**
     * 从本地缓存中异步移除指定 key 异步
     * @param {setStorageModel} data
     * @param {string} key key
     * @param {storageFun} success 成功后的回调
     * @param {storageFun} fail  失败后的回调
     * @param {storageFun} complete  接口调用结束的回调函数（调用成功、失败都会执行）
     */
    public static removeStorage({ key, success, fail, complete }: storageModel) {
        uni.removeStorage({
            key: key,
            success: function(result: any) {
                success && success(result);
            },
            fail: function(result: any) {
                fail && fail(result);
            },
            complete: function(result: any) {
                complete && complete(result);
            },
        });
    }

    /**
     * 从本地缓存中异步移除指定 key 同步
     * @param {string} key key
     */
    public static removeStorageSync(key: string) {
        return uni.removeStorageSync(key);
    }

    /**
     * 清理本地数据缓存 同步
     */
    public static clearStorage() {
        return uni.clearStorage();
    }

    /**
     * 清理本地数据缓存 同步
     */
    public static clearStorageSync() {
        return uni.clearStorageSync();
    }
}
