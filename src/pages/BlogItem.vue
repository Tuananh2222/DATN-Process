<template>
  <DefaultHeader />
  <header>
    <div class="header-banner">
      <img
        style="
          width: 100%;
          height: 500px;
        "
        :src="blogDetail.img_blog"
      />
      <h1>{{ blogDetail.title }}</h1>
    </div>
    <div class="clear"></div>
  </header>

  <section class="content">
    <h1>{{ blogDetail.title }}</h1>
    <article v-for="(item, index) in blogDetail.detail_blog" :key="index">
      <p>
        {{ blogDetail.description }}
      </p>
      <h3>{{ (item.index + ".") + item.title_child }}</h3>
      <p>
        {{ item.description_child }}
      </p>
      <p>
        <img style="width: 100%" v-if="item.img_url" :src="item.img_url" />
      </p>
    </article>
  </section>
  <DefaultFooter />
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import useBlogStore from "@/stores/blog";
import DefaultHeader from "@/components/generals/defaultHeader.vue";
import DefaultFooter from "@/components/generals/defaultFooter.vue";

const { state, initProcess } = useBlogStore();
const route = useRoute();
const id = route.params.id;
const blogDetail = ref({});

onMounted(() => {
  initProcess();
  getDetailBlog(id);
});

const getDetailBlog = (id) => {
  blogDetail.value = state.listBlog.find((item) => item.id == id);
  console.log(blogDetail.value);
};
</script>

<style lang="scss" scoped>
/* main */
header {
  height: 560px;
  z-index: 10;
}
.header-banner {
  position: relative;
  img {
    background-color: #333;
    background-position: center;
    background-repeat: no-repeat;
  }
}

header h1 {
  background-color: rgba(18, 72, 120, 0.8);
  color: #fff;
  padding: 0 1rem;
  position: absolute;
  top: 2rem;
  left: 2rem;
}

section {
  display: flex;
  flex-direction: column;
  h1 {
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    font-size: 40px;
    margin-bottom: 15px;
  }
}

/* demo content */
.content {
  margin: 0 auto;
  width: 960px;
  max-width: 100%;
}
article {
  float: left;
  width: 100%;
  max-width: 800px;
  margin-bottom: 90px;

  p {
    margin: 10px 0;
    white-space: pre-line;
    line-height: 1.5;
  }
  h3 {
    font-weight: bold;
    font-size: 23px;
    margin: 20px 0;
  }
}
article p:first-of-type {
  margin-top: 0;
}
aside {
  width: 100%;
  .slide-wrapper {
    width: 80%;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    .slide-text {
      font-size: 28.5px;
      background-color: #f1f4f6;
      width: 100%;
      padding: 1.5rem;
      text-align: center;
    }
  }
}
p img {
  max-width: 100%;
}

@media only screen and (max-width: 960px) {
  .content {
    padding: 2rem 0;
  }
  article {
    float: none;
    margin: 0 auto;
    width: 96%;
  }
  article:last-of-type {
    margin-bottom: 3rem;
  }
  aside {
    float: none;
    text-align: center;
    width: 100%;
  }
}
p {
  font-size: 19px;
}
</style>
