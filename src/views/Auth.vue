<template lang="pug">
    v-container.fill-height(fluid)
        v-row(align='center' justify='center')
            v-col(cols='12' sm='9' md='6')
                v-card.elevation-12
                    v-toolbar(elevation="5" dark flat)
                        v-toolbar-title Logan
                    v-card-text
                        v-form(ref='form' v-model='valid' lazy-validation)
                            v-text-field(v-model='email' :rules='emailRules' label='E-mail' required)
                            v-text-field(v-model='password' :rules='passwordRules' label='Password' required
                            :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
                                @click:append="showPass = !showPass"
                                :type="showPass ? 'text' : 'password'"
                            )
                        v-card-actions
                            v-btn(color='error' @click='reset') Reset Form
                            v-btn(color='warning' @click='resetValidation') Reset Validation
                            v-spacer
                            v-btn(color='primary' :disabled='!valid' @click="login") Login
</template>

<script>
    export default {
        name: 'Auth',
        data() {
            return {
                valid: true,
                email: '',
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
                ],
                password: '',
                showPass: false,
                passwordRules: [
                    v => !!v || 'Password is required',
                    v => (v && v.length >= 8 && v.length <= 128) || 'Password must be more than 8 characters and less than 128 characters',
                ],
            }
        },
        methods: {
            validate () {
                if (this.$refs.form.validate()) {
                    return true
                }
            },
            reset () {
                this.$refs.form.reset()
            },
            resetValidation () {
                this.$refs.form.resetValidation()
            },
            login(){
                if (this.validate()) {
                    this.$store.dispatch('logIn', {email: this.email, password: this.password})
                }
            }
        }
    }
</script>

<style scoped lang="sass"></style>