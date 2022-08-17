import { defineStore } from "pinia"

export const useWallet = defineStore('wallet', {
    state: () => {
        return {
            address: '',
			isDapp: false,
			isUnlock: false,
			amount1: null,
			amount2: null,
			min: null,
			max: null,
			my_sl: null,
			all_sl: null,
			bd: null,
			first_leader: null,
			invite_url: null,
			withdraw_list: null,
			money_log_list: null,
			fh_wallet: null,
			rewardBnb: null,
        }
    },
    getters: {
        sortAddress: (state) => {
            if (state.address == '') {
                return ''
            }
            return state.address.slice(0, 15) + '...' + state.address.slice(-15)
        }
    },
})