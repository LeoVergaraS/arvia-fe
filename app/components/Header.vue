<script setup lang="ts">
const tops = ["Inicio", "Coleccion", "Ilustraciones", "Sale!", "Moda", "Favoritos"]
</script>

<template>
    <header class="main-header py-4 px-4 md:px-8 w-full">
        
        <div class="main-header__container max-w-[1400px] mx-auto flex flex-wrap md:flex-nowrap items-center justify-between gap-4 md:gap-6">
            
            <a href="/" class="main-header__brand shrink-0">
                <img src="~/assets/svg/logo_arvia.svg" alt="Logo Arvia" class="h-10 md:h-12 w-auto object-contain" />
            </a>

            <div class="main-header__category hidden xl:flex items-center gap-2 uppercase font-bold text-primary-green tracking-wide">
                <span class="text-sm">Categoria</span>
                <button class="text-gold hover:opacity-80 transition-opacity">
                    <Icon name="mdi:menu" size="1.8em" />
                </button>
            </div>

            <div class="main-header__center flex-1 w-full order-last md:order-none flex flex-col items-center">
                <div class="relative w-full max-w-3xl">
                    <input 
                        type="text" 
                        class="w-full bg-gold border-[3px] border-white rounded-full h-10 px-4 pr-12 outline-none shadow-sm focus:ring-2 focus:ring-primary-green transition-all"
                    >
                    <button class="absolute right-1 top-1/2 -translate-y-1/2 bg-primary-green text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-opacity-90 transition-all">
                        <Icon name="mdi:magnify" size="1.2em" />
                    </button>
                </div>

                <ul class="main-header__nav hidden md:flex justify-center items-center gap-4 xl:gap-8 mt-2 uppercase font-bold text-[12px] xl:text-[14px] tracking-wide">
                    <li v-for="value in tops" :key="value" class="flex items-center gap-1.5 cursor-pointer hover:opacity-75 transition-opacity">
                        <span class="text-primary-green text-lg leading-none">•</span>
                        <span :class="value.toLowerCase() === 'sale!' ? 'text-[#8B0000]' : 'text-primary-green'">
                            {{ value }}
                        </span>
                    </li>
                </ul>
            </div>

            <div class="main-header__actions flex items-center gap-3 md:gap-6 shrink-0 ml-auto md:ml-0">
                <button class="xl:hidden text-gold">
                    <Icon name="mdi:menu" size="2em" />
                </button>

                <button type="button" class="hidden md:block rounded-full bg-primary-green px-6 py-1 text-white font-bold uppercase tracking-wider border-[3px] border-gold hover:bg-opacity-90 transition-all shadow-sm">
                    Entrar
                </button>

                <button class="relative text-primary-green hover:opacity-80 transition-opacity">
                    <Icon name="mdi:basket" size="2.5em" />
                    <span class="absolute top-1 -left-2 w-4 h-4 bg-gold border-[2px] border-primary-green rounded-sm"></span>
                </button>
            </div>

        </div>
    </header>
</template>

<style scoped>
/* Reseteo básico de input search de Webkit si es necesario */
input[type="text"]::-webkit-search-decoration,
input[type="text"]::-webkit-search-cancel-button,
input[type="text"]::-webkit-search-results-button,
input[type="text"]::-webkit-search-results-decoration {
  display: none;
}
</style>