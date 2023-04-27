<template>
  <div class="container">
    <div class="nav">
      <NavigationAdmin />
    </div>
    <div class="main-container">
      <BaseTopAdmin :name-page="'Evaluate'" />
      <div class="content-eva">
        <article v-for="item,index in state.listEvaluate" :key="index" class="card">
          <strong>{{ item.userName }}: </strong>{{ item.description }}
        </article>
      </div>
    </div>
  </div>
</template>

<script setup>
import BaseTopAdmin from "@/components/generals/BaseTopAdmin.vue";
import NavigationAdmin from "@/components/generals/NavigationAdmin.vue";
import useEvaluateStore from "@/stores/evaluate";
import { onMounted } from "vue";

const evaluateStore = useEvaluateStore();

const { state,getDataEvaluate } = evaluateStore;

onMounted(() => {
  getDataEvaluate();
});
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  width: 100%;
  .nav {
    width: 15%;
  }
  .main-container {
    width: 85%;
  }
}
.content-eva {
  line-height: 150%;
  column-count: 2;
  column-gap: 1em;
}
.card {
  padding: 1em;
  margin-top: 1em;
  border-radius: 0.5em;
  border: 1px solid #d9d9d9;
  display: inline-block;
}
strong{
  font-weight: bold;
}
</style>
