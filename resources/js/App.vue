<template>
    <h1> Hello, Vuejs with Laravel </h1>
    <router-view name="main"></router-view>
    <router-link :to="{ name: 'login' }">
        LOGIN
    </router-link>
</template>
<script>
// import router from './router';
export default {
    
}
</script>
<style lang="scss" scoped>
    h1 {
        color: red;
    }
</style>