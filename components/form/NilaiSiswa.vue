<template>
  <div>
    <div class="row">
      <div class="col-lg-12">
        <div class="alert alert-danger alert-dismissible" role="alert">
          <button
            type="button"
            class="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
          <h4 class="alert-heading">Perhatian</h4>
          <p>
            Selamat datang di control panel Data nilai. Silahkan Isi Form Berikut untuk menginput nilai
          </p>
        </div>
      </div>
    </div>
    <div class="form-group">
      <label for="">Nama</label>
      <input
        type="text"
        class="form-control"
        :class="{ 'is-invalid': errors.nama }"
        v-model="nilaisiswa.nama"
      />
      <p class="text-danger" v-if="errors.nama">{{ errors.nama[0] }}</p>
    </div>
    <div class="form-group">
      <label for="">Kelas</label>
      <select
        class="form-control"
        :class="{ 'is-invalid': errors.kelas }"
        v-model="nilaisiswa.kelas"
      >
        <option value="">Pilih</option>
        <option value="0">VII</option>
        <option value="1">VIII</option>
        <option value="2">IX</option>
      </select>
      <p class="text-danger" v-if="errors.kelas">{{ errors.kelas[0] }}</p>
    </div>

    <div class="form-group">
      <label for="">Mata Pelajaran</label>
      <select
        class="form-control"
        :class="{ 'is-invalid': errors.mata_pelajaran }"
        v-model="nilaisiswa.mata_pelajaran"
      >
        <option value="">Pilih</option>
        <option value="0">Basis Data</option>
        <option value="1">Pemograman Web</option>
        <option value="2">Matematika</option>
        <option value="3">Bahasa Indonesia</option>
        <option value="4">Kimia</option>
        <option value="5">Fisika</option>
      </select>
    </div>
     <div class="form-group">
      <label for="">Nilai</label>
      <select
        class="form-control"
        :class="{ 'is-invalid': errors.nilai_siswa }"
        v-model="nilaisiswa.nilai_siswa"
      >
        <option value="">Pilih</option>
        <option value="0">A</option>
        <option value="1">B</option>
        <option value="2">C</option>
        <option value="3">D</option>
      </select>
    </div>
    <button class="btn btn-primary btn-sm" @click="submit">Save</button>
    <nuxt-link :to="{ name: 'nilaisiswa' }" class="btn btn-secondary btn-sm"
      >Back</nuxt-link
    >
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  created() {
    if (this.$route.name == "nilaisiswa-edit-id") {
      this.nilaisiswa = {
        nama: this.nilai.name,
        kelas: this.nilai.kelas,
        mata_pelajaran: this.nilai.mata_pelajaran,
        nilai_siswa: this.nilai.nilai,
      };
    }
  },
  data() {
    return {
      nilaisiswa: {
        nama: "",
        kelas: "",
        mata_pelajaran: "",
        nilai_siswa: "",
      },
    };
  },
  computed: {
    ...mapState("nilaisiswa", {
      nilai: (state) => state.data,
      errors: (state) => state.errors,
    }),
  },
  methods: {
    ...mapActions("nilaisiswa", ["storeNilaiData", "updateNilaisData"]),
    submit() {
      if (this.$route.name == "nilaisiswa-edit-id") {
        let data = Object.assign({ id: this.$route.params.id }, this.nilaisiswa);
        this.updateNilaisData(data).then(
          this.$router.push({ name: "nilaisiswa" })
        );
      } else {
        this.storeNilaiData(this.nilaisiswa).then(() =>
          this.$router.push({ name: "nilaisiswa" })
        );
      }
    },
  },
};
</script>