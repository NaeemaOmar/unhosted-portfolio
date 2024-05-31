<template>
  <nav class="navbar navbar-expand-lg darkGreenBg fixed-top">
    <div class="container-fluid">
      <!-- <a class="navbar-brand creamTxt" href="/">myPortfolio</a> -->
      <a class="navbar-brand creamTxt" href="/">
        <img
          class="navBrandLogo"
          src="https://i.ibb.co/chmpqKF/reSized.png"
          alt=""
        />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon mainCreamBorder"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="navbar-nav">
          <router-link class="nav-link" to="/">Home</router-link>
          <router-link class="nav-link" to="/aboutNew">About</router-link>
          <router-link class="nav-link" to="/projectsNew">Projects</router-link>
          <router-link class="nav-link" to="/eduExpNew">Education & Employment</router-link>
          <router-link class="nav-link" to="/testimonialsNew">References</router-link>
          <router-link class="nav-link" to="/contactnew">Contact me</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<style>
.creamTxt {
  color: var(--mainCream);
}
.navBrandLogo {
  width: 100px;
  border-radius: 5%;
}

.navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='%23ffe49f' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
  /* The above changes the color of the burger icon of the navbar */
  /* stroke-width='2' --> width in px of each line in the burger */
  /* width='30' height='30' --> width and height of burger menu */
  /* %3csvg xmlns='http://www.w3.org/2000/svg' --> original svg */
  width: 35px;
}

/* LOGO IMG LINKS
        "https://i.ibb.co/2v3nPFK/logo-Option-ONE.png"
        "https://i.ibb.co/BTQVV8T/logo-Option-A.png"
        "https://i.ibb.co/VMsJqvP/plain-Logo-Txt.png"
        "https://i.ibb.co/RD2K2Cn/geometric-Bg.png"
        "https://i.ibb.co/dt7Vk1c/favImg.png" --> fav logo
        "https://i.ibb.co/chmpqKF/reSized.png" --> reSized favLogo
        */
</style>
