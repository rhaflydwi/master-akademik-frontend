<template>
    <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
        <a class="sidebar-brand d-flex align-items-center justify-content-center" href="/">
            <div class="sidebar-brand-icon rotate-n-15">
                <i class="fas fa-laugh-wink"></i>
            </div>
            <div class="sidebar-brand-text mx-3">AKADEMIKTA <sup></sup></div>
        </a>
        <hr class="sidebar-divider my-0">
        <li class="nav-item active">
            <a class="nav-link" href="/DashboardPetugasTataUsaha">
                <i class="fas fa-fw fa-tachometer-alt"></i>
                <span>Dashboard</span>
            </a>
        </li>
        <hr class="sidebar-divider">
        <div class="sidebar-heading">
    Master Data
</div>
                <li class="nav-item">
            <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                <i class="fas fa-fw fa-clock"></i>
                <span>Data Presensi</span>
            </a>
            <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
                    <h6 class="collapse-header">List Presensi :</h6>
                    <nuxt-link class="collapse-item" :to="{name: 'PresensiGuruTataUsaha'}">Presensi Guru</nuxt-link>
                    <nuxt-link class="collapse-item" :to="{name: 'PresensiSiswaTataUsaha'}">Presensi Siswa</nuxt-link>
                </div>
            </div>
        </li>
                <li class="nav-item">
            <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsefive" aria-expanded="true" aria-controls="collapsefive">
                <i class="fas fa-fw fa-calendar"></i>
                <span>Data Jadwal</span>
            </a>
            <div id="collapsefive" class="collapse" aria-labelledby="headingfive" data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
                    <h6 class="collapse-header">Data Jadwal :</h6>
                    <nuxt-link class="collapse-item" :to="{name: 'JadwalSiswaTataUsaha'}"> Jadwal Siswa All</nuxt-link>
                    <nuxt-link class="collapse-item" :to="{name: 'JadwalSiswaTataUsahaVII'}"> Jadwal Siswa VII</nuxt-link>
                    <nuxt-link class="collapse-item" :to="{name: 'JadwalSiswaTataUsahaVIII'}"> Jadwal Siswa VIII</nuxt-link>
                    <nuxt-link class="collapse-item" :to="{name: 'JadwalSiswaTataUsahaIX'}"> Jadwal Siswa IX</nuxt-link>
                </div>
            </div>
        </li>
              <!-- Divider -->
      <hr class="sidebar-divider d-none d-md-block">
    </ul>
</template>

<script>
export default {
    
}
</script>