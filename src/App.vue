<script setup>
import Header from './components/layouts/Header.vue'
import Footer from './components/layouts/Footer.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <main>
  <Header/>
    <RouterView />
  <Footer/>    
  </main>
</template>
