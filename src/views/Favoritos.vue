<script setup>
    import { useFavoriteStore } from '@/store/favoritos';
    import { storeToRefs } from 'pinia'
    import { RouterLink } from 'vue-router';

    const useFavoritos = useFavoriteStore();
    const { favoritos } = storeToRefs(useFavoritos);
    const { remove } = useFavoritos;


</script>



<template>
    <h1>Favoritos VUE</h1>
    <p v-if="favoritos.length===0">Sin favoritos</p>
    <ul class="list-group" v-else>
        <li v-for="poke in favoritos" class="list-group-item" key="poke.id">
            <div>
                {{ poke?.name }}
            </div>
            <div>
                <router-link :to="`/pokemons/${poke.name}`" class="btn btn-primary btn-sm m-2">Mas informacion</router-link>
                <button class="btn btn-danger btn-sm" @click="remove(poke.id)">Eliminar</button>

                
            </div>
            
        </li>
    </ul>
</template>