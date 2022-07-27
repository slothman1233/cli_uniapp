<template>
    <div>{{ a }}</div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import { propType } from './model';
    export default defineComponent({
        name: 'cpmDome',
        setup(props: propType, ctx) {
            return {
                a: 123123,
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
