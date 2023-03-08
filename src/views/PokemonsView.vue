<script setup>
import { onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router';
import { useGetData } from '../composables/getData';

// onMounted(async () =>{
//     const result = await fetch('https://pokeapi.co/api/v2/pokemon')
//     pokemonsList.value = await result.json()
    
// })
const { data, getData } = useGetData()
getData("https://pokeapi.co/api/v2/pokemon")


</script>

<template>
    <h1>Pokemons</h1>
    <p>Vista de pokemones</p>
    <h2>Nombres de pokemones</h2>
    <ul>
        <li v-for="pokemon in data?.results">
            <router-link :to="`/pokemons/${pokemon.name}`">
                <p>{{ pokemon.name }}</p>
            </router-link>
            
        </li>
    </ul>
</template>