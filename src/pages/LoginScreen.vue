<template>
  <DefaultHeader />
  <CPopupConfirm
    v-if="state.isAuthenticate"
    @close-popup="handleHidePopup(isAuthen)"
    :text-title="'Xác nhận Email'"
    :description="'Bạn chưa xác nhận email! Vui lòng hãy xác nhận email của bạn!'"
  />

  <div class="wrapper">
    <div class="card">
      <section>
        <div class="card-left">
          <div class="title">Log In</div>
          <TextBox
            v-model.trim="state.email"
            :err-msg="state.hasErrors.email"
            :required="true"
            :placeholder="'Email'"
            @focusOut="loginStore.checkField('email')"
          />
          <TextBox
            v-model.trim="state.password"
            :err-msg="state.hasErrors.password"
            :required="true"
            :placeholder="'Password'"
            type="password"
            @focusOut="loginStore.checkField('password')"
          />
          <div class="btn-wrapper">
            <button
              @click="submitSignIn()"
              :class="isValidForm ? '' : 'disable'"
            >
              Log In
            </button>
          </div>
          <div class="page-break"></div>
          <div class="alt-login">Or log in with</div>
          <div class="socials">
            <div class="facebook">
              <svg
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <rect width="34.0555" height="34.2697" fill="url(#pattern0)" />
                <defs>
                  <pattern
                    id="pattern0"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      xlink:href="#image0_1_32"
                      transform="scale(0.00628931 0.00625)"
                    />
                  </pattern>
                  <image
                    id="image0_1_32"
                    width="159"
                    height="160"
                    xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ8AAACgCAYAAAASN76YAAAACXBIWXMAABcRAAAXEQHKJvM/AAAK7UlEQVR4nO2dX4hcVx3Hz/6J7ibMbtIG61hqpwVBMZiV0pe+ZPMmFMmG4kOlkA2Ib+IKLQw+bRBxXsQpPghS6C7ogw/i5EFBnyagBVFxI2of1GbXtL02bprMTswm7e6MHP0Ne5lz7p375/y95/uBYZJ77+zemf3M7/z7nXOmhsMhA8AG0/jUgS0gH7AG5APWgHzAGrP46I+oN/tLjLGTjLFlel6ikw3G2JPCC9K5Rme344+oVeumvioggm3tkmjLJBh/nBUu0scOY2yLHt1QhQxGvnqzz6PXCgnHH4vCRXbhkZJL2IlatS3H7k0LlZaPotsqyWYyspWlxyUkETse3XcuKidfLMKtFainuchIxHbVImJl5Ks3+ysU5S4IJ6sDryu2GWMbUat21/d35bV89Wb/JEW59YpEuayMouF61Kpt+3HLIl7KR9Kt0cO1hoNpNn2V0Dv56s3+OqST4p2E3shXb/ZXAyxei3CFGifO1wmdl4+6S3gl+5xwEiTB64RrUau2kXDeCZyVj+p1PNJ9XTgJssI7rlddLYqdTCyoN/vLNPQE8crBS4sbVE92DuciX73Zb0M6LTgXBZ2Rj+p2G54Ng/mGU3VBJ4pdasl2IZ52ePfU6/Vm3wn5rEc+FLPWuM4TLmx2yViTj1qzGxUfi3WdHgloJWHBSrFL4nUhnnV4MdylpAzjGJePGhbbqN85AxfwZ1TvNopR+Ui8LsZlneR10wIakw/ieYFRAY3IB/G8wpiA2uWDeF5iRECtXS00n2IL4nnLZZ2jIdrki3WnoFXrN+d1zSvWWexCvGrQoaqTcrTIR2OHEK8aLJKAJ1W/G+XyUUX1knAC+MyTNFtOKUrrfBSe/yicCJjPfmKaLT0+s/+Z+vStc5+anZ2ZZgePnphaWJibOjX+qXx4yPbfvju4Nfr/73cOZ/ceDA/e2xsu/OGfh6d6D4bsL+8ObH6YV6JWTVliqjL5KCxvhT7BZ2F+in3xzOz+i88e2/3c4zOnj82weeGiktx7OLz973vDe1zOv90aHP9+9wNBZI0oa4ColK8TcqLAc0/PsG9+4aM3n/nkzBPCSc3Um32Tv45nwjRUpGIpWZ+PsiKCFI9L9+0Lc+99+rHpxxhjxsWzwCKlwpXOhCkd+ai43Q6tI/mJU9Os/aW53eeenjktnDSM4cg34mLZFbRUtHY3QhPv+TOz93/z8ol9F8SzyEbZ7pdS8oVY3H73hbnd116aP66jIeEZizSZvzCF5SPrS/1y33jtpfn3v/zssZCj3TiXaI51IcpEvqosvpgJLt7zZ2Yf8eBWTVM4ABWSj7JV1oQTFYUXtRAvkbNF06+KRr71UBoZvHGBonYi7SKNj9zyUdQLYuyWd6f84MX5KeEEGGexSElYJPI5ueiMDng/Hlq1mVnLG/1yyRdS1OMjF4H34+Uld/TLG/mCiXp8yEw4CCahRz4KqcFEPRqrBflYzNPyzRP5gula4dkpwkGQlcye5JHP+HIKNuD5eDbSoirE2ayjHpnkozHcIEYzeCKocBDkJVOgyhr5goh6HJ6BLBwEebmUpdtlonz0Q4LJXOGp78JBUISJyaZZMpmtrN1mAz7Zx1an8t6D4Z1f/vXg/m9vHD5y4/bgf/fgwIShMqxQrmcikC8Gn2XGmFn53u0Nd7/2k/3Tb7x1yCcBmZwIpJsLvNRMm+uRWuyGVuTy6Y3CQY38/M8H7z/znXtcPNNv1RSpgStVvpCiHofPqxUOaoKL95Uf7Vc9TSvVn0nyFc5S9RE+odvEbff2h70AxGOTSk1Evhjzx6bmhIMa+NYvHn7Ezjs0T1qHc6J8tPRFULPSPr4wpX08ly+J8ePffRhSmlZ++dJeBIrzp3cOQ+vETvQI8hlm6+1DbzvuCpK4T3KafFoWBAydN6PBx0L7CJLqfVL5qH8P28lrYDR6ERjSQCaVL+liAArSkL0sST5pmASgINJgliSf8vV3QdBIGx1J8klNBaAosvy+JPmkZTQAJRACWpJ8aOkC7QjyycIjAAoQGrGCfLLwCIAOZPIBoAOhRIV8wBRCiSqTT7gIAB3I5BPCIwCm5APACJAPWMPYbC1dvPHKiZ2nHp32plP8p189Lhwri6UdiEqDyOc5fE6Ir+8A8nlOfH9e35DJl7i8AXAPvuduleTbEo4AZ+GbPfv615HJBzyCb3/vyd0KQQ3yec7NO2p2ijeAUJ2TyScYCtzl5h1/pwEL8qWtpwbc4sbtwY5Hf5Lu+AFBPsKnNxUsb+0Okv5+XpB089vCEeAcf7818Gm1K6E6lySfcCFwj1+9eeDNLkmy6lySfMKFwD34guGecE12m0nyCZVD4B4erVQvLUmT5JNeDNzhX3tDn3bFlLYhpPJR+YwWr8O8c3fwgUe3Kw1mUvnSXgDcwKdFJqNWTVqNS5NP+gLgBr/+x6EvCbTSxgaDfP6yt+9NSzfRo0T5olaNF7s94QRwAo92LcovH9ERjjjGwwNmZO8Ml7hzf+jNpI2k+h7LMIGIv/CScNQhzn/vP8p6+aNWTTimmhd+eF9F1NJ/o2q4mvZTvI98wGlS/UmVj/r7Uu0FIIXi8hGpPwCABK7KkgkgHzDBRG8myoeiFxSkvHxE6l75AIyxmWU6Rib5olatg0QDkINMwSrPHABEP5CF62kdy3HyyNcWjgAgktmTzPJRGb4pnADgiJ2oVctcQuadercuHAHgiFxVs1zyRa3aNqIfSKCXt2pWZNIxoh+Q0c672kVu+RD9gISdIg3SosstrCPRFMRYL7LGTyH5KPqh6wUw6tcr1AdcZqGZNkY9AGNsreiHUFg+CrOrwgkQEptZRzNklFpii34xMl7CpFcm6jFFy+KuovERJKtlFxItLR+K3yC5SplOpVCysiXdCPr+wqCnKtioXFZ1Da3fIFhRtW63MvnohlaEE6BKXCnTuh1H6YLStMTGZeEEqALXolZN6bi+8tXMqbcb9b9qcV1HqaZlKf2oVVtNWxoLeEVPRbeKDJ37OKzQNwb4zQpVp5SjTT76piyjA9prLqtsYIyjdQcbCOg1l4tmq2RF+/ZJFLIhoF9oF4+Z2vIUAnqFEfGYyf12IaAXGBOPmd7sOSYghuHcw6h4zMZO4yTgErphnIGXRBdNi8dsbXMfawUjEdUuXLxlFelRRbC2WTAXMGrVeEf0q8JJYAJe8jR0dSBnwfpO1VGrxlOxLqIhYpRXo1ZtSceQWR6c2Cadwj7qgfoZ1e9Kzb1QhTN79PO5wPzbyHPGhJNABTzRY8lW/U6GM/KNoJyx8+iOUQaPdt+IWrVlmuzvDM7Jx46mZCIKlmcU7ZxcXcJJ+dhRa5hHwc8jNzA3Peo0di7axXFWvhG8K4B/iNQiRlGcTo9Ki4aNTuO8TNr4zxmootypN/trtErWoi/3bohNWi3K2Ug3jvORbxyqvzToG46+wf9L9xSfuuCTeMynyBeHOkd59FuvN/ur9G9ftn1XQY/WP277JlwcL+WLQ3WbjXqzv0wT1y8IF1WH67Q0Xcf26IQKvJdvBHXPdOvNfoMmL/GIeFa40D96tI9Z2+Y4rA4qI9+I2Kqp7Xqzv0Qirngm4ki4jksjEqqpnHxxKFJsUd2wQWlcK/TsWmuZ92V2SbhKRbgkKi1fHIqIG6ONSigqxh/nhBfpg/dXjr4YXZ3TE11majgchvi+k2jQY5nOj54bOVvTPRKL0fPd2HOQosmAfMAa3nUyg+oA+YA1IB+wBuQDdmCM/RczpZL5k5LkpQAAAABJRU5ErkJggg=="
                  />
                </defs>
              </svg>
              Facebook
            </div>
            <div class="google">
              <svg
                width="34"
                height="36"
                viewBox="0 0 34 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1_36)">
                  <path
                    d="M33.5898 18.3935C33.5898 17.2287 33.4953 16.0576 33.2939 14.9117H17.1317V21.5101H26.387C26.003 23.6382 24.7689 25.5207 22.9619 26.717V30.9983H28.4836C31.7261 28.014 33.5898 23.6067 33.5898 18.3935Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M17.1317 35.1349C21.7531 35.1349 25.6504 33.6175 28.4899 30.9983L22.9682 26.717C21.432 27.7621 19.4487 28.354 17.138 28.354C12.6678 28.354 8.87754 25.3381 7.51758 21.2834H1.8196V25.697C4.72841 31.4831 10.653 35.1349 17.1317 35.1349Z"
                    fill="#34A853"
                  />
                  <path
                    d="M7.51129 21.2834C6.79353 19.1553 6.79353 16.851 7.51129 14.7229V10.3093H1.8196C-0.610695 15.151 -0.610695 20.8553 1.8196 25.697L7.51129 21.2834Z"
                    fill="#FBBC04"
                  />
                  <path
                    d="M17.1317 7.64605C19.5746 7.60827 21.9357 8.52751 23.7049 10.2149L28.597 5.32279C25.4993 2.41398 21.3879 0.814769 17.1317 0.865138C10.653 0.865138 4.72841 4.51688 1.8196 10.3093L7.51129 14.7229C8.86495 10.6619 12.6615 7.64605 17.1317 7.64605Z"
                    fill="#EA4335"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_36">
                    <rect
                      width="33.5898"
                      height="34.2697"
                      fill="white"
                      transform="translate(0 0.865112)"
                    />
                  </clipPath>
                </defs>
              </svg>
              Google
            </div>
          </div>
          <div class="sign-up">
            <div>
              Don’t have an account yet? <a @click="handleSignup()">Sign up</a>
            </div>

            <a class="forgot" @click="handleForgotPassword()"
              >Forgot Password?</a
            >
          </div>
        </div>
      </section>
    </div>
  </div>
  <DefaultFooter />
