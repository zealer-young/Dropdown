<template>
  <div>
    <div class="dropdown-menu-item">
      <a>
        <slot></slot>
      </a>
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
    width: 85px;
    line-height: 36px;
    text-align: center;
    color: #606266;
    font-size: 14px;
    Cursor: pointer;
  }
  .dropdown-menu-item:hover {
    background-color: #ECF5FF;
    color: #66B1FF;
  }
</style>
