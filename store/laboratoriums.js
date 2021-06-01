export const state = () => ({
    laboratorium: [],
    errors: [],
    data: [],
    id: [],
    page: 1 //DEFAULT PAGE YANG AKTIF ADALAH 1
})
export const mutations = {
    SET_LABORATORIUMS_DATA(state, payload) {
        state.laboratorium = payload
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
    getLaboratoriumData({ commit, state }, payload) {
        let search = payload ? payload:''
        return new Promise((resolve, reject) => {
            //KIRIM REQUEST KE API, DENGAN MENGIRMKAN PARAMETER Q DAN PAGE
            //DIMANA Q ADALAH PENCARIAN DAN PAGE ADALAH AKTIF PAGE YANG SEDANG DIAKSES
            this.$axios.get(`/laboratorium?q=${search}&page=${state.page}`).then((response) => {
                commit('SET_LABORATORIUMS_DATA', response.data.data) //JIKA BERHASIL, SET DATA BARU 
                resolve()
                // console.log(response.data.data)
            })
        })
    },
    storeLaboratoriumData({ dispatch, commit }, payload) {
        return new Promise((resolve, reject) => {
            this.$axios.post('/laboratorium', payload)
            .then(() => {
                dispatch('getLaboratoriumData')
                resolve()
            })
            .catch((error) => {
                commit('SET_ERRORS', error.response.data)
            })
        })
    },
    destroyLaboratoriumData({ dispatch, commit }, payload) {
        return new Promise((resolve, reject) => {
            this.$axios.delete(`/laboratorium/${payload}`)
            .then(() => {
                dispatch('getLaboratoriumData')
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
            this.$axios.get(`/laboratorium/${payload}`).then((response) => {
                commit('SET_DATA', response.data.data) //SET DATA YANG DITERIMA KE DALAM STATE
                resolve()
                console.log(response.data.data)
            })
        })
    },
    updateLaboratoriumsData({ dispatch, commit }, payload) {
        return new Promise((resolve, reject) => {
            this.$axios.put(`/laboratorium/${payload.id}`, payload)
            .then(() => {
                dispatch('getLaboratoriumData')
                resolve()
            })
            .catch((error) => {
                commit('SET_ERRORS', error.response.data)
            })
        })
    },
    
}
