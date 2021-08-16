<template>
    <!-- <div> -->
        <vs-navbar color="black">
            <vs-navbar-item v-for="item in navMenuItems" :key="item.ID">
                {{ item }}
            </vs-navbar-item>
        </vs-navbar>
    <!-- </div> -->
</template>
<script>

export default {
   name: 'NavMenu',
   data: () => ({
       navMenuItems: ['home', 'about','team', 'audit', 'contract', 'roadmap']
   })
}
</script>
