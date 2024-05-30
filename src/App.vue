<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
    <NavBar />
      <div class="mx-auto topMargin">
        <router-view />
        <Footer />
      </div>
    <!-- BELOW = ALT STYLING. NOTE: mainCreamBg below has a width of 95% -->
    <!-- <div class="darkGreenBg-Gradient">
      <div class="mainCreamBg mx-auto topMargin">
        <router-view />
      </div>
      <Footer />

    </div> -->
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Footer from '@/components/Footer.vue'

export default {
  components: {
    NavBar,
    Footer
  },
};
</script>

<style>
/* GENERAL STYLING */
:root {
  --mainDarkGreen: #051808;
  --mainCream: #ffe49f;
  --white: #ffffff;
  --black: #000000;
  --lightenedCream: #FFF5DC;
  /* 
COLORS
secondaryBg = #F8FE70
accentBg = #A4FE3E
lighterCreamBg = #E8E252
secondFavSecondary = #EED481
secondFavAccent = #9ADB68
*/
  /* option 1 */
  --secondary: #C7E493;
  --accent:#77D761;
  /* option 2 */
  --second: #FDDB7E;
  --accen: #FFF5DC;
  /* option 3 */
  --Secondary:#E1B18B ;
  --Accent: #D8B166;
  /* option 4 - current fav */
  --secondary: #F8FE70; /*USED*/
  --accent:#A4FE3E;   /*USED*/
  /* option 5 - 2nd fav, softer/more muted than option 4 */
  --secondary: #D3E38A;
  --accent:#9ADB68; /*USED*/
  /* option 6 */
  --secondary: #D6CB98;
  --accent: #B9C66F;
  /* option 7 - 3rd fav*/
  --secondary:#F6FE6C;
  --accent:#B0FE4C;
  /* option 8 - pink version*/
  --secondary:#E59090;
  --accent:#E85454;
  /* option 9 */
  --secondary:#EED481; /*USED*/
  --accent:#E8E252; /*USED*/
}

html {
  background-color: var(--mainCream);
}

.topMargin{
  margin-top: 92px;
}

.testBorder{
  border: dotted;
  border-color: aqua;
}

.testBg{
  background-color: aqua;
}

.testColor{
  color: aqua;
}

.darkGreenBg{
  background-color: var(--mainDarkGreen);
}

.darkGreenTxt{
  color: var(--mainDarkGreen);
}

.darkgreenShadow{
  box-shadow: 0px 0px 10px 10px var(--mainDarkGreen);
}
.mainCreamBg{
  background-color: var(--mainCream);
  /* width: 90%; */
}

.lightenedCreamBg{
  background-color: var(--lightenedCream);
}

.lightenedCreamTxt{
  color: var(--lightenedCream);
}

.leftAlignTxt{
  text-align: start;
}

.centerAlignTxt{
  text-align: center;
}

.blackBg{
  background-color: var(--black);
}

.blackTxt{
  color: var(--black);
}

.whiteTxt{
  color: var(--white);
}

.darkGreenBg-Gradient{
  background-image: radial-gradient(var(--mainCream), var(--mainDarkGreen));
}

.pgHeading{
  margin-top: 0px;
}
.mainCreamBorder{
  border: solid;
  border-color: var(--mainCream);
  border-radius: 5px ;
}

.mainCreamShadow{
  box-shadow: 0px 0px 10px 10px var(--mainCream);

}

.borderRadius50px{
  border-radius: 50px;
}

.creamTxt{
  color: var(--mainCream);
}

.boldTxt{
  font-weight: 700;
}

.transparentTxt {
  color: rgba(0, 0, 0, 0);
}

#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: "Nunito", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--mainDarkGreen);
}

nav {
  padding: 30px;
}

nav a {
  font-weight: 200;
  color: var(--mainCream);
}

nav a.router-link-exact-active {
  color: var(--lightenedCream);
  font-weight: 900;
}

.nav-link:hover {
  /* Hover color */
  color: black; /* Set your hover color here */
  /* Other CSS properties */
}

</style>
