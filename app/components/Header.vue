<script setup lang="ts">
    const tops = ["Inicio", "Coleccion", "Ilustraciones", "Sale!", "Moda", "Favoritos"]
</script>

<template>
    <header class="flex items-center justify-between p-4">
        <img class="basis-0 grow" src="~/assets/svg/logo_arvia.svg" alt="logo" width="24"/>
        <div class="basis-0 grow flex items-center justify-end gap-2">
            <span class="text-primary-green">Categorias</span>
            <Icon name="mdi:menu" size="1.5em" class="text-gold"/>
        </div>
        <div class="basis-0 grow-[3] flex flex-col items-center">
            <div>
                <input class="bg-gold rounded-full w-[500px] h-8 border-2 border-solid border-slate-50 shadow-lg" type="text">
                <!--Falta el span-->
            </div>
            <ul class="list-disc flex justify-between items-center gap-5 text-bold text-primary-green">
                <li v-for="value in tops" :key="value">{{ value }}</li>
            </ul>
        </div>
        <div class="basis-0 grow flex items-center justify-start">
            <button type="button" class="rounded-full bg-primary-green px-3 py-1 text-slate-50 font-bold border-4 border-solid border-gold ">Entrar</button>
        </div>
        <div class="basis-0 grow flex items-center px-2 justify-end">
            <Icon name="mdi:shopping" size="2em" class="text-primary-green"/>
        </div>
    </header>
</template>
