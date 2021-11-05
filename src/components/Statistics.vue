<template>
  <ContentWrapper :setBackground="{type: 'bgcolor', value: '#f8f5f4'}">
    <div class="w-11/12 md:w-4/5 2xl:w-7/10 mx-auto max-w-1280">
      <h2 class="mb-6 text-2xl md:text-4xl">永續城市評比數據指標</h2>
      <p class="mb-6">本調查結合數據指標、民意調查結果，評比總分計算方式為70% × 數據指標 + 30% × 民意調查；數據指標以官方公開數據為依據。</p>
      <SwitchBtn v-on:handleSwitchVal="handleSwitchVal" :option="switchOption" />
      <ul class="flex justify-center flex-wrap my-6">
        <li v-for="(tabs, index) in getChartTabs()" :key="index" class="text-white tracking-wide m-1">
          <label :class="active === index ? 'bg-green cursor-pointer px-2 py-1' : 'bg-lightgray cursor-pointer px-2 py-1'">
            <span>{{ tabs }}</span>
            <input type="radio" :value="index" v-model="active" class="hidden" />
          </label>
        </li>
      </ul>
      <div class="bg-white p-2 sm:p-4 sm:pt-8">
        <div :class="this.target === 'municipality' ? 'relative pb-8/10 md:pb-3/10' : 'relative pb-15/10 md:pb-6/10'">
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
      target: '',
      switchOption: {
        left: {
          name: '六都',
          value: 'municipality'
        },
        right: {
          name: '非六都',
          value: 'county'
        }
      }
    }
  },
  computed: {
    chartOption: function() {
      const unit = this.chartData[this.active].unit;
      return {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          },
          formatter: function(params) {
            return `${params[0].name}: ${params[0].data}${unit}`;
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          top: '3%',
          containLabel: true
        },
        xAxis: {
          splitLine: { show: false },
          axisLabel: { show: false },
          axisTick: { show: false },
          axisLine: { show: false }
        },
        yAxis: {
          type: 'category',
          data: this.target === 'municipality' ?
            ['新北市', '台北市', '桃園市', '台中市', '台南市', '高雄市'] :
            ['宜蘭縣', '新竹縣', '苗栗縣', '彰化縣', '南投縣', '雲林縣', '嘉義縣', '屏東縣', '臺東縣', '花蓮縣', '澎湖縣', '基隆市', '新竹市', '嘉義市', '金門縣'],
          inverse: true
        },
        series: [
          {
            type: 'bar',
            data: this.getListData(this.active),
            itemStyle: {
              normal: {
                color: '#94b57c' // 設定柱狀顏色
              }
            }
          }
        ]
      }
    }
  },
  methods: {
    handleSwitchVal(childValue) {
      this.target = childValue;
    },
    getListData() {
      return this.chartData[this.active][this.target];
    },
    getChartTabs() {
      let arr = [];
      for(let i = 0; i < this.chartData.length; i++) {
        arr.push(this.chartData[i].name);
      }
      return arr;
    }
  }
}
</script>