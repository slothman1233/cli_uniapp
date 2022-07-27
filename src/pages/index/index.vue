<template>
    <view class="content">
        <image class="logo" src="/static/assets/image/logo.png" />
        <view class="text-area">
            <text class="title" @click="navigatess">{{ title }}</text>
        </view>
    </view>
</template>

<script setup lang="ts">
    import { getrandom } from '@/services/randomDataService/randomData';
    import { useStore } from '@/store';
    import { onMounted, ref } from 'vue';
    const title = ref('Hello');

    const store = useStore();

    // console.log(store.state);

    onMounted(async () => {
        const a = await getrandom();
        console.log(a);
    });
    const navigatess = function() {
        // console.log(123123123);

        uni.navigateTo({
            url: '/pages/qs/index',
        });
    };
</script>

<style>
    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .logo {
        height: 200rpx;
        width: 200rpx;
        margin-top: 200rpx;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 50rpx;
    }

    .text-area {
        display: flex;
        justify-content: center;
    }

    .title {
        font-size: 36rpx;
        color: #8f8f94;
    }
</style>
