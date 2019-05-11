<template>
    <div class="overflow-auto">
        <div class="mt-3">
            <b-pagination v-on:change="pageHandler" v-model="currentPage" :total-rows="228"></b-pagination>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    data() {
        return {
            currentPage: 1
        };
    },
    methods: {
        pageHandler: function(page) {
            const offset = (page - 1) * 20;
            this.setOffset(offset);
            this.fetchComics();
        },
        ...mapActions("comics", ["fetchComics", "setOffset"])
    },
    computed: {
        ...mapGetters("comics", ["getTotalResults"])
    }
};
</script>
