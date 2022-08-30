import store from '@/store';

console.log(store.state.app.configModel);

export const RANDOMDATA = `${store.state.app.configModel.apiPath}/get/loadData`;
