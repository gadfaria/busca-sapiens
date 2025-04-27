<template>
    <table class="results-table">
        <thead>
            <tr>
                <th>Título</th>
                <th>Autores</th>
                <th>Data</th>
                <th>Link</th>
            </tr>
        </thead>
        <tbody>
            <ResultItem v-for="item in results" :key="item.id" :item="item" />
        </tbody>
    </table>
</template>

<script setup lang="ts">
import type { Result } from '../types/result';
import ResultItem from './ResultItem.vue';

defineProps<{
    results: Result[];
}>();
</script>