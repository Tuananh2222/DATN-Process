<template>
  <div id="wrapper">
    <div id="main">
      <!-- Post -->
      <article class="post">
        <header>
          <div class="title">
            <h2><a href="single.html">Magna sed adipiscing</a></h2>
            <p>Lorem ipsum dolor amet nullam consequat etiam feugiat</p>
          </div>
          <div class="meta">
            <time class="published" datetime="2015-11-01">November 1, 2015</time>
            <a href="#" class="author"><span class="name">Jane Doe</span></a>
          </div>
        </header>
        <a href="single.html" class="image featured"><img src="@/public/image/Blog/pic01.jpg" alt="" /></a>
        <p>
          Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat.
          Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam
          corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies
          congue gravida diam non fringilla.
        </p>
        <footer>
          <div class="btn-wrapper">
            <CButton
              :label="'Continue Reading'"
              :class-name="'button-primary button-square button-block button-effect-ujarak'"
            />
          </div>
          <ul class="stats">
            <li><a href="#">General</a></li>
            <li><font-awesome-icon icon="fa-solid fa-heart" /> 28</li>
            <li><font-awesome-icon icon="fa-solid fa-comment" /> 128</li>
          </ul>
        </footer>
      </article>

      <!-- Post -->
      <article class="post">
        <header>
          <div class="title">
            <h2><a href="single.html">Ultricies sed magna euismod enim vitae gravida</a></h2>
            <p>Lorem ipsum dolor amet nullam consequat etiam feugiat</p>
          </div>
          <div class="meta">
            <time class="published" datetime="2015-10-25">October 25, 2015</time>
            <a href="#" class="author"><span class="name">Jane Doe</span></a>
          </div>
        </header>
        <a href="single.html" class="image featured"><img src="@/public/image/Blog/pic02.jpg" alt="" /></a>
        <p>
          Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat.
          Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam
          corper.
        </p>
        <footer>
          <div class="btn-wrapper">
            <CButton
              :label="'Continue Reading'"
              :class-name="'button-primary button-square button-block button-effect-ujarak'"
            />
          </div>
          <ul class="stats">
            <li><a href="#">General</a></li>
            <li><font-awesome-icon icon="fa-solid fa-heart" /> 28</li>
            <li><font-awesome-icon icon="fa-solid fa-comment" /> 128</li>
          </ul>
        </footer>
      </article>

      <!-- Post -->
      <article class="post">
        <header>
          <div class="title">
            <h2><a href="single.html">Euismod et accumsan</a></h2>
            <p>Lorem ipsum dolor amet nullam consequat etiam feugiat</p>
          </div>
          <div class="meta">
            <time class="published" datetime="2015-10-22">October 22, 2015</time>
            <a href="#" class="author"><span class="name">Jane Doe</span></a>
          </div>
        </header>
        <a href="single.html" class="image featured"><img src="@/public/image/Blog/pic03.jpg" alt="" /></a>
        <p>
          Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat.
          Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam
          corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies
          congue gravida diam non fringilla. Cras vehicula tellus eu ligula viverra, ac fringilla turpis suscipit.
          Quisque vestibulum rhoncus ligula.
        </p>
        <footer>
          <div class="btn-wrapper">
            <CButton
              :label="'Continue Reading'"
              :class-name="'button-primary button-square button-block button-effect-ujarak'"
            />
          </div>
          <ul class="stats">
            <li><a href="#">General</a></li>
            <li><font-awesome-icon icon="fa-solid fa-heart" /> 28</li>
            <li><font-awesome-icon icon="fa-solid fa-comment" /> 128</li>
          </ul>
        </footer>
      </article>

      <!-- Post -->
    </div>
    <section id="sidebar">
      <!-- Intro -->
      <section id="intro">
        <header>
          <h2>BLOG</h2>
        </header>
      </section>

      <!-- Mini Posts -->
      <section>
        <div class="mini-posts">
          <!-- Mini Post -->
          <article class="mini-post">
            <header>
              <h3><a href="single.html">Vitae sed condimentum</a></h3>
              <time class="published" datetime="2015-10-20">October 20, 2015</time>
            </header>
            <a href="single.html" class="image"><img src="@/public/image/Blog/pic04.jpg" alt="" /></a>
          </article>

          <!-- Mini Post -->
          <article class="mini-post">
            <header>
              <h3><a href="single.html">Rutrum neque accumsan</a></h3>
              <time class="published" datetime="2015-10-19">October 19, 2015</time>
            </header>
            <a href="single.html" class="image"><img src="@/public/image/Blog/pic05.jpg" alt="" /></a>
          </article>

          <!-- Mini Post -->
          <article class="mini-post">
            <header>
              <h3><a href="single.html">Odio congue mattis</a></h3>
              <time class="published" datetime="2015-10-18">October 18, 2015</time>
            </header>
            <a href="single.html" class="image"><img src="@/public/image/Blog/pic06.jpg" alt="" /></a>
          </article>

          <!-- Mini Post -->
          <article class="mini-post">
            <header>
              <h3><a href="single.html">Enim nisl veroeros</a></h3>
              <time class="published" datetime="2015-10-17">October 17, 2015</time>
            </header>
            <a href="single.html" class="image"><img src="@/public/image/Blog/pic07.jpg" alt="" /></a>
          </article>
        </div>
      </section>

      <!-- Posts List -->
      <section>
        <ul class="posts">
          <li>
            <article>
              <header>
                <h3>
                  <a href="single.html">Lorem ipsum fermentum ut nisl vitae</a>
                </h3>
                <time class="published" datetime="2015-10-20">October 20, 2015</time>
              </header>
              <a href="single.html" class="image"><img src="@/public/image/Blog/pic08.jpg" alt="" /></a>
            </article>
          </li>
          <li>
            <article>
              <header>
                <h3>
                  <a href="single.html">Convallis maximus nisl mattis nunc id lorem</a>
                </h3>
                <time class="published" datetime="2015-10-15">October 15, 2015</time>
              </header>
              <a href="single.html" class="image"><img src="@/public/image/Blog/pic09.jpg" alt="" /></a>
            </article>
          </li>
          <li>
            <article>
              <header>
                <h3>
                  <a href="single.html">Euismod amet placerat vivamus porttitor</a>
                </h3>
                <time class="published" datetime="2015-10-10">October 10, 2015</time>
              </header>
              <a href="single.html" class="image"><img src="@/public/image/Blog/pic10.jpg" alt="" /></a>
            </article>
          </li>
          <li>
            <article>
              <header>
                <h3>
                  <a href="single.html">Magna enim accumsan tortor cursus ultricies</a>
                </h3>
                <time class="published" datetime="2015-10-08">October 8, 2015</time>
              </header>
              <a href="single.html" class="image"><img src="@/public/image/Blog/pic11.jpg" alt="" /></a>
            </article>
          </li>
          <li>
            <article>
              <header>
                <h3>
                  <a href="single.html">Congue ullam corper lorem ipsum dolor</a>
                </h3>
                <time class="published" datetime="2015-10-06">October 7, 2015</time>
              </header>
              <a href="single.html" class="image"><img src="@/public/image/Blog/pic12.jpg" alt="" /></a>
            </article>
          </li>
        </ul>
      </section>

      <!-- About -->
      <section class="blurb">
        <h2>About</h2>
        <p>
          Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod amet
          placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at phasellus sed ultricies.
        </p>
        <div class="btn-wrapper">
          <CButton
            :label="'Learn More'"
            :class-name="'button-primary button-square button-block button-effect-ujarak'"
          />
        </div>
      </section>

      <!-- Footer -->
      <section id="footer">
        <ul class="icons">
          <li>
            <font-awesome-icon icon="fa-brands fa-twitter" />
          </li>
          <li>
            <font-awesome-icon icon="fa-brands fa-facebook-f" />
          </li>
          <li>
            <font-awesome-icon icon="fa-brands fa-instagram" />
          </li>
        </ul>
      </section>
    </section>
  </div>
</template>

<script setup></script>

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
  padding: 4.5em;
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
      .meta {
        padding: 3.75em 3em 1.75em 3em;
        border-left: solid 1px rgba(160, 160, 160, 0.3);
        min-width: 17em;
        text-align: right;
        width: 17em;
        .published {
          color: #3c3b3b;
          display: block;
          font-family: 'Raleway', Helvetica, sans-serif;
          font-size: 0.7em;
          font-weight: 800;
          letter-spacing: 0.25em;
          margin-top: 0.5em;
          text-transform: uppercase;
          white-space: nowrap;
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

#sidebar > :first-child {
  border-top: 0;
  margin-top: 0;
  padding-top: 0;
}
.mini-posts {
  margin: 0 0 2em 0;
  @media not screen and (min-width: 1280px) {
    display: -moz-flex;
    display: -webkit-flex;
    display: -ms-flex;
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
    display: -moz-flex;
    display: -webkit-flex;
    display: -ms-flex;
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
