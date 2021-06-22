<template>
    <div class="container-fluid">
        <div class="card mb-3">
            <div class="card-header">
                <h4 class="card-title"></h4>
            </div>
            <div class="card-body">
                <app-nilaisiswa-form />
            </div>
        </div>
    </div>
</template>
<script>
import NilaiSiswaForm from '@/components/form/NilaiSiswa.vue' 
export default {
    layout: 'DefaultAdmin',
    async asyncData({store, params}) {
        await Promise.all([
            store.dispatch('nilaisiswa/getData', params.id)
        ])
        return
    },
    components: {
        'app-nilaisiswa-form': NilaiSiswaForm //CUSTOM COMPONENT UNTUK FORM INPUT
    }
}
</script>