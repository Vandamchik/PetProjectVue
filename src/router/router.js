import { createRouter, createWebHistory } from 'vue-router';

import MainPage from "../pages/MainPage.vue";
import AuthPage from "../pages/AuthPage.vue";
import LoginFrom from "../components/Forms/LoginFrom.vue";
import RegistrationForm from "../components/Forms/RegistrationForm.vue";


const routes = [
    {
        path: '/',
        component: MainPage
    },
    {
        path: '/auth',
        component: AuthPage,
        children: [
            {
                path: '',
                component: LoginFrom
            },
            {
                path: 'registration',
                component: RegistrationForm
            }
        ]
    },
];

const router = createRouter({
    routes,
    history: createWebHistory()
});

export default router;
