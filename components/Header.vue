<template>
    <div>
        <b-nav tabs fill>
            <b-nav-item v-bind:active="currentPath === '/' ? true : false">
                <nuxt-link v-on:click.native="navItemHandler" to="/">Comic Books</nuxt-link>
            </b-nav-item>
            <b-nav-item v-bind:active="currentPath === '/about' ? true : false">
                <nuxt-link v-on:click.native="navItemHandler" to="/about">About</nuxt-link>
            </b-nav-item>
        </b-nav>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            currentPath: $nuxt.$route.path
        };
    },
    methods: {
        navItemHandler: function() {
            this.currentPath = $nuxt.$route.path;
        }
    }
};
</script>

<style scoped>
.nav-link a {
    color: #6c757d;
}
.active a {
    color: #007bff;
}
</style>




