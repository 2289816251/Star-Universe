<template>
  <a-card :loading="loading" hoverable style="width: 300px">
    <template #cover>
      <img alt="example" v-lazy="props.data.imageUrl" />
    </template>
    <template #actions>
      <a-tooltip
        placement="top"
        title="点赞"
        :get-popup-container="getPopupContainer"
      >
        <heart-outlined :style="{ fontSize: `${fontSize}px` }" key="setting" />
      </a-tooltip>
      <a-tooltip
        placement="top"
        title="加入购物车"
        :get-popup-container="getPopupContainer"
      >
        <shopping-cart-outlined
          :style="{ fontSize: `${fontSize}px` }"
          key="edit"
        />
      </a-tooltip>
      <a-tooltip
        placement="top"
        title="分享"
        :get-popup-container="getPopupContainer"
      >
        <share-alt-outlined
          :style="{ fontSize: `${fontSize}px` }"
          key="ellipsis"
        />
      </a-tooltip>
    </template>
    <a-card-meta :title="props.data.title" :description="props.data.describe">
    </a-card-meta>
    <a-divider />
    <div class="outerInfo">
      <a-statistic title="价格（人民币）" :value="props.data.price" style="margin-right: 50px">
        <template #prefix>
          <span>￥</span>
        </template>
      </a-statistic>
      <a-statistic title="销量/库存" :value="props.data.sales" class="demo-class">
        <template #suffix>
          <span>/ {{ props.data.inStock }}</span>
        </template>
      </a-statistic>
      <!-- <span class="price">￥{{ props.data.price }}</span>
      <span class="inStock">库存{{ props.data.inStock }}件</span> -->
    </div>
    <div class="tags">
      <a-space :size="[0, 'small']" wrap>
        <a-tag
          v-for="(item, index) in props.data.label"
          :bordered="false"
          color="default"
          >{{ item }}</a-tag
        >
      </a-space>
    </div>
  </a-card>
</template>
<script setup>
import { ref } from "vue";
import {
  HeartOutlined,
  ShoppingCartOutlined,
  ShareAltOutlined
} from "@ant-design/icons-vue";
// import { getRandomColor } from "@/hooks/useGetRandomColor";
// 获取参数
const props = defineProps(["data"]);
// 分解参数
// const { title, describe, imageUrl, label } = toRefs(props.data);

// 图标大小
const fontSize = ref(16);

// 骨架屏
const loading = props.data ? false : true;

const getPopupContainer = (trigger) => {
  return trigger.parentElement;
};
</script>
<style lang="less" scoped>
.ant-card {
  .ant-card-body {
    .outerInfo {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .price {
        color: rgb(184, 0, 0);
        font-size: 18px;
        font-weight: 800;
      }
    }
    .tags {
    }
    & > div:not(:first-child) {
      margin-top: 8px;
    }
  }
}
</style>
