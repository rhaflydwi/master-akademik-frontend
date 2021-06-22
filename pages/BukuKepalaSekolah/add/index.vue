<template>
    <div class="container-fluid">
        <div class="card mb-3">
            <div class="card-header">
                <h4 class="card-title"></h4>
            </div>
            <div class="card-body">
                <app-BukuKepalaSekolah-form />
            </div>
        </div>
    </div>
</template>
<script>
import BukuKepalaSekolahForm from '@/components/form/BukuKepalaSekolah.vue' 
export default {
    layout: 'DefaultKepalaSekolah',
    components: {
        'app-BukuKepalaSekolah-form': BukuKepalaSekolahForm //CUSTOM COMPONENT UNTUK FORM INPUT
    }
}
</script>