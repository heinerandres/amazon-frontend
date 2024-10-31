import axios from 'axios';

//const {} = ''

const ecommerceApi = axios.create({
    baseURL: 'https://ecommerce-backend-aafqbaf5baeddjad.canadacentral-01.azurewebsites.net/api'
});

export default ecommerceApi;