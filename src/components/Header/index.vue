<template>
  <div class="header">
    <a-row
      justify="space-between"
      align="middle"
      :gutter="{ xs: 0, sm: 0, md: 0, lg: 0 }"
    >
      <!-- logo -->
      <a-col :xs="12" :sm="6" :md="6" :xl="8" flex>
        <div class="left">
          <div class="logo">
            <img src="@/assets/images/logo/logo.png" alt="LOGO" />
          </div>
          <div class="title">
            <span>Star Universe</span>
            <span>{{ AWordFromTheHeart[getRandomText()].text }}</span>
          </div>
        </div>
      </a-col>
      <!-- 导航 -->
      <a-col :xs="0" :sm="10" :md="10" :xl="8" flex>
        <div class="nav">
          <a-row
            justify="center"
            align="middle"
            :gutter="{ xs: 24, sm: 24, md: 24, lg: 24 }"
          >
            <!-- 
      :sm="item.path.search(active.split('/')[1]) >= 1 ? 24 : 0" -->
            <a-col
              align="center"
              v-for="(item, index) in navList"
              :key="index"
              :xs="24 / navList.length"
              :md="24 / navList.length"
              :xl="24 / navList.length"
              flex
            >
            <!-- {{ item.path.search(active.split('/')[1]) >= 1 ? 24 : 0 }} -->
              <!-- :class="item.path == active ? 'active' : ''"
          @click.prevent="changeNav(item.path)" -->
              <!-- 判断是否有子路由 -->
              <template v-if="!item.children">
                <a href="#" id="a">{{ item.meta.title }}</a>
              </template>
              <!-- 下拉列表 -->
              <!-- <a-dropdown
            placement="bottom"
            overlayClassName=".he"
            :overlayStyle="{ 'padding-top': '20px', width: 'auto' }"
            v-else
          >
            <a
              href="#"
              id="a"
              class="ant-dropdown-link"
              :class="
                item.path.search(active.split('/')[1]) >= 1 ? 'active' : ''
              "
              @click.prevent="11"
            >
              {{ item.meta.title }}
              <down-outlined />
            </a>
            <template #overlay>
              <a-menu>
                <a-menu-item v-for="(it, i) in item.children" :key="i">
                  <a
                    href="javascript:;"
                    @click.prevent="changeNav(item.path + '/' + it.path)"
                    >{{ it.meta.title }}</a
                  >
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown> -->
              <!-- <p class="he"></p> -->
            </a-col>
          </a-row>
        </div>
      </a-col>
      <!-- 右边 -->
      <a-col :xs="12" :sm="8" :md="8" :xl="8" flex>
        <div class="right">
          <a-row justify="center" align="middle">
            <a-col>
              <div class="search">
                <a-button shape="round" :icon="h(SearchOutlined)"
                  >搜索</a-button
                >
              </div>
            </a-col>
            <a-col>
              <div class="history">
                <a-button shape="round" :icon="h(HistoryOutlined)"
                  >历史订单</a-button
                >
              </div>
            </a-col>
          </a-row>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script setup>
import { h, ref, onMounted } from "vue";
import { SearchOutlined, HistoryOutlined } from "@ant-design/icons-vue";
import { useRouter } from "vue-router";
// 文心一言
import AWordFromTheHeart from "@/assets/Json/AWordFromTheHeart.json";

const router = new useRouter();
// 存储导航列表
let navList = ref();
// 获取导航列表
const getNavList = function () {
  const routers = router.options.routes;
  navList.value = routers.filter((e) => e.meta !== undefined && e.meta.nav);
};
// 获取随机文心一言
const getRandomText = function () {
  // 计算范围内的随机数
  let random = Math.random() * ((AWordFromTheHeart.length - 1) - 0 + 1);
  // 向下取整得到整数
  let randomNumber = Math.floor(random);
  // 返回随机数
  return randomNumber;
};
onMounted(() => {
  getNavList();
});
</script>

<style lang="less" scoped>
@height: 64px;
.header {
  width: 100%;
  //   max-width: var(--ct-mx-width);
  //   line-height: @height;
  //   background-color: rgba(255, 0, 0, 0.349);
  padding: 10px 0;
  .a-row {
    width: 100%;
  }
  .left {
    display: flex;
    justify-content: left;
    align-items: center;
    cursor: pointer;
    @logoSize: 38px;
    .logo {
      width: @logoSize;
      height: @logoSize;
    }
    .title {
      display: flex;
      flex-direction: column;
      span {
        padding-left: 8px;
        color: var(--color-text);
        &:first-child {
          font-size: 16px;
          font-weight: 600;
        }
        &:last-child {
          font-size: 10px;
        }
      }
    }
  }
  .right {
    display: flex;
    justify-content: right;
    align-items: center;
    div {
      &:not(:last-child) {
        padding-right: 8px;
      }
    }
  }
}
</style>
