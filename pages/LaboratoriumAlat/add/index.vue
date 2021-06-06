<template>
    <div class="container-fluid">
        <div class="card mb-3">
            <div class="card-header">
                <h4 class="card-title"></h4>
            </div>
            <div class="card-body">
                <app-laboratorium-form />
            </div>
        </div>
    </div>
</template>
<script>
import LaboratoriumForm from '@/components/form/LaboratoriumAlat.vue' 
export default {
    layout: 'DefaultLaboratorium',
    components: {
        'app-laboratorium-form': LaboratoriumForm //CUSTOM COMPONENT UNTUK FORM INPUT
    }
}
</script>