<template>
    <div class="pagination">
        <button :disabled="page <= 1" @click="changePage(page - 1)">
            Anterior
        </button>
        <span>Página {{ page }} de {{ totalPages }}</span>
        <button :disabled="page >= totalPages" @click="changePage(page + 1)">
            Próxima
        </button>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    page: number;
    totalPages: number;
}>();

const emit = defineEmits<{
    (e: 'change-page', newPage: number): void;
}>();

function changePage(newPage: number) {
    emit('change-page', newPage);
}
</script>