<template lang="pug">
    v-list
        v-list-item(link to="/Users")
            v-list-item-icon
                //v-icon people
                Tooltips(icon="people" text="Users")
            v-list-item-content
                v-list-item-title Users
        v-list-item(link to="/Charts")
            v-list-item-icon
                //v-icon bar_chart
                Tooltips(icon="bar_chart" text="Charts")
            v-list-item-content
                v-list-item-title Charts
        v-list-item(link to="/Chats")
            v-list-item-icon
                //v-icon chat_bubble_outline
                Tooltips(icon="chat_bubble_outline" text="Chats")
            v-list-item-content
                v-list-item-title Chats
        v-list-item(link to="/Timer")
            v-list-item-icon
                //v-icon timer
                Tooltips(icon="timer" text="Timer")
            v-list-item-content
                v-list-item-title Timer
        v-list-item(link to="/Settings")
            v-list-item-icon
                //v-icon settings
                Tooltips(icon="settings" text="Settings")
            v-list-item-content
                v-list-item-title Settings
</template>

<script>
    import Tooltips from '@/components/tooltips'
    export default {
        name: 'Nav',
        data() {
            return {
                message: 'Слава Одину, Nav работает!'
            }
        },
        components: {Tooltips}
    }
</script>

<style scoped lang="sass"></style>