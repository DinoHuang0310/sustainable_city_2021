<template>
  <ContentWrapper :setBackground="{type: 'bgcolor', value: '#f8f5f4'}">
    <div class="w-11/12 md:w-4/5 2xl:w-7/10 mx-auto max-w-1280">
      <h2 class="mb-6 text-2xl md:text-4xl">永續城市評比民調結果</h2>
      <p class="mb-6">《今周刊》與第三方調查機構「畢肯市場研究」合作，針對各縣市統計指標、民意調查兩部分進行評分。統計指標依據聯合國17項永續發展目標為基礎，選出58項指標，加上對應面向的民意調查結果，綜合評比出6都與15縣市的「永續發展城市獎」，並選出環境力、社會力、經濟力特別傑出獎。</p>
      <SwitchBtn v-on:handleSwitchVal="handleSwitchVal" />
      <ul class="flex justify-center flex-wrap my-6">
        <li v-for="(tabs, index) in getChartTabs()" :key="index" class="text-white tracking-wide m-1">
          <label :class="active === index ? 'bg-green cursor-pointer px-2 py-1' : 'bg-lightgray cursor-pointer px-2 py-1'">
            <span>{{ tabs }}</span>
            <input type="radio" :value="index" v-model="active" class="hidden" />
          </label>
        </li>
      </ul>
      <div class="bg-white p-2 sm:p-4 sm:pt-8">
        <div :class="this.target === 'municipality' ? 'relative pb-full sm:pb-4/10' : 'relative pb-18/10 md:pb-8/10'">
          <ECharts class="absolute w-full h-full" :options="chartOption" autoresize />
        </div>
        <p class="my-4">{{ chartData[active].description }}</p>
      </div>
    </div>
  </ContentWrapper>
</template>

<script>
import ContentWrapper from './models/ContentWrapper'
import SwitchBtn from './models/SwitchBtn'
import ECharts from 'vue-echarts'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'
import 'echarts/lib/chart/bar'

export default {
  components: {
    ContentWrapper,
    SwitchBtn,
    ECharts
  },
  props: {
    chartData: {
      type: Array,
      require: true
    }
  },
  data() {
    return {
      active: 0,
      target: ''
    }
  },
  computed: {
    chartOption: function() {
      return {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          },
          textStyle: {align: 'left'},
          formatter: function(data) {
            let html = `<h4 style="font-weight:bold;font-size:1.1em">${data[0].axisValue}</h4>`;
            for(let i = 0; i < data.length; i++) {
              const list = data[i];
              const color = `<span style="display:inline-block;margin-right:4px;width:10px;height:10px;border-radius:50%;background:${list.color}"></span>`;
              html += `${color}${list.seriesName}: ${list.value}%<br>`;
            }
            return html;
          }
        },
        legend: {},
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          axisLabel: {
            formatter: `{value}%`
          },
          max: 100
        },
        yAxis: {
          type: 'category',
          data: this.target === 'municipality' ?
            ['新北市', '台北市', '桃園市', '台中市', '台南市', '高雄市'] :
            ['基隆市', '宜蘭縣', '新竹縣', '新竹市', '苗栗縣', '彰化縣', '南投縣', '雲林縣', '嘉義縣', '嘉義市', '屏東縣', '澎湖縣', '花蓮縣', '臺東縣', '金門縣'],
          inverse: true
        },
        series: this.createSeries(),
        color: ['#eab053', '#94c4e0', '#94b57c', '#d1be95', '#a0a0a0']
      };
    }
  },
  methods: {
    handleSwitchVal(childValue) {
      this.target = childValue ? 'municipality' : 'county';
    },
    getChartTabs() {
      let arr = [];
      for(let i = 0; i < this.chartData.length; i++) {
        arr.push(this.chartData[i].name);
      }
      return arr;
    },
    createSeries() {
      let arr = [];
      const targetData = this.chartData[this.active];
      if(this.target) {
        for(let i = 0; i < targetData[this.target].length; i++) {
          arr.push(
            {
              name: targetData.keyword[i],
              type: 'bar',
              stack: 'total',
              data: targetData[this.target][i]
            }
          );
        }
      }
      return arr;
    }
  }
}
</script>