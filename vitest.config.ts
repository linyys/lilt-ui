import {defineConfig} from "vitest/config";
import Vue from '@vitejs/plugin-vue';
export default defineConfig({
    // @ts-ignore
    plugins:[Vue()],
    optimizeDeps:{
        disabled: true
    },
    test: {
        clearMocks: true,
        environment: "jsdom",
        open:true
        // transformMode: {
        //     web: [/\.[jt]sx$/]
        // }
    }
})
