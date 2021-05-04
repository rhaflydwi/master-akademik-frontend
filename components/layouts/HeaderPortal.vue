<template>

    <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
            <h1 >Selamat Datang</h1>
            <div>
            <button type="button" class="btn btn-outline-danger" style="margin:20px" @click="logout" href="#" data-toggle="modal" data-target="#logoutModal" >Logout</button>
            </div>
            
    </nav>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    methods: {
        ...mapMutations(['SET_IS_AUTH']), //LOAD MUTATION DARI INDEX.JS
        //KITA GUNAKAN ASYNC AGAR BISA MENUNGGU SEBUAH PROSES SELESAI, KEMUDIAN CODE SELANJUTNYA DIJALANKAN
        async logout() {
            await this.$auth.logout() //JADI KITA TUNGGU DULU PROSES LOGOUT SELESAI
            this.SET_IS_AUTH(false) //KEMUDIAN SET ISAUTH JADI FALSE
            this.$router.push('/login') //DAN REDIRECT KE HALAMAN LOGIN
        }
    }
}
</script>