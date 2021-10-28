<template>
  <li
    @mouseover="handleMouseover"
    @mouseout="handleMouseout"
    @click="handleClick"
    :class="node.class ? `relative ${node.class}` : 'relative'"
  >
    <!-- router -->
    <router-link
      v-if="node.isRouter"
      :to="node.url"
      v-html="node.name"
      :class="setListClass"
    />
    <!-- haschild -->
    <a
      v-else-if="node.navList && node.navList.length"
      :class="setListClass"
    >
      <span class="inline-block">
        <span v-html="node.name" class="block text-right lg:text-center" />
        <span v-html="node.nameEN" class="block text-right lg:text-center text-xxs" />
      </span>
      <i class="w-0 h-0 border-solid" :style="setIconStyle" />
    </a>
    <!-- isAnchor -->
    <a
      v-else-if="node.isAnchor"
      :href="node.node"
      v-scroll-to="{el: node.url}"
      @click="toggleNav"
      :class="setListClass"
    >
      <span v-html="node.name" class="block text-right lg:text-center" />
      <span v-html="node.nameEN" class="block text-right lg:text-center text-xxs" />
    </a>
    <!-- url -->
    <a
      v-else
      :href="node.url"
      target="_blank"
      :class="setListClass"
    >
      <span v-html="node.name" />
    </a>
    <!-- child model -->
    <ul
      v-if="node.navList && node.navList.length"
      :class="setChildClass"
    >
      <node
        v-for="child in node.navList"
        :key="child.index"
        :node="child"
        :toggleNav="toggleNav"
      />
    </ul>
  </li>
</template>

<script>
export default {
  name: "node",
  props: {
    node: Object,
    isMobile: {
      type: Boolean,
      defaule: null
    },
    toggleNav: {
      type: Function,
      required: true
    }
  },
  data: function() {
    return {
      show: false
    }
  },
  computed: {
    setChildClass() {
      if(this.isMobile) {
        return this.show ? 'block bg-white' : 'hidden';
      }
      return this.show ?
      'absolute whitespace-nowrap min-w-full text-left duration-300 visible opacity-100 bg-black' :
      'absolute whitespace-nowrap min-w-full text-left duration-300 invisible opacity-0 bg-black';
    },
    setIconStyle() {
      return this.isMobile ? {
        'border-width': '8px 4px 0 4px',
        'border-color': '#3C3C3C transparent transparent transparent',
        'position': 'absolute',
        'top': '0',
        'right': '0',
        'transform': 'translate(-8px, 20px)'
      } : {
        'display': 'none'
      };
    },
    setListClass() {
      return 'block relative duration-500 px-6 py-2 cursor-pointer border-b border-ccc lg:px-2 md:border-b-0 hover:text-yellow';
    }
  },
  methods: {
    handleMouseover() {
      if(this.node.navList && !this.isMobile) this.show = true;
    },
    handleMouseout() {
      if(this.node.navList && !this.isMobile) this.show = false;
    },
    handleClick() {
      if(this.node.navList && this.isMobile) this.show = !this.show;
    }
  }
};
</script>
