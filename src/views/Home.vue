<template lang="pug">
    v-app
        v-app-bar(clipped-left app)
            v-toolbar-title Transparent
        v-navigation-drawer(clipped mini-variant permanent app overflow)
            template(v-slot:append)
                v-list
                    v-list-item(link @click='exitToApp')
                        v-list-item-icon
                            v-icon exit_to_app
                        v-list-item-content
                            v-list-item-title exit
        v-footer(inset app)
            span.px-4 &copy; {{ new Date().getFullYear() }}

</template>

<script>
    export default {
        data: () => ({
        }),
        methods: {
            exitToApp(){
                this.$store.dispatch('logOut');
            }
        }
    }
</script>
