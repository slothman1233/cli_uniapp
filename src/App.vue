<script setup lang="ts">
    import { onLaunch, onShow, onHide } from '@dcloudio/uni-app';
    import { App as mutations } from 'store/mutation-types';
    import { useStore } from './store';
    //不能修改
    import env from '@/common/config/dev';
    import permission from '@/common/utils/interceptor/interceptor';
    onLaunch(() => {
        console.log('App Launch');
        permission();

        const store = useStore();

        store.dispatch(mutations.action.CONFIGMODEL, env);

        // console.log(555555555555555);
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
