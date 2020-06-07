<template>
  <div id="app">
    <dropdown>
      <a class="dropdown-title">个人中心</a>
      <dropdown-menu>
        <dropdown-menu-item>11111</dropdown-menu-item>
        <dropdown-menu-item>222222</dropdown-menu-item>
        <dropdown-menu-item>333</dropdown-menu-item>
        <dropdown-menu-item>444</dropdown-menu-item>
        <dropdown-menu-item>555</dropdown-menu-item>
        <dropdown-menu-item>11111</dropdown-menu-item>
        <dropdown-menu-item>222222</dropdown-menu-item>
        <dropdown-menu-item>333</dropdown-menu-item>
        <dropdown-menu-item>444</dropdown-menu-item>
        <dropdown-menu-item>555</dropdown-menu-item>
      </dropdown-menu>
    </dropdown>
  </div>
</template>

<script>
  import Dropdown from "./lib/dropdown";
  import DropdownMenu from "./lib/dropdownMenu";
  import DropdownMenuItem from "./lib/dropdownMenuItem";
  export default {
    name: 'app',
    components: {DropdownMenuItem, DropdownMenu, Dropdown},
  }
</script>

<style lang="scss">
  * {
    padding: 0;
    margin: 0;
  }
  .dropdown-title{
    display: block;
    width: 85px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    color: #409EFF;
    font-size: 14px;
    Cursor : pointer
  }
</style>
