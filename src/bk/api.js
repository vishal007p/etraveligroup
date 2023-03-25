import axios from "axios"
export async function getData(){
    const response = await axios.get("https://swapi.dev/api/films/?format=json");
    return response.data;
}