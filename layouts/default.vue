<template>
    <div>
        <Brand/>
        <div class="container navbar-padding">
            <Header/>
            <nuxt/>
        </div>
    </div>
</template>

<script>
import Brand from "~/components/Brand";
import Header from "~/components/Header";

export default {
    components: {
        Brand,
        Header
    }
};
</script>

<style scoped>
.navbar-padding {
    padding-top: 60px;
}
</style>


