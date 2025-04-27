<template>
    <div class="search-bar">
        <input v-model="searchQuery" placeholder="Digite sua busca..." />
        <button @click="handleSearch">Buscar</button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const searchQuery = ref<string>('');
const emit = defineEmits<{
    (e: 'search', query: string): void;
}>();

function handleSearch() {
    emit('search', searchQuery.value);
}
</script>