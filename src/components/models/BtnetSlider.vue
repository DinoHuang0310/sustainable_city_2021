<template>
  <div class="btnetSlider">
    <slick ref="slick" :options="slickOptions">
      <div
        class="slider-list"
        v-for="list in sliderData"
        :key="list.index"
      >
        <a
          :href="list.url"
          target="_blank"
        >
          <figure>
            <div :class="list.isMedia === '1' ? 'btnet-slider-mediabox' : ''" >
              <img :src="list.image" :alt="list.title" />
            </div>
            <figcaption>
              <span>{{ list.title }}</span>
            </figcaption>
          </figure>
        </a>
      </div>
    </slick>
  </div>
</template>

<script>
import Slick from 'vue-slick';
import 'slick-carousel/slick/slick.css';

export default {
  props: {
    sliderData: {
      type: Array,
      required: true
    }
  },
  watch: {
    sliderData: function() {
      // let currIndex = this.$refs.slick.currentSlide();
      this.$refs.slick.destroy();
      this.$nextTick(() => {
        this.$refs.slick.create();
        // this.$refs.slick.goTo(currIndex, true);
      })
    }
  },
  components: {
    Slick,
  },
  data: function() {
    const self = this;
    return {
      slickOptions: {
        infinite: true,
        autoplay: true,
        autoplaySpeed : 5000,
        centerMode: self.sliderData.length > 2 ? true : false,
        adaptiveHeight: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerPadding: '10%',
        responsive: [
          {
            breakpoint: 1981,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 769,
            settings: {
              slidesToShow: 2,
              centerPadding: '10%',
            }
          },
          {
            breakpoint: 481,
            settings: {
              slidesToShow: 1,
              centerPadding: '0',
            }
          }
        ]
      }
    }
  }
}
</script>

<style>
.btnetSlider {
  position: relative;
  margin: 0 50px;
}
.btnetSlider .slider-list {
  padding: 0 20px;
}
.btnetSlider .slider-list a {
  display: block;
  margin-bottom: 1px;
  outline: none;
}
.btnet-slider-mediabox {
  position: relative;
}
.btnet-slider-mediabox:before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, .6);
  transition: .5s;
}
.btnet-slider-mediabox:after {
  content: '';
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 50px;
  height: 50px;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  background-image: url('../../assets/images/play-solid.svg');
  background-repeat: no-repeat;
  background-size: 20px;
  background-position: center;
  border: solid 2px white;
  border-radius: 50%;
  box-shadow: 0 0 15px rgba(0, 0, 0, .5);
  text-shadow: 0 0 15px rgba(0, 0, 0, .5);
  opacity: .6;
  transition: .5s;
}
.btnetSlider figure {
  position: relative;
  margin-bottom: 0.5rem;
  opacity: 1;
  transition: .5s;
}
.btnetSlider figcaption {
  position: absolute;
  color: white;
  background: rgba(0, 0, 0, .7);
  width: 100%;
  bottom: 0;
  left: 0;
  padding: 0.5em;
  text-align: left;
  opacity: 1;
  transition: .5s;
}
.btnetSlider figcaption span {
  width: 100%;
  display: -webkit-box;
  max-height: 52px;
  font-size: 20px;
  line-height: 1.3;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
}
.swiper-slide > a {
  display: block;
}
.btnetSlider .slick-arrow {
  position: absolute;
  top: 50%;
  font-size: 0;
  padding: 0;
  background: none;
  border: none;
  outline: none;
}
.btnetSlider .slick-arrow::before {
  content: '';
  display: block;
  width: 40px;
  height: 40px;
  background-repeat: no-repeat;
  background-position: center;
}
.slick-next {
  right: 0;
  transform: translate(100%, -50%);
}
.slick-next::before {
  background-image: url('../../assets/images/chevron-right-solid.svg');
}
.slick-prev {
  left: 0;
  transform: translate(-100%, -50%);
}
.slick-prev::before {
  background-image: url('../../assets/images/chevron-left-solid.svg');
}
.swiper-slide img {
  display: block;
  width: 100%;
}
.swiper-pagination {
  transform: translate3d(0, 100%, 0);
  width: 100%;
}
.swiper-pagination-bullet {
  margin: 0.4em;
}

@media (hover: hover) {
  .swiper-slide > a:hover .btnet-slider-mediabox:before {
    background: rgba(0, 0, 0, .75);
  }
  .swiper-slide > a:hover .btnet-slider-mediabox:after {
    opacity: 1;
    box-shadow: 0 0 15px rgba(255, 255, 255, .5);
    text-shadow: 0 0 15px rgba(255, 255, 255, .5);
  }
  .btnetSlider figure:hover {
    opacity: .7;
  }
}

@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
  .swiper-slide > a:hover .btnet-slider-mediabox:before {
    background: rgba(0, 0, 0, .75);
  }
  .swiper-slide > a:hover .btnet-slider-mediabox:after {
    opacity: 1;
    box-shadow: 0 0 15px rgba(255, 255, 255, .5);
    text-shadow: 0 0 15px rgba(255, 255, 255, .5);
  }
  .btnetSlider figure:hover {
    opacity: .7;
  }
}

@media screen and (max-width: 1440px) {
  .btnetSlider figcaption span {
    max-height: 46.8px;
    font-size: 18px;
  }
}

@media screen and (max-width: 1024px) {
  .btnetSlider figcaption span {
    max-height: 41.6px;
    font-size: 16px;
  }
}

@media screen and (max-width: 480px) {
  .btnetSlider {
    margin: 0 30px;
  }
  .btnetSlider .slider-list {
    padding: 0;
  }
}

</style>
