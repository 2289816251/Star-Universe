<script setup>
import { reactive, onMounted } from 'vue'
import { RouterView } from "vue-router";
import Header from "./components/Header/index.vue";

</script>

<template>
  <Header></Header>
  <RouterView />
</template>

<style scoped></style>
