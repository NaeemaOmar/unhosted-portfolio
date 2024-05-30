<template>
    <div
      class="contactBody mainCreamBg d-flex align-items-center justify-content-around"
    >
      <!-- 3rd attempt @ styling starts here -->
      <div class="row mx-5 contactMarginBtm">
        <div class="col-12 darkGreenBg mainLeftDiv borderRadius50px">
          <h1 class="creamTxt display-4 boldTxt">Get in touch with me:</h1>
          <div class="row">
            <div class="col-12 col-xl-5 creamTxt">
              <!-- the 3 rows (location, email & phone) start here -->
              <div class="row my-4 mx-auto quickInfoRow">
                <div class="col-12">
                  <div class="row mx-5 px-5">
                    <div class="col-2">
                      <i class="fa-solid fa-location-dot fa-xl"></i>
                    </div>
                    <div class="col-10">
                      <p>Bellville, Cape Town, 7530</p>
                    </div>
                  </div>
                  <div class="row mx-5 px-5">
                    <div class="col-2">
                      <i class="fa-solid fa-envelope fa-xl"></i>
                    </div>
                    <div class="col-10">
                      <p>naeemaomar19@gmail.com</p>
                    </div>
                  </div>
                  <div class="row mx-5 px-5">
                    <div class="col-2">
                      <i class="fa-brands fa-square-whatsapp fa-2xl"></i>
                    </div>
                    <div class="col-10">
                      <p>(+27) 63 192 0019</p>
                    </div>
                  </div>
                </div>
              </div>
              <!-- the 3 rows (location, email & phone) end here -->
              <!-- MAP EMBEDDING starts here -->
              <div class="row">
                <div class="col-lg-8 col-xl-12 mx-auto">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61164.93243220097!2d18.58679401879199!3d-33.88223025081273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc5a7c88f4a7c5%3A0xddfdc69775a78922!2sBellville%2C%20Cape%20Town!5e0!3m2!1sen!2sza!4v1712310146758!5m2!1sen!2sza"
                    width="600"
                    height="450"
                    allowfullscreen="true"
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    class="creamBoxShadow mb-4 mx-auto embeddedMap"
                  ></iframe>
                </div>
              </div>
              <!-- MAP EMBEDDING ends here -->
            </div>
            <div class="col-12 col-xl-7 creamTxt">
              <h1 class="mx-auto mt-4 mb-5">
                Alternatively, complete the form below
              </h1>
              <div class="row mx-5">
                <!-- FORM DIV starts here -->
                <div class="col-12 formDiv my-3 creamBoxShadow mt-5">
                  <div class="mx-3">
                    <div class="row">
                      <div class="col-12 col-sm-6">
                        <p>Name</p>
                        <input
                          class="creamTxt"
                          type="text"
                          placeholder="Name..."
                          v-model="name"
                        />
                      </div>
                      <div class="col-12 col-sm-6">
                        <p>Surname</p>
                        <input
                          class="creamTxt"
                          type="text"
                          placeholder="Surname..."
                          v-model="surname"
                        />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-12">
                        <p>Email</p>
                        <input
                          type="text"
                          class="emailInput creamTxt"
                          placeholder="Email..."
                          v-model="emailAdd"
                        />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-12">
                        <p>Your message</p>
                        <input
                          type="text"
                          class="msgBox creamTxt"
                          placeholder="Good day..."
                          v-model="msg"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row submitRow d-flex justify-content-around">
                    <div class="col-3">
                      <!-- <button class="darkGreenTxt boldTxt submitBtn" @click="clearInputs">Submit</button> -->
                      <!-- Button trigger modal -->
                      <button
                        type="button"
                        class="btn darkGreenTxt boldTxt submitBtn"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                        @click="clearInputs"
                      >
                      Submit
                      </button>
  
                      <!-- Modal -->
                      <div
                        class="modal  fade"
                        id="staticBackdrop"
                        data-bs-backdrop="static"
                        data-bs-keyboard="false"
                        tabindex="-1"
                        aria-labelledby="staticBackdropLabel"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog modal-dialog-centered">
                          <div class="modal-content modalStyling ">
                            <div class="modal-header">
                              <h5 class="modal-title mx-auto" id="staticBackdropLabel">
                                Thank you for getting in touch
                              </h5>
                              <button
                                type="button"
                                class="btn-close mainCreamBg boldTxt"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              >X</button>
                            </div>
                            <div class="modal-body">
                              <p class="leftAlignTxt">You will receive a response within 3 to 5 business days.</p>
                              <p class="leftAlignTxt">Enjoy the rest of your day!</p>
                            </div>
                            <div class="modal-footer">
                              <button
                                type="button"
                                class="btn btn-secondary closeModalBtn boldTxt"
                                data-bs-dismiss="modal"
                              >
                                Understood
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- FORM DIV ends here -->
              </div>
              <!-- Socials row starts here -->
              <div class="row mx-3">
                <div class="col-12">
                  <h1 class="mx-auto mt-4 mb-3">
                    ...or contact me via the socials below
                  </h1>
                  <div class="row my-3">
                    <div class="col-4 mx-auto">
                      <a
                        href="https://www.linkedin.com/in/naeema-omar-7ab486299/"
                        target="_blank"
                      >
                        <i
                          class="fa-brands fa-linkedin mx-3 fa-4x iconShadow"
                        ></i>
                      </a>
                    </div>
                    <div class="col-4 mx-auto">
                      <a href="https://github.com/NaeemaOmar" target="_blank">
                        <i
                          class="fa-brands fa-square-github mx-3 fa-4x iconShadow"
                        ></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 3rd attempt @ styling ends here -->
    </div>
  </template>
  
  <!-- pink shirt + abaya dress, no Bg = https://i.ibb.co/zS4m0s2/Abaya-Pink-Shirt-Pic-no-Bg.png -->
  
  <script>
  export default {
    data() {
      return {
        name: "",
        surname: "",
        emailAdd: "",
        msg: "",
      };
    },
    methods: {
      clearInputs() {
        this.name = null;
        this.surname = null;
        this.emailAdd = null;
        this.msg = null;
      },
    },
  };
  </script>
  
  <style>
  .contactBody {
    height: 100vh;
    padding: 0;
    margin: 0;
    background-color: var(--mainCream);
  }
  .greenDiv {
    width: 280px;
    background-color: var(--mainDarkGreen);
    color: var(--mainCream);
    border-radius: 10px;
    box-shadow: 0px 0px 10px 10px var(--mainDarkGreen);
    /* margin-inline: auto; */
    /* margin-block: 50px; */
    /* margin-inline-start: 20px; */
    /* NOTE: the margins mess w/ responsivity */
    /* width: 35%;  */
    /*ALTERNATIVELY: use row w/ col-4 vs col-8. col-4 will have a green div w/ a margin 20px allround*/
    /* UPDATE: defs need to use row otherwise i'll need to use grids to get the stuff in 1 line */
  }
  
  .boxShadow {
    box-shadow: 0px 0px 10px 10px var(--mainDarkGreen);
    /* use the full row boxShadow as an effect in the home/about page(s) */
    border-radius: 10px;
  }
  
  .creamBoxShadow {
    box-shadow: 0px 0px 10px 10px var(--mainCream);
    /* use the full row boxShadow as an effect in the home/about page(s) */
    border-radius: 10px;
  }
  
  .mainLeftDiv {
    box-shadow: 0px 0px 20px 20px var(--mainDarkGreen);
    /* width: 40vh; */
    /* height: 100px; */
    /* margin-bottom: 400px; */
  }
  
  .line {
    border: solid;
    border-color: var(--mainCream);
    border-radius: 2px;
    border-width: 2px;
  }
  
  input {
    width: 100%;
    border-radius: 5px;
    border: none;
    background-color: var(--mainDarkGreen);
    box-shadow: 0px 0px 10px 4px var(--mainCream);
    margin-block-end: 25px;
  }
  
  .emailInput {
    width: 100%;
  }
  
  ::placeholder {
    color: var(--lightenedCream);
  }
  
  .iconStyling {
    color: var(--mainCream);
    /* background-color: var(--mainCream); */
  }
  
  .msgBox {
    height: 100px;
    width: 100%;
  }
  
  .formDiv {
    /* max-width: 800px; */
    padding-inline: 10px;
  }
  
  .submitRow {
    width: 100%;
  }
  
  .submitBtn {
    height: 40px;
    border: none;
    box-shadow: 0px 0px 30px 1px var(--mainCream);
    margin-bottom: 20px;
    border-radius: 20px;
    background-color: var(--mainCream);
  }
  
  .modalStyling{
    background-color: var(--mainDarkGreen);
    box-shadow: 0px 0px 30px 10px var(--mainDarkGreen);
  
  }
  
  .closeModalBtn{
    background-color: var(--mainCream);
    box-shadow: 0px 0px 30px 10px var(--mainCream);
    border-radius: 20px;
    height: 50px;
    color: var(--mainDarkGreen);
  }
  
  .btn-close{
    border-radius: 10px;
    border: none;
    box-shadow: 0px 0px 30px 2px var(--mainCream);
  }
  
  .picItself {
    width: 100%;
    margin-block: 0px;
    /* padding-block: 100px; */
  }
  
  .iconRow {
    height: 120px;
  }
  
  .iconShadow {
    box-shadow: 0px 0px 30px 7px var(--mainCream);
    border-radius: 10px;
    padding-inline: 5px;
    background-color: var(--mainCream);
    color: var(--mainDarkGreen);
  }
  
  /* .quickInfoRow{
    padding-inline: 15%;
  } */
  
  .embeddedMap {
    min-width: 90%;
    max-width: 2px;
  }
  
  .contactMarginBtm{
    /* margin-block-end: 100px; */
    padding-block-start: 150px;
    padding-block-end: 120px;
  
  }
  
  </style>
  