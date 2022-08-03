<template>
<div>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-x-12 -mb-8">
        <div v-for="(ai, index) in ( showMore ? newAmenities : newAmenities.slice(0, 6))" :key="index" class="highlight group">
            <div class="highlight-icon relative z-10 flex overflow-hidden items-center justify-center w-[85px] h-[85px] transition-all duration-500 text-primary rounded-[50%] bg-primary bg-opacity-[0.05] before:content-[''] before:absolute before:-z-10 before:top-0 before:right-0 before:bottom-0 before:left-0 before:transition-all before:duration-500 before:transform before:opacity-0 before:ruonded-[50%] before:bg-primary group-hover:before:transform group-hover:before:opacity-100 group-hover:before:rounded-full group-hover:text-white">
                <span :class="
                    ai.value == 'Amueblado' ? 'text-[40px] icon-armchair' : 
                    ai.value == 'Aire_acondicionado' ? 'text-[40px] icon-air-conditioner' : 
                    ai.value == 'Mini_split' ? 'text-[40px] icon-aire' : 
                    ai.value == 'Sala' ? 'text-[40px] icon-living-room' : 
                    ai.value == 'Cuarto_con_television' ? 'text-[40px] icon-television' : 
                    ai.value == 'Cuarto_de_lavado' ? 'text-[40px] icon-washing-machine' : 
                    ai.value == 'Cocina' ? 'text-[40px] icon-kitchen' : 
                    ai.value == 'Casa_inteligente' ? 'text-[40px] icon-smart-home' : 
                    ai.value == 'Lavadero' ? 'text-[40px] icon-washing-machine' : 
                    ai.value == 'Comedor' ? 'text-[40px] icon-mesa' : 
                    ai.value == 'Lavavajillas' ? 'text-[40px] icon-lavavajillas' : 
                    ai.value == 'Ventilacion' ? 'text-[40px] icon-ventilacion' : 
                    ai.value == 'Estacionamiento_interior' ? 'text-[40px] icon-garage' : 
                    ai.value == 'Balcon' ? 'text-[40px] icon-balcon' : 
                    ai.value == 'Terraza' ? 'text-[40px] icon-terraza' : 
                    ai.value == 'Jardin' ? 'text-[40px] icon-jardin' : 
                    ai.value == 'Piscina' ? 'text-[40px] icon-piscina' : 
                    ai.value == 'Ascensor' ? 'text-[40px] icon-elevator' : 
                    ai.value == 'Cajon_Exterior' ? 'text-[40px] icon-persianas' : 
                    ai.value == 'BBq' ? 'text-[40px] icon-grill' : 
                    ai.value == 'Bar' ? 'text-[40px] icon-cocktail' : 
                    ai.value == 'Gym' ? 'text-[40px] icon-weightlifter' : 
                    ai.value == 'Muelle' ? 'text-[40px] icon-muelle' : 
                    ai.value == 'Cortina_anticiclonica' ? 'text-[40px] icon-cyclone' : 
                    ai.value == 'Zona_de_maniobras' ? 'text-[40px] icon-trasvolar' : 
                    ai.value == 'Area_de_descargo' ? 'text-[40px] icon-discharge' : 
                    ai.value == 'Stand' ? 'text-[40px] icon-food-stand' : 
                    ai.value == 'Cortina_de_metal' ? 'text-[40px] icon-blinds' : 
                    ai.value == 'Congelador' ? 'text-[40px] icon-freezer' : 
                    ai.value == 'Estacionamiento_exterior' ? 'text-[40px] icon-parking-area' : 
                    ai.value == 'Cisterna' ? 'text-[40px] icon-water-tank' : 
                    ai.value == 'Circuito cerrado' ? 'text-[40px] icon-cityscape' : 
                    ai.value == 'Mantenimiento' ? 'text-[40px] icon-technician' : 
                    ai.value == 'CCTV' ? 'text-[40px] icon-cctv' : 
                    ai.value == 'Petfrendly' ? 'text-[40px] icon-pet-friendly' : 
                    ai.value == 'Luz' ? 'text-[40px] icon-street-light' : 
                    ai.value == 'Agua' ? 'text-[40px] icon-grifo-de-agua' : 
                    ai.value == 'Gas' ? 'text-[40px] icon-gas' : 
                    ai.value == 'Wifi' ? 'text-[40px] icon-wifi' : 
                    ai.value == 'Drenaje' ? 'text-[40px] icon-discharge' : 
                    ai.value == 'Alumbrado público' ? 'text-[40px] icon-street-light' : '' 
                ">

                </span>
            </div>
            <div class="highlight-content">
                <h3 class="highlight_title text-[30px] md:text-5xl font-bold relative block mb-1 text-primary">
                    {{
                        ai.value == 'Amueblado' ? 'Amueblado' : 
                        ai.value == 'Aire_acondicionado' ? 'Aire acondicionado' : 
                        ai.value == 'Mini_split' ? 'Mini split' : 
                        ai.value == 'Sala' ? 'Sala' : 
                        ai.value == 'Cuarto_con_television' ? 'Cuarto de televisión' : 
                        ai.value == 'Cuarto_de_lavado' ? 'Cuarto de lavado' : 
                        ai.value == 'Cocina' ? 'Cocina' : 
                        ai.value == 'Casa_inteligente' ? 'Casa inteligente' : 
                        ai.value == 'Lavadero' ? 'Lavadero' : 
                        ai.value == 'Comedor' ? 'Comedor' : 
                        ai.value == 'Lavavajillas' ? 'Lavavajillas' :
                        ai.value == 'Ventilacion' ? 'Ventilación' :
                        ai.value == 'Estacionamiento_interior' ? 'Estacionamiento' :
                        ai.value == 'Balcon' ? 'Balcón' :
                        ai.value == 'Terraza' ? 'Terraza' :
                        ai.value == 'Jardin' ? 'Jardín' :
                        ai.value == 'Piscina' ? 'Piscina' :
                        ai.value == 'Ascensor' ? 'Ascensor' :
                        ai.value == 'Cajon_Exterior' ? 'Cajón exterior' :
                        ai.value == 'BBq' ? 'BBq' :
                        ai.value == 'Bar' ? 'Bar' :
                        ai.value == 'Gym' ? 'Gym' :
                        ai.value == 'Muelle' ? 'Muelle' :
                        ai.value == 'Cortina_anticiclonica' ? 'Cortina anticiclónica' :
                        ai.value == 'Zona_de_maniobras' ? 'Zona de maniobras' :
                        ai.value == 'Area_de_descargo' ? 'Area de descargo' :
                        ai.value == 'Stand' ? 'Stand' :
                        ai.value == 'Cortina_de_metal' ? 'Cortina de metal' :
                        ai.value == 'Congelador' ? 'Congelador' :
                        ai.value == 'Estacionamiento_exterior' ? 'Estacionamiento' :
                        ai.value == 'Cisterna' ? 'Cisterna' :
                        ai.value == 'Circuito cerrado' ? 'Circuito cerrado' :
                        ai.value == 'Mantenimiento' ? 'Mantenimiento' :
                        ai.value == 'CCTV' ? 'CCTV' :
                        ai.value == 'Petfrendly' ? 'Petfrendly' :
                        ai.value == 'Luz' ? 'Luz' :
                        ai.value == 'Agua' ? 'Agua' : 
                        ai.value == 'Gas' ? 'Gas' : 
                        ai.value == 'Wifi' ? 'Wifi' : 
                        ai.value == 'Drenaje' ? 'Drenaje' : 
                        ai.value == 'Alumbrado público' ? 'Alumbrado público' : ''
                    }}
                </h3>
                <p class="highlight_text text-sm mt-2">{{ ai.interior ? 'Interior' : 'Exterior'}}</p>
            </div>
        </div>
    </div>
        <p style="text-align: end; margin-top: 10px; font-weight: bold; cursor:pointer;">Ver más...</p>
</div>
</template>

<script>
export default {
        props: {
            amenities: {
                type: Object,
                required: true
            }
        },
        data() {
            return {
                newAmenities: [],
                showMore: false
            }
        },
        methods: {
            changeShowMore( value ) {
                this.showAmenities = value;
            }
        },
        created() {
            console.log(this.amenities)

            for (var key1 in this.amenities.interior) {
                for (var key2 in this.amenities.interior[key1]) {    
                    if ( this.amenities.interior[key1][key2] == 1 ) {
                        this.newAmenities.push({value: key2, interior: true});
                    }
                }   
            }

            for (var key1 in this.amenities.exterior) {
                for (var key2 in this.amenities.exterior[key1]) {    
                    if ( this.amenities.exterior[key1][key2] == 1 ) {
                        this.newAmenities.push({value: key2, interior: false});
                    }
                }   
            }


        },
        
}
</script>

<style lang="scss">
    .highlight{
        @apply  flex items-center flex-wrap gap-9 py-8 border-t-1 border-bordercolor;
        &-content{
            @apply  w-[calc(100%-122px)];
        }
        &_title{
            @apply text-2xl font-bold relative block mb-[6px] text-black;
        }
        &_text{
            @apply text-sm text-dark;
        }
    }
</style>