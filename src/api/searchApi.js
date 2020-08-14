import http from "./axiosHttp";

const getAll = () => {
    return http.get("/search");
};

const get = id => {
    return http.get(`/search/${id}`);
};

const create = data => {
    return http.search("/search", data);
};

const update = (id, data) => {
    return http.put(`/search/${id}`, data);
};

const remove = id => {
    console.log(id);
    return http.delete(`/search/${id}`);
};


export default {
    getAll,
    get,
    create,
    update,
    remove,
};