<template>
  <header>
    <div class="header-banner">
      <img
        style="
          width: 100%;
          height: 300px;
          background-position: center;
          background-repeat: no-repeat;
        "
        :src="blogDetail.img_blog"
      />
      <h1>{{ blogDetail.title }}</h1>
    </div>
    <div class="clear"></div>
  </header>

  <section class="content">
    <article v-for="item,index in blogDetail" :key="index">
      <h1>{{ blogDetail.title }}</h1>
      <p>
        {{ blogDetail.description }}
      </p>
      <h3>{{ index }}</h3>
      <p>
        To the north of the old quarter is the enormous Ho Tay. This lake is the
        largest in Hanoi with a shore length of around 17km (10.6 miles) and is
        a popular place for recreation with many surrounding gardens, hotels and
        villas.
      </p>
      <p>
        <img
          style="width: 100%"
          src="https://solariahotel.com/UploadFile/Travel-Guide/Hanoi_Capital_Where_should_we_visit/a3.jpg"
        />
      </p>
      <h3>2. Tran Quoc Pagoda</h3>
      <p>
        This is one of the oldest pagodas in Vietnam on the eastern shore of
        West Lake .The current structures are very impressive and date back to
        1842. The pagoda is just off the road that divides West Lake and Truc
        Bach Lake. Tran Quoc Pagoda is the foremost symbol of Buddhism in the
        country. The landmark is beautiful offering good ambience and nice
        photos.
      </p>
      <img
        style="width: 100%"
        src="https://solariahotel.com/UploadFile/Travel-Guide/Hanoi_Capital_Where_should_we_visit/Chua-Tran-Quoc.jpg"
      />
      <h3>3. Hoa Lo Prison</h3>
      <p>
        The Hoa Lo Prison was a prison used by the French colonists in Vietnam
        for political prisoners, and later by North Vietnam for prisoners of war
        during the Vietnam War when it was sarcastically known to American
        prisoners of war as the "Hanoi Hilton". The prison was demolished during
        the 1990s, though the gatehouse remains as a museum.
      </p>
      <img
        style="width: 100%"
        src="https://solariahotel.com/UploadFile/Travel-Guide/Hanoi_Capital_Where_should_we_visit/hoa_lo.jpg"
      />
      <h3>4. National Museum of Fine Arts</h3>
      <p>
        For a singular glimpse into Vietnamese culture, the Country’s National
        Museum of Fine Arts is the best place to visit. The museum showcasing
        Vietnam's fine arts from every historical period. The facility contains
        a vast collection of art, sculpture, crafts and artifacts from every
        period in Vietnam’s history.
      </p>
      <img
        style="width: 100%"
        src="https://solariahotel.com/UploadFile//Travel-Guide/Hanoi_Capital_Where_should_we_visit/bao_tang_my_thuat.jpg"
      />
      <h3>5. The Presidential Palace</h3>
      <p>
        Although Ho Chi Minh President passed away but The Presidential Palace
        in Hanoi is a remarkable landmark. The palace was built between 1900 and
        1906 to house the French Governor-General of Indochina. The Presidential
        Palace complex is open every day from 7:30am to 4pm, with a lunch break
        from 11am to 1:30pm.
      </p>
      <img
        style="width: 100%"
        src="https://solariahotel.com/UploadFile//Travel-Guide/Hanoi_Capital_Where_should_we_visit/bao_tang_my_thuat.jpg"
      />
      <h3>6. One Pillar Pagoda</h3>
      <p>
        The Buddhist One Pillar Pagoda is almost peerless in Vietnam, with a
        history that dates back a full millennium. The iconic landmark was badly
        defaced by French troops in 1954 but was rebuilt decades later.
      </p>
      <img
        style="width: 100%"
        src="https://solariahotel.com/UploadFile/Travel-Guide/Hanoi_Capital_Where_should_we_visit/chua_mot_cot.jpg"
      />
      <h3>7. Ho Chi Minh Mausoleum</h3>
      <p>
        One of the most conspicuous mausoleums in the world, the massive tribute
        to the most famous leader in Vietnam provides Hanoi with a landmark on
        par with Lenin’s tomb in Moscow. Open since 1975, the mausoleum site
        also contains a museum on Ho Chi Minh.
      </p>
      <img
        style="width: 100%"
        src="https://solariahotel.com/UploadFile/Travel-Guide/Hanoi_Capital_Where_should_we_visit/lang_chu_tich.jpg"
      />
      <h3>8. Temple of Literature</h3>
      <p>
        Temple of Literature is located on Van Mieu Street, 2km west of Hoan
        Kiem Lake. Van Mieu - Quoc Tu Giam is a famous historical and cultural
        relic consisting of the Temple of Literature and Vietnam is first
        university. The temple was built in 1070 in honor of Confucius, his
        followers and Chu Van An, a moral figure in Vietnamese education.
      </p>
      <img
        style="width: 100%"
        src="https://solariahotel.com/UploadFile/Travel-Guide/Hanoi_Capital_Where_should_we_visit/van-mieu-quoc-tu-giam-o-dau.jpg"
      />
      <h3>9. Women’s Museum</h3>
      <p>
        All too often historical exhibitions have a distinctly male focus, which
        is why the Vietnam Women’s Union decided to establish this museum,
        exploring women’s contribution to the country’s culture and society.
      </p>
      <img
        style="width: 100%"
        src="https://solariahotel.com/UploadFile/Travel-Guide/Hanoi_Capital_Where_should_we_visit/bao-tang-phu-nu-ha-noi.jpg"
      />
      <p>
        Admire fantastically elaborate bridal wear, learn the toil of women’s
        agricultural labor and discover the female fighters who played a key
        role in Vietnam’s war against the US. Open daily 8am-5pm; entry costs
        30,000 VND (£1).
      </p>
    </article>
  </section>
  <aside>
    <div class="slide-wrapper">
      <div class="slide-item">
        <div class="slide-img">
          <img
            style="height: 380px; width: 100%"
            src="https://solariahotel.com/UploadFile/Travel-Guide/Bat_Trang_Ceramic_Village/1_images.jpg"
          />
        </div>
        <div class="slide-text">
          Bat Trang – Truly a worth-visiting traditional
        </div>
      </div>
      <div class="slide-item">
        <div class="slide-img">
          <img
            style="height: 380px; width: 100%"
            src="https://solariahotel.com/UploadFile/Travel-Guide/Long_Bien_bridge/a1.jpg"
          />
        </div>
        <div class="slide-text">
          Bat Trang – Truly a worth-visiting traditional
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup>

import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import useBlogStore from "@/stores/blog";


const { state, initProcess } = useBlogStore();
const route = useRoute();
const id = route.params.id;
const blogDetail = ref({});

onMounted(() => {
  initProcess()
  getDetailBlog(id);
});

const getDetailBlog = (id) => {
  blogDetail.value = state.listBlog.find(item => item.id == id);
  console.log(blogDetail.value)
};
</script>

<style lang="scss" scoped>
/* main */
header {
  height: 360px;
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
  h1 {
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    font-size: 40px;
    margin-bottom: 15px;
  }
  p {
    margin: 10px 0;
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
