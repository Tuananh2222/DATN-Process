<template>
  <div class="container">
    <table>
      <tr>
        <td>
          <section>
            <label for="fileToUpload">
              <i class="fa fa-camera"></i>
              <input
                type="file"
                id="fileToUpload"
                style="visibility: hidden"
                accept=".png,.jpg,jpeg,.PNG,.JPEG"
                name="fileToUpload"
                onchange="document.getElementById('blah').src = window.URL.createObjectURL(this.files[0])"
              />
            </label>
            <img
              src="https://i.ibb.co/yNGW4gg/avatar.png"
              id="blah"
              alt="Avatar"
            />
          </section>
          <h1>J Conner</h1>
          <h3>Web Designer & Developer</h3>
        </td>
        <td>
          <ul>
            <li>
              <b>Full name:</b>
              <input
                type="text"
                name="fname"
                id="fname"
                maxlength="100"
                value="John Conner"
                required
              />
            </li>
            <li>
              <b>Email:</b>
              <input
                type="email"
                name="email"
                id="email"
                maxlength="150"
                value="email@mail.com"
                required
              />
            </li>
            <li>
              <b>Contact number:</b>
              <input
                type="tel"
                name="mobile"
                id="mobile"
                maxlength="10"
                value="0123456789"
                required
              />
            </li>
            <li>
              <b>Address:</b>
              <input
                type="text"
                name="address"
                id="address"
                maxlength="250"
                value="Street, Pincode, Province/State, Country"
                required
              />
            </li>
          </ul>
          <div class="btn-wrapper" @click="submitLogout">
            <CButton
              :label="'Sign out'"
              :class-name="'button-primary button-square button-block button-effect-ujarak'"
            />
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script setup>
import UserAPI from "@/api/UserAPI";
import CButton from "@/components/elements/CButton.vue";
import useUserStore from "@/stores/user";
import { getAuth, onAuthStateChanged } from "@firebase/auth";
import { onMounted, ref } from "vue";

const userStore = useUserStore();
const auth = getAuth();
const { handleLogout } = userStore;
const uid = ref(null);
const detailUser = ref(null);
onMounted(() => {
  handleOnAuthStateChanged();
});
const submitLogout = () => {
  handleLogout();
};
const handleOnAuthStateChanged = () => {
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      uid.value = user.uid;
      detailUser.value = await (await UserAPI.getUserByUUID(uid.value)).data
      console.log(detailUser.value)
    } else {
      uid.value = null;
    }
  });
};
</script>

<style lang="scss" scoped>
a,
li,
em,
button,
input,
textarea,
select {
  text-decoration: none;
  list-style: none;
  font-style: normal;
  outline: none !important;
  transition: 0.5s;
  resize: none;
}

ul {
  position: relative;
  left: -20px;
}

ul li {
  padding: 20px 0;
  color: gray;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

b {
  color: #000;
  margin-right: 10px;
}
.container {
  width: 90%;
  margin: 0 auto;
}

.container table {
  width: 100%;
  height: calc(60vh + 105px);
}

.container table td {
  margin: 30px;
  border-radius: 5px;
  box-shadow: 0px 6px 16px -6px rgba(1, 1, 1, 0.5);
  padding: 30px;
  color: #000;
  vertical-align: top;
}

.container table td:nth-child(1) {
  text-align: Center;
}

.container table td:nth-child(2) .fa {
  float: right;
}

.container table td:nth-child(2) input {
  background: none;
  outline: none;
  border: 0;
  color: gray;
  width: 60%;
  pointer-events: none;
}

.container table td:nth-child(1) section {
  position: relative;
  width: 200px;
  height: 200px;
  margin: 5vh auto;
}

.container table td:nth-child(1) .fa {
  position: absolute;
  right: 25px;
  top: 25px;
  font-size: 2em;
}

.container table td img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
}

.container table td h3 {
  color: gray;
  font-weight: normal;
}

.container table textarea {
  width: 90%;
  resize: none;
  outline: none;
  border: 0;
  background: #1e1e1e;
  color: gray;
  padding: 20px;
}

@media (max-width: 820px) {
  .container {
    width: 100%;
  }
  .container table td {
    display: block;
    width: 90%;
    margin: 0px;
  }
}
</style>
