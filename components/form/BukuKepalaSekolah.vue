<template>
    <div>

        <div class="form-group">
            <label for="">Judul</label>
            <input type="text" class="form-control" :class="{'is-invalid': errors.judul}" v-model="buku.judul">
            <p class="text-danger" v-if="errors.judul">{{ errors.judul[0] }}</p>
        </div>
        <div class="form-group">
            <label for="">penerbit</label>
            <input type="text" class="form-control" :class="{'is-invalid': errors.penerbit}" v-model="buku.penerbit">
            <p class="text-danger" v-if="errors.penerbit">{{ errors.penerbit[0] }}</p>
        </div>
        <div class="form-group">
            <label for="">penanggung_jawab</label>
            <input type="text" class="form-control" :class="{'is-invalid': errors.penanggung_jawab}" v-model="buku.penanggung_jawab">
            <p class="text-danger" v-if="errors.penanggung_jawab">{{ errors.penanggung_jawab[0] }}</p>
        </div>
        <div class="form-group">
            <label for="">Status</label>
            <select class="form-control" :class="{'is-invalid': errors.status}" v-model="buku.status">
                <option value="">Pilih</option>
                <option value="0">Tidak Di Pinjam</option>
                <option value="1">Pinjam</option>
            </select>
            <p class="text-danger" v-if="errors.status">{{ errors.status[0] }}</p>
        </div>
        <button class="btn btn-primary btn-sm" @click="submit">Save</button>
        <nuxt-link :to="{name: 'buku'}" class="btn btn-secondary btn-sm">Back</nuxt-link>
    </div>
</template>
<script>
import {mapActions, mapState} from 'vuex' 
export default {
        created() {
            if (this.$route.name == 'BukuKepalaSekolah-edit-id') {
                this.buku = {
                id: this.bukus.id,
                judul: this.bukus.judul,
                penerbit: this.bukus.penerbit,
                penanggung_jawab: this.bukus.penanggung_jawab,
                status: this.bukus.status
            }
        }
    },
    data() {
        return {
            buku: {
                judul: '',
                penerbit: '',
                penanggung_jawab: '',
                status: ''
            }
        }
    },
    computed: {
        ...mapState('bukus', {
            bukus: state => state.data,
            errors: state => state.errors
        })
    },
    methods: {
       ...mapActions('bukus', ['storeBukuData', 'updateBukusData']),
        submit() {
            if (this.$route.name == 'BukuKepalaSekolah-edit-id') {
                let data = Object.assign({id: this.$route.params.id}, this.buku)
                this.updateBukusData(data).then((this.$router.push({name: 'BukuKepalaSekolah'})))
            } else {
                this.storeBukuData(this.buku).then(() => this.$router.push({name: 'BukuKepalaSekolah'}))
                    }
                }
            }
}
</script>