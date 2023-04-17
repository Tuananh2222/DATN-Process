<template>
  <DefaultHeader />
  <div id="wrapper">
    <div id="main">
      <!-- Post -->
      <article
        class="post"
        v-for="(item, index) in state.listBlog"
        :key="index"
      >
        <header>
          <div class="title">
            <h2>
              <a>{{ item.title }}</a>
            </h2>
          </div>
        </header>
        <a class="image featured"><img :src="item.img_blog" alt="" /></a>
        <p>
          {{ item.description }}
        </p>
        <footer>
          <div class="btn-wrapper">
            <CButton
              :label="'Continue Reading'"
              :class-name="'button-primary button-square button-block button-effect-ujarak'"
              @handle-button="handleShowDetailBlog(item.id)"
            />
          </div>
          <ul class="stats">
            <li><a href="#">General</a></li>
            <li><font-awesome-icon icon="fa-solid fa-heart" /> 28</li>
            <li><font-awesome-icon icon="fa-solid fa-comment" /> 128</li>
          </ul>
        </footer>
      </article>
    </div>
  </div>
  <DefaultFooter />
</template>

<script setup>
import CButton from "@/components/elements/CButton.vue";
import DefaultFooter from "@/components/generals/defaultFooter.vue";
import DefaultHeader from "@/components/generals/defaultHeader.vue";
import router from "@/router";
import useBlogStore from "@/stores/blog";
import { onMounted } from "vue";

const { state, initProcess } = useBlogStore();

const handleShowDetailBlog = (blogId) => {
  router.push("/blog-item/" + blogId);
};

onMounted(() => {
  initProcess();
});
</script>

<style lang="scss" scoped>
#wrapper {
  display: flex;
  -moz-flex-direction: row-reverse;
  -webkit-flex-direction: row-reverse;
  -ms-flex-direction: row-reverse;
  flex-direction: row-reverse;
  -moz-transition: opacity 0.5s ease;
  -webkit-transition: opacity 0.5s ease;
  -ms-transition: opacity 0.5s ease;
  transition: opacity 0.5s ease;
  margin: 0 auto;
  max-width: 100%;
  opacity: 1;
  width: 90em;
}
#main {
  -moz-flex-grow: 1;
  -webkit-flex-grow: 1;
  -ms-flex-grow: 1;
  flex-grow: 1;
  -ms-flex: 1;
  width: 100%;
  .post {
    padding: 3em 3em 1em 3em;
    background: #ffffff;
    border: solid 1px rgba(160, 160, 160, 0.3);
    margin: 0 0 3em 0;
    position: relative;
    header {
      display: -moz-flex;
      display: -webkit-flex;
      display: -ms-flex;
      display: flex;
      border-bottom: solid 1px rgba(160, 160, 160, 0.3);
      left: -3em;
      margin: -3em 0 3em 0;
      position: relative;
      width: calc(100% + 6em);
      .title {
        -moz-flex-grow: 1;
        -webkit-flex-grow: 1;
        -ms-flex-grow: 1;
        flex-grow: 1;
        -ms-flex: 1;
        padding: 3.75em 3em 3.3em 3em;
        h2 {
          font-weight: 900;
          font-size: 1.5em;
        }
      }
    }
    a.image.featured {
      overflow: hidden;
    }
    .image.featured {
      img {
        width: 100%;
      }
      display: block;
      margin: 0 0 3em 0;
      width: 100%;
    }
    a.image.featured img {
      -moz-transition: -moz-transform 0.2s ease-out;
      -webkit-transition: -webkit-transform 0.2s ease-out;
      -ms-transition: -ms-transform 0.2s ease-out;
      transition: transform 0.2s ease-out;
    }
    a.image.featured:hover img {
      -moz-transform: scale(1.05);
      -webkit-transform: scale(1.05);
      -ms-transform: scale(1.05);
      transform: scale(1.05);
    }
    footer {
      display: -moz-flex;
      display: -webkit-flex;
      display: -ms-flex;
      display: flex;
      justify-content: space-between;
      -moz-align-items: center;
      -webkit-align-items: center;
      -ms-align-items: center;
      align-items: center;
      .stats {
        cursor: default;
        list-style: none;
        padding: 0;
        li {
          border-left: solid 1px rgba(160, 160, 160, 0.3);
          display: inline-block;
          font-size: 0.6em;
          font-weight: 400;
          letter-spacing: 0.25em;
          line-height: 1;
          margin: 0 0 0 2em;
          padding: 0 0 0 2em;
          text-transform: uppercase;
          .icon {
            border-bottom: 0;
          }
          .icon:before {
            color: rgba(160, 160, 160, 0.3);
            margin-right: 0.75em;
          }
        }
        li:first-child {
          border-left: 0;
          margin-left: 0;
          padding-left: 0;
        }
      }
    }
  }
}
.btn-wrapper {
  margin-top: 10px;
}
#sidebar {
  margin-right: 3em;
  min-width: 22em;
  width: 22em;
  @media not screen and (min-width: 1280px) {
    border-top: solid 1px rgba(160, 160, 160, 0.3);
    margin: 3em 0 0 0;
    min-width: 0;
    padding: 3em 0 0 0;
    width: 100%;
    overflow-x: hidden;
  }
}
#sidebar > * {
  border-top: solid 1px rgba(160, 160, 160, 0.3);
  margin: 3em 0 0 0;
  padding: 3em 0 0 0;
}

