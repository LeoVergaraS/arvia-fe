<script setup lang="ts">
    const tops = ["Inicio", "Coleccion", "Ilustraciones", "Sale!", "Moda", "Favoritos"]
</script>

<template>
    <header class="flex items-center justify-between p-4">
        <img class="basis-0 grow" src="~/assets/svg/logo_arvia.svg" alt="logo" width="24"/>
        <div class="basis-0 grow">
            <p class="text-sm">Categorias</p>
        </div>
        <div class="basis-0 grow-[3] flex flex-col items-center">
            <div>
                <input class="w-100" type="text">
            </div>
            <div>
                <span class="px-3" v-for="value in tops" :key="value">{{ value }}</span>
            </div>
        </div>
        <div class="basis-0 grow">Entrar</div>
        <div class="basis-0 grow flex items-center justify-end">
            <p>Carro</p>
        </div>
    </header>
</template>
