<template>
  <div class="relative overflow-hidden">
    <div class="fixed top-0 left-0 w-full h-full -z-1 bg-black">
      <div
        class="absolute top-0 left-0 w-full h-full has-hover:bg-fixed bg-center bg-cover"
        :style="{'background-image': `url('${setBackground}')`, 'opacity': setOpacity}"
      />
    </div>
    <div class="flex justify-center items-center" :style="{'height': windowHeight + 'px'}">
      <div class="mobile:w-11/12">
        <p class="text-white font-bold text-lg transform translate-y-full mobile:tracking-normal" style="text-shadow: 1px 1px 3px black;">打造最好的家園，創造城市的永續未來</p>
        <picture>
          <source srcset="../assets/images/title_m.png" media="(max-width: 639px)">
          <img class="w-full md:w-4/5 2xl:w-full mx-auto" src="../assets/images/title.png" alt="2021永續城市 SDGs最強城市大調查" />
        </picture>
      </div>
    </div>
    <article class="w-11/12 max-w-1280 mx-auto text-white pb-16" style="text-shadow: 1px 1px 3px rgba(0, 0, 0, .7)">
      <p class="mb-8 text-left">象徵「永續發展」指標的SDGs(Sustainable Development Goals)，是城市新顯學，看似在全球高歌猛進，然而新冠肺炎是最無情的入侵者，對城市SDGs永續目標造成前所未有的挑戰，不僅考驗城市首長的治理能力，也挑戰城市的韌性復原力，這場疫情，或許就是社會韌性的試金石。</p>
      <p class="mb-8 text-left">永續政策要怎麼延續，如何將社會形塑為永續的「共同體」？只有打造串連整個社會的支持體系，才可能讓城市貨真價實地面向「永續」。SDGs不只是目標，而是地方政府如何落實永續未來，無論政策面、社會面、第三部門、公民意識都有必要環環相扣，所有要素共同織就整張網絡，才能創造城市的永續價值。</p>
      <p class="mb-8 text-left">在2021年世界疫後奮起變革之際，《今周刊》以「ESG 永續台灣」做為起點與號召，與第三方調查機構「畢肯市場研究」合作，以聯合國發布的十七項SDGs永續目標做為基礎，針對各縣市統計指標、民意調查兩部分進行評分，綜合評比出6都與15縣市的永續發展成績，頒發「永續城市特優獎」、「永續城市優等獎」、「社會力特別傑出獎」、「經濟力特別傑出獎」、「環境力特別傑出獎」、針對首長施政信心度的「最佳首長信任獎」，以及民眾對於各縣市防疫作為滿意度的「最佳防疫表現獎」。</p>
      <div class="mb-8" style="text-shadow: none;">
        <a
          class="inline-block px-4 py-2 bg-white text-gray font-bold rounded hover:opacity-80"
          href="https://www.businesstoday.com.tw/article/category/183027/post/202110270036/"
          target="_blank">永續城市戰鬥記<i class="fa fa-chevron-circle-right ml-1" /></a>
      </div>
    </article>
  </div>
</template>

<script>
import backgroundImage from '../assets/images/kvbackground.png'
import backgroundImage_m from '../assets/images/kvbackground_m.png'

export default {
  name: 'Kvarea',
  data() {
    return {
      scrollTop: 0,
      windowWidth: null,
      windowHeight: null
    }
  },
  computed: {
    setBackground() {
      if(this.windowWidth) return this.windowWidth > 480 ? backgroundImage : backgroundImage_m;
      return null;
    },
    setOpacity() {
      const percentage = 1 / this.windowHeight;
      const val = 1 - this.scrollTop * percentage;
      return val > 0 ? val : 0;
    }
  },
  methods: {
    checkScreen() {
      const clientWidth = document.documentElement.clientWidth;
      if(clientWidth !== this.windowWidth) {
        this.windowWidth = clientWidth;
        this.windowHeight = document.documentElement.clientHeight;
      }
    },
    handleScroll() {
      this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    }
  },
  mounted() {
    window.addEventListener('resize', this.checkScreen);
    window.addEventListener('scroll', this.handleScroll, false);
    this.checkScreen();
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkScreen);
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>
