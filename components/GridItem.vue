<template>
    <div class="card align-self-stretch mb-5">
        <img
            v-b-modal="`${comic.id}`"
            v-bind:src="comic.image.medium_url"
            class="card-img-top"
            v-bind:alt="comic.volume.name"
        >
        <div class="card-body d-flex flex-column justify-content-center">
            <div>
                <h5 v-b-modal="`${comic.id}`" class="card-title">{{comic.volume.name}}</h5>
                <p class="card-text">Issue #{{comic.issue_number}}</p>
                <small class="text-primary font-italic">Store date: {{comic.store_date}}</small>
            </div>
        </div>
        <b-modal
            v-bind:id="`${comic.id}`"
            v-bind:title="`${comic.volume.name} #${comic.issue_number}`"
        >
            <img
                v-bind:src="comic.image.medium_url"
                class="card-img-top"
                v-bind:alt="comic.volume.name"
            >
            <p v-html="comic.description" class="mt-3"></p>
            <small class="text-primary font-italic text-right">Store date: {{comic.store_date}}</small>
        </b-modal>
    </div>
</template>

<script>
export default {
    props: {
        comic: Object
    }
};
</script>

