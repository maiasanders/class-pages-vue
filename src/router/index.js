import { createRouter as _createRouter, createWebHistory } from 'vue-router';

import ClassPageView from '../views/ClassPageView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: ClassPageView
    }, {
        path: '/class/:color',
        name: 'classHome',
        component: ClassPageView
    }
];

export function createRouter () {
    return _createRouter({
        history: createWebHistory(),
        routes: routes
    })
}