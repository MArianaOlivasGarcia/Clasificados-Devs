<template>
    <div>

        <ul class="flex flex-wrap mb-7 md:mb-10 lg:mb-12 gap-x-0 gap-y-5">
            <li class="md:flex-1 flex-[1_0_45%] relative" v-for="(item, index) in prototypes" :key="index" :class="[index === active ? 'trigger-active' : '']" @click='activate(index)'>
                <button class="xl:text-2xl lg:text-xl sm:text-lg text-sm font-bold relative flex justify-center w-full px-[10px] pb-5 xl:pb-7 cursor-pointer uppercase text-black border-b-[3px] border-[#D0CDCB] bg-transparent before:absolute before:z-10 before:right-0 before:-bottom-[3px] before:left-0 before:h-[3px] before:content-[''] before:transition-all before:duration-500 before:transform before:scale-0 before:bg-primary">{{ item.name.length >= 12 ? item.name.slice(0, 12) + '...' : item.name }}</button>
            </li>
        </ul>

        <div v-for="(item, index) in prototypes" :key="index">
            <div class="" v-if="active === index">
                <div class="floor-plan">
                    <div class="flex gap-6 lg:flex-row flex-col">
                        <div class="lg:w-1/3 w-full flex-auto">
                            <div class="floor-plan-content">
                                <h2 class="floor-plan-title">{{item.name}}</h2>
                                <div class="floor-plan-text">
                                    <p>{{item.text}}</p>
                                </div>
                                <ul class="floor-plan-info">
                                    <li class="text-lg relative flex justify-between py-3 text-black border-b-1 border-[#cfcfd4] last:border-b-0">Total de unidades<span>{{ item.totalunit }}</span></li>
                                    <li class="text-lg relative flex justify-between py-3 text-black border-b-1 border-[#cfcfd4] last:border-b-0">Unidades disponibles<span>{{ item.totalunit }}</span></li>
                                    <li class="text-lg relative flex justify-between py-3 text-black border-b-1 border-[#cfcfd4] last:border-b-0">M2 contrucción<span>{{item.m2c}}</span></li>
                                    <li class="text-lg relative flex justify-between py-3 text-black border-b-1 border-[#cfcfd4] last:border-b-0">M2 terreno<span>{{item.mlot}}</span></li>
                                    <li class="text-lg relative flex justify-between py-3 text-black border-b-1 border-[#cfcfd4] last:border-b-0">Habitaciones<span>{{item.bedrooms}}</span></li>
                                    <li class="text-lg relative flex justify-between py-3 text-black border-b-1 border-[#cfcfd4] last:border-b-0">Baños<span>{{item.bathrooms}}</span></li>
                                    <li class="text-lg relative flex justify-between py-3 text-black border-b-1 border-[#cfcfd4] last:border-b-0 font-bold">Precio venta<span  style="color: #01569f;" class="font-bold">$ {{ Number(item.price).toLocaleString() }} {{ item.currency }}</span></li>
                                    <li class="text-lg relative flex justify-between py-3 text-black border-b-1 border-[#cfcfd4] last:border-b-0 font-bold">Precio renta<span  style="color: #01569f;" class="font-bold">$ {{ Number(item.pricer).toLocaleString() }} {{ item.currencyr }}</span></li>
                                </ul>
                                <div class="floor-plan-buttons">
                                    <ButtonDefault
                                        :clickMethod="showWhats"
                                        :argumentMethod="item.prototypeid" 
                                        :btnClass="'btn-md min-w-[205px] text-center btn btn-primary btn-hover-dark'"
                                        :btnText="'¡Estoy interesado!'"
                                    />
                                    <ButtonDefault 
                                        :btnLink="'/booking'"
                                        :btnClass="'btn-md min-w-[205px] btn text-center btn-transparent btn-outline-black btn-hover-primary'"
                                        :btnText="'Recorrido Virtual'"
                                        :btnIcon="'fi fi-model'"
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="lg:w-2/3 w-full flex-auto text-center">
                            <div class="floor-plan-image text-center flex justify-center">
                                <img  :src="'https://clasificadoscontacto.com' +  item.image " class="w-auto max-w-full h-auto max-h-full" alt="52.4 m2" width="965" height="776">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import tabContent from '@/data/floorplandatatwo.json'
    export default {
        props: {
            prototypes: {
                required: true,
                type: Array
            },
            formWhats: {
                type: Object,
                required: true
            },
            v: {
                type: Object,
                required: true
            },
            folio: {
                type: String,
                required: true
            },
        },
        created() {
            console.log(this.prototypes)
        },
        data () {
            return {
                active: 0,
                categories: [
                    "Basement",
                    "Ground Floor",
                    "2nd Floor",
                    "Rooftop"
                ],
                tabContent
            }
        },
        methods: {
            activate(index) {
                this.active = index;
            },
            showWhats( ){

                if ( this.$store.state.showFormWhats ) {
                    this.$store.commit('setShowFormWhats', false)
                }

                this.$store.commit('setShowFormGmail', false)
                this.$store.commit('setShowFormWhats', true)
                this.$store.commit('setPrototypeId', this.prototypes[this.active].prototypeid)
                this.$store.commit('setFolioDev', this.folio )

            }
        }
    }
</script>

<style lang="scss" scoped>
.trigger-active {
    & button {
        @apply before:transform before:scale-100 before:content-[''];
    }
}
.floor-plan{
    &-content{
        @apply mt-3;
    }
    &-title{
        @apply text-[32px] md:text-[40px] xl:text-5xl mb-5 leading-[1.25];
    }
    &-text{
        @apply lg:mb-10 mb-6
    }
    &-buttons{
        @apply flex gap-4 items-start 2xl:items-center 2xl:flex-row lg:flex-col sm:flex-row flex-col mt-12;
    }
}
.redcolor{
    @apply text-[#F92502];
}
</style>