<template>
  <div class="shopPage">
    <div class="shopList">
      <ShopListCard
        v-for="(item, index) in shopStore.shopListInfo"
        :data="item"
        :active="shopStore.firstLevelNavActive == item.id"
        @click="shopStore.setFirstNavActive"
      >
        <template v-slot:outer>
          <div>111</div>
        </template>
      </ShopListCard>
    </div>
    <div class="shopInfo">
      <template
        v-if="shopStore.secondaryNavList && shopStore.secondaryNavActive"
      >
        <div class="secondaryNav">
          <a-menu
            v-model:selectedKeys="shopStore.secondaryNavActive"
            mode="horizontal"
            :items="shopStore.secondaryNavList"
          />
        </div>
      </template>
      <div class="shop">
        <a-spin :spinning="shopStore.shopLoadingState" tip="加载数据中...">
          <!-- 判断有没有数据 -->
          <template v-if="shopStore.shopInfo.length > 0">
            <a-space :size="[16, 16]" wrap>
              <ShopCard
                v-for="(item, index) in shopStore.shopInfo"
                :data="item"
                :key="index"
              />
            </a-space>
          </template>
          <!-- 如果没有数据则提示用户 -->
          <template v-else>
            <a-empty
              image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
              :image-style="{
                height: '60px',
              }"
            >
              <template #description>
                <span>
                  未有数据，请
                  <a href="#api">联系管理员</a>
                  补充数据
                </span>
              </template>
            </a-empty>
          </template>
        </a-spin>
      </div>
    </div>
    <ShopDrawer :title="homeStore.AWordFromTheHeart.text" :open="shopDrawerOpen" @close="shopDrawerOpen = false" :data="shopStore.shopInfo[0]"/>
  </div>
</template>
<script setup>
import { onMounted, watch, ref } from "vue";
import ShopListCard from "@/components/ShopListCard/index.vue";
import ShopCard from "@/components/ShopCard/index.vue";
import ShopDrawer from "@/components/ShopDrawer/index.vue";

import { useHomeStore } from "@/stores/home";
import { useShopStore } from "@/stores/shop";

const homeStore = useHomeStore();
const shopStore = useShopStore();

const shopDrawerOpen = ref(true);


// 监视一级导航栏的变化
watch(
  () => shopStore.firstLevelNavActive,
  (newVal, oldVal) => {
    // console.log(newVal)
    shopStore.setSecondaryNavActive();
  },
  {
    deep: true,
    immediate: true,
  }
);

// 监视二级导航栏的变化
watch(
  () => shopStore.secondaryNavActive,
  (newVal, oldVal) => {
    shopStore.getShopInfo(newVal);
  },
  {
    deep: true,
    immediate: true,
  }
);

onMounted(() => {
  shopStore.getShopListInfo();
});
</script>
<style lang="less" scoped>
.shopPage {
  width: 100%;
  display: flex;
  align-items: start;
  justify-content: space-between;
  padding-top: var(--layout-grid);
  .shopList {
    width: 26%;
    min-width: 300px;
    margin-right: var(--layout-grid);
    :deep(.shopListCard) {
      &:not(:last-child) {
        margin-bottom: var(--layout-grid);
      }
    }
  }
  .shopInfo {
    width: 74%;
    .secondaryNav {
      padding-bottom: var(--layout-grid);
    }
    .shop {
      width: 100%;
      height: calc(100vh - 136px);
      max-height: calc(100vh - 136px);
      overflow-y: auto;
      .ant-spin-nested-loading {
        height: 100%;
      }
      /* 设置滚动条的宽度和高度 */
      &::-webkit-scrollbar {
        width: 2px; /* 滚动条的宽度 */
        height: 4px; /* 滚动条的高度 */
      }

      /* 滚动条轨道的样式 */
      &::-webkit-scrollbar-track {
        background: #f1f1f1; /* 轨道背景色 */
      }

      /* 滚动条滑块（thumb）的样式 */
      &::-webkit-scrollbar-thumb {
        background: var(--text-describe); /* 滑块背景色 */
        border-radius: 1px; /* 圆角大小 */
      }

      /* 滑块在鼠标悬停时的样式 */
      &::-webkit-scrollbar-thumb:hover {
        background: var(--main-color); /* 鼠标悬停时滑块的背景色 */
      }
    }
  }
}
</style>
