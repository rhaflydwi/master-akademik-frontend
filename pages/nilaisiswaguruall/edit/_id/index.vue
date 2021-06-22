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
import NilaiSiswaGuruFrom from '@/components/form/NilaiSiswaGuru.vue' 
export default {
    layout: 'DefaultGuru',
    async asyncData({store, params}) {
        await Promise.all([
            store.dispatch('nilaisiswa/getData', params.id)
        ])
        return
    },
    components: {
        'app-nilaisiswa-form': NilaiSiswaGuruFrom //CUSTOM COMPONENT UNTUK FORM INPUT
    }
}
</script>