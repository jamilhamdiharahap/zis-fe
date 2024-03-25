import instance from "../plugins/axios";

export async function getDonationService({ title, page }) {
    try {
        const { data } = await instance.get(`api/v1/donation?title=${title}&page=${page}`);
        return data;
    } catch (err) {
        return err;
    }
}