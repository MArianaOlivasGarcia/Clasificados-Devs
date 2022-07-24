<template>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-x-12 -mb-8">
        <div v-for="(ai, index) in newAmenities" :key="index" class="highlight group">
            <div class="highlight-icon relative z-10 flex overflow-hidden items-center justify-center w-[85px] h-[85px] transition-all duration-500 text-primary rounded-[50%] bg-primary bg-opacity-[0.05] before:content-[''] before:absolute before:-z-10 before:top-0 before:right-0 before:bottom-0 before:left-0 before:transition-all before:duration-500 before:transform before:opacity-0 before:ruonded-[50%] before:bg-primary group-hover:before:transform group-hover:before:opacity-100 group-hover:before:rounded-full group-hover:text-white">
                <i class="text-[40px] leading-[1] flex" ></i>
                <!-- <img src="https://img.icons8.com/external-bartama-outline-64-bartama-graphic/2x/external-Drawer-furniture-and-home-decoration-outline-bartama-outline-64-bartama-graphic.png" alt=""> -->
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
            console.log(this.newAmenities)
            

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