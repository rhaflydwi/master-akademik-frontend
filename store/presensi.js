export const state = () => ({
    presensis: [],
    errors: [],
    data: [],
    id: [],
    page: 1 //DEFAULT PAGE YANG AKTIF ADALAH 1
})
export const mutations = {
    SET_PRESENSI_DATA(state, payload) {
        state.presensis = payload
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

    getData({ commit, state }, payload) {
        
            return new Promise((resolve, reject) => {
                //KIRIM REQUEST KE API, DENGAN MENGIRMKAN PARAMETER Q DAN PAGE
                //DIMANA Q ADALAH PENCARIAN DAN PAGE ADALAH AKTIF PAGE YANG SEDANG DIAKSES
                this.$axios.get(`presensi/${payload }`).then((response) => {
                    commit('SET_DATA', response.data.data) //JIKA BERHASIL, SET DATA BARU 
                    resolve(response)
                })
            })
        },
        absenMasukData({ dispatch, commit}, payload) {
            return new Promise((resolve, reject) => {
                this.$axios.post('presensi/absen-masuk', payload)
                .then((res) => {
                    resolve(res)
                })
                .catch((error) => {
                    commit('SET_ERRORS', error.response.data)
                })
            })
        },
    getPresensiData({ commit }) {
        return new Promise((resolve, reject) => {
            //DIMANA KITA MELAKUKAN REQUEST DENGAN METHOD GET KE URL /USERS
            this.$axios.get('/presensi').then((response) => {
                //DAN MENYIMPAN DATANYA KE STATE USERS MELALUI MUTATIONS
                commit('SET_PRESENSI_DATA', response.data.data)
                resolve()
            })
        })
    },

    getDataGuru({ commit, state }, payload) {
        
            return new Promise((resolve, reject) => {
                //KIRIM REQUEST KE API, DENGAN MENGIRMKAN PARAMETER Q DAN PAGE
                //DIMANA Q ADALAH PENCARIAN DAN PAGE ADALAH AKTIF PAGE YANG SEDANG DIAKSES
                this.$axios.get(`presensiguru/${payload }`).then((response) => {
                    commit('SET_DATA', response.data.data) //JIKA BERHASIL, SET DATA BARU 
                    resolve(response)
                })
            })
        },

        absenMasukDataGuru({ dispatch, commit}, payload) {
            return new Promise((resolve, reject) => {
                this.$axios.post('presensiguru/absen-masuk', payload)
                .then((res) => {
                    resolve(res)
                })
                .catch((error) => {
                    commit('SET_ERRORS', error.response.data)
                })
            })
        },

        getPresensiDataGuru({ commit }) {
            return new Promise((resolve, reject) => {
                //DIMANA KITA MELAKUKAN REQUEST DENGAN METHOD GET KE URL /USERS
                this.$axios.get('/presensiguru').then((response) => {
                    //DAN MENYIMPAN DATANYA KE STATE USERS MELALUI MUTATIONS
                    commit('SET_PRESENSI_DATA', response.data.data)
                    resolve()
                })
            })
        },
}
