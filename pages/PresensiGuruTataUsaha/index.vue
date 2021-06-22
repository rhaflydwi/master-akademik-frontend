<template>
  <div class="container-fluid" @load="startTime()">
    <div class="dropdown">
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Data Presensi Guru</h1>
      </div>

      <!-- Content Row -->
      <div class="row" >
        <!-- Jam -->
        <div class="col-md-4 mb-4">
          <div class="card border-left-info shadow py-2" style="width: 72rem;">
            <div class="card-body">
              <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                  <div class="text-xs font-weight-bold text-primary text-uppercase mb-10" align="center">
                    <span id="txt" style="font-size: 50px" >{{ waktu }}</span>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

          <!-- Approach -->
    <div class="card shadow mb-4">
      <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">Data Presensi Seluruh Guru</h6>
      </div>
      <div class="card-body">
        <div class="table-responsive">
                <b-table striped hover :items="presensis.data" :fields="fields" show-empty>
                  <template v-slot:cell(name)="row">
                    <p>{{ row.item.user_data.name }}</p>
                            <!-- TOMBOL EDIT AKAN DIARAHKAN KE HALAMAN BARU --> 
                            <!-- <nuxt-link :to="{name: 'jadwalsiswa-edit-id', params: {id: row.item.id}}" :key="'edit'+row.index" class="btn btn-warning btn-sm" style="margin:5px">Edit</nuxt-link> -->
                            <!-- TOMBOL HAPUS AKAN MEMBUKA MODAL KONFIRMASI --> 
                            <!-- <button class="btn btn-danger btn-sm" style="margin:5px" @click="openDeleteModal(row)">Delete</button> -->
                    </template>
             <template v-slot:cell(jam_masuk)="row">
              <p>{{ row.item.format_jam_masuk }}</p>
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
import { mapActions, mapState, mapMutations } from "vuex";
export default {
  layout: "DefaultTataUsaha",

async asyncData({store}) {
        await Promise.all([
            store.dispatch('presensi/getPresensiDataGuru')
        ])
        return
    },
  data() {
        return {

            //FIELD UNTUK MENJADI HEADER TABLE
            fields: ['name', 'jam_masuk', 'kelas_teks', 'mata_pelajaran_teks'], 
            items: [],
            waktu: ''
        }
    },
  created() {
    this.startTime()
  },
  computed: {
        //SETIAP REQUEST KE API, DATANYA AKAN DISIMPAN KE DALAM STATE YANG ADA DIMASING-MASING MODULE STORE VUEX
        //DALAM HAL INI, DATA USER AKAN DISIMPAN KE DALAM STATE USERS, DI DALAM MODULE USER ATAU USER.JS YANG ADA DI DALAM FOLDER STORE
        ...mapState('presensi', {
            presensis: state => state.presensis
        })
    },
  methods: {
    ...mapActions('presensi', ['getPresensiDataGuru']),

    startTime() {
      var today = new Date();
      var h = today.getHours();
      var m = today.getMinutes();
      var s = today.getSeconds();
      m = this.checkTime(m);
      s = this.checkTime(s);
      this.waktu = h + ":" + m + ":" + s;
      var t = setTimeout(this.startTime, 500);
    },
    checkTime(i) {
      if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
      return i;
    },
    }
  }

    
</script>