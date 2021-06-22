<template>
    <div class="container-fluid">
        <div class="card">
            <div class="card-header">
                <h2 class="card-title m-0 font-weight-bold text-primary"><i class="fa fa-users" aria-hidden="true"></i>
                    List Users Petugas Laboratorium
                    <nuxt-link class="btn btn-primary float-right btn-sm" :to="{name: 'UserKepalaSekolah-add'}">Add New</nuxt-link>
                </h2>
            </div>
            <div class="card-body row">
                <div class="col-md-4 offset-md-8 mb-4">
                  	<!-- FUNGSI PENCARIAN INI AKAN BERFUNGSI KETIKA TOMBOL ENTER DITEKAN -->
                    <input type="text" placeholder="Search" v-model="search" class="form-control">
                  
                </div>
                <div class="col-md-12">
                    <b-table striped hover :items="users.data" :fields="fields" show-empty responsive>
                        <template v-slot:cell(name)="row">
                            <p><strong>{{ row.item.name }}</strong></p>
                            <p>
                                ID: <span class="badge badge-success">{{ row.item.nis_nip }}</span> <br>
                                Gender: <span class="badge badge-success">{{ row.item.gender == 1 ? 'Male':'Female' }}</span>
                                <br>
                                Status: <span class="badge badge-success">{{ row.item.status == 1 ? 'aktif':'tidak - aktif' }}</span>
                            </p>
                        </template>
                      
                      	<!-- MENAMPILKAN TOMBOL EDIT DAN HAPUS --> 
                        <template v-slot:cell(actions)="row">
                            <!-- TOMBOL EDIT AKAN DIARAHKAN KE HALAMAN BARU --> 
                            <nuxt-link :to="{name: 'UserKepalaSekolah-edit-id', params: {id: row.item.id}}" :key="'edit'+row.index" class="btn btn-warning btn-sm">Edit</nuxt-link>
                            <!-- TOMBOL HAPUS AKAN MEMBUKA MODAL KONFIRMASI --> 
                            <button class="btn btn-danger btn-sm" @click="openDeleteModal(row)">Delete</button>
                        </template>
                        <!-- MENAMPILKAN TOMBOL EDIT DAN HAPUS --> 
                      
                    </b-table>
                  
                    <!-- MENAMPILKAN PAGINASI DATA USER, DIMANA V-MODELNYA BERDASARKAN PAGE YANG SEDANG AKTIF --> 
                    <b-pagination
                        align="right"
                        :value="users.current_page"
                        :total-rows="users.total"
                        :per-page="users.per_page"
                        @change="changePage"
                        aria-controls="my-table"
                    ></b-pagination>
                </div>
              
              	<!-- MODAL AKAN DITEMPATKAN DISINI -->
                <!-- MODAL INI AKAN DIBUKA, JIKA deleteModal bernilai true -->
                <b-modal v-model="deleteModal" title="Delete Data User">
                    <!-- TAMPILKAN DATA USER YANG AKAN DIHAPUS -->
                    <p>Kamu yakin ingin menghapus data: <code>{{ user_selected ? user_selected.name:'' }}</code>?</p>
                    <template v-slot:modal-footer>
                        <div class="w-100 float-right">
                            <b-button
                                variant="secondary"
                                size="sm"
                                @click="deleteModal=false"
                            >
                                Close
                            </b-button>
                            <!-- JIKA TOMBOL INI DITEKAN, MAKA AKAN MENJALANKAN FUNGSI deleteDataUser -->
                            <b-button
                                variant="primary"
                                size="sm"
                                @click="deleteDataUser"
                            >
                                Delete
                            </b-button>
        </div>
    </template>
</b-modal>                 
            </div>
        </div>
    </div>
</template>


<script>
import { mapActions, mapState, mapMutations } from 'vuex'
export default {
    layout: 'DefaultKepalaSekolah',
    //KETIKA PAGE DILOAD, MAKA FUNGSI INI AKAN DIJALANKAN SECARA OTOMATIS
    //DIMANA KITA MEMANGGIL FUNGSI GETUSERSDATA DARI STORE USER
    async asyncData({store}) {
        await Promise.all([
            store.dispatch('UserPetugaslaboratorium/getUsersData')
        ])
        return
    },
    data() {
        return {
            //FIELD UNTUK MENJADI HEADER TABLE
            fields: ['name','address', 'email', 'phone_number', 'actions'], 
            items: [],
            deleteModal: false, 
            user_selected: null, //MENGHANDLE DATA USER YANG AKAN DIHAPUS
            search: '' //MENGHANDLE VALUE PENCARIAN
        }
    },
    computed: {
        ...mapState('UserPetugaslaboratorium', {
            users: state => state.users,
            page: state => state.page //AMBIL DATA PAGE YANG SEDANG AKTIF SAAT INI
        })
    },
    watch: {
        //JIKA VALUE PAGE BERUBAH
        page() {
            //MAKA REQUEST DATA BARU
            this.getUsersData(this.search)
        }  
    },
    methods: {
        ...mapActions('UserPetugaslaboratorium', ['getUsersData', 'destroyUsersData']),
        ...mapMutations('UserPetugaslaboratorium', ['SET_PAGE']),
        //JIKA TOMBOL DELETE DITEKAN, MAKA FUNGSI INI AKAN DIJALANKAN
        openDeleteModal(row) {
            this.user_selected = row.item //KITA SET USER YANG AKAN DIHAPUS
            this.deleteModal = true //BUKA MODAL KONFIRMASI
        },
        //JIKA TOMBOL DELETE PADA MODAL DITEKAN, MAKA FUNGSI INI AKAN DIJALANKAN
        deleteDataUser() {
        //JALANKAN ACTIONS YANG BERISI PERINTAH UNTUK HIT KE API
        //DENGAN MENGIRIMKAN ID USER YANG AKAN DIHAPUS
        this.destroyUsersData(this.user_selected.id).then(() => {
        //JIKA BERHASIL, TUTUP MODAL DAN BERSIHKAN SELECTED USER
        this.deleteModal = false
        this.user_selected = null
    })
        },
        //JIKA PADA FORM PENCARIAN DITEKAN ENTER, MAKA FUNGSI INI AKAN DIJALANKAN
        // findUser() {
        //     //LAKUKAN PEMANGGILAN KE API UNTUK MENDAPATKAN DATA BERDASARKAN PENCARIAN
        //     this.getUsersData(this.search)
        // },
        //JIKA PAGINATION DIKLIK, MAKA AKAN MENGESET VALUE PAGE YANG SEDANG AKTIF
        changePage(val) {
            this.SET_PAGE(val)
            this.getUserData()
        }
        },
        watch: {
        'search': function() {
            // this.SET_PAGE(this.buku.current_page)
            this.getUsersData(this.search)
        }
    },
}
</script>