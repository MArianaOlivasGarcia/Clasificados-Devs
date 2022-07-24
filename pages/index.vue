<template>
    <div>
        
        <!-- Header Section Start -->
        <div class="absolute top-0 left-0 right-0 z-[999]" :class="{'is-sticky': isSticky}">
            <div class="container-fluid mx-auto">
                <div class="flex justify-between items-center">
                    <div class="flex items-center">
                        <Logo class="sm:max-w-[180px] max-w-[150px] mr-20 2xl:mr-[180px] py-[20px]" logLink="/"/>
                        <MainMenu :textClass="'text-white sticky-height'"/>
                    </div>
                    <div class="flex items-center">
                        <ButtonDefault 
                            :btnLink="'/contact'"
                            :btnClass="'btn-sm btn btn-hover-primary btn-outline-light'"
                            :btnText="'Schedule a visit'"
                            :btnClassParent="'flex'"
                            class="hidden sm:inline-flex"
                        />
                        <!-- Offcanvas Button Start -->
                        <div class="lg:hidden block leading-[1rem] ml-[10px] sm:ml-[15px]">
                            <button class="overflow-hidden bg-transparent h-[18px] relative w-[26px]" @click="mobiletoggleClass('addClass', 'show-mobile-menu')">
                                <span class="w-full h-[2px] bg-white block my-2 transition-all before:content-[''] before:top-0 before:bottom-auto before:absolute before:left-0 before:w-full before:h-[2px] before:bg-white after:content-[''] after:absolute after:left-0 after:w-full after:h-[2px] after:bg-white after:top-auto after:bottom-0"></span>
                            </button>
                        </div>
                        <!-- Offcanvas Button End -->
                    </div>
                </div>
                <div class="border-class flex w-full h-[1px] opacity-[0.25] bg-white"></div>
            </div>
        </div>
        <!-- Header Section End -->

        <OffcanvasSidebar :class="{'show-mobile-menu' : navOpen}" @togglenav="navOpen = !navOpen" />

        <!-- Hero Slider Section Start -->
        <div class="relative">
            <HeroSlider />
            <div class="scroll-to">
                <a href="#h1-about-section" class="absolute -bottom-[3px] justify-center left-1/2 -translate-x-1/2 z-999 flex items-center w-[118px] h-[28px]" style="background-image:url(/images/shapes/hero-scroll-down.png)">
                    <i class="fi fi-down-arrow"></i>
                </a>
            </div>
        </div>
        <!-- Hero Slider Section End -->

        <!-- Funfact Section Start -->
        <div id="h1-about-section">
            <div class="container-fluid">
                <div class="section-padding border-b-1 border-bordercolor">
                    <FunfactSection/>
                </div>
            </div>
        </div>
        <!-- Funfact Section End -->

        <!-- Advantages Section Start -->
        <div class="container-fluid">
            <div class="section-padding border-b-1 border-bordercolor">
                <SectionTitle
                    secTionMargin="mb-10"
                    subTitle="The Advantages"
                    title="a"
                    titleClass="hidden"
                />
                <Advantages/>
            </div>
        </div>
        <!-- Advantages Section End -->

        <!-- Testimonial Section Start -->
        <div class="container-fluid">
            <div class="section-padding">
                <Testimonial/>
            </div>
        </div>
        <!-- Testimonial Section End -->

        <!-- Floor Plan Section Start -->
        <div class="bg-light">
            <div class="container-fluid">
                <div class="section-padding pb-0 lg:pb-[100px] xl:pb-0">
                    <SectionTitle
                        secTionMargin="mb-10"
                        subTitle="Floor Plan"
                        title="a"
                        titleClass="hidden"
                    />
                    <TabStyleOne/>
                </div>
            </div>
        </div>
        <!-- Floor Plan Section End -->

        <!-- Features Section Start -->
        <div class="container-fluid">
            <div class="section-padding">
                <Features/>
            </div>
        </div>
        <!-- Features Section End -->
        
        <!-- PlayGround Banner Section Start -->
        <div class="relative w-full z-10 pt-[30%] pb-8 sm:pb-12 md:pb-[100px] bg-no-repeat bg-fixed bg-center bg-cover before:content-[''] before:absolute before:-z-[1] before:top-0 before:left-0 before:w-full before:h-full before:opacity-10 before:bg-black" style="background-image:url(/images/others/playground-bg.jpg)">
            <div class="container-fluid">
                <h2 class="playground-title text-[40px] sm:text-[60px] md:text-[90px] lg:text-[120px] xl:text-[150px] leading-[0.867] text-white">Public<br>Playground</h2>
            </div>
        </div>
        <!-- PlayGround Banner Section End -->

        <!-- Location State Section Start -->
        <div class="container-fluid">
            <div class="section-padding border-b-1 border-bordercolor">
                <SectionTitle
                    secTionMargin="mb-10"
                    subTitle="Latest News From Ecostate"
                    title="a"
                    titleClass="hidden"
                />
                <LocationState/>
            </div>
        </div>
        <!-- Location State Section End -->

        <!-- Blog Feature Post section Start -->
        <div class="container-fluid">
            <div class="section-padding">
                <SectionTitle
                    secTionMargin="mb-10"
                    subTitle="Latest News From Ecostate"
                    title="a"
                    titleClass="hidden"
                />
                <BlogPost />
            </div>
        </div>
        <!-- Blog Feature Post section Start -->

        <!-- Agent Section Start -->
        <div class="bg-light">
            <div class="container-fluid">
                <div class="section-padding">
                    <AgentSection/>
                </div>
            </div>
        </div>
        <!-- Agent Section End -->

        <!-- Footer Section Start -->
        <FooterSection/>
        <!-- Footer Section End -->

    </div>
</template>

<script>
export default {
    components: {
        Logo: () => import('@/components/logo/Logo'),
        MainMenu: () => import('@/components/header/MainMenu'),
        OffcanvasSidebar: () => import('@/components/header/OffcanvasSidebar'),
        ButtonDefault: () => import('@/components/button/ButtonDefault'),
        HeroSlider: () => import('@/components/HeroSlider'),
        FunfactSection: () => import('@/components/FunfactSection'),
        SectionTitle: () => import('@/components/title/SectionTitle'),
        Advantages: () => import('@/components/Advantages'),
        Testimonial: () => import('@/components/Testimonial'),
        Features: () => import('@/components/Features'),
        Features: () => import('@/components/Features'),
        LocationState: () => import('@/components/LocationState'),
        AgentSection: () => import('@/components/AgentSection'),
        FooterSection: () => import('@/components/FooterSection')
    },
    data () {
        return {
            isSticky: false,
            navOpen: false
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
    }
}
</script>
<style lang='scss' scoped>
.is-sticky {
    @apply bg-black transition-all shadow-[2px_4px_8px_rgba(52,58,64,0.15)] fixed z-9999;

    & .border-class {
        @apply hidden;
    }
}
</style>