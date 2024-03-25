import { defineStore } from 'pinia';
import { getDonationService } from '../service/donationService.js';

export const useDonationStore = defineStore('donation', {
    state: () => ({
        items: [],
        rowCount: 0
    }),

    actions: {
        async fetchDonations(params) {
            try {
                const { status, data, count_rows } = await getDonationService(params);
                console.log(count_rows)
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

        updateRowCount(countRows) {
            this.rowCount = countRows;
        },
    },

    getters: {
        getItems: state => state.items,
        getCountRow: state => state.rowCount
    },
});
