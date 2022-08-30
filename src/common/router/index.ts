import routerpath from './routers';
import fs from 'fs';
import path from 'path';
import pages from './pages';

const pageJSON: Record<string, any> = pages;
pageJSON.pages = [];

const routers: Record<string, any> = routerpath;

for (const key in routers) {
    const paths = routers[key]['path'];
    //切掉path第一个‘/’字符。
    if (paths.slice(0, 1) === '/') {
        routers[key]['path'] = paths.slice(1);
    }
    (<any[]>pageJSON.pages).push(routers[key]);
}
//写入文件
export default function() {
    const pagespath = path.join(__dirname, '..', '..', 'pages.json');
    return new Promise((resolve, reject) => {
        fs.writeFile(pagespath, JSON.stringify(pageJSON), (e) => {
            if (e) {
                console.error(e);
                reject(e);
                return;
            }
            console.log('pages.json 配置文件更新成功');
            resolve('');
        });
    });
}
