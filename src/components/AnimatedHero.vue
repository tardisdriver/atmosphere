<template>
    <div style="display:flex; justify-content: center; align-items:center;">
     <svg width="100%" height="100%" viewBox="0 0 400 200" id="rocket-path">
       <circle cx="100" cy="100" r="80" />
        <path d="
            M 100, 100
            m -75, 0
            a 75,75 0 1,0 150,0
            a 75,75 0 1,0 -150,0
        "/>
        <!-- <g id="rect">
           <img id="rocket" src="./assets/rocket.png" />
        </g> -->
      </svg>
      <img  id="rocket" src="./assets/rocket.png" />
      <div id="globe-container" style="position:absolute">
        <img alt="globe" id="globe" height="450px" width="450px" src="./assets/globe.png">
      </div>
    </div>
</template>

<script>
import { gsap } from "gsap"
import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";

export default {
    name: 'AnimatedHero',
    mounted: function(){
    gsap.registerPlugin(MotionPathPlugin);

    gsap.timeline({
      scrollTrigger:{
        trigger: "#globe-container",
        pin: false,
        scrub:0.2,
        start: 'top top',
        end:'+=10000',
      }
    })
    .to('#globe', {
      rotation:360*5,
      duration:1, ease:'none',
    })
    // gsap.to("#rocket", {
    // duration: 5, 
    // ease: "power1.inOut",
    // immediateRender: true,
    //   motionPath: {
    //     path: "#rocket-path",
    //     align: "#rocket-path",
    //     alignOrigin: [0.5, 0.5],
    //     autoRotate: 90
    //   }
    // });
      gsap.to("#rocket", {
      duration: 5, 
      repeat: 12,
      repeatDelay: 3,
      yoyo: false,
      ease: "power1.inOut",
      motionPath:{
        path: "#rocket-path",
        align: "#rocket-path",
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
      }
    });
  }
}
</script>

<style scoped>
#globe-container {
  margin-top:30px;
  height: 455px;
}
#rocket {
  transform: rotate(-40deg)
}
#rocket-path {
  display:block;
  margin-left:auto;
  margin-right:auto;
}
</style>
