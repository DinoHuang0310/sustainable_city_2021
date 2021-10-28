<template>
  <div class="flex justify-center items-center my-6">
    <div class="relative">
      <button class="absolute left-0 top-1/2 -ml-2 transform -translate-x-full -translate-y-1/2" @click="handleClick(true)">
        <span :class="active ? 'text-green font-bold' : 'text-lightgray'">六都</span>
      </button>
      <label>
        <div :class="active ? 'switch-btn' : 'switch-btn right'" />
        <input type="checkbox" v-model="active" class="hidden" />
      </label>
      <button class="absolute right-0 top-1/2 -mr-2 transform translate-x-full -translate-y-1/2" @click="handleClick(false)">
        <span :class="!active ? 'text-green font-bold' : 'text-lightgray'">非六都</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: true
    }
  },
  watch: {
    active: function() {
      this.$emit('handleSwitchVal', this.active);
    }
  },
  methods: {
    handleClick(bool) {
      this.active = bool;
    }
  },
  mounted() {
    this.$emit('handleSwitchVal', this.active);
  }
}
</script>

<style scoped>
.switch-btn {
  position: relative;
  width: 90px;
  height: 40px;
  border-radius: 20px;
  cursor: pointer;
  background: #94b57c;
  overflow: hidden;
  transition: .5s;
}
.switch-btn::after {
  content: '';
  position: absolute;
  width: 34px;
  height: 34px;
  top: 3px;
  left: 3px;
  box-shadow: 3px 0 8px rgba(0, 0, 0, .4);
  border-radius: 50%;
  background: white;
  transition: .5s;
}
.switch-btn.right::after {
  left: 53px;
  box-shadow: -3px 0 8px rgba(0, 0, 0, .4);
}
</style>