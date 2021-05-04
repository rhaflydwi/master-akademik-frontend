<template>
    <div class="container-fluid">
        <div class="card">
            <div class="card-header">
                <h4 class="card-title">
                    List Buku
                    <nuxt-link class="btn btn-primary float-right btn-sm" :to="{name: 'bukusiswa-pinjam'}">Pinjam Buku</nuxt-link>
                </h4>
            </div>
            
            <div class="card-body row">
                <div class="col-md-4 offset-md-8 mb-4">
                  	<!-- FUNGSI PENCARIAN INI AKAN BERFUNGSI KETIKA TOMBOL ENTER DITEKAN -->
                    <input type="text" placeholder="Search" v-model="search" class="form-control">
                  
                </div>
                <div class="col-md-12">
                    <b-table striped hover :items="buku.data" :fields="fields" show-empty responsive>
                        <template v-slot:cell(judul)="row">
                            <p><strong>{{ row.item.judul }}</strong></p>
                            <p>
                                STATUS: <span class="badge badge-success">{{ row.item.status == 1 ? 'Pinjam':'Tidak di pinjam' }}</span>
                            </p>
                        </template>
                      
                      	<!-- MENAMPILKAN TOMBOL EDIT DAN HAPUS --> 
                        <template v-slot:cell(actions)="row">
                            <!-- TOMBOL EDIT AKAN DIARAHKAN KE HALAMAN BARU --> 
                            <nuxt-link :to="{name: 'buku-edit-id', params: {id: row.item.id}}" :key="'edit'+row.index" class="btn btn-warning btn-sm">Edit</nuxt-link>
                            <!-- TOMBOL HAPUS AKAN MEMBUKA MODAL KONFIRMASI --> 
                            <button class="btn btn-danger btn-sm" @click="openDeleteModal(row)">Delete</button>
                        </template>
                        <!-- MENAMPILKAN TOMBOL EDIT DAN HAPUS --> 
                      
                    </b-table>
                  
                    <!-- MENAMPILKAN PAGINASI DATA USER, DIMANA V-MODELNYA BERDASARKAN PAGE YANG SEDANG AKTIF --> 
                    <b-pagination
                        align="right"
                        :value="buku.current_page"
                        :total-rows="buku.total"
                        :per-page="buku.per_page"
                        @change="changePage"
                        aria-controls="my-table"
                    ></b-pagination>
                </div>
              
              	<!-- MODAL AKAN DITEMPATKAN DISINI -->
                <!-- MODAL INI AKAN DIBUKA, JIKA deleteModal bernilai true -->
                <b-modal v-model="deleteModal" title="Delete Data Buku">
                    <!-- TAMPILKAN DATA USER YANG AKAN DIHAPUS -->
                    <p>Kamu yakin ingin menghapus data: <code>{{ buku_selected ? buku_selected.judul:'' }}</code>?</p>
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
                                @click="deleteDataBuku"
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
    layout: 'DefaultMahasisswa',
    //KETIKA PAGE DILOAD, MAKA FUNGSI INI AKAN DIJALANKAN SECARA OTOMATIS
    //DIMANA KITA MEMANGGIL FUNGSI GETUSERSDATA DARI STORE USER
    async asyncData({store}) {
        await Promise.all([
            store.dispatch('bukus/getBukuData')
        ])
        return
    },
    data() {
        return {
            //FIELD UNTUK MENJADI HEADER TABLE
            fields: ['judul','penerbit', 'penanggung_jawab'], 
            items: [],
            deleteModal: false, 
            buku_selected: null, //MENGHANDLE DATA USER YANG AKAN DIHAPUS
            search: '' //MENGHANDLE VALUE PENCARIAN
        }
    },
    mounted() {
        // console.log(this.buku.per_page);
    },
    computed: {
        ...mapState('bukus', {
            buku: state => state.buku,
            page: state => state.page //AMBIL DATA PAGE YANG SEDANG AKTIF SAAT INI
        })
    },
    watch: {
        //JIKA VALUE PAGE BERUBAH
        page() {
            //MAKA REQUEST DATA BARU
            this.getBukuData(this.search)
        }  
    },
    methods: {
        ...mapActions('bukus', ['getBukuData', 'destroyBukuData']),
        ...mapMutations('bukus', ['SET_PAGE']),
        //JIKA TOMBOL DELETE DITEKAN, MAKA FUNGSI INI AKAN DIJALANKAN
        openDeleteModal(row) {
            this.buku_selected = row.item //KITA SET USER YANG AKAN DIHAPUS
            this.deleteModal = true //BUKA MODAL KONFIRMASI
        },
        //JIKA TOMBOL DELETE PADA MODAL DITEKAN, MAKA FUNGSI INI AKAN DIJALANKAN
        deleteDataBuku() {
        //JALANKAN ACTIONS YANG BERISI PERINTAH UNTUK HIT KE API
        //DENGAN MENGIRIMKAN ID USER YANG AKAN DIHAPUS
        this.destroyBukuData(this.buku_selected.id).then(() => {
        //JIKA BERHASIL, TUTUP MODAL DAN BERSIHKAN SELECTED USER
        this.deleteModal = false
        this.buku_selected = null
    })
        },
        //JIKA PADA FORM PENCARIAN DITEKAN ENTER, MAKA FUNGSI INI AKAN DIJALANKAN
        // findBuku() {
        //     //LAKUKAN PEMANGGILAN KE API UNTUK MENDAPATKAN DATA BERDASARKAN PENCARIAN
        //     this.getBukuData(this.search)
        // },
        //JIKA PAGINATION DIKLIK, MAKA AKAN MENGESET VALUE PAGE YANG SEDANG AKTIF
        changePage(val) {
            this.SET_PAGE(val)
            this.getBukusData()
            // console.log(val)
        }
    },
     watch: {
        'search': function() {
            // this.SET_PAGE(this.buku.current_page)
            this.getBukuData(this.search)
        }
    },
}
</script>