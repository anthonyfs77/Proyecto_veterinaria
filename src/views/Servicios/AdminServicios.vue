<template>
    <div>
      <h2>Menú Administrador</h2>
      <div v-for="service in services" :key="service.id" class="service">
        <h3>{{ service.name }}</h3>
        <p>{{ service.description }}</p>
        <img :src="service.image" alt="" />
        <p>Tipo: {{ service.type ? 'Estético' : 'Clínico' }}</p>
        <button @click="editService(service.id)">Editar</button>
      </div>
  
      <div class="service-form" v-if="editing">
        <h3>Editar Servicio</h3>
        <label>
          Nombre:
          <input v-model="currentService.name" />
        </label>
        <label>
          Descripción:
          <textarea v-model="currentService.description"></textarea>
        </label>
        <label>
          Imagen:
          <input type="text" v-model="currentService.image" />
        </label>
        <label>
          Tipo:
          <select v-model="currentService.type">
            <option value="0">Estético</option>
            <option value="1">Clínico</option>
          </select>
        </label>
        <button @click="saveService">Guardar</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, reactive } from 'vue';
  
  let services = ref([
  {
    id: 1,
    name: 'Servicio 1',
    description: 'Descripción del Servicio 1',
    image: 'url_a_la_imagen_del_servicio_1',
    type: 0 // 0 para estético, 1 para clínico
  },
  {
    id: 2,
    name: 'Servicio 2',
    description: 'Descripción del Servicio 2',
    image: 'url_a_la_imagen_del_servicio_2',
    type: 1 // 0 para estético, 1 para clínico
  },
  // añade más servicios aquí...
]);
  
  let editing = ref(false);
  let currentService = reactive({ name: '', description: '', image: '', type: '' });
  
  function editService(id) {
    let service = services.value.find(service => service.id === id);
    currentService.name = service.name;
    currentService.description = service.description;
    currentService.image = service.image;
    currentService.type = service.type;
    editing.value = true;
  }
  
  function saveService() {
    let service = services.value.find(service => service.id === currentService.id);
    service.name = currentService.name;
    service.description = currentService.description;
    service.image = currentService.image;
    service.type = currentService.type;
    editing.value = false;
  }
  </script>
  
  <style scoped>
  .service {
    margin-bottom: 20px;
  }
  .service-form {
    margin-top: 20px;
  }
  </style>
  