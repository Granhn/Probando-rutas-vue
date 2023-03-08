import {ref} from 'vue';
export const useGetData = () => {

    const data = ref(null)
    const getData = async (url) =>{
        try {
            
            const result = await fetch(url);
            data.value  = await result.json()
        } catch (error) {
            poke.value = null;
            console.log('error');
        }
        
    }
    return {
        getData,
        data
    }
        
};