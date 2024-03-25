import instance from "../plugins/axios";

export async function getCategoriService(param) {
    try {
        const { data } = await instance.get(`/api/v1/category?title=${param}`);
        return data;
    } catch (err) {
        return err;
    }
}