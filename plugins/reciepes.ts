export default defineNuxtPlugin(async (nuxtApp) => {
    const {data , error , pending} = useAsyncData('recipes',() => $fetch('https:api.sampleapis.com/recipes/recipes'));
    await pending.value;
    if(error.value) {
     console.error('Error fetching recipes:', error.value);
    }
    return {
        provide : {
            recipes : data.value || [],
            error : error.value || null,
            pending : pending.value || false,
        }
    }
})