</template>

<script setup>
import CPopupConfirm from "@/components/elements/CPopupConfirm.vue";
import TextBox from "@/components/elements/textBox.vue";
import DefaultFooter from "@/components/generals/defaultFooter.vue";
import DefaultHeader from "@/components/generals/defaultHeader.vue";
import router from "@/router";
import useLoginStore from "@/stores/login";
import { storeToRefs } from "pinia";

const loginStore = useLoginStore();
const { state, handleSignIn } = loginStore;
const { isValidForm } = storeToRefs(loginStore);

const submitSignIn = async () => {
  await handleSignIn();
};
const handleSignup = () => {
  router.push({
    path: "/sign-up",
    name: "Sign Up",
    component: () => import("@/pages/SignupScreen.vue"),
  });
};
const handleHidePopup = () => {
  state.isAuthenticate = false;
};
const handleForgotPassword = () => {
  router.push({
    path: "/forgot-password",
    name: "Forgot Password",
    component: () => import("@/pages/ForgotScreen.vue"),
  });
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 80vh;
  background: url(@/public/image/login/1.jpg) no-repeat center;
  background-size: cover;
}

.card {
  //Position
  display: flex;
  flex-direction: row;

  //Sizing
  width: 30%;
  height: 100%;
}
.cart-forgot-password {
  display: flex;
  align-items: center;
}

