export const state = () => ({
    buku: [],
    errors: [],
    data: [],
    id: [],
    page: 1 //DEFAULT PAGE YANG AKTIF ADALAH 1
})
export const mutations = {
    SET_BUKUS_DATA(state, payload) {
        state.buku = payload
    },
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
    getBukuData({ commit, state }, payload) {
        let search = payload ? payload:''
        return new Promise((resolve, reject) => {
            //KIRIM REQUEST KE API, DENGAN MENGIRMKAN PARAMETER Q DAN PAGE
            //DIMANA Q ADALAH PENCARIAN DAN PAGE ADALAH AKTIF PAGE YANG SEDANG DIAKSES
            this.$axios.get(`/buku?q=${search}&page=${state.page}`).then((response) => {
                commit('SET_BUKUS_DATA', response.data.data) //JIKA BERHASIL, SET DATA BARU 
                resolve()
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
    getData({ commit }, payload) {
        return new Promise((resolve, reject) => {
            //KIRIM REQUEST KE SERVER UNTUK MENGAMBIL DATA USER
            this.$axios.get(`/buku/${payload}`).then((response) => {
                commit('SET_DATA', response.data.data) //SET DATA YANG DITERIMA KE DALAM STATE
                resolve()
                console.log(response.data.data)
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
