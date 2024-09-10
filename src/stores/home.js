import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import api from "@/api";
export const useHomeStore = defineStore('home', {
    state: () => {
        return {
            AWordFromTheHeart:null
        }
    },
    // could also be defined as
    // state: () => ({ count: 0 })
    actions: {
        init() {
            this.getAWordFromTheHeart()
        },
        async getAWordFromTheHeart() {
            const result = await api.getAWordFromTheHeart()
            const { code, data } = { ...result }
            // 计算范围内的随机数
            let random = Math.random() * (data.length - 1 - 0 + 1);
            // 向下取整得到整数
            let randomNumber = Math.floor(random);
            // 返回随机数
            this.AWordFromTheHeart =  data[randomNumber];
        },
    },
})