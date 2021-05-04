<template>
    <div>

        <div class="form-group">
            <label for="">Hari</label>
            <select class="form-control" :class="{'is-invalid': errors.hari}" v-model="jadwalsiswa.hari">
                <option value="">Pilih</option>
                <option value="Senin">Senin</option>
                <option value="Selasa">Selasa</option>
                <option value="Rabu">Rabu</option>
                <option value="Kamis">Kamis</option>
                <option value="Jummat">Jummat</option>
                <option value="Sabtu">Sabtu</option>
            </select>
        </div>
        <div class="form-group">
            <label for="">Jam</label>
            <input type="time" class="form-control" :class="{'is-invalid': errors.jam}" v-model="jadwalsiswa.jam">
            <p class="text-danger" v-if="errors.jam">{{ errors.jam[0] }}</p>
        </div>
        <div class="form-group">
            <label for="">Ruang</label>
            <select class="form-control" :class="{'is-invalid': errors.ruang}" v-model="jadwalsiswa.ruang">
                <option value="">Pilih</option>
                <option value="R.1.1">R.1.1</option>
                <option value="R.1.2">R.1.2</option>
                <option value="R.1.3">R.1.3</option>
                <option value="R.2.1">R.2.1</option>
                <option value="R.2.2">R.2.2</option>
                <option value="R.2.3">R.2.3</option>
            </select>
            <p class="text-danger" v-if="errors.ruang">{{ errors.ruang[0] }}</p>
        </div>
        <div class="form-group">
            <label for="">Mata Pelajaran</label>
            <select class="form-control" :class="{'is-invalid': errors.mata_pelajaran}" v-model="jadwalsiswa.mata_pelajaran">
                <option value="">Pilih</option>
                <option value="Basis Data">Basis Data</option>
                <option value="Pemograman Web">Pemograman Web</option>
                <option value="Matematika">Matematika</option>
                <option value="Bahasa Indonesia">Bahasa Indonesia</option>
                <option value="Kimia">Kimia</option>
                <option value="Fisika">Fisika</option>
            </select>
        </div>
        <div class="form-group">
            <label for="">Kelas</label>
            <select class="form-control" :class="{'is-invalid': errors.kelas}" v-model="jadwalsiswa.kelas">
                <option value="">Pilih</option>
                <option value="VII">VII</option>
                <option value="VIII">VIII</option>
                <option value="IX">IX</option>
            </select>
            <p class="text-danger" v-if="errors.kelas">{{ errors.kelas[0] }}</p>
        </div>
        <div class="form-group">
            <label for="">Guru Pengampu</label>
            <input type="text" class="form-control" :class="{'is-invalid': errors.guru_pengampu}" v-model="jadwalsiswa.guru_pengampu">
            <p class="text-danger" v-if="errors.guru_pengampu">{{ errors.guru_pengampu[0] }}</p>
        </div>
        <button class="btn btn-primary btn-sm" @click="submit">Save</button>
        <nuxt-link :to="{name: 'jadwalsiswa'}" class="btn btn-secondary btn-sm">Back</nuxt-link>
    </div>
</template>
<script>
import {mapActions, mapState} from 'vuex' 
export default {
        created() {
            if (this.$route.name == 'jadwalsiswa-edit-id') {
                this.jadwalsiswa = {
                id: this.jadwalsiswas.id,
                hari: this.jadwalsiswas.hari,
                jam: this.jadwalsiswas.jam,
                ruang: this.jadwalsiswas.ruang,
                mata_pelajaran: this.jadwalsiswas.mata_pelajaran,
                kelas : this.jadwalsiswas.kelas,
                guru_pengampu : this.jadwalsiswas.guru_pengampu
            }
        }
    },
    data() {
        return {
            jadwalsiswa: {
                hari: '',
                jam: '',
                ruang: '',
                mata_pelajaran: '',
                kelas: '',
                guru_pengampu: '',
            }
        }
    },
    computed: {
        ...mapState('JadwalSiswa', {
            jadwalsiswas: state => state.data,
            errors: state => state.errors
        })
    },
    methods: {
       ...mapActions('JadwalSiswa', ['storeJadwalSiswaData', 'updateJadwalSiswaData']),
        submit() {
            if (this.$route.name == 'jadwalsiswa-edit-id') {
                let data = Object.assign({id: this.$route.params.id}, this.jadwalsiswa)
                this.updateJadwalSiswaData(data).then((this.$router.push({name: 'jadwalsiswa'})))
            } else {
                this.storeJadwalSiswaData(this.jadwalsiswa).then(() => this.$router.push({name: 'jadwalsiswa'}))
                    }
                }
            }
}
</script>