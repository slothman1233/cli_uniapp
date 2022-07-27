<template>
    <div> 131232 </div>
</template>

<script lang="ts">
    import { useStore } from '@/store';
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'ViewsHome',
        setup(prop) {
            return {
                msg: 'hello World',
            };
        },
    });
</script>

<style lang="less">
    body {
        color: @FontColor_1;
        display: flex;
    }
</style>
