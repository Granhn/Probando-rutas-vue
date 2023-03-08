
<script setup>

    import { onMounted, ref } from 'vue'
    import { useRoute, useRouter } from 'vue-router'

    const route = useRoute();
    const router = useRouter();
    let poke = ref({});

    const back = () =>{
        router.push('/pokemons');
    }

    const getData = async () =>{
        try {
            console.log(route.params.name)
            const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`);
            poke.value = await data.json()
            console.log(poke.value)
        } catch (error) {
            poke.value = null;
            console.log('error');
        }
        
    }
    getData()
    

</script>


<template>
    <div v-if="poke">
        <h1>{{ $route.params.name }}</h1>
        <img 
        :src="poke.sprites?.front_default" 
        alt="No carga la foto"
        >
        <h2>Pokemon type</h2>
        <ul>
            <li 
            v-for="tipo in poke.types"
            >
                {{ tipo.type.name }}
            </li>
        </ul>
    </div>
    <h1 v-else>No existe el pokemon</h1>
    <button @click="back" class="btn btn-outline-primary">Go back</button>
</template>