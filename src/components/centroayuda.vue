<template>
    <div class="help-center">
      <h2 class="title">Centro de Ayuda</h2>
      <div class="faq" v-for="(item, index) in faqs" :key="index">
        <h3 class="faq-question">{{ item.question }}</h3>
        <p class="faq-answer">{{ item.answer }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const faqs = ref([
    {
      question: '¿Cómo puedo programar una cita?',
      answer: 'Puedes programar una cita a través de nuestra plataforma online o llamando directamente a nuestra clínica.'
    },
    {
      question: '¿Qué servicios ofrece la clínica?',
      answer: 'Ofrecemos una amplia gama de servicios, desde chequeos generales hasta cirugías y tratamientos especializados.'
    },
    // Añade aquí más preguntas y respuestas
  ])
  </script>
  
  <style scoped>
  .help-center {
    padding: 2em;
    box-sizing: border-box;
  }
  
  .title {
    font-size: 2.5em;
    margin-bottom: 1em;
  }
  
  .faq {
    margin-bottom: 1.5em;
  }
  
  .faq-question {
    font-size: 1.5em;
    margin-bottom: 0.5em;
  }
  
  .faq-answer {
    font-size: 1.2em;
  }
  </style>
  