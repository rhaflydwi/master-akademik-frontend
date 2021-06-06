<template>
        <!-- Content Wrapper -->
        <div id="content-wrapper" class="d-flex flex-column">

                <!-- Begin Page Content -->
                <div class="container-fluid">
  <div class="container-fluid">
        <div class="card">
            <div class="card-header">
                <h2 class="card-title m-0 font-weight-bold text-primary"><i class="fa fa-calendar" aria-hidden="true"></i>
                    Jadwal Siswa                    
                </h2>
            </div>
            
            <div class="card-body row">
                <div class="col-md-4 offset-md-8 mb-4">
                  	<!-- FUNGSI PENCARIAN INI AKAN BERFUNGSI KETIKA TOMBOL ENTER DITEKAN -->
                    <input type="text" placeholder="Search" v-model="search" class="form-control">
                  
                </div>
                <div class="col-md-12">
                    <b-table striped hover :items="jadwalsiswas.data" :fields="fields" show-empty responsive>
                    <template v-slot:cell(actions)="row">
                            <!-- TOMBOL EDIT AKAN DIARAHKAN KE HALAMAN BARU --> 
                            <nuxt-link :to="{name: 'jadwalsiswa-edit-id', params: {id: row.item.id}}" :key="'edit'+row.index" class="btn btn-warning btn-sm" style="margin:5px">Edit</nuxt-link>
                            <!-- TOMBOL HAPUS AKAN MEMBUKA MODAL KONFIRMASI --> 
                            <button class="btn btn-danger btn-sm" style="margin:5px" @click="openDeleteModal(row)">Delete</button>
                    </template>
                        <!-- MENAMPILKAN TOMBOL EDIT DAN HAPUS --> 
                    </b-table>
                    <!-- MENAMPILKAN PAGINASI DATA USER, DIMANA V-MODELNYA BERDASARKAN PAGE YANG SEDANG AKTIF --> 
                    <b-pagination
                        align="right"
                        value:="jadwalsiswas.current_page"
                        :total-rows="jadwalsiswas.total"
                        :per-page="jadwalsiswas.per_page"
                        @change="changePage"
                        aria-controls="my-table"
                    ></b-pagination>
                </div>
                <!-- MODAL AKAN DITEMPATKAN DISINI -->
                <!-- MODAL INI AKAN DIBUKA, JIKA deleteModal bernilai true -->
                <b-modal v-model="deleteModal" title="Delete Jadwal Siswa">
                    <!-- TAMPILKAN DATA USER YANG AKAN DIHAPUS -->
                    <p>Kamu yakin ingin menghapus data: <code>{{ jadwalsiswa_selected ? jadwalsiswa_selected.hari:'' }}</code>?</p>
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
                                @click="deleteJadwalSiswa"
                            >
                                Delete
                            </b-button>
        </div>
    </template>
</b-modal>                 
            </div>
        </div>
  </div>
                </div>
        </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex'
export default {
    layout: 'DefaultGuru',
    //KETIKA PAGE DILOAD, MAKA FUNGSI INI AKAN DIJALANKAN SECARA OTOMATIS
    //DIMANA KITA MEMANGGIL FUNGSI GETUSERSDATA DARI STORE USER
    async asyncData({store}) {
        await Promise.all([
            store.dispatch('JadwalSiswa/getJadwalSiswaData')
        ])
        return
    },
    data() {
        return {
            //FIELD UNTUK MENJADI HEADER TABLE
            fields: ['hari','jam', 'ruang', 'mata_pelajaran', 'kelas', 'guru_pengampu'], 
            items: [],
            deleteModal: false, 
            jadwalsiswa_selected: null, //MENGHANDLE DATA USER YANG AKAN DIHAPUS
            search: '' //MENGHANDLE VALUE PENCARIAN
        }
    },
    mounted() {
        //  console.log(this.jadwalsiswas.data);
    },
    computed: {
        ...mapState('JadwalSiswa', {
            jadwalsiswas: state => state.jadwalsiswas,
            page: state => state.page //AMBIL DATA PAGE YANG SEDANG AKTIF SAAT INI
        })
    },
    watch: {
        //JIKA VALUE PAGE BERUBAH
        page() {
            //MAKA REQUEST DATA BARU
            this.getJadwalSiswaData(this.search)
        }  
    },
    methods: {
        ...mapActions('JadwalSiswa', ['getJadwalSiswaData', 'destroyJadwalSiswaData']),
        ...mapMutations('JadwalSiswa', ['SET_PAGE']),
        //JIKA PADA FORM PENCARIAN DITEKAN ENTER, MAKA FUNGSI INI AKAN DIJALANKAN
        // findBuku() {
        //     //LAKUKAN PEMANGGILAN KE API UNTUK MENDAPATKAN DATA BERDASARKAN PENCARIAN
        //     this.getBukuData(this.search)
        // },
        //JIKA PAGINATION DIKLIK, MAKA AKAN MENGESET VALUE PAGE YANG SEDANG AKTIF
        openDeleteModal(row) {
            this.jadwalsiswa_selected = row.item //KITA SET USER YANG AKAN DIHAPUS
            this.deleteModal = true //BUKA MODAL KONFIRMASI
        },
        //JIKA TOMBOL DELETE PADA MODAL DITEKAN, MAKA FUNGSI INI AKAN DIJALANKAN
        deleteJadwalSiswa() {
        //JALANKAN ACTIONS YANG BERISI PERINTAH UNTUK HIT KE API
        //DENGAN MENGIRIMKAN ID USER YANG AKAN DIHAPUS
        this.destroyJadwalSiswaData(this.jadwalsiswa_selected.id).then(() => {
        //JIKA BERHASIL, TUTUP MODAL DAN BERSIHKAN SELECTED USER
        this.deleteModal = false
        this.jadwalsiswa_selected = null
    })
        },
        changePage(val) {
            this.SET_PAGE(val)
            this.getJadwalSiswaData()
            //  console.log(val)
        }
    },
     watch: {
        'search': function() {
            // this.SET_PAGE(this.buku.current_page)
            this.getJadwalSiswaData(this.search)
        }
    },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
