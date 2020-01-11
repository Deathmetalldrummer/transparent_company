<template lang="pug">
    v-app#app
        Home(v-if="isAuth && globalLoader")
        Auth(v-if="!isAuth && globalLoader")
</template>

<script>
    import Home from '@/views/Home'
    import Auth from '@/views/Auth'

    export default {
        name: 'App',
        components: {
            Home,
            Auth,
        },
        data: () => ({}),
        computed: {
            globalLoader() {return !this.$store.getters.globalLoader},
            isAuth() {return this.$store.getters.currentUser !== null}
        }
    };
</script>
