import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api";


const getAll = () => {
    return axios.post(API_URL + "/course/findAll", { headers: authHeader() },null);
  };

  const getAllMentor = () => {
    return axios.post(API_URL + "/mentor/findAll", { headers: authHeader() },null);
  };

  const get = (id) => {
    return axios.get(API_URL + `/carts/${id}`, { headers: authHeader() });
  }

  const create = (data) => {
    return axios.post(API_URL + "/carts", data, { headers: authHeader() });
  }

  const update = (id, data) => {
    return axios.post(API_URL + `/course/update/${id}`, data, { headers: authHeader() });
  }

  const deleteProduct = (id) => {
    return axios.delete(API_URL + `/carts/${id}`, { headers: authHeader() });
  }

  const payAll = (sumAmount) => {
    const data = {};
    return axios.put(API_URL + `/payment/${sumAmount}`, data, { headers: authHeader() });
  }

  const findByTitle = (title) => {
    return axios.get(API_URL + `/carts?title=${title}`, { headers: authHeader() });
  }

  export default {
    getAll,
    get,
    create,
    update,
    deleteProduct,
    payAll,
    findByTitle,
    getAllMentor
  };