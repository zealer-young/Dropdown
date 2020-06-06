<template>
  <div id="app">

    <dropdown >

        <dropdown-menu >
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
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      // loginShow: false,
    }
  },

}
</script>

<style lang="scss">

  * {
    padding: 0;
    margin: 0;
  }
  li {
    list-style: none;
    text-align: center;
  }

  .user-title:hover dropdown-menu{

  }

</style>
