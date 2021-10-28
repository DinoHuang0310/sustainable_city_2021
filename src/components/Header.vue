<template>
  <header class="fixed flex justify-end xl:justify-end xl:py-2 w-full top-0 left-0 bg-white z-100">
    <div class="absolute flex items-center left-2 top-1/2 transform -translate-y-1/2">
      <a
        href="https://www.businesstoday.com.tw/"
        target="_blank"
        class="block w-16 mr-4"
      >
        <img src="../assets/images/businesstoday.svg" alt="今周刊">
      </a>
      <a
        href="https://esg.businesstoday.com.tw/"
        target="_blank"
        class="block w-20"
      >
        <img src="../assets/images/esg.svg" alt="ESG">
      </a>
    </div>
    <BtnetNavbar class="font-notoblack" :navList="navlist" />
  </header>
</template>

<script>
import BtnetNavbar from './nav/BtnetNavbar'

export default {
  name: 'Header',
  components: {
    BtnetNavbar
  },
  data() {
    return {
      navlist: [
        {
          "name": "關於永續城市",
          "url": "#home",
          "isAnchor": true
        },
        {
          "name": "調查指標",
          "url": "#poll",
          "isAnchor": true
        },
        {
          "name": "獎項名單",
          "url": "#ranking",
          "isAnchor": true
        },
        {
          "name": "縣市長這樣說",
          "url": "#mayors",
          "isAnchor": true
        },
        {
          "name": "<img src='images/ico-facebook.svg' alt='facebook-share' />",
          "class": "facebook-share",
          "url": "http://www.facebook.com/share.php?u=https://www.businesstoday.com.tw/bt_topic/2021/sustainable_city",
          "isAnchor": false
        },
        {
          "name": "<img src='images/ico-line.svg' alt='line-share' />",
          "class": "line-share",
          "url": "https://social-plugins.line.me/lineit/share?url=https://www.businesstoday.com.tw/bt_topic/2021/sustainable_city",
          "isAnchor": false
        }
      ]
    }
  }
}
</script>

<style>
.facebook-share,
.line-share {
  display: inline-block;
  margin-top: 0.5rem;
  margin-right: 0.5rem;
  border-radius: 5px;
}
.facebook-share {
  background: #4267b2;
}
.line-share {
  background: #00c200;
}
.facebook-share a,
.line-share a {
  padding: 0;
}
.facebook-share img,
.line-share img {
  width: 45px;
}
@media (min-width: 1024px) {
  .facebook-share,
  .line-share {
    display: block;
    margin: 0 0.5rem;
  }
}
</style>
