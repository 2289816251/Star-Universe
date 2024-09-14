<template>
  <div class="shopListCard" :class="props.active ? 'active' : ''" @click="myClick">
    <div class="container">
      <div class="image">
        <img v-lazy="imageUrl" :alt="title" />
      </div>
      <div class="text">
        <p class="title">{{ title }}</p>
        <span class="describe">{{ describe }}</span>
      </div>
      <slot name="outer"></slot>
    </div>
    <div
      class="isShowActive"
      :style="
        `background:linear-gradient(to right,` + imageInfo + `,#ffffff00); filter: brightness(80%);box-shadow: 0 -6px 10px ` + imageInfo + `;`
      "
    ></div>
    <TransitionGroup name="bg" tag="p">
      <p
        class="bg"
        :class="imageInfo !== '' ? 'clipPath' : ''"
        :style="
          `background:linear-gradient(to right,` + imageInfo + `,#ffffff00);`
        "
        v-if="imageInfo !== ''"
      ></p>
    </TransitionGroup>
  </div>
</template>
<script setup>
import { ref, onMounted, toRefs } from "vue";
import { getThemeColor } from "@/hooks/useGetThemeColor";

// 获取参数
const props = defineProps(["data", "active"]);
// 分解参数
const { title, describe, imageUrl } = toRefs(props.data);

let imageInfo = ref("");

// 获取主题色
const themeColor = async function () {
  let result = await getThemeColor(imageUrl.value);
  imageInfo.value = result;
};

const emit = defineEmits(['click']); // 创建一个click事件
const myClick = () => {
  emit('click', props.data);
}

onMounted(() => {
  themeColor();
});
</script>
<style lang="less" scoped>
.shopListCard {
  width: 100%;
  height: auto;
  cursor: pointer;
  padding: var(--layout-grid);
  // background-color: red;
  border-radius: var(--ct-border-radius-8);
  // overflow: hidden;
  box-shadow: var(--shadow-elevation-medium);
  position: relative;
  @imgWH: 60px;
  .container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: var(--ct-border-radius-8);
    .image {
      width: @imgWH;
      height: @imgWH;
      border-radius: var(--ct-border-radius-4);
      overflow: hidden;
      display: flex;
      align-content: center;
      justify-content: center;
      // img {
      //   // width: 100%;
      //   // height: 100%;
      // }
    }
    .text {
      display: flex;
      align-items: center;
      flex-direction: column;
      p {
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 8px;
      }
      span {
        font-size: 14px;
        color: #999;
      }
    }
  }
  & > .isShowActive {
    width: 4px;
    height: 60%;
    border-radius: 2px;
    // background-color: var(--main-color);
    // box-shadow: 0 -6px 20px var(--secondary-color);
    position: absolute;
    z-index: 9;
    top: 20%;
    right: -2px;
    bottom: 20%;
    display: none;
  }
  p {
    margin: 0;
    border-radius: var(--ct-border-radius-8);
    .bg {
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      z-index: -1;
    }
  }
  // &.active::before {
  //   content: "";
  //   width: 4px;
  //   height: 60%;
  //   border-radius: 25%;
  //   background-color: var(--main-color);
  //   box-shadow: 0 -6px 20px var(--secondary-color);
  //   position: absolute;
  //   z-index: 9;
  //   top: 20%;
  //   right: -2px;
  //   bottom: 20%;
  // }
  &.active .isShowActive {
    // color: var(--main-color);
    display: block;
  }
}
.bg-enter-active,
.bg-leave-active {
  transition: all 0.5s ease-in;
}
.bg-enter-from,
.bg-leave-to {
  opacity: 0;
  transform: translateX(-10px);
}
</style>
