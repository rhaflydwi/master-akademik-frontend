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
            <a class="nav-link" href="/dashboardadmin">
                <i class="fas fa-fw fa-tachometer-alt"></i>
                <span>Dashboard</span>
            </a>
        </li>
        <hr class="sidebar-divider">
        <div class="sidebar-heading">
    Master Data
</div>
<li class="nav-item">
            <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseone" aria-expanded="true" aria-controls="collapseone">
                <i class="fas fa-fw fa-users"></i>
                <span>Data Users</span>
            </a>
            <div id="collapseone" class="collapse" aria-labelledby="headingone" data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
                    <h6 class="collapse-header">Data Users :</h6>
                    <nuxt-link class="collapse-item" :to="{name: 'users'}"> All User</nuxt-link>
                    <nuxt-link class="collapse-item" :to="{name: 'admin'}"> Admin</nuxt-link>
                    <nuxt-link class="collapse-item" :to="{name: 'guru'}"> Guru</nuxt-link>
                    <nuxt-link class="collapse-item" :to="{name: 'siswa'}"> Siswa</nuxt-link>
                    <nuxt-link class="collapse-item" :to="{name: 'KepalaSekolah'}"> Kepala Sekolah</nuxt-link>
                    <nuxt-link class="collapse-item" :to="{name: 'PetugasPerpustakaan'}"> Petugas Perpustakaan</nuxt-link>
                    <nuxt-link class="collapse-item" :to="{name: 'PetugasLaboratorium'}"> Petugas Laboratorium</nuxt-link>
                    <nuxt-link class="collapse-item" :to="{name: 'PetugasTataUsaha'}"> Petugas Tata Usaha</nuxt-link>

                </div>
            </div>
        </li>
        <li class="nav-item">
            <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                <i class="fas fa-fw fa-book"></i>
                <span>Data Perustakaan</span>
            </a>
            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
                    <h6 class="collapse-header">Data Perpustakaan :</h6>
                    <nuxt-link class="collapse-item" :to="{name: 'buku'}">Buku</nuxt-link>
                </div>
            </div>
        </li>


        <li class="nav-item">
            <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                <i class="fas fa-fw fa-flask"></i>
                <span>Data Laboratorium</span>
            </a>
            <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
                    <h6 class="collapse-header">Data Laboratorium :</h6>
                    <nuxt-link class="collapse-item" :to="{name: 'laboratorium'}">Alat Laboratorium</nuxt-link>
                </div>
            </div>
        </li>

                <li class="nav-item">
            <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                <i class="fas fa-fw fa-clock"></i>
                <span>Data Presensi</span>
            </a>
            <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
                    <h6 class="collapse-header">List Presensi :</h6>
                    <nuxt-link class="collapse-item" :to="{name: 'DataPresensiGuru'}">Presensi Guru</nuxt-link>
                    <nuxt-link class="collapse-item" :to="{name: 'PresensiSiswa'}">Presensi Siswa</nuxt-link>
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
                    <nuxt-link class="collapse-item" :to="{name: 'jadwalsiswa'}"> Jadwal Siswa All</nuxt-link>
                    <nuxt-link class="collapse-item" :to="{name: 'jadwalsiswavii'}"> Jadwal Siswa VII</nuxt-link>
                    <nuxt-link class="collapse-item" :to="{name: 'jadwalsiswaviii'}"> Jadwal Siswa VIII</nuxt-link>
                    <nuxt-link class="collapse-item" :to="{name: 'jadwalsiswaix'}"> Jadwal Siswa IX</nuxt-link>
                </div>
            </div>
        </li>
                        <li class="nav-item">
            <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsesix" aria-expanded="true" aria-controls="collapsesix">
                <i class="fas fa-fw fa-file"></i>
                <span>Data Nilai</span>
            </a>
            <div id="collapsesix" class="collapse" aria-labelledby="headingsix" data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
                    <h6 class="collapse-header">Data Nilai :</h6>
                    <nuxt-link class="collapse-item" :to="{name: 'nilaisiswaall'}"> Nilai Siswa ALL</nuxt-link>
                    <nuxt-link class="collapse-item" :to="{name: 'nilaisiswavii'}"> Nilai Siswa VII</nuxt-link>
                    <nuxt-link class="collapse-item" :to="{name: 'nilaisiswaviii'}"> Nilai Siswa VIII</nuxt-link>
                    <nuxt-link class="collapse-item" :to="{name: 'nilaisiswaix'}"> Nilai Siswa IX</nuxt-link>
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