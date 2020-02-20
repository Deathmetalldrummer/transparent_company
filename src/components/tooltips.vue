<template lang="pug">
    v-tooltip(v-model='show' right)
        template(v-slot:activator='{ on }')
            v-icon(v-on='on') {{icon}}
        span {{text}}

</template>

<script>
    export default {
        name: 'Tooltips',
        props: ["icon","text"],
        data() {
            return {
                show: false,
                on: false,
                message: 'Слава Одину, Tooltips работает!'
            }
        },
    }
</script>

<style scoped lang="sass"></style>