import Vue from 'vue'
import App from './App.vue'

import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(MotionPathPlugin, TextPlugin, ScrollTrigger);

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')