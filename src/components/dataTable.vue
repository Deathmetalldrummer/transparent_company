<template lang="pug">
    v-card
        v-card-title
            | Users
            v-spacer
            v-text-field(v-model='search' append-icon='search' label='Search' single-line hide-details)
        v-data-table(
            v-model="selected"
            item-key="name"
            :headers='headers'
            :items='desserts'
            :search='search'
            :multi-sort="true"
            show-select
            :loading="false"
            :hide-default-footer="true"
            :items-per-page="100"
        )
</template>

<script>
    export default {
        name: 'DataTable',
        data() {
            return {
                selected: [],
                search: '',
                headers: [
                    { text: 'Name', value: 'name' },
                    { text: 'Email', value: 'email' },
                    { text: 'Age', value: 'age' },
                ],
                desserts: [],
            }
        },
        mounted() {
            this.log();
        },
        methods: {
            log(){
                for (let i = 0; i < 50; i++) {
                   this.desserts.push({
                       name: 'User_'+i,
                       email: 'User_'+i+'@it.io',
                       age: this.randomInteger(18,60),
                   })
                }
            },
            randomInteger(min, max) {
                let rand = min + Math.random() * (max + 1 - min);
                return Math.floor(rand);
            }
        }
    }
</script>

<style scoped lang="sass"></style>