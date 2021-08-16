<template>
    <div id="hero-container">
        <div class="left">
            <h2>Lorem Ipsum</h2>
            <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
        <div class="right">
            <img id="rocket" src="../assets/rocket.png" />
            <img id="globe" src="../assets/globe.png" />
        </div>
    </div>
</template>

<script>

export default {
    name: 'Hero',
}
</script>
<style lang="scss">
#hero-container {
    display:flex;
    align-items: center;
    justify-content: space-between;
    height: 600px;
    padding: 0 50px;
    .left {
        max-width:40%;
        h2, p {
            text-align: left;
        }
    }
    .right {
        display: flex;
        flex-direction: column;
        #globe {
            margin-right: -200px;
        }
        #rocket {
            height: 100px;
            width: 100px;
            transform: rotate(-90deg);
        }
    }
    
}
</style>
