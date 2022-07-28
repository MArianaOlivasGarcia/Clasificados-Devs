<template>
    <div class="w-full sm:w-2/3 mx-auto">
        <form id="contact-form"
            v-on:submit.prevent="send" 
            class="grid gap-x-10 grid-cols-2">
            <div class="single-fild col-span-2 sm:col-span-1 mb-5">
                <input type="text" 
                    class="text-[15px] relative block w-full h-[50px] py-4 transition-all duration-500 text-[#515151] border-t-0 border-x-0 border-b-1 border-[#cfcfd4] rounded-[4px] bg-transparent focus:border-t-0 focus:border-x-0 focus:border-black focus:shadow-none focus-visible:outline-0" 
                    placeholder="Nombre"
                    v-model="form.name"
                    @blur="v.form.name.$touch()">
                <small>
                    <span v-if=" !v.form.name.required  &&
                                    v.form.name.$dirty"
                        style="color: red;">El nombre es requerido.</span>
                </small>
            </div>
            <div class="single-fild col-span-2 sm:col-span-1 mb-5">
                <input type="text" 
                class="text-[15px] relative block w-full h-[50px] py-4 transition-all duration-500 text-[#515151] border-t-0 border-x-0 border-b-1 border-[#cfcfd4] rounded-[4px] bg-transparent focus:border-t-0 focus:border-x-0 focus:border-black focus:shadow-none focus-visible:outline-0" 
                placeholder="Teléfono"
                v-model="form.phone"
                @blur="v.form.phone.$touch()">
                 <small>
                    <span v-if=" !v.form.phone.required  &&
                                    v.form.phone.$dirty"
                        style="color: red;">El teléfono es requerido.</span>
                </small>
            </div>
            <div class="single-fild col-span-2 mb-5">
                <input type="email" 
                class="text-[15px] relative block w-full h-[50px] py-4 transition-all duration-500 text-[#515151] border-t-0 border-x-0 border-b-1 border-[#cfcfd4] rounded-[4px] bg-transparent focus:border-t-0 focus:border-x-0 focus:border-black focus:shadow-none focus-visible:outline-0" 
                placeholder="Correo electrónico"
                 v-model="form.email"
                 @blur="v.form.email.$touch()">
                <small>
                    <span v-if=" !v.form.email.required  &&
                                    v.form.email.$dirty"
                        style="color: red;">El correo electrónico es requerido.</span>
                </small>
                <small>
                    <span v-if=" !v.form.email.email  &&
                                    v.form.email.$dirty"
                        style="color: red;">Correo electrónico inválido.</span>
                </small>
            </div>
            <div class="single-fild col-span-2">
                <textarea class="h-32 mb-6 text-[15px] relative block w-full py-4 transition-all duration-500 text-[#515151] border-t-0 border-x-0 border-b-1 border-[#cfcfd4] rounded-[4px] bg-transparent focus:border-t-0 focus:border-x-0 focus:border-black focus:shadow-none focus-visible:outline-0" 
                placeholder="Escribe tu mensaje aquí" 
                spellcheck="false" 
                data-gramm="false"
                 v-model="form.message"
                 @blur="v.form.message.$touch()">
                </textarea>
                 <small>
                    <span v-if=" !v.form.message.required  &&
                                    v.form.message.$dirty"
                        style="color: red;">El mensaje es requerido.</span>
                </small>


                <div class="flex justify-center w-full md:mt-10">
                    <button type="submit" 
                    value="submit" 
                    name="submit" 
                    :disabled="isLoading"
                    class="btn btn-md btn-outline-black btn-hover-primary max-w-[180px] sm:max-w-[200px] w-full">Contactar</button>
                    <p class="form-messege"></p>
                </div>
            </div>
        </form>
    </div>
</template>

<script>

import Swal from 'sweetalert2'

export default {
    data() {
        return {
            isLoading: false
        }
    },
    methods: { 
        async send() {

            if ( this.v.form.$invalid ) {
                this.v.form.$touch()
                return 
            } 

            this.isLoading = true

            const data = {
                ...this.form,
                idProduct: this.dev.productid
            }

            console.log(data)
            const success = await this.$store.dispatch('contact', data)

           if ( !success ){
            Swal.fire({
                icon: 'error',
                title: 'Oops',
                text: `No se pudo enviar el mensaje.`
            })
           } 

           const { name } = success
    

            Swal.fire({
                title: 'Mensaje enviado con éxito.',
                text: `${ name }, tu mensaje le ha sido entregado a tu asesor inmobiliario.`,
                icon: 'success'
            });

            this.isLoading = false

        }
    },
    props: {
        v: {
            type: Object,
            required: true
        },
        form: {
            type: Object,
            required: true
        },
        dev: {
            type: Object,
            required: true
        }
    },
   
}
</script>
<style lang="scss" scoped>
.btn {
    @apply z-20 before:content-[""] before:absolute before:right-0 before:top-0 before:w-[200%] before:h-[200%] before:transition-all before:duration-700 before:-z-10 before:rounded-[0%] uppercase before:opacity-0 hover:before:opacity-100;
}
.btn-md {
    @apply text-dark h-[60px] px-[30px] py-[15px] text-[14px] leading-[1] relative inline-block overflow-hidden items-center transition-all duration-700;
}
.btn-hover-primary {
    @apply hover:border-[#01569f] hover:text-white before:bg-[#01569f] hover:transition-all hover:duration-700;
}
.btn-outline-black {
    @apply border-[1px] border-black bg-transparent text-black;
}
</style>