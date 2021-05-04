<template>
    <div class="container-fluid">
        <div class="card mb-3">
            <div class="card-header">
                <h4 class="card-title"></h4>
            </div>
            <div class="card-body">
                <app-pinjambuku-form />
            </div>
        </div>
    </div>
</template>
<script>
import PinjamBukuForm from '@/components/form/PinjamBuku.vue' 
export default {
    layout: 'DefaultMahasisswa',
    components: {
        'app-pinjambuku-form': PinjamBukuForm //CUSTOM COMPONENT UNTUK FORM INPUT
    }
}
</script>