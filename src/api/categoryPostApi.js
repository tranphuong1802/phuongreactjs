import http from "./axiosHttp";

const getAll = () => {
    return http.get("/categoryPost");
};

const get = id => {
    return http.get(`/categoryPost/${id}`);
};

const create = data => {
    return http.post("/categoryPost", data);
};

const update = (id, data) => {
    return http.put(`/categoryPost/${id}`, data);
};

const remove = id => {
    console.log(id);
    return http.delete(`/categoryPost/${id}`);
};


export default {
    getAll,
    get,
    create,
    update,
    remove,
};