import {defineStore} from 'pinia';
import { computed, ref } from 'vue';

export const useFavoriteStore = defineStore('favoritos', () =>{
    
    
    const favoritos = ref([]);
    if (localStorage.getItem('favoritos') ){
        favoritos.value = JSON.parse(localStorage.getItem('favoritos'))
    }

    const findPoke = name => favoritos.value.find(item => item.name === name)

    const add = (pokemon) =>{
        favoritos.value.push(pokemon);
        localStorage.setItem('favoritos', JSON.stringify(favoritos.value));
    }

    const remove = (id) => {
        favoritos.value = favoritos.value.filter(item => item.id != id)
    }


    return {
        favoritos,
        add,
        remove,
        findPoke
    }
})