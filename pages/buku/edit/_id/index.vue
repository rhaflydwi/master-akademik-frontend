<template>
    <div class="container-fluid">
        <div class="card mb-3">
            <div class="card-header">
                <h4 class="card-title"></h4>
            </div>
            <div class="card-body">
                <app-buku-form />
            </div>
        </div>
    </div>
</template>
<script>
import BukuForm from '@/components/form/Buku.vue'
export default {
    layout: 'DefaultAdmin',
    
    //FUNGSI INI AKAN DIJALANKAN KETIKA HALAMAN EDIT DI LOAD
    async asyncData({store, params}) {
        await Promise.all([
            store.dispatch('bukus/getData', params.id)
        ])
        return
    },
    components: {
        'app-buku-form': BukuForm
    },
}
</script>