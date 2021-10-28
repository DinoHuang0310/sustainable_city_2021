<template>
  <footer class="btnet-footer">
    <div class="footer-box">
      <p>
        <small>內容監製: 今周刊</small>
        <br>
        <small>專題製作: 今周刊編輯部、數位內容部</small>
        <br>
        <small>數位Copyright © {{ year }} 今周刊.All rights reserved. 版權所有，禁止擅自轉貼節錄</small>
      </p>
    </div>
    <transition>
      <div class="fixed-side" v-show="showButton">
        <button v-if="goTop" @click="backTop(500)" class="text-gray font-notoblack focus:outline-none">
          <i class="fa fa-chevron-circle-up" />
        </button>
        <a v-if="downloadFile" href="#" @click.prevent="download">
          <span>下載完整報告書</span>
          <i class="fas fa-edit" />
        </a>
      </div>
    </transition>
  </footer>
</template>

<script>
import axios from 'axios'
export default {
  props: {
    goTop: {
      type: Boolean,
      default: true
    },
    downloadFile: {
      type: String,
      default: ''
    }
  },
  data: function() {
    return {
      year: new Date().getFullYear(),
      showButton: false,
    }
  },
  mounted() {
    if(this.goTop) window.addEventListener('scroll', this.handleScroll, true);
  },
  methods: {
    backTop(duration) {
      const totalScrollDistance = document.documentElement.scrollTop || document.body.scrollTop || window.scrollY;
      if (totalScrollDistance === 0) return;
      let scrollY = document.documentElement.scrollTop || document.body.scrollTop || window.scrollY;
      let oldTimestamp = null;
      function setScrollTop(val) {
        window.document.documentMode ? window.scroll(0, val) : document.scrollingElement.scrollTop = val
      }
      function step(newTimestamp) {
        if(oldTimestamp !== null) {
          scrollY -= totalScrollDistance * (newTimestamp - oldTimestamp) / duration;
          if(scrollY <= 0) return setScrollTop(0);
          setScrollTop(scrollY);
        }
        oldTimestamp = newTimestamp;
        window.requestAnimationFrame(step);
      }
      window.requestAnimationFrame(step);
    },
    handleScroll() {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop || window.scrollY;
      if (scrollTop > (window.innerHeight / 2)) {
        this.showButton = true;
      } else {
        this.showButton = false;
      }
    },
    download() {
      axios({
        url: this.downloadFile,
        method: 'GET',
        responseType: 'blob',
      })
      .then((response) => {
        const fileURL = window.URL.createObjectURL(new Blob([response.data]));
        let fileLink = document.createElement('a');
        fileLink.href = fileURL;
        fileLink.setAttribute('download', '2021年今周刊永續城市評比.pdf');
        document.body.appendChild(fileLink);
        fileLink.click();
      });
    }
  },
  destroyed() {
    if(this.goTop) window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<style>
.btnet-footer {
  color: white;
  background: #4b4b4b;
  text-align: center;
}
.footer-box {
  width: 90%;
  margin: 0 auto;
}
.footer-box > p {
  margin: 0;
  padding: 2em 0;
  letter-spacing: 0;
}
.footer-box > p span {
  display: inline-block;
  border: solid 1px white;
  letter-spacing: 4px;
  text-indent: 4px;
  margin-top: 2em;
  padding: 0.4em 0.8em;
}
.btnet-footer small {
  font-size: 0.9em;
}
.fixed-side {
  position: fixed;
  top: 50%;
  right: 0;
  transform: translate(0, -50%);
  z-index: 98;
}
.btnet-footer button {
  display: block;
  padding: 0;
  margin: 0 auto;
  border: none;
  font-size: 50px;
  color: #94b57c;
  background: white;
  border-radius: 50%;
  border: solid 1px white;
}
.btnet-footer button i {
  display: block;
  opacity: 1;
  transition: .5s;
}
.fixed-side a {
  display: flex;
  align-items: center;
  font-size: 20px;
  padding: 0.8em 0.8em 0.8em 0.4em;
  margin: 0.5em auto;
  border: solid 1px white;
  border-right: none;
  background: #94b57c;
  opacity: 1;
  border-top-left-radius: 0.5em;
  border-bottom-left-radius: 0.5em;
  letter-spacing: 0.2em;
  writing-mode: vertical-lr;
  -webkit-writing-mode: vertical-lr;
  transition: .5s;
}
.v-leave {
  opacity: 1;
}
.v-leave-active {
  transition: .5s
}
.v-leave-to {
  opacity: 0;
}
.v-enter {
  opacity: 0;
}
.v-enter-active {
  transition: .5s
}
.v-enter-to {
  opacity: 1;
}
@media (hover: hover) {
  .btnet-footer button i:hover,
  .fixed-side a:hover {
    opacity: .7;
  }
}
@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
  .btnet-footer button i:hover,
  .fixed-side a:hover {
    opacity: .7;
  }
  .fixed-side a {
    display: block;
    max-height: 10em;
  }
}
@media screen and (max-width: 768px) {
  .btnet-footer button {
    font-size: 40px;
  }
  .fixed-side a {
    font-size: 17px;
  }
}
@media screen and (max-width: 480px) {
  .btnet-footer button {
    font-size: 40px;
    right: 1rem;
    bottom: 0.5rem;
  }
  .fixed-side a {
    font-size: 15px;
  }
}
</style>