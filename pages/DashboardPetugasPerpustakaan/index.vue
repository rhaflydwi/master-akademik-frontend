<template>
        <!-- Content Wrapper -->
        <div id="content-wrapper" class="d-flex flex-column">


                <!-- Begin Page Content -->
                <div class="container-fluid">

                    <!-- Page Heading -->
                    <div class="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
                    </div>

                    <!-- Content Row -->
                    <div class="row">

                        <!-- Earnings (Monthly) Card Example -->
                        <div class="col-xl-3 col-md-6 mb-4">
                            <div class="card border-left-primary shadow h-100 py-2">
                                <div class="card-body">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
                                            <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                Jumlah Siswa</div>
                                            <div class="h5 mb-0 font-weight-bold text-gray-800">{{users.total}} Orang</div>
                                        </div>
                                        <div class="col-auto">
                                            <i class="fas fa-users fa-2x text-gray-300"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Earnings (Monthly) Card Example -->
                        <div class="col-xl-3 col-md-6 mb-4">
                            <div class="card border-left-success shadow h-100 py-2">
                                <div class="card-body">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
                                            <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                                                Jumlah Guru</div>
                                            <div class="h5 mb-0 font-weight-bold text-gray-800">{{users_guru.total}} Orang</div>
                                        </div>
                                        <div class="col-auto">
                                            <i class="fas fa-users fa-2x text-gray-300"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Earnings (Monthly) Card Example -->
                        <div class="col-xl-3 col-md-6 mb-4">
                            <div class="card border-left-danger shadow h-100 py-2">
                                <div class="card-body">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
                                            <div class="text-xs font-weight-bold text-danger text-uppercase mb-1">
                                                Kehadiran</div>
                                            <div class="h5 mb-0 font-weight-bold text-gray-800">{{presensis.total}} Orang</div>
                                        </div>
                                        <div class="col-auto">
                                            <i class="fas fa-users fa-2x text-gray-300"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Pending Requests Card Example -->
                        <div class="col-xl-3 col-md-6 mb-4">
                            <div class="card border-left-warning shadow h-100 py-2">
                                <div class="card-body">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
                                            <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                                Buku Perpustakaan</div>
                                            <div class="h5 mb-0 font-weight-bold text-gray-800">{{buku.total}}</div>
                                        </div>
                                        <div class="col-auto">
                                            <i class="fas fa-book fa-2x text-gray-300"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
            <!-- Content Column -->
            

            <div class="col-md-12 mb-4">

              <!-- Illustrations -->
              <div class="card shadow mb-4">
                <div class="card-header py-3">
                  <h6 class="m-0 font-weight-bold text-primary">Informasi Layanan</h6>
                </div>

                <div class="card-body">
                  
                  <p><b>Status User : <span style="color:green">{{ "Petugas Perpustakaan" }}</span></b></p>
                  <p>Anda memiliki semua hak akses pada aplikasi.</p>
                </div>

              </div>
              
            </div>
                    </div>
                </div>
                
        </div>
        
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex'
export default {
    layout: 'DefaultPerpustakaan',
    async asyncData({$auth,context,redirect}) {
        if($auth.state.user.role != 5) {  

      redirect('/')
            }
    },
        async asyncData({store}) {
        await Promise.all([
            store.dispatch('UserSiswa/getUsersData'),
            store.dispatch('UserGuru/getUsersData'),
            store.dispatch('presensi/getPresensiData'),
            store.dispatch('bukus/getBukuData')

        ])
        return
    },
    computed: {
        ...mapState('UserSiswa', {
            users: state => state.users,
            page: state => state.page //AMBIL DATA PAGE YANG SEDANG AKTIF SAAT INI
        }),
        ...mapState('UserGuru', {
            users_guru: state => state.users
        }),
        ...mapState('bukus', {
            buku: state => state.buku
        }),
        ...mapState('presensi', {
            presensis: state => state.presensis
        })
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
