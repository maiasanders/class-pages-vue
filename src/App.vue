<template>
    <div id="cohort-site">
        <nav>
            <router-link :to="{name: 'classHome', params: {color: 'blue'}}">Blue Class</router-link>
            <router-link :to="{name: 'classHome', params: {color: 'green'}}">Green Class</router-link>
            <router-link :to="{name: 'classHome', params: {color: 'gray'}}">Gray Class</router-link>
            <router-link :to="{name: 'classHome', params: {color: 'purple'}}">Purple Class</router-link>
        </nav>
        <RouterView />
    </div>
</template>



<!-- JAAAAVVVAAASCRRIIIPT -->

<script lang="ts">
import { RouterView } from 'vue-router';
import { RouterLink } from 'vue-router';
// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'

// export default {
//   components: {
//     HelloWorld,
//     TheWelcome
//   }
// }
</script>



<!-- CCCCCCCCCCCCCCCSSSSSSSSSSSSSS -->

<style scoped>

* {
  font-family:'Helvetica', 'Arial', sans-serif;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
    margin: 0;
}

html {
  font-size: 16px;
  
}

body {
/* margin: 10px; */ /* tried removing the margin so that the gradient banner would fill the entire top of page, it may be necessary to add some margins to child elements */
background-color: white; /* Light gray background */
color: #333; /* Dark gray text */
}
nav {
    position: relative;
    top: 90px;
    display: flex;
    justify-content: end;
    gap: 20px;
    z-index: 1;
}
header {
    box-sizing: border-box;
    width: 100%;
}
/* 
header {
    height: min-content;
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
} */
</style>
