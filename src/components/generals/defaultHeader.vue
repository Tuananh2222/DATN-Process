<template>
  <div class="header">
    <div class="img-logo">
      <div class="main-logo"></div>
    </div>
    <div class="header-menu">
      <router-link
        v-for="(item, index) in headerList"
        :key="index"
        :to="{ name: item.to }"
        class="menu-item"
        >{{ item.text }}</router-link
      >
    </div>
    <div class="header-icons">
      <div class="icon" @click="handleUser">
        <font-awesome-icon :icon="['fas', 'user']" size="lg" />
      </div>
      <div class="icon" @click="handleFavorite">
        <font-awesome-icon :icon="['fas', 'heart']" size="lg" />
      </div>
      <div class="icon notification">
        <a href="#">
          <div class="notBtn" href="#">
            <div class="number">{{ state.notification.length }}</div>
            <div class="fas" @click="handleNotifications">
              <font-awesome-icon :icon="['fas', 'bell']" size="lg" />
            </div>
            <div class="box" v-if="isShowNoti">
              <div class="display">
                <div class="cont">
                  <!-- Fold this div and try deleting evrything inbetween -->
                  <div
                    v-for="(notification, index) in sortByField(
                      'sortOrder',
                      state.notification
                    )"
                    :key="index"
                    class="sec"
                  >
                    <a href="https://codepen.io/Golez/">
                      <div class="txt">
                        {{ notification.message }}
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import router from "@/router";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { onUnmounted, ref } from "vue";
import { dbRealTime } from "@/firebaseConfig";
import { collection, onSnapshot, query } from "firebase/firestore";
import useUserStore from "@/stores/user";

const userStore = useUserStore();
const { state } = userStore;
const auth = getAuth();

const isShowNoti = ref(false);
const q = query(collection(dbRealTime, "notification"));
const getNoti = onSnapshot(q, (querySnapshot) => {
  querySnapshot.forEach((doc) => {
    {
      const notification = doc.data();
      state.notification.push(notification);
      const seconds = doc._document.createTime.timestamp.seconds;
      notification.sortOrder = seconds;
      console.log(doc.data());
    }
  });
});
onUnmounted(() => {
  getNoti();
});

const sortByField = (field, data) => {
  return data.sort((a, b) => (a[field] < b[field] ? 1 : -1));
};

const handleUser = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      const uid = user.uid;
      console.log(uid);
      router.push({
        path: "/user-info",
        name: "User Information",
        component: () => import("@/pages/UserInfoScreen.vue"),
      });
    } else {
      router.push({
        path: "/login",
        name: "Login",
        component: () => import("@/pages/LoginScreen.vue"),
      });
    }
  });
};

const handleFavorite = () => {
  router.push({
    path: "/favorite",
    name: "Favorite",
    component: () => import("@/pages/FavoriteScreen.vue"),
  });
};

const handleNotifications = () => {
  isShowNoti.value = !isShowNoti.value;
};

const headerList = [
  {
    text: "Trang chủ",
    to: "Home",
  },
  {
    text: "About US",
    to: "About",
  },
  {
    text: "Evaluate",
    to: "Evaluate",
  },
  {
    text: "Blog",
    to: "Blog",
  },
  {
    text: "Hotel",
    to: "Hotel",
  },
];
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  background-color: white;
  display: flex;
  align-items: center;
  height: fit-content;
  width: 100%;
  white-space: nowrap;
  flex-shrink: 0;
  font-weight: 600;
  font-size: 15px;
  border-bottom: 1px solid rgba(44, 45, 42, 0.25);
  position: sticky;
  top: 0;
  left: 0;
  z-index: 6;
  padding: 10px 0;
  margin-bottom: 20px;
  @media not screen and (min-width: 1280px) {
    width: calc(100% + 20px);
    margin-left: -10px;
  }
  .img-logo {
    padding-left: 20px;
    .main-logo {
      // background: url("@/public/image/logo.jpg");
      background-position: center;
      height: 60px;
      width: 60px;
      border-radius: 50%;
    }
  }
  .header-menu {
    display: flex;
    align-items: center;
    margin-left: auto;
    .menu-item {
      cursor: pointer;
      padding: 10px 20px;
      list-style: none;
      text-decoration: none;
      color: #000;
    }
  }
  .header-icons {
    margin-left: auto;
    display: flex;
    align-items: center;
    .icon {
      cursor: pointer;
      padding-right: 20px;
    }
  }
}
.notification {
  position: relative;
  display: inline-block;
}
.number {
  height: 20px;
  width: 20px;
  background-color: #d63031;
  border-radius: 20px;
  color: white;
  text-align: center;
  position: absolute;
  padding: 3px;
  border-style: solid;
  border-width: 2px;
  bottom: 10px;
  font-size: 12px;
  right: 10px;
}

.number:empty {
  display: none;
}

.notBtn {
  transition: 0.5s;
  cursor: pointer;
}

.fas {
  color: black;
}

.box {
  width: 400px;
  height: 40vh;
  border-radius: 10px;
  transition: 0.5s;
  position: absolute;
  overflow-y: scroll;
  padding: 0px;
  left: -380px;
  margin-top: 5px;
  background-color: #f0ede8;
  cursor: context-menu;
}

.fas:hover {
  color: #d63031;
}

// .notBtn:hover > .box {
//   height: 60vh;
// }

.display {
  position: relative;
}

.cont {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #f0ede8;
}

.cont:empty {
  display: none;
}

.sec {
  padding: 25px 10px;
  background-color: #f4f4f4;
  transition: 0.5s;
}

.txt {
  vertical-align: top;
  font-size: 1.25rem;
  padding: 5px 10px 0px 10px;
}

.sub {
  font-size: 1rem;
  color: grey;
}

.sec:hover {
  background-color: #bfbfbf;
}
</style>
