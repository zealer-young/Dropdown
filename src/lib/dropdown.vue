<template>
  <div class="dropdown">

    <a to="/user" class="user-title" ref="userLogin" :show="loginShow">个人中心</a>

    <slot >


    </slot>
  </div>
</template>

<script>
    import DropdownMenu from "./dropdownMenu";
    export default {
        name: "dropdown",
      data(){
          return{
            loginShow:true
          }

      },
      mounted() {
        this.iconLogin()
      },
      methods:{
        iconLogin() {
          const userLogin = this.$refs.userLogin;
          userLogin.addEventListener("mouseenter", () => {
            this.loginShow = true;
            this.$emit('val',this.loginShow)
          });
          userLogin.addEventListener("mouseleave", () => {
            this.loginShow = false;
          });
        },
      }
    }
</script>

<style lang="scss" scoped>
  /*a {*/
  /*  text-decoration: none;*/
  /*}*/
  .dropdown {
    margin: 0 auto;
    width: 200px;
    height: 300px;
    border: 5px solid red;
  }

</style>
