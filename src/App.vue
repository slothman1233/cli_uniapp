<script setup lang="ts">
    import { onLaunch, onShow, onHide } from '@dcloudio/uni-app';

    import permission from '@/common/utils/interceptor/interceptor';

    //不能修改
    import env from '@/common/config/dev';
    import { useStore, usedispatch } from '@/store';
    // import { usedispatch } from './store';
    import { App as app } from '@/store/mutation-types';
    onLaunch(() => {
        console.log('App Launch');
        permission();
        const store = useStore();

        // console.log(store.getters);

        usedispatch(store.state.app.module, app.action.CONFIGMODEL, env);

        // console.log(env);

        // #ifdef MP-DINGTALK
        console.log(process.env.UNI_SSS);
        // #endif
    });
    onShow(() => {
        console.log('App Show');
    });
    onHide(() => {
        console.log('App Hide');
    });
</script>
<style lang="scss">
    /* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
    @import 'vk-uview-ui/index.scss';
</style>
