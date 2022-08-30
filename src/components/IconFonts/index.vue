<template>
    <text
        class="iconfont"
        :class="name"
        :style="{ color: color, fontSize: fontSize }"
        @click="$emit('click', $event)"
    ></text>
</template>

<script lang="ts">
    export default {
        props: {
            name: {
                type: String,
                require: true,
            },
            color: {
                type: String,
                require: true,
            },
            fontSize: {
                type: String,
                require: true,
            },
        },
    };
</script>

<style scoped>
    @import url('../../static/assets/iconfont/test/iconfont.css');

    .iconfont {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: inherit;
    }
</style>
