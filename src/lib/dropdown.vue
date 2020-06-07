<template>
  <div class="dropdown" v-on="{mouseenter:onEnter,mouseleave:onOut}">
    <slot></slot>
  </div>
</template>

<script>
    export default {
        name: "dropdown",
      data(){
          return{
            loginShow:false
          }
      },
      methods:{
        onEnter(){
          this.loginShow = true;
          this.bus.$emit('val', this.loginShow)
        },
        onOut(){
          this.loginShow = false;
          this.bus.$emit('val',this.loginShow)
        },
      }
    }
</script>

<style lang="scss" scoped>
  .dropdown {
    margin: 0 auto;
    width: 85px;
  }
</style>
