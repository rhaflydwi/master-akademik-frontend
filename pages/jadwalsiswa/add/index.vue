<template>
    <div class="container-fluid">
        <div class="card mb-3">
            <div class="card-header">
                <h4 class="card-title"></h4>
            </div>
            <div class="card-body">
                <app-jadwalsiswa-form />
            </div>
        </div>
    </div>
</template>
<script>
import JadwalSiswaForm from '@/components/form/JadwalSiswa.vue' 
export default {
    layout: 'DefaultAdmin',
    components: {
        'app-jadwalsiswa-form': JadwalSiswaForm //CUSTOM COMPONENT UNTUK FORM INPUT
    }
}
</script>