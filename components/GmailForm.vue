<template>
  <div class="containerFab p-5">
    <p style="text-align: end;"><span v-on:click="closeForm()"><i style="cursor: pointer;" class="fa-solid fa-xmark fa-lg"></i></span></p>

    <h4><i class="fa-solid fa-envelope"></i> Completa tus datos</h4>
    <p>Te pondremos en comunicación con uno de nuestros asesores.</p>


    <form id="contact-form"
            v-on:submit.prevent="initChat" >

        <div class="col">
            <label>Nombre<span style="color: red;">*</span></label>
            <input type="text" 
                class="form-control" 
                placeholder="Nombre completo"
                v-model="formGmail.name"
                @blur="v.formGmail.name.$touch()">
            <small>
                <span v-if=" !v.formGmail.name.required  &&
                                v.formGmail.name.$dirty"
                    style="color: red;">El nombre es requerido.</span>
            </small>
        </div>


         <div class="col">
            <label>Teléfono<span style="color: red;">*</span></label>
            <vue-tel-input
                  class="form-control"
                  v-bind="telProps"
                  v-model="formGmail.phone"
                @blur="v.formGmail.phone.$touch()">
                </vue-tel-input>
             <small>
                    <span v-if=" !v.formGmail.phone.required  &&
                                    v.formGmail.phone.$dirty"
                        style="color: red;">El teléfono es requerido.</span>
            </small>
        </div>

        <div class="col">
            <label>Correo electrónico<span style="color: red;">*</span></label>
            <input type="email" 
                class="form-control" 
                placeholder="ejemplo@ejemplo.com"
                v-model="formGmail.email"
                @blur="v.formGmail.email.$touch()">
            <small>
                <span v-if=" !v.formGmail.email.required  &&
                                v.formGmail.email.$dirty"
                    style="color: red;">El correo electrónico es requerido.</span>
            </small>
            <small>
                <span v-if=" !v.formGmail.email.email  &&
                                v.formGmail.email.$dirty"
                    style="color: red;">Correo electrónico inválido.</span>
            </small>
        </div>

        <div class="col">
            <label>Mensaje<span style="color: red;">*</span></label>
            <textarea rows="2" 
                class="form-control" 
                placeholder="Escribe tu mensaje aquí"
                v-model="formGmail.message"
                 @blur="v.formGmail.message.$touch()"></textarea>
             <small>
                    <span v-if=" !v.formGmail.message.required  &&
                                    v.formGmail.message.$dirty"
                        style="color: red;">El mensaje es requerido.</span>
                </small>
        </div>

        <div class="col">
            <button class="btn-whats" :disabled="isLoading">Iniciar</button>
        </div>

    </form>
        
  </div>
</template>

<script>
import Swal from 'sweetalert2';
export default {
    props: {
        formGmail: {
            type: Object,
            required: true
        },
        v: {
            type: Object,
            required: true
        },
        dev: {
             type: Object,
            required: true
        }
    },
    data() {
        return {
             telProps: {
                id: "phoneContact",
                mode: "international",
                defaultCountry: "MX",
                disabledFetchingCountry: false,
                disabled: false,
                disabledFormatting: true,
                inputOptions: {
                    placeholder: "(999)-999-9999",
                },
                required: false,
                enabledCountryCode: true,
                enabledFlags: true,
                preferredCountries: ["MX"],
                onlyCountries: [],
                ignoredCountries: [],
                autocomplete: "off",
                name: "telephone",
                maxLen: 18,
                inputClasses: "form-control",
            },
            isLoading: false
        }
    },
    methods: {
        closeForm() {
            this.$store.commit('setShowFormGmail', false);
        },
        async initChat() {



            if ( this.v.formGmail.$invalid ) {
                this.v.formGmail.$touch()
                console.log('Formulario invalido')
                console.log(this.v.formGmail)
                return 
            } 

            this.isLoading = true


            const data = {
                ...this.formGmail,
                productId: this.dev.folio
            }

            const success = await this.$store.dispatch('sendToWhatsApp', data)
                
            if ( !success ) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops!',
                    text: 'Ocurrio un error. Por favor inténtalo más tarde.'
                })
                return;
            } 

            this.$store.commit('setShowFormGmail', false);
            this.isLoading = false

            window.open(`https://mail.google.com/mail/u/0/?fs=1&to=${ this.dev.user.email }&su=Clasificados%20Contacto&body=${this.formGmail.message}&tf=cm`, '_blank');
            
            // https://mail.google.com/mail/u/0/?fs=1&to=someone@example.com&su=Clasificados%20Contacto&body=BODY&bcc=someone.else@example.com&tf=cm
        }
    },
    created() {
        console.log(this.v)
        console.log(this.formGmail)
    }
}
</script>

<style scoped>
    .containerFab {
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        z-index: 999;
        width: 25%;
        background: #eaf0f5;
        border-radius: 10px;
        box-shadow: 2.4px 2.4px 3.2px rgba(0,0,0,.09);
    }

    @media (max-width: 576px) { 
        .containerFab {
            width: 75%;
        }
    }

    @media (min-width: 576px) and  (max-width: 768px) { 
        .containerFab {
            width: 50%;
        }
     }


    i {
        color: #C93737 ;
    }

    p { 
        font-size: 12px;
        color: #425b76;
        font-weight: 500;
    }

    .col {
        display: flex;
        flex-direction: column;
        margin-top: 10px;
    }


    .form-control {
        border: none !important;
        font-size: 14px !important;
        box-shadow: 0 8px 24px rgba(149,157,165,.2) !important;
        border-radius: 10px !important;
        padding: 5px 10px !important;
    }

    .btn-whats {
        background-color: #C93737;
        padding: 8px 10px;
        border-radius: 10px !important;
        color: white;
    }

    #phoneContact {
        background: white;
    }
</style>