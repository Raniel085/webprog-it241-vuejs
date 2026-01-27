import { createApp } from 'vue'
import App from './App.vue'
import FoodItem from './Components/FoodItem.vue' // Capital C
import FoodItem2 from './Components/FoodItem2.vue' // Capital C
import PersonalProfile from './Components/PersonalProfile.vue' // Capital C
import CommentForm from './components/CommentForm.vue' // Check if this is lower or upper
import Comment from './components/Comment.vue' // Check if this is lower or upper

const app = createApp(App)

app.component('food-item', FoodItem)
app.component('food-item2', FoodItem2)
app.component('personal-profile', PersonalProfile)
app.component('comment-form', CommentForm)
app.component('comment', Comment)

app.mount('#app')