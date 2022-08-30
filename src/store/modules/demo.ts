import { Module } from 'vuex';
import { App, RootStateTypes, Demo } from '../interface/index';
import { demo as Apps } from '../mutation-types';

const app: Module<Demo, RootStateTypes> = {
    namespaced: true,
    state() {
        return {
            module: 'demo',
            text: 'sef',
        };
    },
    getters: {
        [Apps.getters.INCREMENT](state) {
            return state.text;
        },
    },
    mutations: {
        [Apps.mutations.CONFIGMODEL](state, configModel: string) {
            state.text = configModel;
        },
    },
    actions: {
        async [Apps.action.CONFIGMODEL]({ commit }, configModel: string) {
            commit(Apps.mutations.CONFIGMODEL, configModel);
        },
    },
};

export default app;
