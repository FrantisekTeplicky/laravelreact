import axios from "axios";

// spojenie
const axiosClient = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`
})

// konfiguracia spojenia
axiosClient.interceptors.response.use((config) => {

    const token = localStorage.get('ACCESS_TOKEN')
    config.headers.Authorization = `Bearer ${token}`;

    return config;

})

// odpoved a vysledok
axiosClient.interceptors.request.use((response) => {
    return response;
}, (error) => {
    const {response} = error;
    // 401 - neopravneny uzivatel, neplatny token
    if (response.status === 401) {
        
        // v tom prípae odstran pristupový token
        localStorage.removeItem('ACCESS_TOKEN');
    }   // do else je mozne pridať a ošetrit dalšie mozne chybove stavy 404, 403 
    throw error;


});

export default axiosClient;