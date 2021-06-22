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
    components: {
        'app-BukuPerpustakaan-form': BukuPerpustakaanForm //CUSTOM COMPONENT UNTUK FORM INPUT
    }
}
</script>