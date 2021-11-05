<template>
  <ContentWrapper :setBackground="{type: 'bgcolor', value: '#f8f5f4'}">
    <div class="w-11/12 md:w-4/5 2xl:w-7/10 mx-auto max-w-1280">
      <h2 class="mb-6 text-2xl md:text-4xl">永續城市獎項名單</h2>
      <SwitchBtn v-on:handleSwitchVal="handleSwitchVal" :option="switchOption" />
      <div class="bg-white p-4 md:p-8">
        <table class="mobile:block mobile:w-full w-11/12 mx-auto">
          <tbody class="mobile:block">
            <tr
              v-for="(item, index) in winners"
              :key="index"
              :class="index === winners.length - 1 ? 'mobile:block' : 'border-b border-lightgray mobile:block'"
            >
              <td class="w-px whitespace-nowrap pr-4 mobile:block mobile:w-full mobile:p-0 mobile:text-center mobile:pt-4">
                <div class="flex items-center mobile:justify-center font-bold text-lg">
                  <img src="../assets/images/ring.svg" class="w-6 mobile:hidden">
                  <div>{{ item.name }}</div>
                </div>
              </td>
              <td class="p-6 mobile:px-5 mobile:py-3 mobile:block">
                <ul class="flex flex-wrap items-center mobile:justify-center">
                  <li class="hidden md:block w-5 h-5 mr-8 border border-gray border-l-0 border-t-0 transform -rotate-45" />
                  <li
                    v-for="list in item[target]"
                    :key="list.index"
                    class="flex items-center mr-3 mobile:mb-2"
                  >
                    <img :src="list.img" class="w-6 mr-1">
                    <div>{{ list.title }}</div>
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="mt-8">
        <a
          class="inline-block rounded bg-green text-white font-bold px-4 py-2 hover:opacity-80"
          href="https://www.businesstoday.com.tw/article/category/183027/post/202110270034"
          target="_blank"
        >詳見全文</a>
      </div>
    </div>
  </ContentWrapper>
</template>

<script>
import ContentWrapper from './models/ContentWrapper'
import SwitchBtn from './models/SwitchBtn'

export default {
  components: {
    ContentWrapper,
    SwitchBtn
  },
  data() {
    return {
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
      },
      winners: [
        {
          name: '「永續城市特優獎」',
          municipality: [
            {
              title: '新北市',
              img: 'images/city_newtaipei.svg'
            },
            {
              title: '台北市',
              img: 'images/city_taipei.svg'
            }
          ],
          county: [
            {
              title: '新竹縣',
              img: 'images/city_hsinchuCounty.svg'
            },
            {
              title: '新竹市',
              img: 'images/city_hsinchuCity.svg'
            },
            {
              title: '嘉義市',
              img: 'images/city_chiayiCity.svg'
            },
            {
              title: '金門縣',
              img: 'images/city_kinmen.svg'
            }
          ]
        },
        {
          name: '「永續城市優等獎」',
          municipality: [
            {
              title: '桃園市',
              img: 'images/city_taoyuan.svg'
            },
            {
              title: '台中市',
              img: 'images/city_taichung.svg'
            }
          ],
          county: [
            {
              title: '宜蘭縣',
              img: 'images/city_yilan.svg'
            },
            {
              title: '屏東縣',
              img: 'images/city_pingtung.svg'
            },
            {
              title: '基隆市',
              img: 'images/city_keelung.svg'
            }
          ]
        },
        {
          name: '「社會力特別傑出獎」',
          municipality: [
            {
              title: '桃園市',
              img: 'images/city_taoyuan.svg'
            }
          ],
          county: [
            {
              title: '新竹市',
              img: 'images/city_hsinchuCity.svg'
            }
          ]
        },
        {
          name: '「經濟力特別傑出獎」',
          municipality: [
            {
              title: '新北市',
              img: 'images/city_newtaipei.svg'
            }
          ],
          county: [
            {
              title: '新竹縣',
              img: 'images/city_hsinchuCounty.svg'
            }
          ]
        },
        {
          name: '「環境力特別傑出獎」',
          municipality: [
            {
              title: '台北市',
              img: 'images/city_taipei.svg'
            }
          ],
          county: [
            {
              title: '金門縣',
              img: 'images/city_kinmen.svg'
            }
          ]
        },
        {
          name: '「最佳首長信任獎」',
          municipality: [
            {
              title: '新北市',
              img: 'images/city_newtaipei.svg'
            }
          ],
          county: [
            {
              title: '屏東縣',
              img: 'images/city_pingtung.svg'
            },
            {
              title: '嘉義縣',
              img: 'images/city_chiayiCounty.svg'
            }
          ]
        },
        {
          name: '「最佳防疫表現獎」',
          municipality: [
            {
              title: '高雄市',
              img: 'images/city_kaohsiung.svg'
            }
          ],
          county: [
            {
              title: '金門縣',
              img: 'images/city_kinmen.svg'
            },
            {
              title: '屏東縣',
              img: 'images/city_pingtung.svg'
            }
          ]
        }
      ]
    }
  },
  methods: {
    handleSwitchVal(childValue) {
      this.target = childValue;
    }
  }
}
</script>
