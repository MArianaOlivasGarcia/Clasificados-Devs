<template>
    <div :class="btnClassParent">
        <button v-on:click="clickMethod()" :class="btnClass"> <i :class="btnIcon"></i> {{btnText}}</button>
    </div>
</template>
<script>
export default {
    props: {
        btnClass: String,
        clickMethod: Function,
        argumentMethod: String,
        btnClassParent: String,
        btnText: String,
        btnIcon: String
    }
}
</script>

<style lang="scss" scoped>
    .btn {
        // @apply z-20 before:content-[""] before:absolute before:top-[110%] before:left-1/2 before:w-[200%] before:h-[200%] before:transition-all before:duration-700 before:transform before:-translate-x-1/2 before:-z-10 before:rounded-[50%] hover:before:-top-1/3 uppercase;
        @apply z-20 before:content-[""] before:absolute before:right-0 before:top-0 before:w-[200%] before:h-[200%] before:transition-all before:duration-700 before:-z-10 before:rounded-[0%] uppercase before:opacity-0 hover:before:opacity-100;
        & i {
            @apply text-3xl leading-[.5] block float-left -ml-1;
        }
    }
    .btn-sm {
        @apply text-[#515151] h-[50px] px-[30px] py-[10px] text-[14px] leading-[2] relative inline-block overflow-hidden items-center;
    }
    .btn-md {
        @apply text-[#515151] h-[60px] px-[30px] py-[15px] text-[14px] leading-[2] relative inline-block overflow-hidden items-center;
    }
    .btn-outline-light {
        @apply border-[1px] border-white bg-transparent text-white;
    }
    .btn-outline-black {
        @apply border-[1px] border-black bg-transparent text-black;
    }
    .btn-hover-primary {
        @apply hover:border-[#f2b500] hover:text-white before:bg-[#f2b500] hover:transition-all hover:duration-700;
    }
    .btn-primary {
        @apply bg-[#f2b500];
    }
    .btn-light {
        @apply bg-white;
    }
    .btn-transparent {
        @apply bg-transparent;
    }
    .btn-hover-dark {
        @apply hover:border-[#221F1E] text-black before:bg-[#fff];
    }
    .btn-hover-light {
        @apply hover:border-[#221F1E] text-black before:bg-white;
    }
</style>