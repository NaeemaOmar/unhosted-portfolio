<template>
  <div class="darkGreenBg theBorder theFooter fixed-bottom">
      <p class="creamTxt boldTxt mt-2">&copy Naeema Omar {{ theYear }}</p>
  </div>
</template>

<script>
export default{
  data(){
      return{
          theDate: new Date(),
          theYear: null
      }
  },
  mounted(){
      this.theYear = this.theDate.getFullYear()
  }
}
</script>

<style>

.theFooter{
  height: 50px;
}

.theBorder{
  border: solid;
  border-color: var(--mainDarkGreen);
  border-width: 5px;
}

</style>