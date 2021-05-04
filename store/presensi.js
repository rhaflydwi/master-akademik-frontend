export const state = () => ({
    errors: [],
    data: [],
    id: [],
    page: 1 //DEFAULT PAGE YANG AKTIF ADALAH 1
})
export const mutations = {
    
    SET_ERRORS(state, payload) {
        state.errors = payload
    },
    SET_DATA(state, payload) {
        state.data = payload
    },
    SET_PAGE(state, payload) {
        state.page = payload
    }
}

export const actions = {
    getData({ commit, state }, payload) {
        
    console.log(payload)
        return new Promise((resolve, reject) => {
            //KIRIM REQUEST KE API, DENGAN MENGIRMKAN PARAMETER Q DAN PAGE
            //DIMANA Q ADALAH PENCARIAN DAN PAGE ADALAH AKTIF PAGE YANG SEDANG DIAKSES
            this.$axios.get(`presensi/${payload}`).then((response) => {
                commit('SET_DATA', response.data.data) //JIKA BERHASIL, SET DATA BARU 
                console.log(response.data)
                resolve(response)
                // console.log(response.data.data)
            })
        })
    },
    storeBukuData({ dispatch, commit }, payload) {
        return new Promise((resolve, reject) => {
            this.$axios.post('/buku', payload)
            .then(() => {
                dispatch('getBukuData')
                resolve()
            })
            .catch((error) => {
                commit('SET_ERRORS', error.response.data)
            })
        })
    },
    destroyBukuData({ dispatch, commit }, payload) {
        return new Promise((resolve, reject) => {
            this.$axios.delete(`/buku/${payload}`)
            .then(() => {
                dispatch('getBukuData')
                resolve()
            })
            .catch((error) => {
                commit('SET_ERRORS', error.response.data)
            })
        })
    },
    updateBukusData({ dispatch, commit }, payload) {
        return new Promise((resolve, reject) => {
            this.$axios.put(`/buku/${payload.id}`, payload)
            .then(() => {
                dispatch('getBukuData')
                resolve()
            })
            .catch((error) => {
                commit('SET_ERRORS', error.response.data)
            })
        })
    },
    
}
