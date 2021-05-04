<template>
<body class="bg-dark">
<div class="container">

    <!-- Outer Row -->
    <div class="row justify-content-center">

      <div class="col-xl-10 col-lg-12 col-md-9">

        <div class="card o-hidden border-0 shadow-lg my-5">
                    <div class="card-body p-0">
                        <div class="row">
                            <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
                            <div class="col-lg-6">
                                <div class="p-5">
                                    <div class="text-center">
                                        <h1 class="h4 text-gray-900 mb-4">Selamat Datang Di <br>AKADEMIKTA System</h1>
                                    </div>
                                    <form class="user">
                                    <div class="form-group">
                                        <input type="email" class="form-control form-control-user" aria-describedby="emailHelp" placeholder="Masukkan Email Anda..." required="" v-model="auth.email">
                                    </div>
                                    <div class="form-group">
                                        <input type="password" class="form-control form-control-user"  placeholder="Masukkan Password Anda..." v-model="auth.password">
                                    </div>
                                    <div class="form-group">
                                        <div class="custom-control custom-checkbox small">
                                            <input type="checkbox" class="custom-control-input" id="customCheck">
                                            <label class="custom-control-label" for="customCheck">Remember Me</label>
                                        </div>
                                    </div>
                                    <a href="javascript:void(0)" @click="submit" class="btn btn-primary btn-user btn-block">
                                        Login
                                    </a>
                                    </form>
                                 <div class="text-center">
                                    <a class="small" href="#" data-toggle="modal" data-target="#kontak">Lupa Password atau Belum Punya Akun?</a>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Modal Kontak-->
  
  <div class="modal" id="kontak">
    <div class="modal-dialog">
      <div class="modal-content">
      
        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title">Informasi</h4>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        
        <!-- Modal body -->
        <div class="modal-body">
          Lupa password & belum punya akun?<br />
          Silahkan menghubungi bagian Admin.<br />
          Terima kasih.
        </div>
        
        <!-- Modal footer -->
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-dismiss="modal">Tutup</button>
        </div>
        
      </div>
    </div>
  </div>
  
    </div>
</body>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
    auth: false, //JADI KITA SET FALSE AGAR MIDDLEWARE TIDAK DITERAPKAN PADA HALAMAN INI
    data() {
        return {
            //VARIABLE UNTUK MENAMPUNG INPUTAN USER
            auth: {
                email: null,
                password: null
            }
        }
    },
    mounted() {
        //KITA LAKUKAN PENGECEK, JIKA SUDAH LOGIN
        if (this.$auth.loggedIn) {
            //MAKA REDIRECT KE HALAMAN UTAMA ATAU DASHBOARD
            this.$router.push('/')
        }
    },
    methods: {
        ...mapMutations(['SET_IS_AUTH']), //LOAD MUTATIONS DARI ROOT VUEX (STORE/INDEX.JS)
        //JIKA TOMBOL LOGIN DITEKAN, MAKA METHOD INI AKAN DIJALANKAN
        submit() {
            //MELAKUKAN PROSES LOGIN, DENGAN MENGGUNAKAN STRATEGIES LOCAL YANG ADA DI NUXT CONFIG
            //DAN MENGIRIMKAN DATA BERUPA EMAIL DAN PASSWORD
            this.$auth.loginWith('local', {
                data: {
                    email: this.auth.email,
                    password: this.auth.password
                }
            }).then((res) => {
                console.log(res)
                //JIKA BERHASIL, KITA SET TRUE IS AUTH-NYA
                this.SET_IS_AUTH(true)
                //LALU REDIRECT KE HALAMAN UTAMA / DAHSBOARD
                this.$router.push('/')
            })
        },
    }
}
</script>