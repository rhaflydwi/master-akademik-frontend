<template>
    <div class="container-fluid">
        <div class="card mb-3">
            <div class="card-header">
                <h4 class="card-title"></h4>
            </div>
            <div class="card-body">
                <app-userkepalasekolah-form />
            </div>
        </div>
    </div>
</template>
<script>
import UserKepalaSekolahForm from '@/components/form/UserKepalaSekolah.vue' 
export default {
    layout: 'DefaultKepalaSekolah',
    //FUNGSI INI AKAN DIJALANKAN KETIKA HALAMAN EDIT DI LOAD
    async asyncData({store, params}) {
        await Promise.all([
            //DAN AKAN MEMINTA DATA YANG AKAN DIEDIT BERDASARKAN ID USER
            store.dispatch('user/getData', params.id)
        ])
        return
    },
    components: {
        'app-userkepalasekolah-form': UserKepalaSekolahForm //CUSTOM COMPONENT UNTUK FORM INPUT
    }
}
</script>