<template>
    <div class="flex items-center justify-center py-8">
        <div class="spinner"></div>
    </div>
</template>

<script setup lang="ts">
// Nenhuma lógica adicional necessária
</script>

<style scoped>
.spinner {
    width: 3rem;
    height: 3rem;
    border-radius: 9999px;
    border: 4px solid rgb(229 231 235);
    border-top-color: rgb(75 85 99);
    animation: spin 1s linear infinite;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}
</style>