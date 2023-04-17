<template>
  <DefaultHeader />
  <div class="container">
    <table>
      <tr>
        <td>
          <section>
            <img
              src="https://i.ibb.co/yNGW4gg/avatar.png"
              id="blah"
              alt="Avatar"
            />
          </section>
          <h1>{{ state.detailInfoUser.userName }}</h1>
          <ul>
            <li>
              <b>Full name:</b>
              <input
                type="text"
                name="fname"
                id="fname"
                maxlength="100"
                v-model="state.detailInfoUser.userName"
                :class="isEdit && 'showEdit'"
              />
            </li>
            <li>
              <b>Email:</b>
              <input
                type="email"
                name="email"
                id="email"
                maxlength="150"
                v-model="state.detailInfoUser.email"
                :class="isEdit && 'showEdit'"
              />
            </li>
            <li>
              <b>Contact number:</b>
              <input
                type="tel"
                name="mobile"
                id="mobile"
                maxlength="10"
                v-model="state.detailInfoUser.phoneNumber"
                :class="isEdit && 'showEdit'"
              />
            </li>
            <li>
              <b>Address:</b>
              <input
                type="text"
                name="address"
                id="address"
                maxlength="250"
                v-model="state.detailInfoUser.address"
                :class="isEdit && 'showEdit'"
              />
            </li>
          </ul>
          <div class="btn-wrapper">
            <CButton
              :label="'Edit'"
              :class-name="'button-primary button-square button-block button-effect-ujarak'"
              @handle-button="handleChangeForm"
            />
            <CButton
              v-if="isEdit"
              :label="'Save'"
              :class-name="'button-primary button-square button-block button-effect-ujarak'"
              @handle-button="handleSaveForm"
            />
            <CButton
              :label="'Sign out'"
              :class-name="'button-primary button-square button-block button-effect-ujarak'"
              @handle-button="submitLogout"
            />
          </div>
        </td>
      </tr>
    </table>
  </div>
  <DefaultFooter />
</template>

<script setup>
import CButton from "@/components/elements/CButton.vue";
import DefaultFooter from "@/components/generals/defaultFooter.vue";
import DefaultHeader from "@/components/generals/defaultHeader.vue";
import useUserStore from "@/stores/user";
import { onBeforeMount, ref } from "vue";

const userStore = useUserStore();

const { state, handleLogout, getUser, handleEditUser } = userStore;
const isEdit = ref(false);
onBeforeMount(async () => {
  await getUser();
});
const submitLogout = () => {
  handleLogout();
};

const handleChangeForm = () => {
  isEdit.value = !isEdit.value;
};

const handleSaveForm = () => {
  handleEditUser(state.detailInfoUser, state.detailInfoUser.userID);
  isEdit.value = false;
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
  // outline: none;
  transition: 0.5s;
  resize: none;
}

ul li {
  color: gray;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

b {
  color: #000;
  margin-right: 10px;
  font-size: 16px;
  width: 120px;
  height: fit-content;
}
li input {
  height: 40px;
  font-size: 16px;
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

.container table td {
  text-align: Center;
}

.container table td .fa {
  float: right;
}

.container table td input {
  background: none;
  outline: none;
  border: 0;
  color: gray;
  pointer-events: none;
}

.container table td {
  .showEdit {
    background: none;
    outline: #ccc !important;
    border: 1px solid #ccc !important;
    pointer-events: unset;
  }
}

.container table td section {
  position: relative;
  width: 200px;
  height: 200px;
  margin: 3vh auto;
}

.container table td .fa {
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
.btn-wrapper {
  width: 30%;
  margin: 0 auto;
  .button-primary {
    margin-top: 10px;
    border-radius: 8px;
  }
}
</style>
