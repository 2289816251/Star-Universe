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
            <span v-if="homeStore.AWordFromTheHeart">{{
              homeStore.AWordFromTheHeart.text
            }}</span>
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
            <a-col
              align="center"
              v-for="(item, index) in navList"
              :key="index"
              :sm="item.path.search(activeNav.split('/')[1]) >= 1 ? 24 : 0"
              :xs="item.path.search(activeNav.split('/')[1]) >= 1 ? 24 : 0"
              :md="24 / navList.length"
              :xl="24 / navList.length"
              flex
            >
              <!-- 判断是否有子路由 -->
              <template v-if="!item.children">
                <div :class="activeNav == item.path ? 'active' : ''">
                  <a href="#" id="a">{{ item.meta.title }}</a>
                  <p></p>
                </div>
                <!-- <a-button type="link">{{ item.meta.title }}</a-button> -->
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
import { useHomeStore } from "@/stores/home";

const homeStore = useHomeStore();
const router = new useRouter();

let activeNav = router.options.history.location
  ? router.options.history.location
  : "/home"; // 当前激活的菜单
// 存储导航列表
let navList = ref();
// 获取导航列表
const getNavList = function () {
  const routers = router.options.routes;
  navList.value = routers.filter((e) => e.meta !== undefined && e.meta.nav);
};

onMounted(() => {
  getNavList();
  homeStore.getAWordFromTheHeart();
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
        &:last-child {
          font-size: 10px;
        }
        &:first-child {
          font-size: 16px;
          font-weight: 600;
        }
      }
    }
  }
  .nav {
    // background-color: red;
    .ant-row {
      .ant-col {
        div {
          position: relative;
          a {
            // background-color: red;
            color: var(--color-borde);
            &:hover {
              color: var(--color-button);
            }
          }
          p {
            position: absolute;
          }
          &.active {
            a {
              color: var(--color-button-hover);
              font-weight: 600;
            }
            p {
              left: 40%;
              // top: 0;
              right: 40%;
              bottom: -28px;
              width: 20%;
              height: 4px;
              border-radius: 25%;
              background-color: var(--main-color);
              box-shadow: 0 -6px 20px var(--secondary-color);
            }
          }
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
