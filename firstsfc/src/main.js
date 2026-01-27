import { createApp } from 'vue'
import App from './App.vue'

// Change these to match your ACTUAL folder name (Capital 'C' or lowercase 'c')
import FoodItem from './Components/FoodItem.vue'
import FoodItem2 from './Components/FoodItem2.vue'
import PersonalProfile from './Components/PersonalProfile.vue' 
import CommentForm from './Components/CommentForm.vue' // Match the folder name!
import Comment from './Components/Comment.vue'      // Match the folder name!

const app = createApp(App)

app.component('food-item', FoodItem)
app.component('food-item2', FoodItem2)
app.component('personal-profile', PersonalProfile)
app.component('comment-form', CommentForm)
app.component('comment', Comment)

app.mount('#app')