<template>
  <Header />

  <!-- Ici on affiche le 'route' actuel -->
  <router-view />

  <Footer />
</template>

<script>
import { useMeta } from "vue-meta";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",

  components: {
    Header,
    Footer,
  },

  setup() {
    useMeta({
      title: "EURL.B.BAT",
      htmlAttrs: { lang: "fr" },
      meta: [
        { name: 'author', content: 'Tech Team Agency' },
        //{ rel: 'canonical', href: 'url' },
        { name: 'description', content: 'Débouchage.' }
      ]
    });
  }
};
</script>