#intro {
  border-bottom: solid 1px rgba(160, 160, 160, 0.3);
  margin: 3em 0 0 0;
}

#sidebar > :first-child {
  border-top: 0;
  margin-top: 0;
  padding-top: 0;
}
.mini-posts {
  margin: 0 0 2em 0;
  @media not screen and (min-width: 1280px) {
    display: flex;
    -moz-flex-wrap: wrap;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    width: calc(100% + 2em);
    .mini-posts > * {
      margin: 2em 2em 0 0;
      width: calc(50% - 2em);
    }

    .mini-posts > :nth-child(-n + 2) {
      margin-top: 0;
    }
  }
  .mini-post {
    display: flex;
    -moz-flex-direction: column-reverse;
    -webkit-flex-direction: column-reverse;
    -ms-flex-direction: column-reverse;
    flex-direction: column-reverse;
    background: #ffffff;
    border: solid 1px rgba(160, 160, 160, 0.3);
    margin: 0 0 2em 0;
    .image {
      overflow: hidden;
      width: 100%;
      img {
        -moz-transition: -moz-transform 0.2s ease-out;
        -webkit-transition: -webkit-transform 0.2s ease-out;
        -ms-transition: -ms-transform 0.2s ease-out;
        transition: transform 0.2s ease-out;
        width: 100%;
      }
    }
    .image:hover img {
      -moz-transform: scale(1.05);
      -webkit-transform: scale(1.05);
      -ms-transform: scale(1.05);
      transform: scale(1.05);
    }
    header {
      padding: 1.25em 4.25em 0.1em 1.25em;
      min-height: 4em;
      position: relative;
      -moz-flex-grow: 1;
      -webkit-flex-grow: 1;
      -ms-flex-grow: 1;
      flex-grow: 1;
      h3 {
        font-size: 0.7em;
      }
      .published {
        display: block;
        font-size: 0.6em;
        font-weight: 400;
        letter-spacing: 0.25em;
        margin: -0.625em 0 1.7em 0;
        text-transform: uppercase;
      }
      .author {
        position: absolute;
        right: 2em;
        top: 2em;
      }
    }
  }
}
.posts {
  list-style: none;
  padding: 0;
  li {
    border-top: dotted 1px rgba(160, 160, 160, 0.3);
    margin: 1.5em 0 0 0;
    padding: 1.5em 0 0 0;
  }
  li:first-child {
    border-top: 0;
    margin-top: 0;
    padding-top: 0;
  }
  article {
    display: -moz-flex;
    display: -webkit-flex;
    display: -ms-flex;
    display: flex;
    -moz-align-items: -moz-flex-start;
    -webkit-align-items: -webkit-flex-start;
    -ms-align-items: -ms-flex-start;
    align-items: flex-start;
    -moz-flex-direction: row-reverse;
    -webkit-flex-direction: row-reverse;
    -ms-flex-direction: row-reverse;
    flex-direction: row-reverse;
    .image {
      display: block;
      margin-right: 1.5em;
      min-width: 4em;
      width: 4em;
      img {
        width: 100%;
      }
    }
    header {
      -moz-flex-grow: 1;
      -webkit-flex-grow: 1;
      -ms-flex-grow: 1;
      flex-grow: 1;
      -ms-flex: 1;
      h3 {
        font-size: 0.7em;
        margin-top: 0.125em;
      }
      .published {
        display: block;
        font-size: 0.6em;
        font-weight: 400;
        letter-spacing: 0.25em;
        margin: -0.625em 0 1.7em 0;
        text-transform: uppercase;
      }
    }
    header > :last-child {
      margin-bottom: 0;
    }
  }
}
#footer .icons {
  li {
    display: inline-block;
    padding: 0 1em 0 0;
  }
  color: #aaaaaa;
}
a {
  -moz-transition: color 0.2s ease, border-bottom-color 0.2s ease;
  -webkit-transition: color 0.2s ease, border-bottom-color 0.2s ease;
  -ms-transition: color 0.2s ease, border-bottom-color 0.2s ease;
  transition: color 0.2s ease, border-bottom-color 0.2s ease;
  color: inherit;
  text-decoration: none;
}

a:before {
  -moz-transition: color 0.2s ease;
  -webkit-transition: color 0.2s ease;
  -ms-transition: color 0.2s ease;
  transition: color 0.2s ease;
}

a:hover {
  border-bottom-color: transparent;
  color: #2ebaae !important;
}
li {
  list-style: none;
}
a:hover:before {
  color: #2ebaae !important;
}
h1 a,
h2 a,
h3 a,
h4 a,
h5 a,
h6 a {
  color: inherit;
  border-bottom: 0;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  color: #3c3b3b;
  font-weight: 800;
  line-height: 1.65;
  margin: 0 0 1em 0;
  text-transform: uppercase;
}
ul {
  padding-inline-start: 0;
}
</style>
