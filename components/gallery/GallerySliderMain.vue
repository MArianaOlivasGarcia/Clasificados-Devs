<template>
    <div>
        <!-- <ul class="flex flex-wrap gap-3 sm:gap-5 lg:gap-[30px] justify-center mb-[50px] lg:mb-20">
            <li class="text-base lg:text-lg cursor-pointer gallery-tab-one" v-for="(tab, Index) in tabs" :key="Index" @click="currentTab = Index" :class="{active: currentTab === Index}">{{tab}}</li>
        </ul> -->
        <div class="content-bd">
            <div class="tab-content">
                <div v-if="currentTab === 0">
                    <GallerySliderAll :images="images"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        components: {
            GallerySliderAll: () => import('@/components/gallery/GallerySliderAll'),
        },
        props: {
            images: {
                type: Array,
                required: true
            }
        },
        data () {
            return {
                currentTab: 0,
                // tabs: ['Todos', 'Living Room', 'Bed Room', 'Bath Room', 'Basement', 'Kitchen']
            }
        },
        created() {
            console.log(this.images)
        }
    }
</script>

<style lang="scss">
.videobtn-show{
    @apply flex;
}
.gallery-tab-one{
    &.active{
        @apply text-primary;
    }
}
</style>