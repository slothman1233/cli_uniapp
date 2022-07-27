import service from '../https';
import { RANDOMDATA } from '../RequestPathName';

/**
 * 请求示例
 * @param {string} str ....
 * @returns {Promise<any>} ...
 */
export const getrandom = (str?: string) =>
    service
        .get<any>(RANDOMDATA)
        .then((response: any) => {
            return response?.bodyMessage;
        })
        .catch((e: any) => {
            console.log(e);
        });
