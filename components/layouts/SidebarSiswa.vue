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
            <a class="nav-link" href="/">
                <i class="fas fa-fw fa-tachometer-alt"></i>
                <span>Dashboard</span>
            </a>
        </li>
        <hr class="sidebar-divider">
        <div class="sidebar-heading">
</div>
<li class="nav-item">
            <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseone" aria-expanded="true" aria-controls="collapseone">
                <i class="fas fa-fw fa-users"></i>
                <span>Perpustakaan</span>
            </a>
            <div id="collapseone" class="collapse" aria-labelledby="headingone" data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
                    <h6 class="collapse-header">Perpustakaan :</h6>
                    <nuxt-link class="collapse-item" :to="{name: 'bukusiswa'}">Data Buku</nuxt-link>
                </div>
            </div>
        </li>
        <li class="nav-item">
            <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsetwo" aria-expanded="true" aria-controls="collapsetwo">
                <i class="fas fa-fw fa-fingerprint"></i>
                <span>Presensi</span>
            </a>
            <div id="collapsetwo" class="collapse" aria-labelledby="headingtwo" data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
                    <h6 class="collapse-header">Presensi :</h6>
                    <nuxt-link class="collapse-item" :to="{name: 'presensi'}">Presensi</nuxt-link>
                </div>
            </div>
        </li>
    </ul>
</template>

<script>
export default {
    
}
</script>