<script setup>
import axios from 'axios';
import { ref, reactive, watch } from 'vue'
import {Checkbox, useRecaptchaProvider} from 'vue-recaptcha'
useRecaptchaProvider() 
// const sitekey=import.meta.env.RECAPTCHAV2_SITEKEY
// console.log(sitekey)

const ReCaptchaValid = ref(false)
const hasErrorMessages = ref(false)
const loading = ref(null)
console.log('hasErrorMessages', hasErrorMessages)

const errors = {
  NameRequired: 'Name is required.',
  EmailRequired: 'Email is required.',
  EmailInvalid: 'Please specify a real email.',
  MessageRequired: 'Please enter your message.'
};

const ErrorMessages = ref({
    name: '',
    email: '',
    message: ''
})
console.log('ErrorMessages',ErrorMessages)

const formData = reactive({ 
    data: { 
        Name : {
            name: 'Name',
            value : '',
            isValid: null,
            validationMessage: "",
            required: true,            
        },          
        Email : {
            name: 'Email',
            value : '',
            isValid: null,
            validationMessage: "",
            required: true,            
        },            
        Message : {
            name: 'Message',
            value : '',
            isValid: null,
            validationMessage: "",
            required: true,            
        }
    },
    isValid: false
});
console.log('formData',formData)
console.log('formData.isValid',formData.isValid)


const validateField = (field) => {
    if (field.required && !field.value) {
        field.isValid = false;
        field.validationMessage = errors[`${field.name}Required`];
    } else if (field.name === 'Email' && field.value && !isEmailValid(field.value)) {
        field.isValid = false;
        field.validationMessage = errors.EmailInvalid;
    } else {
        field.isValid = true;
        field.validationMessage = '';
    }
};

const isEmailValid = (email) => {
    // Add your email validation logic here
    return /\S+@\S+\.\S+/.test(email);
};

// Watch for changes in form data
watch(formData, (newFormData) => {
    let allFieldsValid = true;
    for (const key in newFormData.data) {
        validateField(newFormData.data[key])
        if (!newFormData.data[key].isValid) {
            allFieldsValid = false;
        }
    }
    formData.isValid = allFieldsValid;
    formData.value = newFormData.value
    console.log('watcher data',formData)
}, { deep: true });

const handleSubmit = () => {
    if (!ReCaptchaValid.value) {
        console.log('ReCaptcha is invalid');
        return; // Don't proceed with form submission
    }
    loading.value = true;
    if (formData.isValid) {
        // Create a new data object with the data to be sent
        const data = {
            name: formData.data.Name.value,
            email: formData.data.Email.value,
            message: formData.data.Message.value
        };
        // Submit the data
        axios.post('http://localhost:8000/api/v1/contact_submissions', data, {
            headers: {
                'Access-Control-Allow-Origin': '*', // Replace * with the specific origin if needed
            }
        }).then(response => {
            console.log('Data submitted:', response.data);
            // Clear form inputs
            formData.data.value = {
                Name: '',
                Email: '',
                Message: ''
            };
            
        loading.value = false;
        }).catch(error => {
            console.error('Errors:', error.response.data.errors);
            hasErrorMessages.value = true;
            ErrorMessages.value = error.response.data.errors;
            loading.value = false;
        });
    } 
    hasErrorMessages.value = false;
};

</script>

<template>
    <section class="flex flex-wrap justify-between w-10/12 h-full gap-6 pt-40 pb-20 mx-auto 2xl:w-8/12 lg:gap-0">
        <div class="w-full h-full lg:w-6/12">
            <h1 class="lg:text-[64px] md:text-[52px] text-[40px] font-[700]">
            Contact Us
            </h1>
            <form  class="flex flex-col gap-8 mt-[32px]" @submit.prevent="handleSubmit">
                <div class="w-full space-y-2">
                    <label for="Name" class="font-[400]">Name</label>
                    <input type="text" id="Name" name="Name" aria-labelledby="Name"
                    v-model="formData.data.Name.value"
                    :required="formData.data.Name.required" 
                    class="w-full block px-4 py-3 bg-transparent appearance-none border-b-[1px] border-gold focus:outline-none focus:border-b-[2px] focus:ring-0 peer"
                    :class="{'border-red-500 focus:border-red-500' : formData.data.Name.isValid===false}">
                    <p v-show="!formData.data.Name.isValid" className="ms-2 mb-2 font-[700] text-[12px] text-red-500">{{formData.data.Name.validationMessage}}</p>
                </div>
                <div class="w-full space-y-2">
                    <label for="Email" class="font-[400]">Email</label>
                    <input type="text" id="Email" name="Email" aria-labelledby="Email"
                    v-model="formData.data.Email.value" 
                    :required="formData.data.Email.required" 
                    class="w-full block px-4 py-3 bg-transparent appearance-none border-b-[1px] border-gold focus:outline-none focus:border-b-[2px] focus:ring-0 peer"
                    :class="{'border-red-500 focus:border-red-500' : formData.data.Email.isValid===false}">
                    <p v-show="!formData.data.Email.isValid" className="ms-2 mb-2 font-[700] text-[12px] text-red-500">{{formData.data.Email.validationMessage}}</p>
                </div>      
                <div class="w-full space-y-2">
                    <label for="Message" class="font-[400]">Message</label>
                    <textarea id="Message" name="Message" rows="2" aria-labelledby="Message"
                    v-model="formData.data.Message.value" 
                    :required="formData.data.Message.required" 
                    style="min-height: 40px;"
                    class="w-full block px-4 py-3 bg-transparent appearance-none border-b-[1px] border-gold focus:outline-none focus:border-b-[2px] focus:ring-0 peer"
                    :class="{'border-red-500 focus:border-red-500' : formData.data.Message.isValid===false}"></textarea>
                    <p v-show="!formData.data.Message.isValid" className="ms-2 mb-2 font-[700] text-[12px] text-red-500">{{formData.data.Message.validationMessage}}</p>
                </div>
                <!-- Recaptcha -->
                <div class="w-full space-y-2">
                    <!-- <vue-recaptcha ref="recaptcha" v-model="ReCaptchaValid" :sitekey="sitekey"></vue-recaptcha> -->

                    <Checkbox v-model="ReCaptchaValid" />
                    <p v-show="!ReCaptchaValid" className="ms-2 mb-2 font-[700] text-[12px] text-red-500">Please click the checkbox</p>
                </div>
                <!-- Submit -->
                <div class="flex flex-wrap items-center w-full gap-2">
                    <button aria-label="send your message" 
                    class="w-fit cursor-pointer px-4 py-3 font-[400] text-center rounded-[2px] bg-gold hover:bg-olive transition-all duration-400  hover:text-white uppercase"
                    >
                    {{loading === true ?  'Sending...' : 'Send Message'}}
                    </button>            
                    <p v-if="loading === false && hasErrorMessages === false" class="text-green-500">Thank you for your message, we'll get back to you soon.</p>                
                </div>

                <!-- Errors after submit -->
                <ul v-if="hasErrorMessages === true && ErrorMessages.length > 0" class="p-4 list-disc bg-red-200 border-b-red-600 border-b-s-4 marker:text-red-600" role="list">
                    <li v-for="(item, key) in ErrorMessages" :key="key" className="list-item mx-2">{{ item[0] }}</li>
                </ul>
            </form>
        </div>
        <div class="w-full lg:w-5/12">
            <img src="/images/contact/contact.webp" alt="Bissar Concepts" width="557" height="558" center cover responsive loading="lazy" class="relative mx-auto md:ms-auto md:me-0 z-1"/>
        </div>
    </section>
</template>
