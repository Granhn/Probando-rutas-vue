
<script setup>

    import { onMounted, ref } from 'vue'
    import { useRoute, useRouter } from 'vue-router'
    import {useGetData} from '@/composables/getData'

    const route = useRoute();
    const router = useRouter();
    const back = () =>{
        router.push('/pokemons');
    }
    const { data, getData, loading, error } = useGetData();
    getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`);
    

</script>


<template>
    <p v-if="loading">Cargando informacion</p>
    <div class="alert alert-danger" v-if="error">{{ error }}</div>
    <div v-if="data">
        <h1>{{ $route.params.name }}</h1>
        <img 
        :src="data.sprites?.front_default" 
        alt="No carga la foto"
        >
        <h2>Pokemon type</h2>
        <ul>
            <li 
            v-for="tipo in data.types"
            >
                {{ tipo.type.name }}
            </li>
        </ul>
    </div>
    <h1 v-else>No existe el pokemon</h1>
    <button @click="back" class="btn btn-outline-primary">Go back</button>
</template>