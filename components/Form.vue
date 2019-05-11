<template>
    <div class="mt-3">
        <b-form inline>
            <b-form-group class="flex-fill px-1">
                <b-input
                    v-on:keyup="handleInput"
                    id="comic-books-filter"
                    class="w-100"
                    v-model="filterComics"
                    placeholder="Filter comics by typing here..."
                ></b-input>
            </b-form-group>
            <b-form-group class="flex-fill pl-0 pl-sm-2 pl-md-4">
                <label class="float-left mt-1 mr-1">Release week:</label>
                <b-form-select
                    v-on:change="handleSelect"
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
            textStr: "",
            selected: 0,
            releaseWeeks: [{ value: 0, text: "Select a week" }]
        };
    },
    computed: {
        filterComics: {
            get() {
                return this.textStr;
            },
            set(newStr) {
                this.textStr = newStr;
            }
        },
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
        handleInput: function() {
            this.setFilter(this.textStr);
        },
        ...mapActions("comics", [
            "fetchComics",
            "setStartDate",
            "setEndDate",
            "setWeeks",
            "setFilter"
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
