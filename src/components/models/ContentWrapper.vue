<template>
  <section :class="setClass" :style="setStyle">
    <slot />
  </section>
</template>

<script>
export default {
  name: 'ContentWrapper',
  props: {
    setBackground: {
      type: Object,
      default() {
        return {
          type: 'bgcolor', // bgcolor、infinity、fixed
          value: '#ffffff'
        }
      }
    }
  },
  computed: {
    setStyle() {
      const settings = this.setBackground;
      const styles = {
        bgcolor: {
          'background': settings.value
        },
        fixed: {
          'background-image': `url('${settings.value}')`,
          'background-size': 'cover',
          'background-position': 'center'
        },
        infinity: {
          'background-image': `url('${settings.value}')`,
          'background-repeat': 'repeat'
        },
        infinityX: {
          'background-image': `url('${settings.value}')`,
          'background-repeat': 'repeat-x'
        }
      }
      return styles[settings.type] || {};
    },
    setClass() {
      return this.setBackground.type === 'fixed' ? 'py-16 lg:py-24 has-hover:bg-fixed' : 'py-16 lg:py-24';
    }
  }
}
</script>
