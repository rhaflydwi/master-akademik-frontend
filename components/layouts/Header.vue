<template>
    <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
        <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
            <i class="fa fa-bars"></i>
        </button>
        <ul class="navbar-nav ml-auto">
            <li class="nav-item dropdown no-arrow d-sm-none">
                <a class="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="fas fa-search fa-fw"></i>
                </a>
                <div class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in" aria-labelledby="searchDropdown">
                    <form class="form-inline mr-auto w-100 navbar-search">
                        <div class="input-group">
                            <input type="text" class="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2">
                            <div class="input-group-append">
                                <button class="btn btn-primary" type="button">
                                    <i class="fas fa-search fa-sm"></i>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </li>
            <div>
            <button type="button" class="btn btn-outline-danger" style="margin:20px" @click="logout" href="#" data-toggle="modal" data-target="#logoutModal" >Logout</button>
            </div>
        </ul>
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
            this.$router.push('/login')
            location.reload() //DAN REDIRECT KE HALAMAN LOGIN
        }
    }
}
</script>