<template>
  <div id="app" class="text-gray text-center">
    <Header />
    <Kvarea id="home" />
    <Poll v-if="getPollData" :chartData="getPollData" id="poll" />
    <Statistics v-if="getStatisticsData" :chartData="getStatisticsData" />
    <Ranking id="ranking" />
    <Mayors id="mayors" />
    <BtnetFooter downloadFile="images/2021sustainable_city.pdf" />
  </div>
</template>

<script>
import Header from './components/Header'
import Kvarea from './components/Kvarea'
import Poll from './components/Poll'
import Statistics from './components/Statistics'
import Ranking from './components/Ranking'
import Mayors from './components/Mayors'
import BtnetFooter from './components/BtnetFooter'

export default {
  name: 'App',
  components: {
    Header,
    Kvarea,
    Poll,
    Statistics,
    Ranking,
    Mayors,
    BtnetFooter
  },
  computed: {
    getPollData() {
      const poll = this.$store.state.indexData.poll;
      return poll ? poll : false;
    },
    getStatisticsData() {
      const statistics = this.$store.state.indexData.statistics;
      return statistics ? statistics : false;
    }
  },
  mounted() {
    // 調用store中的actions 取得本頁資料
    this.$store.dispatch('GETINDEXDATA');
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/earlyaccess/notosanstc.css');
@import url('https://fonts.googleapis.com/earlyaccess/cwtexfangsong.css');
@import url('https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900');

html {
  font-family: 'Noto Sans TC', sans-serif, 'Microsoft JhengHei', arial;
  font-size: 1vw;
  letter-spacing: 0.1rem;
}
@media screen and (min-width: 2400px) {
  html {
    font-size: 0.9vw;
  }
}
@media screen and (max-width: 1920px) {
  html {
    font-size: 1.1vw;
  }
}
@media screen and (max-width: 1440px) {
  html {
    font-size: 1.3vw;
  }
}
@media screen and (max-width: 1024px) {
  html {
    font-size: 1.6vw;
  }
}
@media screen and (max-width: 768px) {
  html {
    font-size: 2vw;
  }
}
@media screen and (max-width: 640px) {
  html {
    font-size: 3vw;
  }
}
@media screen and (max-width: 480px) {
  html {
    font-size: 4.2vw;
  }
}
@media screen and (max-width: 320px) {
  html {
    font-size: 4.5vw;
  }
}
</style>
