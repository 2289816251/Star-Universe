import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import api from "@/api";
export const useShopStore = defineStore('shop', {
    state: () => {
        return {
            // 商品列表数据
            shopListInfo: null,
            // 商品数据
            shopInfo: [],
            // 一级导航当前选中
            firstLevelNavActive: null,
            // 二级导航当前选中
            secondaryNavActive: [],
            // 商品加载状态
            shopLoadingState: false
        }
    },
    // could also be defined as
    // state: () => ({ count: 0 })
    actions: {
        async getShopListInfo() {
            try {
                let { code, data } = await api.getShopListInfo()

                if (code === 200) {
                    this.shopListInfo = data
                    // 过滤取出一级导航当前选中对象
                    this.firstLevelNavActive = data.filter(e => e.isActive)[0].id
                }
                // console.log(this.firstLevelNavActive)
                // console.log(this.secondaryNavActive)
            } catch (error) {
                console.log(`获取商品列表数据失败：` + error)
            }

        },
        async getShopInfo(classId) {
            this.shopLoadingState = true
            try {
                let { code, data } = await api.getShopInfo(classId)

                if (code === 200) {
                    this.shopLoadingState = false
                    this.shopInfo = null
                    this.shopInfo = data
                    // this.getSecondaryNavActive()
                }
            } catch (error) {
                console.log(`获取商品列表数据失败：` + error)
            }
        },
        // 修改一级默认选中
        setFirstNavActive(data) {
            if (this.firstLevelNavActive == data.id) return
            // shopStore.getSecondaryNavActive()
            this.firstLevelNavActive = data.id
            this.shopListInfo.forEach(e => {
                e.isActive = false
                if (e.id == this.firstLevelNavActive) e.isActive = true
            })
        },
        // 修改二级默认选中
        setSecondaryNavActive() {
            // // 过滤二级导航数据
            let list = this.shopListInfo ? this.shopListInfo.filter(e => e.id == this.firstLevelNavActive)[0] : {}
            let secondaryNavData = list.children ? list.children.filter((e) => e.isActive)[0].id : ''
            this.secondaryNavActive[0] = secondaryNavData
        }
    },
    getters: {
        // 二级列表数据
        secondaryNavList(state) {
            // 过滤二级导航数据
            let list = state.shopListInfo ? state.shopListInfo.filter(e => e.id == state.firstLevelNavActive)[0] : {}
            // state.secondaryNavActive.push(data[0].children.filter(e => e.isActive)[0].id)
            list.children ? list.children.forEach((e) => {
                e.key = e.id
                e.label = e.title
            }) : list.children = []
            return list.children
        }
    },
    persist: true
})