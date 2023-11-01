import { createApp } from 'vue';
import router from "./router/router.js";
import App from './App.vue';
import BaseInput from "./UI/BaseInput.vue";
import BaseButton from "./UI/BaseButton.vue";
import SubmitButton from "./UI/SubmitButton.vue";
import BaseCheckbox from "./UI/BaseCheckbox.vue";


const app = createApp(App);

app.component('base-input', BaseInput);
app.component('base-button', BaseButton);
app.component('submit-button', SubmitButton);
app.component('base-checkbox', BaseCheckbox);


app.use(router).mount('#app')
