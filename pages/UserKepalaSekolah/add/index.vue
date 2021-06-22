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
    components: {
        'app-userkepalasekolah-form': UserKepalaSekolahForm //CUSTOM COMPONENT UNTUK FORM INPUT
    }
}
</script>