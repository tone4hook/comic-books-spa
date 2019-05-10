<template>
    <b-container class="mt-5">
        <b-row v-if="getComicsLoaded">
            <b-col
                cols="12"
                sm="6"
                md="4"
                lg="3"
                v-for="comic in getComicBooks"
                v-bind:key="`${comic.id}`"
                class="d-flex"
            >
                <GridItem v-bind:comic="comic"/>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import { mapGetters } from "vuex";
import GridItem from "./GridItem";

export default {
    components: {
        GridItem
    },
    computed: {
        ...mapGetters("comics", ["getComicBooks", "getComicsLoaded"])
    }
};
</script>

