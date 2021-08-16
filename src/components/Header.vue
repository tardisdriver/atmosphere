<template>
    <div id='header'>
        <!-- <nav-menu /> -->
        <h1>Stratosphere</h1>
        <div id="buy-buttons">
            <vs-button>Button 1</vs-button>
            <vs-button>Button 2</vs-button>
        </div>
    </div>
</template>

<script>
// import NavMenu from './NavMenu.vue'

export default {
    name: 'Header',
    // components: { NavMenu },
}
</script>
<style lang="scss" scoped>
#header {
    display: flex;
    justify-content: space-between;
    padding: 0 15px;
    background-color: #29317b;
    align-items: center;
    h1 {
        font-family: 'Georama', sans-serif;
        color: #ededed;
    }
}

</style>
