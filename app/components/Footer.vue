<template>
  <footer class="main-footer py-12">
    <div class="main-footer__container container mx-auto px-6">
      
      <section class="main-footer__section flex flex-col items-center md:items-start gap-4">
        <img class="w-40" src="~/assets/svg/logo_arvia.svg" alt="Logo Arvia" />
        <h2 class="text-xl font-bold text-primary-green text-center md:text-left leading-tight">
          Obtén los últimos lanzamientos retros
        </h2>
        <form @submit.prevent class="flex flex-col sm:flex-row w-full gap-3 mt-2">
          <input 
            type="email" 
            placeholder="Ingresa tu correo"
            class="main-footer__input flex-1 bg-gold text-primary-green px-4 py-2 rounded-lg placeholder:text-primary-green/70 focus:ring-2 focus:ring-primary-green outline-none transition-all" 
          />
          <button class="main-footer__button bg-gold text-primary-green font-bold px-6 py-2 rounded-lg hover:scale-105 transition-transform active:scale-95">
            Suscribirse
          </button>
        </form>
      </section>

      <section class="main-footer__section flex justify-center md:justify-start">
        <ul class="space-y-3 text-primary-green font-bold text-center md:text-left">
          <li><a href="#" class="hover:opacity-70 transition-opacity">Inicio</a></li>
          <li><a href="#" class="hover:opacity-70 transition-opacity">Colecciones</a></li>
          <li><a href="#" class="hover:opacity-70 transition-opacity">Lookbook</a></li>
          <li><a href="#" class="hover:opacity-70 transition-opacity">Acerca de nosotros</a></li>
          <li><a href="#" class="hover:opacity-70 transition-opacity">Contactos</a></li>
        </ul>
      </section>

      <section class="main-footer__section flex flex-col items-center md:items-start gap-4">
        <h3 class="text-primary-green font-bold">Síguenos en redes sociales</h3>
        <div class="flex gap-4">
          <a v-for="network in ['facebook', 'instagram', 'twitter', 'linkedin']" :key="network" 
             href="#" class="text-primary-green hover:text-gold transition-colors">
            <Icon :name="`mdi:${network}`" size="2rem" />
          </a>
        </div>
      </section>

      <section class="main-footer__section--final mt-12 pt-8 border-t border-gray-200 w-full text-center">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <span class="text-sm text-gray-500">© 2026 Arvia. Todos los derechos reservados.</span>
          <div class="flex flex-wrap justify-center gap-6">
            <a href="#" class="text-sm text-gray-500 hover:text-primary-green transition-colors">Política de Privacidad</a>
            <a href="#" class="text-sm text-gray-500 hover:text-primary-green transition-colors">Términos de Servicio</a>
          </div>
        </div>
      </section>

    </div>
  </footer>
</template>

<style scoped>
.main-footer {
  &__container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  &__input {
    &:focus {
      box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.3);
    }
  }

  &__section--final {
    grid-column: 1 / -1;
  }
}

/* Media Query para Desktop */
@media (min-width: 768px) {
  .main-footer__container {
    grid-template-columns: 2fr 1fr 1.5fr;
    gap: 2rem;
  }
}
</style>