.title,
.description {
  color: var(--text-col);
}

.title {
  //Position
  padding-top: 30px;
  padding-bottom: 15px;
  text-align: center;
  font-size: 36px;
  font-weight: 700;
  color: #ffffff;
}

.page-break {
  //Position
  margin-top: 20px;

  //Sizing
  width: 100%;
  height: 0px;

  //Border
  border: 1px solid #cad6e4;
}

.alt-login {
  //Position
  width: 50%;
  text-align: center;
  margin: 20px auto;

  //Font
  color: #ffffff;
  font-size: 14px;
  font-weight: 400;
}

.socials {
  //Position
  display: flex;
  flex-direction: row;
  gap: 16px;

  //Font
  color: black;
  font-weight: 400;
  font-size: 16px;

  svg {
    margin-right: 10.94px;
  }
}

.facebook,
.google {
  //Position
  display: flex;
  justify-content: center;
  align-items: center;

  //Sizing
  width: 207px;
  height: 55px;

  //Font
  color: black;
  font-size: 16px;
  font-weight: 400;

  //Background
  background: #ffffff;
  border: 1px solid #cad6e4;
  border-radius: 5px;
}

.sign-up {
  //Position
  padding-top: 20px;
  width: 55%;
  margin: 0 auto;
  text-align: center;
  //Font
  color: #ffffff;
  font-size: 14px;
  font-weight: 400;

  a {
    color: #02c0ff;
    cursor: pointer;
  }
  a:hover {
    color: #046586;
  }
  div {
    margin-bottom: 5px;
  }
}

.next:hover,
.facebook:hover,
.google:hover {
  cursor: pointer;
  opacity: 0.8;
}
.btn-wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
}
button {
  border-radius: 20px;
  border: 1px solid #ff4b2b;
  background-color: #ff4b2b;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  cursor: pointer;
  width: 50%;
}

button:active {
  transform: scale(0.95);
}

button:focus {
  outline: none;
}

button.ghost {
  background-color: transparent;
  border-color: #ffffff;
}

button.disable {
  background: #bbb;
  color: #ccc;
  pointer-events: none;
  border: 1px solid #ccc;
}
</style>
