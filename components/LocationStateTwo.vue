<template>
    <div class="flex items-center flex-col">

        <ul class="w-full grid grid-cols-1 lg:grid-cols-2 gap-7 md:gap-9 container-fluid section-padding pt-0">
            <li class="relative group" v-for="(item, index) in categories" :key="index" :class="[index === active ? 'trigger-active' : '']" @click='activate(index)'>
                <div class="cursor-pointer relative flex flex-wrap gap-5 md:gap-8 xl:gap-11 items-start">
                    <div class="icon relative z-10 flex overflow-hidden items-center justify-center w-[70px] h-[70px] transition-all duration-500 text-primary rounded-[50%] bg-primary bg-opacity-[0.05] before:content-[''] before:absolute before:-z-10 before:top-0 before:right-0 before:bottom-0 before:left-0 before:transition-all before:duration-500 before:transform before:opacity-0 before:ruonded-[50%] before:bg-primary group-hover:before:transform group-hover:before:opacity-100 group-hover:before:rounded-full group-hover:text-white"><i class="text-[30px] leading-[1] flex" :class="item.icoClass"></i></div>
                    <div class="content flex-1">
                        <h3 class="title text-2xl sm:text-3xl xl:text-4xl text-white">{{item.title}}</h3>
                        <p class="address text-white opacity-[0.75]">{{item.subtitle}}</p>
                    </div>
                </div>
            </li>
        </ul>

        <div class="w-full">
            <div class="map-location-layer">
                <img class="w-full" src="/images/locations/map-2.png" alt="location map">
                <div id="map-location-1" class="map-location-item active" style="top: 20%; left: 35%;">
                    <span class="title" v-if="active === 0">Gaucho Restaurant</span>
                </div>
                <div id="map-location-2" class="map-location-item" style="left: 18%; top: 45%;">
                    <span class="title" v-if="active === 1">Manhattan Hospital</span>
                </div>
                <div id="map-location-3" class="map-location-item" style="left: 28%; bottom: 25%;">
                    <span class="title" v-if="active === 2">Costco Supermarket Center</span>
                </div>
                <div id="map-location-4" class="map-location-item" style="left: 59%; top: 20%;">
                    <span class="title" v-if="active === 3">Ecostate Park</span>
                </div>
                <div id="map-location-5" class="map-location-item" style="right: 20%; bottom: 39%;">
                    <span class="title" v-if="active === 4">Harvard University</span>
                </div>
                <a class="google-map-link" href="https://www.google.com/maps/@23.1866368,89.6499712,13z" target="_blank"><i class="fi fi-map-1 mr-2"></i>OPEN GOOGLE MAP</a>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        data () {
            return {
                active: 0,
                categories: [
                    {
                        icoClass: "fi fi-restaurant",
                        title: "Gaucho Coffee & Restaurant",
                        subtitle: "1.5 Km - Restaurant"
                    },
                    {
                        icoClass: "fi fi-parking-1",
                        title: "Shadow Bay Park Pavilion",
                        subtitle: "3.5 Km - Park"
                    },
                    {
                        icoClass: "fi fi-hospital",
                        title: "Orlando General Hospital",
                        subtitle: "1.8 Km - Hospital"
                    },
                    {
                        icoClass: "fi fi-conference-room",
                        title: "Orlando Memorial Middle School",
                        subtitle: "5.7 Km - School"
                    },
                    {
                        icoClass: "fi fi-bananas",
                        title: "Costco Supermarket Center",
                        subtitle: "3.2 Km - Supermarket"
                    }
                ]
            }
        },
        methods: {
            activate(index) {
                this.active = index;
            }
        }
    }
</script>

<style lang="scss" scoped>
.trigger-active {
    & .icon{
        @apply border-primary before:bg-primary before:transform before:opacity-100 before:rounded-full text-white;
    }
}

.redcolor{
    @apply text-[#F92502];
}
.map-location-layer{
    @apply relative;
}
.map-location-item{
    @apply absolute md:w-[40px] sm:w-[20px] w-[10px] md:h-[40px] sm:h-[20px] h-[10px] cursor-pointer rounded-full bg-primary shadow-[0_0_0_10px_rgba(14,164,120,0.1)];
    & .title{
        @apply text-sm whitespace-nowrap font-semibold absolute -top-[70px] left-1/2 transform -translate-x-1/2 text-black py-1 px-4 transition-all duration-500 rounded-[4px] bg-white shadow-[0_10px_40px_0_rgba(0,0,0,0.15)] before:absolute before:-bottom-6 before:left-1/2 before:w-[10px] before:h-6 before:transform before:-translate-x-1/2 before:bg-white before:content-[''];
        &::before{
            clip-path: polygon(0% 0%, 100% 0%, 50% 100%, 50% 100%, 0% 0%);
        }
    }
}
.google-map-link{
    @apply absolute bottom-1 sm:bottom-10 left-0 w-full text-center text-white text-[12px] sm:text-[15px];
}
</style>