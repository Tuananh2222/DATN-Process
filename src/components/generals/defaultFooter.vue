<template>
  <footer class="site-footer">
    <div class="container">
      <div class="myself-wrapper">
        <img src="@/public/image/logo-lockup.png" alt="" />
      </div>
      <div class="content-footer">
        <h4>Opening Hours</h4>
        <div class="group-xs">
          <div>
            <dl class="list-desc">
              <dt>Weekdays:</dt>
              <dd class="text-gray-darker"><span>8:00–20:00</span></dd>
            </dl>
          </div>
          <div>
            <dl class="list-desc">
              <dt>Weekends:</dt>
              <dd class="text-gray-darker"><span>9:00–18:00</span></dd>
            </dl>
          </div>
        </div>
      </div>

      <div class="category-wrapper">
        <h4>Address</h4>
        <ul class="footer-links">
          <li class="menu-item">
            <dl class="list-desc">
              <dt><font-awesome-icon icon="fa-solid fa-location-dot" /></dt>
              <dd>
                <a class="link link-gray-darker" href="#"
                  >298 Cau Dien Street</a
                >
              </dd>
            </dl>
          </li>
          <li class="menu-item">
            <dl class="list-desc">
              <dt><font-awesome-icon icon="fa-solid fa-phone" /></dt>
              <dd class="text-gray-darker">
                Call Us:
                <a class="link link-gray-darker" href="tel:#">971935724</a>
              </dd>
            </dl>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script setup></script>
<style lang="scss" scoped>
.site-footer {
  display: flex;
  margin: 20px auto 20px auto;
  background-color: #f3f3f3;
  width: 95%;
  padding: 45px 0 20px;
  font-size: 15px;
  line-height: 24px;
  color: #737373;
  .container {
    display: flex;
    width: 100%;
    margin: auto;
    padding-left: 15px;
    padding-right: 15px;
    @media not screen and (min-width: 1280px) {
      flex-direction: column;
    }
    .content-footer {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: calc(100% / 3);
      h4 {
        text-align: left;
      }
      @media not screen and (min-width: 1280px) {
        width: 100%;
      }
      .group-xs {
        display: flex;
        .list-desc {
          display: flex;
          margin-right: 10px;
          @media not screen and (min-width: 1280px) {
            margin-right: 5px;
          }
          .text-gray-darker {
            color: #000;
          }
        }
      }
    }
    .category-wrapper {
      width: calc(100% / 3);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      @media not screen and (min-width: 1280px) {
        width: 100%;
        align-items: flex-start;
      }
    }
    .myself-wrapper {
      width: calc(100% / 3);
      display: flex;
      flex-direction: column;
      @media not screen and (min-width: 1280px) {
        width: 100%;
      }
      .email-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        :deep(.input-textbox) {
          height: 50px;
        }
        :deep(.sub-container) {
          margin-top: 0;
        }
        :deep(.input-border) {
          border-radius: 0px;
        }
        :deep(.button-block) {
          width: 50%;
        }
        :deep(.input-border) {
          height: 50px;
        }
      }
    }
  }
  .container-icon {
    width: 100%;
    .icon-wrapper {
      margin-right: 20px;
      margin-left: auto;
      width: 20%;
    }
  }
}
.list-desc {
  display: flex;
  dd {
    margin-inline-start: 10px;
    @media not screen and (min-width: 1280px) {
      margin-inline-start: 5px;
    }
  }
}
.site-footer hr {
  border-top-color: #bbb;
  opacity: 0.5;
}
.site-footer hr.small {
  margin: 20px 0;
}
.site-footer h4 {
  color: #151515;
  font-size: 24px;
  text-transform: uppercase;
  margin-top: 5px;
  font-weight: 700;
  letter-spacing: 0;
}
.site-footer a {
  color: #737373;
}
.site-footer a:hover {
  color: #3366cc;
}
.footer-links li a {
  padding-left: 0;
  list-style: none;
  text-decoration: none;
}
ul {
  padding-inline-start: 0;
  margin-block-start: 0;
}
.footer-links li {
  display: block;
}
.footer-links a {
  color: #737373;
}
.footer-links a:active,
.footer-links a:focus,
.footer-links a:hover {
  color: white;
}
.footer-links.inline li {
  display: inline-block;
}
.site-footer .social-icons {
  text-align: right;
}
.site-footer .social-icons a {
  width: 40px;
  height: 40px;
  line-height: 40px;
  margin-left: 6px;
  margin-right: 0;
  border-radius: 100%;
  background-color: #33353d;
}
.copyright-text {
  margin: 0;
}
@media (max-width: 991px) {
  .site-footer [class^="col-"] {
    margin-bottom: 30px;
  }
}
@media (max-width: 767px) {
  .site-footer {
    padding-bottom: 0;
  }
  .site-footer .copyright-text,
  .site-footer .social-icons {
    text-align: center;
  }
}
.social-icons {
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}
.social-icons li {
  display: inline-block;
  margin-bottom: 4px;
}
.social-icons li.title {
  margin-right: 15px;
  text-transform: uppercase;
  color: #96a2b2;
  font-weight: 700;
  font-size: 13px;
}
.social-icons a {
  background-color: #eceeef;
  color: #818a91;
  font-size: 16px;
  display: inline-block;
  line-height: 44px;
  width: 44px;
  height: 44px;
  text-align: center;
  margin-right: 8px;
  border-radius: 100%;
  -webkit-transition: all 0.2s linear;
  -o-transition: all 0.2s linear;
  transition: all 0.2s linear;
}
.social-icons a:active,
.social-icons a:focus,
.social-icons a:hover {
  color: #fff;
  background-color: #29aafe;
}
.social-icons.size-sm a {
  line-height: 34px;
  height: 34px;
  width: 34px;
  font-size: 14px;
}
.social-icons a.facebook:hover {
  background-color: #3b5998;
}
.social-icons a.linkedin:hover {
  background-color: #007bb6;
}
@media (max-width: 767px) {
  .social-icons li.title {
    display: block;
    margin-right: 0;
    font-weight: 600;
  }
}
</style>
