# 基于 uniapp+vite+vue3+less+scss+vk-uview-ui  框架

运行要求

```bash
node版本 v16.13.0
npm版本 8.0.0以上
```

docker 命令
```bash
docker build -t uniapp . --build-arg env=pre --tag uniapp:1

docker run -d -p :8085:80  uniapp:1
```

命令介绍

```bash
npm run dev:h5:dev     ----- h5 运行开发环境开发包
npm run dev:h5:test  ----- h5 运行测试环境开发包
npm run dev:h5:pre ----- h5 运行预发布环境开发包
npm run dev:h5:ga  ----- h5 运行生产环境开发包

npm run dev:mp-weixin:dev     ----- 微信 运行开发环境开发包
npm run dev:mp-weixin:test  ----- 微信 运行测试环境开发包
npm run dev:mp-weixin:pre ----- 微信 运行预发布环境开发包
npm run dev:mp-weixin:ga  ----- 微信 运行生产环境开发包

npm run build:h5 ----- h5 打包
build:h5:dev: uni build --mode dev ----- h5 开发环境正式包
build:h5:test: uni build --mode test ----- h5 测试环境正式包
build:h5:pre: uni build --mode pre ----- h5 预发布环境正式包
build:h5:ga: uni build --mode ga ----- h5 生产环境正式包
build:h5:ssr: uni build --ssr ----- h5 ssr环境正式包

npm run build:mp-weixin ----- 微信 打包
build:mp-weixin:dev: uni build -p mp-weixin --mode dev --- 微信 开发环境正式包
build:mp-weixin:test: uni build -p mp-weixin --mode test --- 微信 测试环境正式包
build:mp-weixin:pre: uni build -p mp-weixin --mode pre --- 微信 预发布环境正式包
build:mp-weixin:ga: uni build -p mp-weixin --mode ga --- 微信 生产环境正式包
```

开发方式

```bash
1.在views里面创建vue的页面
2.在src/common/router/routers 里面创建对应的路由
```


创建页面说明（示例在 view 里面的 qs）

```bash

页面文件夹
│   ├── index 页面
│   ├── model 当前页面的模型文件
│   ├── components 针对当前页面的 控件文件夹
│   │   └──  cpmDemo 控件 文件名
│   │   │   ├── index 控件页面
│   │   │   └── model 当前控件的模型文件

```

目录说明

```
├── config  vite的配置文件
│   ├── env  vite运行下的配置文件夹
│   └── viteConfig vite配置
│   │   ├── plugins     plugins配置文件夹
│   │   │   ├── configClientEnvPlugin 客户端环境变量初始化
│   │   │   ├── configCompressPlugin 使用 gzip 或者 brotli 来压缩资源
│   │   │   ├── configMockPlugin 使用 mock 环境
│   │   │   ├── configSvgIconsPlugin   svg 处理
│   │   │   └── plugins.less vite.config.ts  中的 plugins 配置入口
│   │   └── proxy.ts   代理配置
├── dist  生产代码文件夹
├── mock  mock数据
│   ├── demo  mock示例
│   ├── _createProductionServer.ts  mock注入初始化
│   └── _util.ts 基础模型
├── publishscript 自动发布文件夹
│   └── weixin 自动发布到微信文件夹
│   │   │   ├── private.wxc5d979b0149b0b55.key 小程序的 privateKey  需要到小程序自行下载
│   │   │   └── weixin.js 自动发布到微信小程序
├── src
│   ├── common 公共部分
│   │   ├── config 针对客户端的环境配置文件夹
│   │   ├── plugins 第三方插件文件夹
│   │   ├── router 针对客户端的环境配置文件夹
│   │   │   ├── index 路由入口
│   │   │   ├── routers 页面路由配置
│   │   │   └── pages 其他配置
│   │   ├── utils 通用文件夹
│   │   │   ├── interceptor 全局拦截器
│   │   │   ├── storage 本地缓存处理
│   │   │   └── index.less 全局注入的样式
│   ├── components 组件文件夹 (文件夹名为组件名---只有文件夹下的index.ts的default为对应的组件方法)
│   │   ├── IconFonts 字体图标组件 （在qs页面有使用示例）
│   │   └── HelloWorld.vue     可以删除
│   ├── layout 布局文件夹
│   │   ├── components 布局的组件文件夹
│   │   └── index.ts 布局页示例
│   ├── services api请求文件夹
│   │   ├── randomDataService 请求
│   │   ├── https 请求插件
│   │   └── RequestPathName 所有请求地址放置处
│   ├── static 静态文件夹
│   │   └── assets 静态资源文件
│   │   │   ├── iconfont  字体图标
│   │   │   ├── icons 字体 
│   │   │   ├── image 图片
│   │   │   └──json json文件
│   ├── store 状态管理文件夹
│   │   ├── interface 模型声明
│   │   ├── modules 状态管理实现文件夹(每新建个文件需要在interface/index 进行声明)
│   │   ├── index 状态管理初始化和注入文件夹
│   │   └── mutation-types 状态管理静态变量文件
│   ├── styles 样式文件夹
│   │   ├── public 全局样式
│   │   │   ├── common 样式变量
│   │   │   │   └── index.less 全局函数式样式（默认注入）
│   │   │   └── index.less 全局默认样式（默认注入）
│   ├── pages vue页面
│   │   ├── storedemo 状态管理使用示例页面
│   │   ├── qs 示例页面
│   │   │   ├── index 页面
│   │   │   ├── model 当前页面的模型文件
│   │   │   ├── components 针对当前页面的 控件文件夹
│   │   │   │   └──  cpmDemo 控件 文件名
│   │   │   │   │   ├── index 控件页面
│   │   │   │   │   └── model 当前控件的模型文件
│   ├── App.ts
│   ├── main.ts
│   ├── manifest.json
│   ├── pages.json
│   ├── types  ts全局声明
│   │   ├── env.d.ts  env 全局配置声明文件
│   │   ├── index.d.ts  全局声明
│   │   └── window.d.ts  window的ts声明
├── .eslintignore  eslint 排除文件
├── .eslintrc.js    eslint  配置
├── prettier.config.js  prettier配置
├── postcss.config.js   postcss配置（废弃，直接在vite.config.ts中的css配置）
├── Dockerfile web的dockerfile脚本
├── WeiXinDockerfile 微信的dockerfile脚本
└── vite.config.ts vite 服务配置

```

备注

```
eslint

#安装eslint
npm install --save-dev eslint eslint-plugin-vue

#安装prettier
npm install --save-dev prettier eslint-plugin-prettier @vue/eslint-config-prettier

#安装typescript支持
npm install --save-dev @vue/eslint-config-typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser

vscode 首选项 -> 设置里面添加
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "eslint.autoFixOnSave" : true,
}

```
