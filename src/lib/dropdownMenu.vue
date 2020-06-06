<template>
  <div class="nav-user-wrapper" v-if="show">
    <div class="kailong"></div>
    <slot></slot>
  </div>
</template>

<script>
    export default {
      name: "dropdownMenu",
      data() {
        return {
          show:false
        }
      }
    }
</script>

<style lang="scss" scoped>
  .nav-user-wrapper {
    width: 85px;
    height: 200px;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    position: relative;
    margin-top: 15px;
    border: 5px solid red;
    padding: 10px 0;

  .kailong {
    width:0;
    height:0;
    border-right:8px solid transparent;
    border-left:8px solid transparent;
    border-bottom:8px solid blue;
    float: left;
    position: absolute;
    top: -8px;
    left: 30px;
  }
  }
</style>
