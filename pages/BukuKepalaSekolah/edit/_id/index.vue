<template>
    <div class="container-fluid">
        <div class="card mb-3">
            <div class="card-header">
                <h4 class="card-title"></h4>
            </div>
            <div class="card-body">
                <app-BukuKepalasekolah-form />
            </div>
        </div>
    </div>
</template>
<script>
import BukuKepalaSekolahForm from '@/components/form/BukuKepalaSekolah.vue'
export default {
    layout: 'DefaultKepalaSekolah',
    
    //FUNGSI INI AKAN DIJALANKAN KETIKA HALAMAN EDIT DI LOAD
    async asyncData({store, params}) {
        await Promise.all([
            store.dispatch('bukus/getData', params.id)
        ])
        return
    },
    components: {
        'app-BukuKepalasekolah-form': BukuKepalaSekolahForm
    },
}
</script>