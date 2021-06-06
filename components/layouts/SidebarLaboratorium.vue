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
            <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                <i class="fas fa-fw fa-flask"></i>
                <span>Data Laboratorium</span>
            </a>
            <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
                    <h6 class="collapse-header">Data Laboratorium :</h6>
                    <nuxt-link class="collapse-item" :to="{name: 'LaboratoriumAlat'}">Alat Laboratorium</nuxt-link>
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