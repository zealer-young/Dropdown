<template>
  <div>
    <div class="dropdown-menu-item">
      <a to="/user/orderList"><slot></slot></a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "dropdownMenuItem"
    }
</script>

<style lang="scss" scoped>
  .dropdown-menu-item {
    height: 36px;
    line-height: 36px;
    color: #606266;
    font-size: 14px;
  }
</style>
