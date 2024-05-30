<template>
  <div class="theeBody">
    <h1 class="transparentTxt">This is home version 4</h1>
    <div class="row rowWidth rowHeight">
      <div class="col-12 col-md-5 d-flex align-items-center">
        <img
          class="plainLogoN mx-auto"
          src="https://i.ibb.co/VMsJqvP/plain-Logo-Txt.png"
          alt=""
        />
      </div>
      <div class="col-12 col-sm-7 d-flex align-items-center">
        <div class="txtDiv mx-auto ">
                  <!-- CODE FROM https://codepen.io/StephenScaff/details/oLBqmw starts here -->
    <section class="mast mx-auto">
      <div class="mast__header">
        <h1 class="mast__title js-spanize">Hi, I'm Naeema Omar</h1>
        <h1 class="mast__title js-spanize">an aspiring software engineer</h1>
        <hr class="sep mx-auto" />
      </div>
    </section>
    
    <!-- CODE FROM https://codepen.io/StephenScaff/details/oLBqmw ends here -->
            <div class="btnDiv d-flex justify-content-around">
              <a href="/aboutNew">
                <button class="mt-5 homePg4Btn">
                  <h3>About me</h3>
                </button>
              </a>
              <a href="/contactnew">
                <button class="mt-5 homePg4Btn">
                  <h3>Get in touch</h3>
                </button>
              </a>
            </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 
        Plain geometric bg - bright ver = https://i.ibb.co/4YTBQn0/clipped-Horizontal-Geo-Bg.png
        Plain geometric bg - muted version = https://i.ibb.co/RD2K2Cn/geometric-Bg.png
        Plain N logo = https://i.ibb.co/VMsJqvP/plain-Logo-Txt.png
    
    -->
</template>

<script>
export default{
  methods:{
  spanizeLetters() {
    var letters = document.querySelectorAll('.js-spanize');
    letters.forEach(function(letterContainer) {
      var text = letterContainer.textContent.trim().split("");
      letterContainer.innerHTML = text.map(function(char) {
        return '<span>' + char + '</span>';
      }).join('');
    });
  }
},
mounted() {
  try{
    this.spanizeLetters();
  } catch(error){ 
    console.log(`The following error occured while trying to run the glowing letters js: ${error}`)
  }
},
}

</script>


