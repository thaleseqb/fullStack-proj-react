import axios from "axios";

const favApi = axios.create({baseURL:"http://localhost:8000/favoritos"});

async function getFavorites() {
    const response = await favApi.get("/");
    
    return response.data;
}

async function postFav(id) {
    await favApi.post(`/${id}`);
}

async function deleteFav(id) {
    await favApi.delete(`/${id}`);
}

export {getFavorites, postFav, deleteFav};