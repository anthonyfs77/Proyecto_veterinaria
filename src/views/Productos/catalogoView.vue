<template>
    <div class="container">
      <h1 > <span class="material-symbols-outlined"  style="font-size: 60px; padding:15px ;">
                        sound_detection_dog_barking
                </span>Catálogo de productos  </h1>
      <br>
      <br>
      <div class="row">
        <div class="col-lg-4 " v-for="producto in productos" :key="producto.id">
          <div class="card card-small">
            <div class="image-container">
            <img :src="producto.imagen"  class="card-img-top custom-image" :alt="producto.nombre">
            </div>
            <div class="card-body">
              <h5 class="card-title">{{ producto.nombre }}</h5>
              <p class="card-text">{{ producto.descripcion }}</p>
              <p class="card-text">Precio: {{ producto.precio }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const productos = [
    {
      id: 1,
      nombre: 'Cama para Perro',
      descripcion: 'Resistente, Confortable, con Relleno Suave, Medidas y Color a Elegir (Small, Marino/Gris)',
      precio: 299,
      imagen: 'https://m.media-amazon.com/images/I/61rl+xIe2HL._AC_SX679_.jpg'
    },
    {
      id: 2,
      nombre: 'Jaula para Mascota',
      descripcion: ' hasta 5kg, IATA, Resistente, de fácil transportación',
      precio: 399.50,
      imagen: 'https://m.media-amazon.com/images/I/41LbL2i91kL._AC_.jpg'
    },
    {
      id: 3,
      nombre: ' comedero para mascotas',
      descripcion: '  alimentador automático para mascotas, gravedad automática, gran capacidad',
      precio: 600,
      imagen: 'https://m.media-amazon.com/images/I/81bPs2S3ZwL.__AC_SX300_SY300_QL70_ML2_.jpg'
    },
    {
      id: 4,
      nombre: 'Cama para Perro',
      descripcion: 'Resistente, Confortable, con Relleno Suave, Medidas y Color a Elegir (Small, Marino/Gris)',
      precio: 299,
      imagen: 'https://m.media-amazon.com/images/I/61rl+xIe2HL._AC_SX679_.jpg'
    },
    {
      id: 5,
      nombre: 'Jaula para Mascota',
      descripcion: ' hasta 5kg, IATA, Resistente, de fácil transportación',
      precio: 399.50,
      imagen: 'https://m.media-amazon.com/images/I/41LbL2i91kL._AC_.jpg'
    },
    {
      id: 6,
      nombre: ' comedero para mascotas',
      descripcion: ' alimentador automático para mascotas, gravedad automática, gran capacidad',
      precio: 600,
      imagen: 'https://m.media-amazon.com/images/I/81bPs2S3ZwL.__AC_SX300_SY300_QL70_ML2_.jpg'
    }
  ];
  </script>
  
  <style>
 h1{
    margin: 20px;
 }
 .card.card-small {
  width: 300px; 
  height: 350px;
}
.custom-image {
  width: 220px;  
  height:145px; 
}
.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px; /* Ajusta la altura deseada del contenedor de la imagen */
  margin: 2px;
}
.image-container img mx-2{
  max-width: 100%;
  max-height: 100%;
}

  </style>
  