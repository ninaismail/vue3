<script setup>
import Hero from '../components/Hero.vue'
import About from '../components/About.vue'
import Styles from '../components/Styles.vue'
import Skills from '../components/Skills.vue'
import style1 from '/images/styles/styles1.webp'
import style2 from '/images/styles/styles2.webp'
import style3 from '/images/styles/styles3.webp'
import bg from '/images/backgrounds/skills.webp'
const styles = [
{ id: 1, name:'Contemporary Design', image:style1, summary:'Modern flair with a classical spin', description:'Step into a world that mirrors your bold and unrestrained creativity. A captivating fusion of freeform style with luxurious materials and a touch of traditional craftsmanship, resulting in spaces that defy convention and evoke a sense of unparalleled distinction.' },
{ id: 2, name:'Modern Home', image:style2, summary:'Where sleek meets chic', description:'Your sanctuary of sophistication, where minimalist elegant and clean finishes take center stage. An open-concept layout flooded with natural light, featuring a sleek surface and uncluttered design, and reflecting simplicity and functionality.' },
{ id: 3, name:'Classic Home', image:style3, summary:'A touch of timeless elegance', description:'As you step into your home, you’re transported to centuries of grandeur with every corner designed to narrate a tale of classical elegance. Ornate moldings, rich wood finishes, gilded mirrors, antiques, and marble mantels adorn your space, exuding timeless beauty and enduring charm. Each element radiates the charming appeal of a tradition home while elevating its ambiance.' }
];
</script>

<template>
  <main>
    <Hero/>
    <About/>
    <Styles :data="styles"/>
    <Skills :bg="bg" title="An edge of sophistication to simplicity, a whiff of modernism to the traditional."
    subtitle="By taking a fresh approach to design, we create viable and dynamic spaces that are as unique as the individuality of each of our clients."/>
  </main>
</template>
