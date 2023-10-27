<template>
  <v-sheet
    class="narrow-font d-flex flex-column justify-center align-center hugelarge-font main-col-1"
    height="100%"
    color="transparent"
  >
    <span class="logo-font">Way !</span>
  </v-sheet>
</template>

<script>
export default {
  name: "TheLanding",

  mounted() {
    setTimeout(() => {
      this.$router.push("/home");
    }, 2000);
  },
};
</script>

<style>
</style>