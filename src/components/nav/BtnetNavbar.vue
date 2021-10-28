<template>
  <div>
    <nav
      :class="setNavClass"
      @click="toggleNav"
    >
      <ul
        @click.stop
        :class="setWrapperClass"
      >
        <BtnetNavList
          v-for="(list, index) in navList"
          :key="index"
          :node="navList[index]"
          :isMobile="isMobile"
          :toggleNav="toggleNav"
        />
      </ul>
    </nav>
    <div v-if="isMobile" class="mx-2 my-1">
      <v-icon name="bars" scale="2" @click="toggleNav" />
    </div>
  </div>
</template>

<script>
import BtnetNavList from "./BtnetNavList";
import Icon from 'vue-awesome/components/Icon'
import 'vue-awesome/icons/bars'

export default {
  props: {
    navList: {
      type: Array,
      required: true
    },
  },
  components: {
    BtnetNavList,
    'v-icon': Icon
  },
  data: function() {
    return {
      showNav: false,
      isMobile: null,
      windowWidth: null
    }
  },
  computed: {
    setNavClass() {
      if(this.isMobile) {
        return this.showNav ?
          'fixed w-full h-full top-0 right-0 text-right m-0 overflow-hidden transform translate-x-0 bg-opacity-75 bg-black z-100' :
          'fixed w-full h-full top-0 right-0 text-right m-0 overflow-hidden transform translate-x-full bg-opacity-75 bg-black z-100';
      }
      return '';
    },
    setWrapperClass() {
      if(this.isMobile) {
        return this.showNav ?
          'inline-block h-full pt-5 bg-white text-gray w-auto min-w-45 max-w-4/5 transform translate-x-0 duration-500 overflow-y-auto' :
          'inline-block h-full pt-5 bg-white text-gray w-auto min-w-45 max-w-4/5 transform translate-x-full duration-500 overflow-y-auto';
      }
      return 'flex justify-center items-center flex-wrap';
    }
  },
  methods: {
    checkScreen() {
      const clientWidth = document.documentElement.clientWidth;
      if (clientWidth !== this.windowWidth) {
        this.isMobile = clientWidth > 1006 ? false : true;
        this.showNav = this.isMobile ? false : true;
        this.windowWidth = clientWidth;
      }
    },
    toggleNav() {
      if (this.isMobile) {
        this.showNav = !this.showNav;
      }
    }
  },
  mounted() {
    this.checkScreen();
    window.addEventListener('resize', this.checkScreen);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkScreen);
  }
}
</script>
