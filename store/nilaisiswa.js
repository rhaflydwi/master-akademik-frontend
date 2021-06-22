export const state = () => ({
    nilai: [],
    errors: [],
    data: [],
    id: [],
    page: 1 //DEFAULT PAGE YANG AKTIF ADALAH 1
})
export const mutations = {
    SET_NILAIS_DATA(state, payload) {
        state.nilai = payload
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
    getNilaiData({ commit, state }, payload) {
        let search = payload ? payload:''
        return new Promise((resolve, reject) => {
            //KIRIM REQUEST KE API, DENGAN MENGIRMKAN PARAMETER Q DAN PAGE
            //DIMANA Q ADALAH PENCARIAN DAN PAGE ADALAH AKTIF PAGE YANG SEDANG DIAKSES
            this.$axios.get(`/datanilai?q=${search}&page=${state.page}`).then((response) => {
                commit('SET_NILAIS_DATA', response.data.data) //JIKA BERHASIL, SET DATA BARU 
                resolve()
            })
        })
    },
    storeNilaiData({ dispatch, commit }, payload) {
        return new Promise((resolve, reject) => {
            this.$axios.post('/datanilai/masuk', payload)
            .then(() => {
                dispatch('getNilaiData')
                resolve()
            })
            .catch((error) => {
                commit('SET_ERRORS', error.response.data)
            })
        })
    },
    destroyNilaiData({ dispatch, commit }, payload) {
        return new Promise((resolve, reject) => {
            this.$axios.delete(`/datanilai/delete/${payload}`)
            .then(() => {
                dispatch('getNilaiData')
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
            this.$axios.get(`/datanilai/${payload}`).then((response) => {
                commit('SET_DATA', response.data.data) //SET DATA YANG DITERIMA KE DALAM STATE
                resolve()
            })
        })
    },
    updateNilaisData({ dispatch, commit }, payload) {
        return new Promise((resolve, reject) => {
            this.$axios.put(`/datanilai/${payload.id}`, payload)
            .then(() => {
                dispatch('getNilaiData')
                resolve()
            })
            .catch((error) => {
                commit('SET_ERRORS', error.response.data)
            })
        })
    },

    getNilaiSiswaViiData({ commit, state }, payload) {
        let search = payload ? payload:''
        return new Promise((resolve, reject) => {
            //KIRIM REQUEST KE API, DENGAN MENGIRMKAN PARAMETER Q DAN PAGE
            //DIMANA Q ADALAH PENCARIAN DAN PAGE ADALAH AKTIF PAGE YANG SEDANG DIAKSES
            this.$axios.get(`/datanilai/a/kelasvii?q=${search}&page=${state.page}`).then((response) => {
                commit('SET_NILAIS_DATA', response.data.data) //JIKA BERHASIL, SET DATA BARU 
                resolve()
            })
        })
    },

    getNilaiSiswaViiiData({ commit, state }, payload) {
        let search = payload ? payload:''
        return new Promise((resolve, reject) => {
            //KIRIM REQUEST KE API, DENGAN MENGIRMKAN PARAMETER Q DAN PAGE
            //DIMANA Q ADALAH PENCARIAN DAN PAGE ADALAH AKTIF PAGE YANG SEDANG DIAKSES
            this.$axios.get(`/datanilai/a/kelasviii?q=${search}&page=${state.page}`).then((response) => {
                commit('SET_NILAIS_DATA', response.data.data) //JIKA BERHASIL, SET DATA BARU 
                resolve()
            })
        })
    },
    
    getNilaiSiswaXiData({ commit, state }, payload) {
        let search = payload ? payload:''
        return new Promise((resolve, reject) => {
            //KIRIM REQUEST KE API, DENGAN MENGIRMKAN PARAMETER Q DAN PAGE
            //DIMANA Q ADALAH PENCARIAN DAN PAGE ADALAH AKTIF PAGE YANG SEDANG DIAKSES
            this.$axios.get(`/datanilai/a/kelasxi?q=${search}&page=${state.page}`).then((response) => {
                commit('SET_NILAIS_DATA', response.data.data) //JIKA BERHASIL, SET DATA BARU 
                resolve()
            })
        })
    },
}
