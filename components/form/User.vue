<template>
    <div>
        <div class="form-group">
            <label for="">nis/nip</label>
            <input type="text" class="form-control" :class="{'is-invalid': errors.nis_nip}" v-model="users.nis_nip">
          	
          	<!-- UNTUK MENAMPILKAN VALIDASI ERROR -->
            <p class="text-danger" v-if="errors.nis_nip">{{ errors.nis_nip[0] }}</p>
        </div>
        <div class="form-group">
            <label for="">Name</label>
            <input type="text" class="form-control" :class="{'is-invalid': errors.name}" v-model="users.name">
            <p class="text-danger" v-if="errors.name">{{ errors.name[0] }}</p>
        </div>
        <div class="form-group">
            <label for="">Gender</label>
            <select class="form-control" :class="{'is-invalid': errors.gender}" v-model="users.gender">
                <option value="">Pilih</option>
                <option value="1">Male</option>
                <option value="0">Female</option>
            </select>
            <p class="text-danger" v-if="errors.gender">{{ errors.gender[0] }}</p>
        </div>
        <div class="form-group">
            <label for="">Address</label>
            <input type="text" class="form-control" :class="{'is-invalid': errors.address}" v-model="users.address">
            <p class="text-danger" v-if="errors.address">{{ errors.address[0] }}</p>
        </div>
        <div class="form-group">
            <label for="">Email</label>
            <input type="text" class="form-control" :class="{'is-invalid': errors.email}" v-model="users.email">
            <p class="text-danger" v-if="errors.email">{{ errors.email[0] }}</p>
        </div>
        <div class="form-group">
            <label for="">Password</label>
            <input type="password" class="form-control" :class="{'is-invalid': errors.password}" v-model="users.password">
            <p v-if="$route.name == 'users-edit-id'">Biarkan kosong jika Anda tidak mengubah kata sandi Anda</p>
            <p class="text-danger" v-if="errors.password">{{ errors.password[0] }}</p>
        </div>
        <div class="form-group">
            <label for="">Phone Number</label>
            <input type="text" class="form-control" :class="{'is-invalid': errors.phone_number}" v-model="users.phone_number">
            <p class="text-danger" v-if="errors.phone_number">{{ errors.phone_number[0] }}</p>
        </div>
        <div class="form-group">
            <label for="">Role</label>
            <select class="form-control" :class="{'is-invalid': errors.role}" v-model="users.role">
                <option value="">Pilih</option>
                <option value="0">Admin</option>
                <option value="1">Guru</option>
                <option value="2">Siswa</option>
                <option value="3">Petugas Tata Usaha</option>
                <option value="4">Petugas Laboratorium</option>
                <option value="5">Petugas Perpustakaan</option>
                <option value="6">Kepala Sekolah</option>

            </select>
            <p class="text-danger" v-if="errors.role">{{ errors.role[0] }}</p>
        </div>
        <div class="form-group">
            <label for="">Kelas</label>
            <select class="form-control" :class="{'is-invalid': errors.kelas}" v-model="users.kelas">
                <option value="">Pilih</option>
                <option value="0">VII</option>
                <option value="1">VIII</option>
                <option value="2">IX</option>
                <option value="4">Bukan Siswa</option>
            </select>
            <p class="text-danger" v-if="errors.kelas">{{ errors.kelas[0] }}</p>
        </div>
        <div class="form-group">
            <label for="">Status</label>
            <select class="form-control" :class="{'is-invalid': errors.status}" v-model="users.status">
                <option value="">Pilih</option>
                <option value="0">Tidak Aktif</option>
                <option value="1">Aktif</option>
            </select>
            <p class="text-danger" v-if="errors.status">{{ errors.status[0] }}</p>
        </div>
        <button class="btn btn-primary btn-sm" @click="submit">Save</button>
        <nuxt-link :to="{name: 'users'}" class="btn btn-secondary btn-sm">Back</nuxt-link>
    </div>
</template>
<script>
import {mapActions, mapState} from 'vuex' 
export default {
    data() {
        return {
            //VARIABLE UNTUK MENAMPUNG DATA INPUTAN DARI FORM
            users: {
                name: '',
                nis_nip: '',
                gender: '',
                address: '',
                email: '',
                password: '',
                phone_number: '',
                role: '',
                kelas: '',
                status: ''
            }
        }
    },
    computed: {
    ...mapState('user', {
        user: state => state.data,
        errors: state => state.errors
    })
},
    methods: {
        ...mapActions('user', ['storeUsersData', 'updateUserData']),
        submit() {
            //JIKA PAGE YANG DILOAD ADALAH EDIT USER
            if (this.$route.name == 'users-edit-id') {
                //MAKA ASSIGN ID KE DALAM DATA USER
                let data = Object.assign({id: this.$route.params.id}, this.users)
                //KEMUDIAN KIRIM REQUEST KE SERVER
                this.updateUserData(data).then((this.$router.push({name: 'users'})))
            } else {
                //SELAIN ITU MAKA FUNGSI ADD DATA YANG AKAN DIJALAKAN
                this.storeUsersData(this.users).then(() => this.$router.push({name: 'users'}))
            }
        }
    },

        created() {
        //FUNGSI INI HANYA AKAN KERJAKAN, APABILA HALAMAN YANG DILOAD ADALAH EDIT USER
        if (this.$route.name == 'users-edit-id') {
            this.users = {
                name: this.user.name,
                nis_nip: this.user.nis_nip,
                gender: this.user.gender,
                address: this.user.address,
                email: this.user.email,
                password: '',
                phone_number: this.user.phone_number,
                role: this.user.role,
                kelas: this.user.kelas,
                status: this.user.status
            }
    }
},
    }
</script>