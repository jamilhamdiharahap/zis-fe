import { defineStore } from 'pinia';
import { getCategoriService } from '../service/categoriService.js';

export const useCategoriStore = defineStore('categori', {
    state: () => ({
        items: []
    }),

    actions: {
        async fetchCategories(param) {
            try {
                const { status, data, count_rows } = await getCategoriService(param);
                if (status === 2000) {
                    this.updateItems(data)
                    this.updateRowCount(count_rows);
                }
            } catch (error) {
                console.error("Error fetching donations:", error);
            }
        },

        updateItems(data) {
            this.items = data;
        },
    },

    getters: {
        getItems: state => state.items,
    },
});
