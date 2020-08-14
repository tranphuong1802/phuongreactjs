import http from "./axiosHttp";

const getAll = () => {
    return http.get("/category");
};

const get = id => {
    return http.get(`/category/${id}`);
};

const create = data => {
    return http.post("/category", data);
};

const update = (id, data) => {
    return http.put(`/category/${id}`, data);
};

const remove = id => {
    console.log(id);
    return http.delete(`/category/${id}`);
};
const getProductsByCateId = id => {
    return http.get(`/category/${id}/products`);
};


export default {
    getAll,
    getProductsByCateId,
    get,
    create,
    update,
    remove,
};