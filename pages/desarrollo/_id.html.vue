<template>
    <div style="position: relative;">

        <!-- Header Section Start -->
        <div class="absolute top-0 left-0 right-0 z-[999]" :class="{'is-sticky': isSticky}">
            <div class="container-fluid mx-auto" style="background-color: #01569f; height: 4rem;">
                <div class="flex  items-center" style="justify-content: space-evenly;">
                    <div class="flex items-center" style="height: 4rem;">
                        <Logo class="sm:max-w-[180px] max-w-[150px] mr-20 2xl:mr-[180px] py-[20px]" logLink="/"/>

                        <div class="inputSearch"  style="display: flex;">

                        <input 
                            type="text" 
                            v-model="inputSearch"
                            class="form-control" 
                            style="border-top-left-radius: 10px; border-bottom-left-radius: 10px; padding: 5px 10px;"
                            placeholder="¿Qué deseas buscar?">
                        <a  :href="'https://clasificadoscontacto.com/busqueda/general/buscar-por-' + inputSearch.normalize('NFD')
			.replace(/,/g, '')
			.replace(/[\u0300-\u036f]/g, '')
			.replace(/ /g, '-')
			.replace(/:/g, '')
			.replace('.', '')
			.replace('/', '')
			.replace(/[/]/g, '')
			.toLowerCase() + '.html' " class="searchIcon" ><i class="fa-solid fa-magnifying-glass"></i></a>
                        </div>


                        <MainMenu :textClass="'text-white sticky-height'" />
                    </div>
                    <div class="flex items-center">
                        <!-- <ButtonDefault 
                            :btnLink="'/contact'"
                            :btnClass="'btn-sm btn btn-hover-primary btn-outline-light'"
                            :btnText="'Agendar una visita'"
                            :btnClassParent="'flex'"
                            class="hidden sm:inline-flex"
                        /> -->

                        <div class="lg:hidden block leading-[1rem] ml-[10px] sm:ml-[15px]">
                            <button class="overflow-hidden bg-transparent h-[18px] relative w-[26px]" @click="mobiletoggleClass('addClass', 'show-mobile-menu')">
                                <span class="w-full h-[2px] bg-white block my-2 transition-all before:content-[''] before:top-0 before:bottom-auto before:absolute before:left-0 before:w-full before:h-[2px] before:bg-white after:content-[''] after:absolute after:left-0 after:w-full after:h-[2px] after:bg-white after:top-auto after:bottom-0"></span>
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <!-- <Header /> -->
        <!-- Header Section End -->

        <OffcanvasSidebar :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />

        <!-- Hero Slider Section Start -->
        <div class="relative">
            <HeroTwo :dev="dev" />
        </div>
        <!-- Hero Slider Section End -->

        <!-- Funfact Section Start -->
        <div class="bg-themedark">
            <FunfactTwo :dev="dev"/>
        </div>
        <!-- <div class="bg-themedark">
            <FunfactTwo/>
        </div> -->
        <!-- Funfact Section End -->

        <!-- About Section Start -->
        <div class="bg-themedark relative before:content-[''] before:absolute before:top-full before:left-0 before:w-full before:h-[50px] md:before:h-[70px] lg:before:h-[133px] mb-[50px] md:mb-[70px] lg:mb-[133px] before:bg-no-repeat before:bg-center before:bg-cover before:bg-[url('/images/banner.png')]">
            <AboutHometwo :dev="dev"/>
        </div>
        <!-- About Section End -->

        <!-- PROTOTIPOS START -->
        <div class="bg-[#f5f1ef]">
            <div class="container-fluid">
                <div class="section-padding pb-[60px] lg:pb-[100px]">
                    <!-- Section Title Start -->
                    <SectionTitle
                        secTionMargin="2xl:pb-[85px] xl:pb-[70px] lg:pb-[60px] pb-[30px] text-center"
                        subTitle="DESCRUBRE"
                        title="PROTOTIPOS"
                        titleClass="lg:mt-10 md:mt-[30px] mt-5 font-play text-[26px] sm:text-[36px] md:text-[44px] lg:text-[50px] xl:text-[54px] 2xl:text-7xl font-normal uppercase"
                    />
                    <!-- Section Title End -->
                    <TabStyleTwo :prototypes="dev.prototipos" :v="$v" :formWhats="formWhats" :folio="dev.folio"/>
                </div>
            </div>
        </div>
        <!-- PROTOTIPOS END -->


        <!-- Galeria Start -->
        <div class="container-fluid">
            <div class="section-padding border-b-1 border-bordercolor">
                <!-- Section Title Start -->
                <SectionTitle
                    secTionMargin="2xl:pb-[85px] xl:pb-[70px] lg:pb-[60px] pb-[30px] text-center"
                    subTitle="Fotos y Videos"
                    :title="dev.name + ' Album'"
                    titleClass="lg:mt-10 md:mt-[30px] mt-5 font-play text-[26px] sm:text-[36px] md:text-[44px] lg:text-[50px] xl:text-[54px] 2xl:text-7xl font-normal uppercase"
                />
                <!-- Section Title End -->
                <GallerySliderMain :images="dev.images"/>
            </div>
        </div>
        <!-- Galeria End -->

        <!--Amenidades Start -->
        <div class="w-full">
            <div class="container-fluid">
                <div class="section-padding">

                    <!-- Section Title Start -->
                    <SectionTitle
                        secTionMargin="2xl:pb-[85px] xl:pb-[70px] lg:pb-[60px] pb-[30px] text-center"
                        subTitle="Destacar"
                        title="Amenidades"
                        titleClass="lg:mt-10 md:mt-[30px] mt-5 font-play text-[26px] sm:text-[36px] md:text-[44px] lg:text-[50px] xl:text-[54px] 2xl:text-7xl font-normal uppercase"
                    />
                    <!-- Section Title End -->

                    <HighlightSection :amenities="dev.amenities"/>
                    
                </div>
            </div>
            <img class="w-auto max-w-full h-auto max-h-full" src="/images/shapes/home-2-feature-house.jpg" alt="Feature-Home-Image">
        </div>
        <!--Amenidades End -->

        

        <!--  Contact Section Start -->
        <div class="container-fluid">
            <div class="section-padding">
                <div class="2xl:pb-[85px] xl:pb-[70px] lg:pb-[60px] pb-[30px] text-center">
                    <span class="text-sm leading-[1.714] block uppercase text-primary">Solicitar disponibilidad</span>
                    <!-- <h2 class="lg:mt-10 md:mt-[30px] mt-5 font-play text-[26px] sm:text-[36px] md:text-[44px] lg:text-[50px] xl:text-[54px] 2xl:text-7xl font-normal uppercase text-black"> <a href='tel:+014956372970'>+014 956 372 970</a> </h2> -->
                </div>
                <HomeTwoContact :v="$v" :form="form" :dev="dev" />
                <!-- <div class="section-padding pb-0"> -->
                    <!-- Agent Start -->
                    <!-- <div class="agent text-center">
                        <div class="agent-thumb block mx-auto w-[120px] h-[120px] mb-6"><img src="images/agents/agent-1.png" alt="A. Robertson"></div>
                        <div class="agent-content">
                            <h3 class="agent-name">A. Robertson</h3>
                            <span class="agent-designation mb-3">Property Consultant at USAGroup Co</span>
                            <ul class="agent-info">
                                <li><a href="mailto:robert@usagroup.us">robert@usagroup.us</a></li>
                            </ul>
                        </div>
                    </div> -->
                    <!-- Agent End -->
                <!-- </div> -->
            </div>
        </div>
        <!-- Contact Section End -->


        <!-- Mapa Start -->
        <client-only>
            <div style="idth: 100%; height: 400px; position: relative;">
                <GoogleMap 
                    style="width: 100%; height: 400px position: absolute;" 
                    :mapLat="dev.latitude" 
                    :mapLng="dev.longitude" 
                    :draggable="false"
                    :scaleControl="false"/>
                    <div style="width: 100%; height: 400px; position: absolute; background: rgba(0,0,0,0.5); top:0;" ></div>
            </div>

        </client-only>
        <!-- Mapa End -->

        <!-- Footer Section Start -->
        <FooterSectionTwo/>
        <!-- Footer Section End -->

        <WhatsForm 
            v-if="showFormWhats" 
            :formWhats="formWhats"
            :v="$v"
            :dev="dev"
        />

        
        <GmailForm 
            v-if="showFormGmail" 
            :formGmail="formGmail"
            :v="$v"
            :dev="dev"
        />


        <div class="btnFab" v-on:click="openFormGmail( true )">
            <img width="35" src="https://img.icons8.com/color/344/gmail--v1.png" alt="">
        </div>

    </div>
