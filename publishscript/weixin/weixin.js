/* eslint-disable prettier/prettier */
const ci = require('miniprogram-ci');
const conifg = require('../../package.json');

(async function() {
    // appid	        string	是	合法的小程序/小游戏 appid
    // projectPath	    string	是	项目路径，即 project.config.json 所在的目录
    // privateKey	    string	否	私钥的内容，（创建 Project 对象，需要传入私钥内容或私钥文件路径）
    // privateKeyPath	string	否	私钥文件的路径，（创建 Project 对象，需要传入私钥内容或私钥文件路径）
    // type	            string	否	显示指明当前的项目类型, 默认为 miniProgram，有效值 miniProgram/miniProgramPlugin/miniGame/miniGamePlugin
    // ignores	        string[]	否	指定需要排除的规则
    const project = new ci.Project({
        appid: 'wxc5d979b0149b0b55',

        type: 'miniProgram',

        projectPath: './dist/build/mp-weixin/',

        privateKeyPath: './publishscript/weixin/private.wxc5d979b0149b0b55.key',

        ignores: ['node_modules/**/*', '$node_modules/**/*'],
    });

    // project	        IProject	是	#项目对象
    // version	        string	是	自定义版本号
    // desc	            string	否	自定义备注
    // setting	        object	否	#编译设置
    // onProgressUpdate	function	否	进度更新监听函数
    // robot	        number	否	指定使用哪一个 ci 机器人，可选值：1 ~ 30
    // threads	        number	否	指定本地编译过程中开启的线程数
    // useCOS	        boolean	否	使用异步方式上传，当代码包大于 5MB 时，默认开启

    // setting 的参数
    // es6?: boolean; 对应于微信开发者工具的 "es6 转 es5"
    // es7?: boolean; 对应于微信开发者工具的 "增强编译"
    // minify?: boolean; 上传时压缩所有代码，对应于微信开发者工具的 "上传时压缩代码"
    // codeProtect?: boolean; 对应于微信开发者工具的 "上传时进行代码保护"
    // minifyJS?: boolean; 上传时压缩 JS 代码
    // minifyWXML?: boolean; 上传时压缩 WXML 代码
    // minifyWXSS?: boolean; 上传时压缩 WXSS 代码
    // autoPrefixWXSS?: boolean; 对应于微信开发者工具的 "上传时样式自动补全"
    // disableUseStrict?: boolean; "增强编译" 开启时，是否禁用JS文件严格模式，默认为false
    const uploadResult = await ci.upload({
        project,

        version: conifg.version,

        desc: conifg.desc,

        robot: 2,

        setting: {
            es6: true,
            minify: true,
            autoPrefixWXSS: true,
        },

        onProgressUpdate: console.log,
    });

    // console.log(uploadResult);
})();