<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from './lib/supabaseClient'

// 1. Logic to fetch your data
const instruments = ref([])

async function getInstruments() {
  const { data } = await supabase.from('instruments').select()
  instruments.value = data
}

onMounted(() => {
  getInstruments()
})
</script>

<template>
  <h1>Food</h1>
  
  <food-item />
  <personal-profile />
  <Comment-form />
  <Comment />

  <hr />

  <h3>Instruments from Database:</h3>
  <ul>
    <li v-for="instrument in instruments" :key="instrument.id">
      {{ instrument.name }}
    </li>
  </ul>
</template>