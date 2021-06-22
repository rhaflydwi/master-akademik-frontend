<template>
    <div class="container-fluid">
        <div class="card mb-3">
            <div class="card-header">
                <h4 class="card-title"></h4>
            </div>
            <div class="card-body">
                <app-BukuPerpustakaan-form />
            </div>
        </div>
    </div>
</template>
<script>
import BukuPerpustakaanForm from '@/components/form/BukuPerpustakaan.vue'
export default {
    layout: 'DefaultPerpustakaan',
    
    //FUNGSI INI AKAN DIJALANKAN KETIKA HALAMAN EDIT DI LOAD
    async asyncData({store, params}) {
        await Promise.all([
            store.dispatch('bukus/getData', params.id)
        ])
        return
    },
    components: {
        'app-BukuPerpustakaan-form': BukuPerpustakaanForm
    },
}
</script>