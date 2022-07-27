type optionsModel = {
    method: 'GET' | 'POST' | 'OPTIONS' | 'HEAD' | 'PUT' | 'DELETE' | 'TRACE' | 'CONNECT';
    url: string;
    data?: any;
    header?: any;
};

type requireResModel<T> = {
    cookies: any[];
    data: T;
    errMsg: string;
    header: any;
    statusCode: number;
};

export type ResponseData<T> = {
    code: number | string;
    subCode: string;
    bodyMessage: T;
};

const HEADERS_MAP = new Map([
    [
        'text',
        {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    ],
    [
        'json',
        {
            'Content-Type': 'application/json',
        },
    ],
    [
        'formd',
        {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    ],
    [
        'forms',
        {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    ],
]);

const HEADER = {
    // 'content-type': 'application/x-www-form-urlencoded',
    'content-Type': 'application/json',
}; //头部

class Request {
    // get请求
    public async get<T>(url: string, data = {}, header = {}) {
        return this.requests<T>({
            method: 'GET',
            url,
            data,
            header,
        });
    }

    // post请求
    public async post<T>(url: string, data = {}, header = {}) {
        return this.requests<T>({
            method: 'POST',
            url,
            data,
            header,
        });
    }

    // delete请求
    public async del<T>(url: string, data = {}, header = {}) {
        return this.requests<T>({
            method: 'DELETE',
            url,
            data,
            header,
        });
    }

    // put请求
    public async put<T>(url: string, data = {}, header = {}) {
        return this.requests<T>({
            method: 'PUT',
            url,
            data,
            header,
        });
    }

    public async requests<T>({ method = 'GET', url, data = {}, header = {} }: optionsModel) {
        return this.request<T>({
            method: method,
            url,
            data,
            header,
        });
    }

    // 上传文件
    public async uploadFile(url: string, file: string) {
        return new Promise((resolve, reject) => {
            uni.uploadFile({
                url: url,
                filePath: file,
                name: 'file',
                success: (uploadFileRes) => {
                    if (uploadFileRes.statusCode === 200) {
                        resolve(JSON.parse(uploadFileRes.data));
                    } else {
                        reject(uploadFileRes);
                    }
                },
                fail: (err) => {
                    reject(err);
                },
            });
        });
    }

    private async request<T>(options: optionsModel) {
        let headerObj = Object.assign({}, HEADER, options.header);
        const token = uni.getStorageSync('accessToken');

        if (token) {
            headerObj = {
                token: token,
                ...HEADER,
            };
        }
        return new Promise((resolve, reject) => {
            uni.request({
                url: options.url,
                method: options.method || 'GET',
                header: headerObj,
                data: options.data || {},
                dataType: 'json',
                success: (res: any) => {
                    const results = res as requireResModel<ResponseData<T>>;
                    if (results.errMsg === 'request:ok') {
                        resolve(results.data);
                    } else {
                        reject(results);
                    }
                },
                fail: (err) => {
                    reject(err);
                },
                // ,
                // catch: err => {
                //   console.log(err);
                // }
            });
        });
    }
}

export default new Request();

// import HttpService from './http';
// const service = new HttpService('', {
//   // msgUI: Message,
//   // logout: () => power.logout(),
//   // getToken: () => power.token,
//   // signHeaders: sign,
//   // headers: headerAdminInfo
// });
// export default service;
