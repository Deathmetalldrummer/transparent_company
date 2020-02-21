<template lang="pug">
    DataTable
</template>

<script>
    import DataTable from '@/components/dataTable'
     export default {
            name: 'Users',
            components: {DataTable},
            data() {
                return {
                    message: 'Слава Одину, Users работает!'
                }
            }
        }
</script>

<style scoped lang='sass'>
</style>