<script setup>
import { onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router';
import { useGetData } from '../composables/getData';

// onMounted(async () =>{
//     const result = await fetch('https://pokeapi.co/api/v2/pokemon')
//     pokemonsList.value = await result.json()
    
// })
const { data, getData, loading, error } = useGetData()
getData("https://pokeapi.co/api/v2/pokemon")


</script>

<template>
    <h1>Pokemons</h1>
    <p v-if="loading">Cargando informacion...</p>
    <div class="alert alert-danger" v-if="error">{{ error }}</div>
    <div v-if="data">
        <p>Vista de pokemones</p>
        <h2>Nombres de pokemones</h2>
        <ul class="list-group">
            <li v-for="pokemon in data?.results" class="list-group-item">
                <router-link :to="`/pokemons/${pokemon.name}`">
                    <p>{{ pokemon.name }}</p>
                </router-link>
                
            </li>
        </ul>
        <button :disabled="!data.previous" class="btn btn-danger me-2" @click="getData(data.previous)">Previous</button>
        <button :disabled="!data.next" class="btn btn-primary" @click="getData(data.next)">Next</button>
    </div>
    
</template>