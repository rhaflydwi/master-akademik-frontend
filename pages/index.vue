<template>
        <!-- Content Wrapper -->
        <div id="content-wrapper" class="d-flex flex-column">

                <!-- Begin Page Content -->
                <div class="container-fluid">

        <!-- Content Wrapper -->
      <div class="row">
          
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12" style="margin:25px">
                            <div class="card">
                                <div class="card-header bg-primary text-white">
                                    <h2 class="p-b-20">Status Siswa</h2>
                                </div>
                                <div class="row">
                                                                        <div class="col-md-4 col-sm-12">
                                        <div class="text-center img-responsive iconcov">
                                            <img ng-src="http://amikom.ac.id/template/assets_dashboard/img/Ok-96.png" src="http://amikom.ac.id/template/assets_dashboard/img/Ok-96.png">
                                        </div>
                                    </div>
                                    <div class="col-md-8 col-sm-12">
                                        <div class="bg-white cardcontainer">
                                            <!--<div class="">Status Mahasiswa</div>-->
                                          <h1 style="margin:20px">Aktif</h1>
                                        </div>
                                    </div>
                                                                    </div>
                            </div>
  </div>
  <div class="col-lg-4 col-md-6" style="margin:25px">
                            <div class="card">
                                <div class="card-header bg-success text-white">
                                    <h2 class="p-b-20">Login</h2>
                                </div>
                                <div class="row">
                                                                        <div class="col-md-4 col-sm-12">
                                        <div class="text-center img-responsive iconcov">
                                            <img ng-src="http://amikom.ac.id/template/assets_dashboard/img/Ok-96.png" src="http://amikom.ac.id/template/assets_dashboard/img/Ok-96.png">
                                        </div>
                                    </div>
                                    <div class="col-md-8 col-sm-12">
                                        <div class="bg-white cardcontainer">
                                            <!--<div class="">Status Mahasiswa</div>-->
                                          <h2 style="margin:20px">Success</h2>
                                        </div>
                                    </div>
                                                                    </div>
                            </div>
  </div>
  </div>
                     <div class="alert alert-success alert-dismissible" role="alert">
                   <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                   <span aria-hidden='true'>&times;</span>
                   </button>
                   <h4 class="alert-heading">Perhatian</h4>
                   <p>Selamat datang di Dashboard Siswa. Jika ingin mencari jadwal silahkan diisi hari dengan benar</p>
                   </div>
                   </div>
  <div class="container-fluid">
        <div class="card">
            <div class="card-header">
                <h4 class="card-title">
                    Jadwal Belajar
                </h4>
            </div>
            <div class="card-body row">
                <div class="col-md-4 offset-md-8 mb-4">
                  	<!-- FUNGSI PENCARIAN INI AKAN BERFUNGSI KETIKA TOMBOL ENTER DITEKAN -->
                    <input type="text" placeholder="Search" v-model="search" class="form-control">
                  
                </div>
                <div class="col-md-12">
                    <b-table striped hover :items="jadwalsiswas.data" :fields="fields" show-empty responsive>
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
            </div>
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
            store.dispatch('JadwalSiswa/getJadwalSiswaData')
        ])
        return
    },
    data() {
        return {
            //FIELD UNTUK MENJADI HEADER TABLE
            fields: ['hari','jam', 'ruang', 'mata_pelajaran', 'kelas', 'guru_pengampu'], 
            items: [],
            // console.log(val)
            // deleteModal: false, 
            // buku_selected: null, //MENGHANDLE DATA USER YANG AKAN DIHAPUS
            search: '' //MENGHANDLE VALUE PENCARIAN
        }
    },
    mounted() {
        //  console.log(this.jadwalsiswas.data);
    },
    created(){

        console.log(this.$auth.state.user.role)

        if(this.$auth.state.user.role == 0) {
            this.$router.push('/dashboardadmin')
        }
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
        ...mapActions('JadwalSiswa', ['getJadwalSiswaData']),
        ...mapMutations('JadwalSiswa', ['SET_PAGE']),
        //JIKA PADA FORM PENCARIAN DITEKAN ENTER, MAKA FUNGSI INI AKAN DIJALANKAN
        // findBuku() {
        //     //LAKUKAN PEMANGGILAN KE API UNTUK MENDAPATKAN DATA BERDASARKAN PENCARIAN
        //     this.getBukuData(this.search)
        // },
        //JIKA PAGINATION DIKLIK, MAKA AKAN MENGESET VALUE PAGE YANG SEDANG AKTIF
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
