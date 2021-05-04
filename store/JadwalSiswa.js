export const state = () => ({
    jadwalsiswas: [],
    errors: [],
    id: [],
    page: 1 //DEFAULT PAGE YANG AKTIF ADALAH 1
})
export const mutations = {
    SET_JADWALSISWA_DATA(state, payload) {
        state.jadwalsiswas = payload
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
    getJadwalSiswaData({ commit, state }, payload) {
        let search = payload ? payload:''
        return new Promise((resolve, reject) => {
            //KIRIM REQUEST KE API, DENGAN MENGIRMKAN PARAMETER Q DAN PAGE
            //DIMANA Q ADALAH PENCARIAN DAN PAGE ADALAH AKTIF PAGE YANG SEDANG DIAKSES
            this.$axios.get(`/jadwalsiswa?q=${search}&page=${state.page}`).then((response) => {
                commit('SET_JADWALSISWA_DATA', response.data.data) //JIKA BERHASIL, SET DATA BARU 
                resolve()
                //  console.log(response.data)
            })
        })
    },
    getJadwalSiswaViiData({ commit, state }, payload) {
        let search = payload ? payload:''
        return new Promise((resolve, reject) => {
            //KIRIM REQUEST KE API, DENGAN MENGIRMKAN PARAMETER Q DAN PAGE
            //DIMANA Q ADALAH PENCARIAN DAN PAGE ADALAH AKTIF PAGE YANG SEDANG DIAKSES
            this.$axios.get(`/jadwalsiswavii?q=${search}&page=${state.page}`).then((response) => {
                commit('SET_JADWALSISWA_DATA', response.data.data) //JIKA BERHASIL, SET DATA BARU 
                resolve()
                //  console.log(response.data)
            })
        })
    },
    getJadwalSiswaViiiData({ commit, state }, payload) {
        let search = payload ? payload:''
        return new Promise((resolve, reject) => {
            //KIRIM REQUEST KE API, DENGAN MENGIRMKAN PARAMETER Q DAN PAGE
            //DIMANA Q ADALAH PENCARIAN DAN PAGE ADALAH AKTIF PAGE YANG SEDANG DIAKSES
            this.$axios.get(`/jadwalsiswaviii?q=${search}&page=${state.page}`).then((response) => {
                commit('SET_JADWALSISWA_DATA', response.data.data) //JIKA BERHASIL, SET DATA BARU 
                resolve()
                //  console.log(response.data)
            })
        })
    },
    getJadwalSiswaIxData({ commit, state }, payload) {
        let search = payload ? payload:''
        return new Promise((resolve, reject) => {
            //KIRIM REQUEST KE API, DENGAN MENGIRMKAN PARAMETER Q DAN PAGE
            //DIMANA Q ADALAH PENCARIAN DAN PAGE ADALAH AKTIF PAGE YANG SEDANG DIAKSES
            this.$axios.get(`/jadwalsiswaix?q=${search}&page=${state.page}`).then((response) => {
                commit('SET_JADWALSISWA_DATA', response.data.data) //JIKA BERHASIL, SET DATA BARU 
                resolve()
                //  console.log(response.data)
            })
        })
    },

    storeJadwalSiswaData({ dispatch, commit }, payload) {
        return new Promise((resolve, reject) => {
            this.$axios.post('/jadwalsiswa', payload)
            .then(() => {
                dispatch('getJadwalsiswaData')
                resolve()
            })
            .catch((error) => {
                commit('SET_ERRORS', error.response.data)
            })
        })
    },
    destroyJadwalSiswaData({ dispatch, commit }, payload) {
        return new Promise((resolve, reject) => {
            this.$axios.delete(`/jadwalsiswa/${payload}`)
            .then(() => {
                dispatch('getJadwalSiswaData')
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
            this.$axios.get(`/jadwalsiswa/${payload}`).then((response) => {
                commit('SET_DATA', response.data.data) //SET DATA YANG DITERIMA KE DALAM STATE
                resolve()
                console.log(response.data.data)
            })
        })
    },
    updateJadwalSiswaData({ dispatch, commit }, payload) {
        return new Promise((resolve, reject) => {
            this.$axios.put(`/jadwalsiswa/${payload.id}`, payload)
            .then(() => {
                dispatch('getJadwalSiswaData')
                resolve()
            })
            .catch((error) => {
                commit('SET_ERRORS', error.response.data)
            })
        })
    },
}
