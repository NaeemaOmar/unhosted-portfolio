<template>
  <div class="aboutBody">
    <div class="centerThisDiv mx-auto">
      <div>
        <!-- Banner begins here -->
        <div class="row row1Margins darkGreenBg borderRadius50px py-5 mt-5 mb-5 creamTxt">
          <div class="col-12">
            <div class="row mx-5">
              <div class="col-12 col-sm-3">
                <img
                  class="firstPic"
                  src="https://i.ibb.co/3fwNCwS/My-Home-Pg-Pic-Bg-Square-Ver-no-Bg.png"
                  alt=""
                />
              </div>
              <div class="col-12 col-sm-9 px-5">
                <h1 class="leftAlignTxt whiteTxt mt-5">Naeema Omar</h1>
                <h3 class="leftAlignTxt whiteTxt">
                  Date of birth: 02/04/1999 ({{ age }} yrs)
                </h3>
                <h3 class="leftAlignTxt whiteTxt">Language: English</h3>
                <h3 class="leftAlignTxt whiteTxt">
                  Current employment: Web Development Intern (LC Studio)
                </h3>
              </div>
            </div>
          </div>
        </div>
        <!-- Banner ends here -->
  
        <!-- ROW 2 starts here -->
        <div class="row row2Margins ">
          <div class="col-12 col-sm-7 fitWidth mt-5 pt-5">
            <!-- The div below holds everything on the left of the hike pic -->
            <div class="my-5">
              <div class="breakLine"></div>
              <div>
                <h3 class="blackTxt leftAlignTxt">
                  I first developed an interest in a tech career in 2020 when covid
                  boredom lead me to begin learning
                  <span class="boldTxt darkGreentxt">python</span> and
                  <span class="boldTxt darkGreentxt">c++</span>. It was a great deal
                  of fun breaking down the program you would like to build into its
                  basic pieces before building it back up. seeing a completed
                  product that you know you built from scratch is really good for my
                  pride and confidence
                </h3>
              </div>
              <div class="breakLine"></div>
              <div class="row">
                <div class="col-12 col-sm-6">
                  <h3 class="blackTxt leftAlignTxt mt-2">
                    I would describe myself as some one who is passionate, very
                    curious and sociable. I enjoy long hikes, reading, learning and
                    new experiences.
                  </h3>
                  <a href="/contactnew">
                    <button class="creamTxt aboutPgBtn mt-3">
                      Get in touch with me
                    </button>
                  </a>
                </div>
                <div class="col-12 col-sm-6">
                  <div class="darkGreenBg creamTxt readingDiv mt-4">
                    <h3>Currently reading:</h3>
                    <p>Atomic Habits - James Clear</p>
                    <h3>Next on my list:</h3>
                    <p>Limitless - Jim Kwik</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div class="col-12 col-sm-5">
            <div class="hikePicDiv  darkGreenBg">
              <img
                class="hikePic my-5"
                src="https://i.ibb.co/dDknjkr/about-Pg-Pic.jpg"
                alt=""
              />
            </div>
          </div>
          <div class="antiFooterMargin transparentTxt">h</div>
        </div>
        <!-- ROW 2 ends here -->
      </div>
    </div>
  </div>
</template>

<!-- Hiking pic =  https://i.ibb.co/dDknjkr/about-Pg-Pic.jpg -->
<!-- Profile pic - square version = https://i.ibb.co/3fwNCwS/My-Home-Pg-Pic-Bg-Square-Ver-no-Bg.png -->
<!-- Square geometric bg = https://i.ibb.co/cv3p3NM/square-Geo-Bg.png -->

<script>
export default {
  data() {
    return {
      age: 25,
    };
  },
  methods:{
  },
  mounted() {
    try {
      let currentDate = new Date();
      let currentYear = currentDate.getFullYear();
      this.age = currentYear - 1999;
    } catch (err) {
      console.log(
        `The following error occured while trying to calculate the current age: ${err}`
      );
    }
  },
};
</script>

<style>

.aboutBody {
  height: 100%;
  padding: 0;
  margin: 0;
  background-color: var(--mainCream);
}

.fitWidth{
  height: fit-content;
}
.imgDiv {
  border-radius: 50px;
  width: 70%;
}

.firstPic {
  width: 280px;
  border-radius: 50%;
  box-shadow: 0px 0px 10px 10px var(--mainCream);
}

.transparentTxt {
  color: rgba(0, 0, 0, 0);
}

.profilePic {
  border-radius: 50px;
  width: 80%;
}

.geoBg {
  background-image: url("https://i.ibb.co/cv3p3NM/square-Geo-Bg.png");
  background-size: cover;
}

.row1Margins {
  /* margin-top: 150px; */
  margin-inline: auto;
  width: fit-content;
  box-shadow: 0px 0px 10px 10px var(--mainDarkGreen);
}

.row2Margins {
  margin-inline: 50px;
}

.aboutHeadingTxt {
  background-color: var(--mainCream);
  border-radius: 50px;
  margin-block: 50px;
  margin-inline: 30px;
  width: fit-content;
  padding-block: 15px;
  padding-inline: 20px;
}

.aboutHeadingtxtDiv {
  border-radius: 50px;
  height: fit-content;
  margin-block-start: 6%;
  width: fit-content;
  /* margin-inline: auto; */
  margin-inline-end: 0%;
  border-color: darkgoldenrod;
  padding-inline: 50px;
  padding-block: 5px;
}

.breakLine {
  background-color: var(--mainDarkGreen);
  height: 10px;
  width: 75%;
  margin-block: 50px;
  margin-inline: auto;
}

.readingDiv {
  border-radius: 50px;
  width: fit-content;
  padding-inline: 30px;
  padding-block: 10px;
  box-shadow: 0px 0px 10px 10px var(--mainDarkGreen);
}

.hikePic {
  /* height: 530px; */
  width: 80%;
  border-radius: 5px;
}

.hikePicDiv {
  width: fit-content;
  padding: 5px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 10px var(--mainDarkGreen);
  margin-top: 30px;
  /* margin-inline: 5%; */
  /* Need to get correct inline-margin */
}

.antiFooterMargin {
  height: 100px;
}

.aboutPgBtn {
  background-color: var(--mainDarkGreen);
  width: fit-content;
  border-radius: 50px;
  padding: 15px;
  box-shadow: 0px 0px 10px 10px var(--mainDarkGreen);
  border: none;
  color: var(--mainCream);
}

.centerThisDiv {
  width: 95%;
  padding: 0;
  margin: 0;
  padding-top: 50px;
  /* Above line worked instead of margin */
  /* margin-top: 20%; */
  /* Above line worked at one point but isn't working no more */
  /* display: flex;
  align-items: end; */
  /* d-flex doesn't work either */
}
</style>
