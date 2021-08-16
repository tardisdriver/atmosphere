<template>
    <!-- <div> -->
        <vs-navbar>
            <vs-navbar-item v-for="item in navMenuItems" :key="item.ID">
                <span class="nav-item">{{ item }}</span>
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

<style lang="scss">
    .nav-item {
        padding: 5px 10px;
    }
</style>
