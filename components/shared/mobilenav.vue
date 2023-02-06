<template>
  <div id="top-head-inner">
    <div id="nav-toggle" v-on:click="openMobileNav">
      <div>
        <span class="bg-backgroundDark"></span>
        <span class="bg-backgroundDark"></span>
        <span class="bg-backgroundDark"></span>
      </div>
    </div>
    <nav id="global-nav">
      <div>
        <h5>
          <div class="h-6"></div>
          CALL US
          <br />

          <a :href="`tel:${appConfig.contact.phone}`" class="uppercase block mb-2  text-textLight">{{
            appConfig.contact.phone.replaceAll('-', '.')
          }}
          </a>
        </h5>
      </div>

      <ul>
        <li>
          <NuxtLink v-for="link in appConfig.navigationLinks" :to="link.url"
            class="text-base uppercase text-textLight mb-1 ml-3 ">
            {{ link.name }}</NuxtLink>
        </li>
      </ul>
    </nav>
    <div id="nav-bg"></div>
  </div>
</template>

<script setup lang="ts">
const appConfig = useAppConfig()

function openMobileNav() {

  var element = document.getElementsByTagName("body")[0];
  element.classList.toggle("open");

}

</script>
<!-- <script setup lang="ts">
export default {
  data() {
    return {
      isReady: false,
    };
  },
  mounted() {
    this.isReady = true;
  },
    openMobileNav() {
      if (this.isReady) {
        var element = document.getElementsByTagName("body")[0];
        element.classList.toggle("open");
      }
    },
  },
  computed: {
    GetComponentStyles() {
      return {
        "--color-button-primary": this.$store.state.site.ButtonColor,
      };
    },
  },
};
</script> -->

<style scoped>
/*////MOBILE MENUUUUUUUUUUU TTWWWOOOOOO*/

/* ***********************************************************
* #global-nav
* *********************************************************** */
.open #global-nav {
  z-index: 1000;
  visibility: visible;
}

#global-nav {
  visibility: hidden;
  position: fixed;
  display: table;
  vertical-align: middle;
  top: 0;
  height: 100%;
  width: 100%;
  text-align: center;
  font-size: 16px;
  z-index: 1001;
  overflow: hidden;
}

#global-nav ul {
  display: table-cell;
  vertical-align: middle;
  list-style: none;
  padding: 50px 10px 20px 10px;
}

#global-nav a {
  text-decoration: none;
  display: block;
  padding: 10px 0;
}

/* ***********************************************************
* nav-list
* *********************************************************** */

#global-nav h4 {
  text-align: center;
  font-size: 13px;
  padding-top: 20px;
  padding-bottom: 7px;
  display: block;
  margin: auto;
  font-weight: 800;
}

.MobilePhones {
  position: absolute;
  top: 0;
  display: block;
  margin: auto;
  width: 100%;
  margin-bottom: 40px;
}

@media only screen and (max-height: 650px) {
  .HorizPhone {
    display: none;
  }

  #top-head-inner .HorizPhone {
    display: none;
  }
}

#global-nav h5 {
  text-align: center;
  font-size: 18px;
  padding-top: 8px;
  padding-bottom: 8px;
  width: 100%;
  font-weight: 600;
  margin: 0px 0px 0px 0px;
  border-bottom: 1px solid #011819;
}

#global-nav h5 span {
  color: #fff;
}

#global-nav ul li {
  opacity: 0;
  -webkit-transform: scaleX(0) translateX(-260px);
  transform: scaleX(0) translateX(-260px);
  -webkit-transition: none;
  transition: none;
  margin-top: -7px;
  font-size: 13px;
  font-weight: 600;
  color: #fff;
}

.open #global-nav ul li {
  opacity: 1;
  -webkit-transform: scaleX(1) translateX(0);
  transform: scaleX(1) translateX(0);
  -webkit-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
  -webkit-transition-delay: 0.1s;
  transition-delay: 0.1s;
}

.open #global-nav ul li:nth-child(2) {
  -webkit-transition-delay: 0.2s;
  transition-delay: 0.2s;
}

.open #global-nav ul li:nth-child(3) {
  -webkit-transition-delay: 0.3s;
  transition-delay: 0.3s;
}

.open #global-nav ul li:nth-child(4) {
  -webkit-transition-delay: 0.4s;
  transition-delay: 0.4s;
}

.open #global-nav ul li:nth-child(5) {
  -webkit-transition-delay: 0.5s;
  transition-delay: 0.5s;
}

.open #global-nav ul li:nth-child(6) {
  -webkit-transition-delay: 0.6s;
  transition-delay: 0.6s;
}

.open #global-nav ul li:nth-child(7) {
  -webkit-transition-delay: 0.7s;
  transition-delay: 0.7s;
}

.open #global-nav ul li:nth-child(8) {
  -webkit-transition-delay: 0.8s;
  transition-delay: 0.8s;
}

.open #global-nav ul li:nth-child(9) {
  -webkit-transition-delay: 0.9s;
  transition-delay: 0.9s;
}

.open #global-nav ul li:nth-child(10) {
  -webkit-transition-delay: 1s;
  transition-delay: 1s;
}

.open #global-nav ul li:nth-child(11) {
  -webkit-transition-delay: 1.1s;
  transition-delay: 1.1s;
}

/* ***********************************************************
* #nav-bg
* *********************************************************** */
#nav-bg {
  content: "";
  width: 60px;
  height: 60px;
  top: 0;
  right: 0;
  bottom: 10px;
  display: block;
  position: fixed;
  -webkit-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transform: scale(1);
  transform: scale(1);
  z-index: 999;
}

.open #nav-bg {
  -webkit-transform: scale(80);
  transform: scale(80);
  -webkit-transition: all 0.6s ease-out;
  transition: all 1s ease-out;
  background-color: rgba(1, 28, 34, 0.9);
}

/* ***********************************************************
* #nav-toggle
* *********************************************************** */
#nav-toggle {
  display: block;
  position: fixed;
  right: 0;
  top: 0;
  bottom: 10px;
  width: 60px;
  height: 60px;
  cursor: pointer;
  padding: 15px;
  z-index: 1001;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

#nav-toggle div {
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 1200;
}

#nav-toggle span {
  /*   display: block; */
  height: 2px;
  width: 100%;
  /*   left: 0; */
  zoom: 1;
  -webkit-transition: 0.35s ease-in-out;
  transition: 0.35s ease-in-out;
  margin: 4px 0;
  z-index: 1200;
}

#nav-toggle span:nth-child(1) {
  top: 0;
}

#nav-toggle span:nth-child(2) {
  top: 8px;
}

#nav-toggle span:nth-child(3) {
  top: 16px;
}

.open #nav-toggle {
  background: transparent;
}

.open #nav-toggle span {
  @apply bg-textLight;
  z-index: 1201;
}

.open #nav-toggle span:nth-child(1) {
  top: 9px;
  -webkit-transform: translateY(10px) rotate(-135deg);
  transform: translateY(10px) rotate(-135deg);
  zoom: 1;
  z-index: 1200;
}

.open #nav-toggle span:nth-child(2) {
  width: 0;
  left: 50%;
  z-index: 1200;
}

.open #nav-toggle span:nth-child(3) {
  top: 9px;
  -webkit-transform: translateY(-10px) rotate(135deg);
  transform: translateY(-10px) rotate(135deg);
  zoom: 1;
  z-index: 1200;
}

.BlueLink {
  color: #75beca;
}
</style>
