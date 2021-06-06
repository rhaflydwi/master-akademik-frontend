<template>
    <div>

        <div class="form-group">
            <label for="">Nama Alat</label>
            <input type="text" class="form-control" :class="{'is-invalid': errors.nama_alat}" v-model="laboratorium.nama_alat">
            <p class="text-danger" v-if="errors.nama_alat">{{ errors.nama_alat[0] }}</p>
        </div>
        <div class="form-group">
            <label for="">Jumlah</label>
            <input type="text" class="form-control" :class="{'is-invalid': errors.jumlah}" v-model="laboratorium.jumlah">
            <p class="text-danger" v-if="errors.jumlah">{{ errors.jumlah[0] }}</p>
        </div>
        <div class="form-group">
            <label for="">penanggung_jawab</label>
            <input type="text" class="form-control" :class="{'is-invalid': errors.penanggung_jawab}" v-model="laboratorium.penanggung_jawab">
            <p class="text-danger" v-if="errors.penanggung_jawab">{{ errors.penanggung_jawab[0] }}</p>
        </div>
        <div class="form-group">
            <label for="">Status</label>
            <select class="form-control" :class="{'is-invalid': errors.status}" v-model="laboratorium.status">
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
            if (this.$route.name == 'LaboratoriumAlat-edit-id') {
                this.laboratorium = {
                id: this.laboratoriums.id,
                nama_alat: this.laboratoriums.nama_alat,
                jumlah: this.laboratoriums.jumlah,
                penanggung_jawab: this.laboratoriums.penanggung_jawab,
                status: this.laboratoriums.status
            }
        }
    },
    data() {
        return {
            laboratorium: {
                nama_alat: '',
                jumlah: '',
                penanggung_jawab: '',
                status: ''
            }
        }
    },
    computed: {
        ...mapState('laboratoriums', {
            laboratoriums: state => state.data,
            errors: state => state.errors
        })
    },
    methods: {
       ...mapActions('laboratoriums', ['storeLaboratoriumData', 'updateLaboratoriumsData']),
        submit() {
            if (this.$route.name == 'LaboratoriumAlat-edit-id') {
                let data = Object.assign({id: this.$route.params.id}, this.laboratorium)
                this.updateLaboratoriumsData(data).then((this.$router.push({name: 'LaboratoriumAlat'})))
            } else {
                this.storeLaboratoriumData(this.laboratorium).then(() => this.$router.push({name: 'LaboratoriumAlat'}))
                    }
                }
            }
}
</script>