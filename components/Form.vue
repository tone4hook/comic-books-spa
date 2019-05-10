<template>
    <div>
        <b-form inline>
            <b-form-group class="flex-fill px-1">
                <b-input
                    id="comic-books-filter"
                    class="w-100"
                    v-model="filter"
                    placeholder="Filter comics by typing here..."
                ></b-input>
            </b-form-group>
            <b-form-group class="flex-fill px-1">
                <label class="float-left mt-1 mr-1">Release week:</label>
                <b-form-select
                    @change="handleSelect"
                    id="release-weeks"
                    v-model="selected"
                    :options="releaseWeeks"
                ></b-form-select>
            </b-form-group>
        </b-form>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
    data: function() {
        return {
            filter: "",
            selected: 0,
            releaseWeeks: [{ value: 0, text: "Select a week" }]
        };
    },
    computed: {
        ...mapGetters("comics", ["getReleaseWeeks"])
    },
    methods: {
        handleSelect: function(value) {
            this.selected = value;
            this.setStartDate(this.getReleaseWeeks[value].start);
            this.setEndDate(this.getReleaseWeeks[value].end);
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
        },
        ...mapActions("comics", [
            "fetchComics",
            "setStartDate",
            "setEndDate",
            "setWeeks"
        ])
    },
    mounted() {
        this.setWeeks();
        this.releaseWeeks = this.getReleaseWeeks.map((item, index) => {
            return {
                value: index,
                text: item.start
            };
        });
    }
};
</script>
