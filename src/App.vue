<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav class="navbar bg-body-tertiary">
    <div class="container-fluid">
      <router-link to="/">
        <img src="@/assets/logo.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
        <p>PokeAPI</p>
      </router-link>
      <RouterLink to="/" class="btn btn-outline-primary">Home</RouterLink>
      <RouterLink to="/pokemons" class="btn btn-outline-primary">Pokemons</RouterLink>
    </div>
  </nav>
  
  <div class="container">
    <RouterView />  
  </div>
  
</template>