<style>
/* CODE FROM https://codepen.io/StephenScaff/details/oLBqmw starts here */
*,
*:before,
*:after {
box-sizing: border-box;
}
/* body {
margin: 0;
width: 100%;
font-family: "Cutive Mono", monospace;
line-height: 1.5;
font-weight: 400;
font-style: normal;
-ms-text-size-adjust: 100%;
-webkit-text-size-adjust: 100%;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
text-rendering: optimizeLegibility;
} */
/* .sep {
border: 0;
width: 3em;
height: 1px;
margin: 1em 0;
background-color: rgba(255, 255, 255, 0.4);
} */
.mast {
position: relative;
display: flex;
align-items: center;
width: fit-content;
height: fit-content;
padding: 15px;
box-shadow: 0px 0px 10px 10px var(--mainDarkGreen);
/* color: var(--mainDarkGreen); */
color: var(--mainCream);
/* Above line = txt color */
/* background-color: var(--mainCream); */
background-color: var(--mainDarkGreen);
border-radius: 50px;
/* Above line = dunno, maybe = grey bg BUT there's another color affecting it */
}
/* .mast:after {
z-index: 0;
content: "";
position: absolute;
top: 0;
left: 0;
height: 100%;
width: 100%;
background: rgba(17, 17, 17, 0.9);
} */
/* .mast > header {
z-index: 2;
position: relative;
} */
/* .mast__bg {
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100vh;
margin: 0;
padding: 0;
background-size: cover;
background-position: 50%;
} */
/* .mast__header {
padding: 5%;
} */
.mast__title {
font-family: "Cutive Mono", monospace;
/* font-size: 1em; */
font-size: 3vh;
/* Above line controls font size. px, % and vh work to alter size */
font-weight: 700;
/* Above line controls boldness of txt */
letter-spacing: 0.2em;
text-transform: uppercase;
}
.mast__title span {
animation: letter-glow 0.7s 0s ease both;
}
.mast__title span:nth-child(1) {
animation-delay: 0.05s;
}
.mast__title span:nth-child(2) {
animation-delay: 0.1s;
}
.mast__title span:nth-child(3) {
animation-delay: 0.15s;
}
.mast__title span:nth-child(4) {
animation-delay: 0.2s;
}
.mast__title span:nth-child(5) {
animation-delay: 0.25s;
}
.mast__title span:nth-child(6) {
animation-delay: 0.3s;
}
.mast__title span:nth-child(7) {
animation-delay: 0.35s;
}
.mast__title span:nth-child(8) {
animation-delay: 0.4s;
}
.mast__title span:nth-child(9) {
animation-delay: 0.45s;
}
.mast__title span:nth-child(10) {
animation-delay: 0.5s;
}
.mast__title span:nth-child(11) {
animation-delay: 0.55s;
}
.mast__title span:nth-child(12) {
animation-delay: 0.6s;
}
.mast__title span:nth-child(13) {
animation-delay: 0.65s;
}
.mast__title span:nth-child(14) {
animation-delay: 0.7s;
}
.mast__title span:nth-child(15) {
animation-delay: 0.75s;
}
.mast__title span:nth-child(16) {
animation-delay: 0.8s;
}
.mast__title span:nth-child(17) {
animation-delay: 0.85s;
}
.mast__title span:nth-child(18) {
animation-delay: 0.9s;
}
.mast__title span:nth-child(19) {
animation-delay: 0.95s;
}
.mast__title span:nth-child(20) {
animation-delay: 1s;
}
.mast__title span:nth-child(21) {
animation-delay: 1.05s;
}
.mast__title span:nth-child(22) {
animation-delay: 1.1s;
}
.mast__title span:nth-child(23) {
animation-delay: 1.15s;
}
.mast__title span:nth-child(24) {
animation-delay: 1.2s;
}
.mast__title span:nth-child(25) {
animation-delay: 1.25s;
}

@keyframes letter-glow {
0% {
  opacity: 0;
  text-shadow: 0px 0px 1px rgba(255, 255, 255, 0.1);
}
66% {
  opacity: 0.7;
  text-shadow: 0px 0px 20px rgba(255, 255, 255, 0.9);
}
77% {
  opacity: 1;
}
100% {
  text-shadow: 0px 0px 20px rgba(255, 255, 255, 0);
}
}

/* CODE FROM https://codepen.io/StephenScaff/details/oLBqmw ends here */



.theeBody {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  background-image: url("https://i.ibb.co/RD2K2Cn/geometric-Bg.png");
  /* background-repeat: no-repeat; */
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.plainLogoN {
  /* max-width: 55%; */
  width: 50%;
  max-height: 50%;
  /* box-shadow: 0px 0px 10px 10px var(--mainCream); */
  /* border-radius: 15px; */
}

.creamBoxShadow {
  box-shadow: 0px 0px 10px 10px var(--mainCream);
  border-radius: 50px;
}

.txtDiv{
    width: 100%;
}

.rowWidth {
  width: 95%;
  margin-inline: 20px;
}

.rowHeight{
    height: 87vh;
    margin-block-start: 20px;
    padding-block-end: 150px;
}

.transparentTxt {
  color: rgba(0, 0, 0, 0);
}

.homePg4Btn{
  background-color: var(--mainDarkGreen);
  width: fit-content;
  border-radius: 50px;
  padding: 15px;
  box-shadow: 0px 0px 10px 10px var(--mainDarkGreen); 
  border: none;
  color: var(--mainCream);
}
</style>
