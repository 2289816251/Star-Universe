<template>
  <div class="shopListCard">
    <img src="@/assets/images/loading.gif" alt="加载失败" />
    <div class="text">
      <p class="title">Telegram</p>
      <span class="describe">社交软件</span>
    </div>

    <TransitionGroup name="bg" tag="p">
      <p
        class="bg"
        :class="imageInfo ? 'clipPath' : ''"
        :style="
          `background:linear-gradient(to right,` +
          imageInfo.themeColor +
          `,#ffffff00);`
        "
        v-if="imageInfo"
      ></p>
    </TransitionGroup>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { getThemeColor } from "@/hooks/useGetThemeColor";
import img from "@/assets/images/logo/logo.png";

let imageInfo = ref(null);

// 获取主题色
const themeColor = async function () {
  let result = await getThemeColor(img);
  setTimeout(() => {
    imageInfo.value = result;
  }, 0);
};

onMounted(() => {
  themeColor();
});
</script>
<style lang="less" scoped>
.shopListCard {
  width: 400px;
  padding: 14px;
  display: flex;
  align-items: center;
  border-radius: var(--ct-border-radius-8);
  overflow: hidden;
  box-shadow: var(--shadow-elevation-medium);
  position: relative;
  @imgWH: 60px;
  img {
    width: @imgWH;
    height: @imgWH;
  }
  .text {
  }
  .bg {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    margin: 0;
  }
}
.bg-enter-active,
.bg-leave-active {
  transition: all 0.5s ease-in;
}
.bg-enter-from,
.bg-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}
</style>
