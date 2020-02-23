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
            :items='usersList'
            :search='search'
            :multi-sort="true"
            show-select
            :hide-default-footer="false"
            :items-per-page="5"
            :loading="usersLoading"
            loading-text="Loading... Please wait"
            :footer-props="{'items-per-page-options': [5,10,15,25,50,-1]}"
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
                    { text: 'Full name', value: 'fullName' },
                    { text: 'Age', value: 'age' },
                    { text: 'Email', value: 'email' },
                    { text: 'User name', value: 'userName' },
                ],
            }
        },
        computed: {
            usersList(){
                let list = Object.values(this.$store.getters.usersList || {});
                list.forEach((item)=>{
                    item.fullName = item.surname + ' ' + item.name + ' ' + item.patronymic;
                });
                return list;
            },
            usersLoading(){return this.$store.getters.usersLoading}
        },
        mounted() {
            this.$store.dispatch('usersList');
        },
    }
</script>

<style scoped lang="sass"></style>