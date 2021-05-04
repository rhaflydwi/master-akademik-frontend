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
    components: {
        'app-buku-form': BukuForm //CUSTOM COMPONENT UNTUK FORM INPUT
    }
}
</script>