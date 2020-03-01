<template>
    <section id="contact-us" class="s-feedback" :style="{backgroundImage: 'url(' + bgImage + ')'}">
        <div class="container">
            <h3 class="title">Contact Us</h3>

            <div class="layout">
                <form ref="form" class="form" @submit.prevent="onSubmit">
                    <label class="form-field" :class="{'has-error': $v.name.$error}">
                        <span>Name</span>
                        <imask-input
                            type="text"
                            name="name"
                            v-model="name"
                            :mask="/^[[A-Za-z\'\- ]*$/"
                            maxLength="30"
                        ></imask-input>
                        <div v-if="!$v.name.required && $v.name.$dirty" class="error-info">Field is required</div>
                    </label>

                    <label class="form-field" :class="{'has-error': $v.phone.$error}">
                        <span>Phone</span>
                        <imask-input
                            type="text"
                            name="phone"
                            v-model.trim="phone"
                            :mask="'+{380}(00)000-00-00'"
                        ></imask-input>
                        <div v-if="!$v.phone.required && $v.phone.$dirty" class="error-info">Field is required</div>
                        <div v-if="!$v.phone.minLength && $v.phone.$dirty" class="error-info">
                            Password must have at least {{$v.phone.$params.minLength.min}} letters
                        </div>
                    </label>

                    <label class="form-field" :class="{'has-error': $v.email.$error}">
                        <span>E-mail</span>
                        <input
                            v-model.trim="email"
                            type="text"
                            name="email"
                        >
                        <div v-if="!$v.email.required && $v.email.$dirty" class="error-info">Field is required</div>
                    </label>

                    <label
                        class="form-field agree"
                        :class="{'has-error': $v.agree.$error}"
                    >
                        <input v-model="agree" type="checkbox">
                        <div class="checkmark">
                            <img src="@/assets/images/checkmark.svg" alt="Checkmark">
                        </div>
                        <p>I agree the processing of personal data</p>
                        <div v-if="!$v.agree.sameAs && $v.agree.$dirty" class="error-info">Field is required</div>
                    </label>

                    <button type="submit" class="submit">
                        Get in touch
                        <transition name="fade">
                            <clip-loader
                                v-if="loading"
                                :color="colorSpinner"
                                :size="sizeSpinner"
                            ></clip-loader>
                        </transition>
                    </button>
                </form>

                <div class="footnote">Please tell us more about your request and give us info about your company and country</div>
            </div>
        </div>
    </section>
</template>

<script>
import bgImage from '@/assets/images/bg.png';
import { IMaskComponent } from 'vue-imask';
import {
    required, minLength, email, sameAs,
} from 'vuelidate/lib/validators';
import ClipLoader from 'vue-spinner/src/ClipLoader.vue';

export default {
    name: 'Feedback',

    data: () => ({
        name: '',
        phone: '',
        email: '',
        agree: false,
        bgImage,

        loading: false,
        colorSpinner: '#ffffff',
        sizeSpinner: '17px',
    }),

    components: {
        'imask-input': IMaskComponent,
        ClipLoader,
    },

    computed: {
        getAgree() {
            return this.agree;
        },
    },

    validations: {
        name: { required },
        phone: {
            required,
            minLength: minLength(17),
        },
        email: {
            required,
            email,
        },
        agree: {
            sameAs: sameAs(() => true),
        },
    },

    mounted() {
        const { form } = this.$refs;
        const inputs = form.querySelectorAll('input[type=text]');

        [...inputs].forEach((item) => {
            const parent = item.closest('.form-field');

            item.addEventListener('focus', () => {
                if (parent) {
                    parent.classList.add('focus');
                }
            });

            item.addEventListener('blur', () => {
                if (parent) {
                    parent.classList.remove('focus');
                }
            });
        });
    },

    methods: {
        onSubmit() {
            const formData = new FormData(this.$refs.form);
            this.loading = true;
            this.$v.$touch();

            if (!this.$v.$invalid) {
                this.$store.dispatch('SEND_DATA', formData);
            } else {
                console.log('failure!');
            }

            this.loading = false;
        },
    },
};
</script>
