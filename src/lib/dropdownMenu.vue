<template>
  <div class="nav-user-wrapper" v-if="show">
    <div class="dropdown-list">
      <div class="kaila"></div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "dropdownMenu",
    data() {
      return {
        show: false
      }
    },
    mounted: function () {
      this.bus.$on('val', (data) => {
        this.show = data
      })
    },
  }
</script>

<style lang="scss" scoped>
  .nav-user-wrapper {
    width: 85px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    position: relative;
    margin-top: 10px;
    border: 1px solid #EBEEF5;
    .dropdown-list {
      padding: 10px 0;
    }
    .kaila {
      width: 0;
      height: 0;
      border-right: 8px solid transparent;
      border-left: 8px solid transparent;
      border-bottom: 8px solid #fff;
      float: left;
      position: absolute;
      top: -8px;
      left: 35px;
    }
  }
</style>
