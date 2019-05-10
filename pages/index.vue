<template>
    <div>
        <Form/>
        <Grid/>
    </div>
</template>

<script>
import { mapActions } from "vuex";
import Form from "~/components/Form";
import Grid from "~/components/Grid";

export default {
    components: {
        Form,
        Grid
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
