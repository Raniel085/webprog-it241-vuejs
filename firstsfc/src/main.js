import { createApp } from 'vue'
import App from './App.vue'
import FoodItem from './Components/FoodItem.vue'
import FoodItem2 from './Components/FoodItem2.vue'
import PersonalProfile from './Components/PersonalProfile.vue' // 1. Import it

const app = createApp(App)

app.component('food-item', FoodItem)
app.component('food-item2', FoodItem2)
app.component('personal-profile', PersonalProfile) // 2. Register it

app.mount('#app')