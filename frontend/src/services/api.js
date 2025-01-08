import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const getKeyboards = async() => {
    const response = await axios.get(`${API_URL}/keyboards`);
    return response.data;
};