</template>

<script>

import { required, email } from 'vuelidate/lib/validators' 


export default {
    async asyncData ({ params, store }) {

      const rutaCortada = params.id.split('_')
      const id = rutaCortada[ rutaCortada.length - 1 ].split('.')[0]
      // fetch data from API
      try {
        const dev = await store.dispatch('getDevById', id)
        console.log(dev)

        return {
            dev,
        }
      } catch (error) {
        // Redirect to error page or 404 depending on server response
      }
    },
    head() {

      const { name, descriptionlong, image } = this.dev.meta

      return {
        title: name,
        meta: [
          { hid:'description', name:'description', content: descriptionlong},
          { hid: 'og-title', property: 'og:title', content: name },
          { hid: 'og-description', property: 'og:description', content: descriptionlong },
          { hid: 'og-image', property: 'og:image', content: 'https://clasificadoscontacto.com/' + image }
        ] 
      } 
    },
    validations: {
      form: {
          name: {
              required,
          },
          email: {
              required,
              email,
          },
          phone: {
              required,
          },
          message: {
              required,
          },
        },
        formWhats: {
          name: {
              required,
          },
          phone: {
              required,
          },
          email: {
              email,
              required,
          },
          message: {
              required,
          },
        },
        formGmail: {
          name: {
              required,
          },
          phone: {
              required,
          },
          email: {
              email,
              required,
          },
          message: {
              required,
          },
        }
    },
    components: {
        Logo: () => import('@/components/logo/Logo'),
        MainMenu: () => import('@/components/header/MainMenu'),
        OffcanvasSidebar: () => import('@/components/header/OffcanvasSidebar'),
        ButtonDefault: () => import('@/components/button/ButtonDefault'),
        HeroTwo: () => import('@/components/HeroTwo'),
        FunfactTwo: () => import('@/components/FunfactTwo'),
        SectionTitle: () => import('@/components/title/SectionTitle'),
        AboutHometwo: () => import('@/components/AboutHometwo'),
        HighlightSection: () => import('@/components/HighlightSection'),
        TabStyleTwo: () => import('@/components/TabStyleTwo'),
        GallerySliderMain: () => import('@/components/gallery/GallerySliderMain'),
        TestimonialTwo: () => import('@/components/TestimonialTwo'),
        LocationStateTwo: () => import('@/components/LocationStateTwo'),
        HomeTwoContact: () => import('@/components/HomeTwoContact'),
        FooterSectionTwo: () => import('@/components/FooterSectionTwo')
    },
    data () {
        return {
            isSticky: false,
            navOpen: false,
            form: {
                name: '',
                email: '',
                phone: '',
                message: ''
            },
            formWhats: {
                name: '',
                email: '',
                phone: '',
                message: ''
            },
            formGmail: {
                name: '',
                email: '',
                phone: '',
                message: ''
            },
            inputSearch: ''
        }
    },
    methods: {
        // offcanvas mobile-menu
        mobiletoggleClass(addRemoveClass, className) {
            const el = document.querySelector('#offcanvas-menu');
            if (addRemoveClass === 'addClass') {
                el.classList.add(className);
            } else {
                el.classList.remove(className);
            }
        },
        openFormGmail( value ) {
            this.$store.commit('setShowFormGmail', value);
            this.$store.commit('setShowFormWhats', false);
        }
    },
    mounted(){
        window.addEventListener('scroll', () => {
            let scrollPos = window.scrollY
            if(scrollPos >= 100){
                this.isSticky = true
            } else {
                this.isSticky = false
            }
        })
    },
    computed: {
        showFormWhats () {
            return this.$store.state.showFormWhats;
        },
        showFormGmail () {
            return this.$store.state.showFormGmail;
        }
    }
}
</script>
<style lang='scss' scoped>
.is-sticky {
    @apply transition-all shadow-[2px_4px_8px_rgba(52,58,64,0.15)] fixed z-9999;

    & .border-class {
        @apply hidden;
    }

    background: #01569F;
}

.searchIcon {
        margin-right: 4rem;
    padding: 5px 10px;
    background: #F0E26B;
    border-bottom-right-radius: 10px;
    border-top-right-radius: 10px;
    color: #01569F;
}


@media (max-width: 576px) { 
    
    .inputSearch {
        display: none !important;
    }

 }


.btnFab {
    position: fixed;
    right: 20px;
    bottom: 20px;
    z-index: 999;
    padding: 10px;
    border-radius: 100%;
    background: #F4F1EF;
    cursor: pointer;
    border: 2px solid #E84F4B;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
}

</style>