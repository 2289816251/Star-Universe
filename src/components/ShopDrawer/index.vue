<template>
  <a-drawer
    v-model:open="props.open"
    class="custom-class"
    root-class-name="root-class-name"
    :title="`Star-Universe - ` + props.title"
    width="80%"
    :closable="false"
    placement="right"
    @close="myClose"
  >
    <div class="shopDrawer">
      <!-- 商品说明 -->
      <div class="illustrate">1</div>
      <!-- 商品 -->
      <div class="shopInfo">
        <div class="shop">
          <div class="left">
            <img v-lazy="props.data.imageUrl" :alt="props.data.title" />
          </div>
          <div class="right">
            <h1>{{ props.data.title }}</h1>
            <span>{{ props.data.describe }}</span>
            <div class="email">
              <span>联系邮箱：</span>
              <a-input placeholder="请输入邮箱，便于查询订单">
                <template #prefix>
                  <user-outlined />
                </template>
                <template #suffix>
                  <a-tooltip title="Extra information">
                    <info-circle-outlined style="color: rgba(0, 0, 0, 0.45)" />
                  </a-tooltip>
                </template>
              </a-input>
            </div>
            <div>
              <span>单价 {{ props.data.price }}</span>
              <span>库存 {{ props.data.inStock }}</span>
            </div>

            <span>订单金额 计算属性算</span>
          </div>
        </div>
        <a-button>立即下单</a-button>
      </div>
    </div>
  </a-drawer>
</template>

<script setup>
import { UserOutlined, InfoCircleOutlined } from "@ant-design/icons-vue";
const props = defineProps({
  open: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: "请您努力，为了你自己",
  },
  data: {
    type: Object,
    default: {},
  },
});

console.log(props.data);
const emit = defineEmits(["close"]); // 创建自定义事件
const myClose = () => {
  emit("close");
};
</script>

<style lang="less" scoped>
.shopDrawer {
  display: flex;
  align-items: start;
  justify-content: space-between;
  .illustrate {
    width: 50%;
    height: 100%;
  }
  .shopInfo {
    width: 50%;
    display: flex;
    flex-direction: column;
    .shop {
      width: 100%;
      display: flex;
      align-items: center;
      .left {
        width: 50%;
        height: auto;
        border-radius: var(--ct-border-radius-8);
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .right {
        width: 50%;
        margin-left: var(--layout-grid);
        display: flex;
        align-items: start;
        flex-direction: column;
        & > div {
          display: flex;
          align-items: center;
        }
      }
    }
  }
}
</style>
