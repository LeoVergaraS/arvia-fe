<template>
    <section class="hero-banner">
        <div class="hero-content">
            <h1 class="hero-title">Lo Clásico</h1>
            <h2 class="hero-subtitle">Vuelve con estilo</h2>

            <p class="hero-description">
                Descubre nuestra colección exclusiva de sillas clásicas <br>
                diseñadas para aportar estilo a cualquier espacio de tu hogar.
            </p>

            <a href="#" class="btn-coleccion">Ver Colección</a>
        </div>
    </section>

    <section class="mt-2">
        <section class="bg-primary-green p-10 text-center text-white">
            <h1 class="text-5xl font-black mb-3">Listo para Mejorar tu Estilo?</h1>
            <button type="button" class="rounded-full bg-gold text-primary-green px-10 py-1 mt-3 font-bold">
                Compra Retro Ahora
            </button>
        </section>
        <div class="divisor-contenedor">
            <svg viewBox="0 0 1200 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0,0V30c120,5,250-10,400,0s300,15,500,5,200-8,300,2V0Z" class="fill-primary-green"></path>
            </svg>
        </div>
        <section class="seccion-clara">
        </section>
    </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Montserrat:wght@400;600&display=swap');

.hero-banner {
    background-image: url('/img/img_principal.webp'); 
    background-size: cover;
    background-position: center right; 
    background-repeat: no-repeat;
    background-color: #f3f0e9; 
    
    min-height: 450px;
    margin: 20px; 
    border-radius: 50px;
    overflow: hidden;
    
    display: flex;
    justify-content: flex-end;
    align-items: center; 
    padding: 60px;
}

.hero-content {
    max-width: 450px;
    text-align: center;
    color: #1a3c34;
}

.hero-title {
    font-family: 'Playfair Display', serif;
    font-size: 3.5rem;
    margin-bottom: 0;
    line-height: 1;
}

.hero-subtitle {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.8rem;
    font-weight: 600;
    margin-top: 5px;
    margin-bottom: 25px;
    letter-spacing: 1px;
}

.hero-description {
    font-family: 'Montserrat', sans-serif;
    font-size: 0.95rem;
    line-height: 1.6;
    margin-bottom: 35px;
    color: #333;
}

.btn-coleccion {
    display: inline-block;
    background-color: #1a3c34;
    color: #ffffff;
    text-decoration: none;
    padding: 12px 35px;
    border-radius: 50px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 0.9rem;
    border: 2px solid #c5a059;
    transition: all 0.3s ease;
}

.btn-coleccion:hover {
    background-color: #c5a059;
    border-color: #1a3c34;
    transform: scale(1.05);
}

.divisor-contenedor {
    width: 100%;
    overflow: hidden;
    line-height: 0;
}

.divisor-contenedor svg {
  display: block;
  width: 100%;
  height: 40px;
}

.seccion-clara {
    padding: 10px;
}

@media (max-width: 768px) {
    .hero-banner {
        justify-content: center;
        padding: 40px 20px;
        background-position: center;
    }
    
    .hero-title { font-size: 2.5rem; }
    .hero-subtitle { font-size: 1.4rem; }
}
</style>
