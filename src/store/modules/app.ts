import { Module } from 'vuex';
import { App, RootStateTypes } from '../interface/index';
import { App as Apps } from '../mutation-types';

const app: Module<App, RootStateTypes> = {
    state() {
        return {
            count: 0,
            configModel: {
                name: '',
            },
        };
    },
    mutations: {
        [Apps.mutations.INCREMENT](state: App) {
            state.count++;
        },

        [Apps.mutations.CONFIGMODEL](state: App, configModel: clientEnv) {
            state.configModel = configModel;
        },
    },
    actions: {
        async [Apps.action.CHANGECOUNT]({ commit }, num: App) {
            console.log('app.ts receive num is :', num);
            commit(Apps.mutations.INCREMENT, num);
        },

        async [Apps.action.CONFIGMODEL]({ commit }, configModel: clientEnv) {
            commit(Apps.mutations.CONFIGMODEL, configModel);
        },
    },
};

export default app;
