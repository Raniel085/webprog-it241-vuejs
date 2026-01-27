<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from './lib/supabaseClient'

const instruments = ref([])

async function getInstruments() {
  const { data } = await supabase.from('instruments').select()
  if (data) instruments.value = data
}

onMounted(() => {
  getInstruments()
})
</script>

<template>
  <div id="app-container">
    <h1>Food</h1>
    
    <div class="flex-layout">
      <food-item />
      <comment-form />
    </div>

    <hr />

    <comment />

    <personal-profile />

    <div v-if="instruments.length > 0">
      <h3>Instruments:</h3>
      <ul>
        <li v-for="instrument in instruments" :key="instrument.id">
          {{ instrument.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
/* Styling to match the "inline-block" look in your screenshot */
.flex-layout {
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
}
</style>