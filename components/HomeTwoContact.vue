<template>
    <div class="w-full sm:w-2/3 mx-auto">
        <form id="contact-form" 
            class="grid gap-x-10 grid-cols-2" 
            action="https://getform.io/f/6af30b8c-e767-4d30-b964-d7e38d35078b" 
            method="POST">
            <div class="single-fild col-span-2 sm:col-span-1 mb-5">
                <input type="text" class="text-[15px] relative block w-full h-[50px] py-4 transition-all duration-500 text-[#515151] border-t-0 border-x-0 border-b-1 border-[#cfcfd4] rounded-[4px] bg-transparent focus:border-t-0 focus:border-x-0 focus:border-black focus:shadow-none focus-visible:outline-0" placeholder="Nombre">
            </div>
            <div class="single-fild col-span-2 sm:col-span-1 mb-5">
                <input type="text" class="text-[15px] relative block w-full h-[50px] py-4 transition-all duration-500 text-[#515151] border-t-0 border-x-0 border-b-1 border-[#cfcfd4] rounded-[4px] bg-transparent focus:border-t-0 focus:border-x-0 focus:border-black focus:shadow-none focus-visible:outline-0" placeholder="Teléfono">
            </div>
            <div class="single-fild col-span-2 mb-5">
                <input type="email" class="text-[15px] relative block w-full h-[50px] py-4 transition-all duration-500 text-[#515151] border-t-0 border-x-0 border-b-1 border-[#cfcfd4] rounded-[4px] bg-transparent focus:border-t-0 focus:border-x-0 focus:border-black focus:shadow-none focus-visible:outline-0" placeholder="Correo electrónico">
            </div>
            <div class="single-fild col-span-2">
                <textarea class="h-32 mb-6 text-[15px] relative block w-full py-4 transition-all duration-500 text-[#515151] border-t-0 border-x-0 border-b-1 border-[#cfcfd4] rounded-[4px] bg-transparent focus:border-t-0 focus:border-x-0 focus:border-black focus:shadow-none focus-visible:outline-0" placeholder="Escribe tu mensaje aquí" spellcheck="false" data-gramm="false"></textarea>
                <div class="flex justify-center w-full md:mt-10">
                    <button type="submit" value="submit" name="submit" class="btn btn-md btn-outline-black btn-hover-primary max-w-[180px] sm:max-w-[200px] w-full">Contactar</button>
                    <p class="form-messege"></p>
                </div>
            </div>
        </form>
    </div>
</template>
<script>
export default {
    data () {
        return {
        }
    }
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
    @apply hover:border-[#0EA478] hover:text-white before:bg-[#0EA478] hover:transition-all hover:duration-700;
}
.btn-outline-black {
    @apply border-[1px] border-black bg-transparent text-black;
}
</style>