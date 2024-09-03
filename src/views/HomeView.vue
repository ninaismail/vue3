<script setup>
import Hero from '../components/Hero.vue'
import About from '../components/About.vue'
import Styles from '../components/Styles.vue'
import Skills from '../components/Skills.vue'
import style1 from '/images_v1/styles/OPtion 2.jpg'
import style2 from '/images_v1/styles/Option 1.jpg'
import style3 from '/images_v1/styles/03_Resized.jpg'
const styles = [
{ id: 1, name:'Contemporary Design', image:style1, summary:'Modern flair with a classical spin', description:'Step into a world that mirrors your bold and unrestrained creativity. A captivating fusion of freeform style with luxurious materials and a touch of traditional craftsmanship, resulting in spaces that defy convention and evoke a sense of unparalleled distinction.' },
{ id: 2, name:'Modern Home', image:style2, summary:'Where sleek meets chic', description:'Your sanctuary of sophistication, where minimalist elegant and clean finishes take center stage. An open-concept layout flooded with natural light, featuring a sleek surface and uncluttered design, and reflecting simplicity and functionality.' },
{ id: 3, name:'Classic Home', image:style3, summary:'A touch of timeless elegance', description:'As you step into your home, you’re transported to centuries of grandeur with every corner designed to narrate a tale of classical elegance. Ornate moldings, rich wood finishes, gilded mirrors, antiques, and marble mantels adorn your space, exuding timeless beauty and enduring charm. Each element radiates the charming appeal of a tradition home while elevating its ambiance.' }
];
</script>

<template>
  <head>  
      <title>Bissar Consepts</title>
    </head>
  <main>
    <Hero/>
    <About/>
    <Styles :data="styles"/>
    <Skills :bg="bg" title="Share with us your own personal touch" subtitle="we’ll make a world of it!"/>
  </main>
</template>
