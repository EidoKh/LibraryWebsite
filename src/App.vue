<script setup>
import NavbarVue from './components/Navbar.vue'
import AppFooter from './components/AppFooter.vue'
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<template>
    <NavbarVue />
    <div lang="ar" dir="rtl" class="-mt-16">
        <router-view></router-view>
    </div>
    <AppFooter class="mb-0" />
</template>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #251605;
    margin-top: 60px;
    background-color: #fffcff;
}
</style>
