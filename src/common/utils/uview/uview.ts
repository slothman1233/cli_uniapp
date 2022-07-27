import { App } from 'vue';

import uView from 'vk-uview-ui';

export default (app: App<Element>): any => {
    app.use(uView);
};
