<template>
    <div class="container-fluid">
        <div class="dropdown">
<div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Presensi</h1>
            
          </div>

          <!-- Content Row -->
          <div class="row">
            
            <!-- Masuk -->
            <div class="col-md-4 mb-4">
              <!-- <a href="#" style="text-decoration:none"> -->
              <div class="card border-left-primary shadow h-100 py-2" style="background-color:green;cursor:pointer"  @click="absenMasuk">
                <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                      <div class="h4 mb-0 font-weight-bold text-light-800" style="color:white;padding-top:10px">MASUK</div>
                    </div>
                    <div class="col-auto">
                      <i class="fas fa-sign-in-alt fa-2x text-gray-300"></i>
                    </div>
                  </div>
                </div>
              </div>
              <!-- </a> -->
            </div>

            <!-- Pulang -->
            <div class="col-md-4 mb-4">
              <a href="#" style="text-decoration:none">
              <div class="card border-left-primary shadow h-100 py-2" style="background-color:red;cursor:pointer" @click="absenPulang">
                <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                      <div class="h4 mb-0 font-weight-bold text-light-800" style="color:white;padding-top:10px">PULANG</div>
                    </div>
                    <div class="col-auto">
                      <i class="fas fa-sign-out-alt fa-2x text-gray-300"></i>
                    </div>
                  </div>
                </div>
              </div>
              </a>
            </div>

            <!-- Jam -->
            <div class="col-md-4 mb-4">
              <div class="card border-left-info shadow h-100 py-2">
                <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                      <div class="text-xs font-weight-bold text-info text-uppercase mb-1"><span id="txt" style="font-size:30px;"></span></div>
                     
                    </div>
                    <div class="col-auto">
                      <i class="fas fa-star fa-2x text-gray-300"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="form-group">
            <label for="">Mata Pelajaran</label>
            <select class="form-control" v-model="pelajaran">
                <option value="">Pilih</option>
                <option value="0">Basis Data</option>
                <option value="1">Pemograman Web</option>
                <option value="2">Matematika</option>
                <option value="3">Bahasa Indonesia</option>
                <option value="4">Kimia</option>
                <option value="5">Fisika</option>
            </select>
          </div>
          <div class="row">

            <!-- Content Column -->
            

            <div class="col-md-12 mb-4">

              <!-- Illustrations -->
              <div class="card shadow mb-4">
                <div class="card-header py-3">
                  <h6 class="m-0 font-weight-bold text-primary">Informasi Layanan</h6>
                </div>

                <div class="card-body">
                  
                  <p><b>Status User : <span style="color:green">Siswa</span></b></p>
                  <p>Silahkan klik tombol <b style="color:green">Masuk</b> atau <b style="color:red">Pulang</b> di atas untuk melakukan presensi hari ini. Terima kasih.</p>
                </div>

              </div>

              <!-- Approach -->
              

            </div>
          </div>

        </div>
        <!-- /.container-fluid -->
<!-- DataTales Example -->
                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">Data Presensi</h6>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                  <!-- <table class="table table-bordered text-center" id="dataTable" width="100%" cellspacing="0">
                                      <thead>
                                          <tr>
                                              <th>No</th>
                                              <th>Jam Masuk</th>
                                              <th>Jam Pulang</th>
                                              <th>Mata Pelajaran</th>
                                          </tr>
                                      </thead>
                                      <tbody>
                                          <tr>
                                              <td>1</td>
                                              <td>12:00</td>
                                              <td>13:00</td>
                                              <td>Pemograman Python</td>
                                          </tr>
                                          <tr>
                                              <td>2</td>
                                              <td>12:00</td>
                                              <td>13:00</td>
                                              <td>Pemograman Python</td>
                                          </tr>
                                          <tr>
                                              <td>3</td>
                                              <td>12:00</td>
                                              <td>13:00</td>
                                              <td>Pemograman Python</td>
                                          </tr>
                                          <tr>
                                              <td>4</td>
                                              <td>12:00</td>
                                              <td>13:00</td>
                                              <td>Pemograman Python</td>
                                          </tr>
                                      </tbody>
                                  </table> -->
                                <b-table striped hover :items="data" :fields="fields" show-empty responsive>
                                   <template v-slot:cell(jam_masuk)="row">
                                    <p>{{ row.item.format_jam_masuk   }}</p>
                                  </template>
                                  <template v-slot:cell(jam_pulang)="row">
                                    <p>{{ row.item.format_jam_pulang   }}</p>
                                  </template>
                                  <template v-slot:cell(mata_pelajaran)="row">
                                    <p>{{ row.item.mata_pelajaran_teks   }}</p>
                                  </template>
                                  <!-- MENAMPILKAN TOMBOL EDIT DAN HAPUS --> 
                                
                              </b-table>
                            </div>
                        </div>
                        <!-- /.container-fluid -->
                    </div>
                </div>
                
            <!-- End of Main Content -->     
                </template>


<script>
import {mapState, mapActions, mapMutations} from 'vuex';
export default {
  async asyncData({$auth,store}) {
    console.log($auth.state.user.id)
        await Promise.all([
        
            store.dispatch('presensi/getData',$auth.state.user.id).then((res)=>{
              console.log('ress')
              console.log(res)
            })
        ])
        return
    },
    layout: 'DefaultMahasisswa',
    computed: {
      ...mapState('presensi',['data'])
    },
    mounted() {
      console.log(this.data)
    },
    data() {
      return {
        fields: ['No','jam_masuk', 'jam_pulang','mata_pelajaran'],   
        pelajaran: null
      }
    },
    methods: {
      ...mapActions('presensi',['absenMasukData','getData']),
      absenMasuk() {
        if(this.pelajaran == null) {
          return
        }
        this.absenMasukData({
          'id' : this.$auth.state.user.id,
          'pelajaran' : this.pelajaran
        }).then((res) => {
          this.getData(this.$auth.state.user.id)
        })
        console.log(this.pelajaran)
      },
      absenPulang() {
        console.log(this.pelajaran)
      }

    }

}
</script>