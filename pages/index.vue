<template>
  <div></div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("comics", ["getComicBooks"])
  },
  methods: {
    ...mapActions("comics", ["fetchComics"])
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      this.fetchComics()
        .then(() => {
          this.$nuxt.$loading.finish();
        })
        .catch(err => {
          console.log(`From page - ${err}`);
          this.$nuxt.$loading.finish();
        });
    });
  }
};
</script>
