<template>
    <div class="home-view">
        <SearchBar @search="performSearch" />

        <LoadingSpinner v-if="loading" />

        <ResultsTable v-else-if="results.length > 0" :results="results" />

        <Pagination v-if="results.length > 0" :page="currentPage" :total-pages="totalPages"
            @change-page="handlePageChange" />

        <p v-else>Nenhum resultado encontrado.</p>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import ResultsTable from '../components/ResultsTable.vue';
import type { Result } from '../types/result';
import SearchBar from '../components/SearchBar.vue';
import Pagination from '../components/Pagination.vue';
import LoadingSpinner from '../components/LoadingSpinner.vue';
import { fetchCapesResults } from '../services/capesService';
import { fetchBdtdResults } from '../services/bdtdService';

const results = ref<Result[]>([]);
const loading = ref<boolean>(false);
const currentPage = ref<number>(1);
const totalPages = ref<number>(1);
const currentQuery = ref<string>('');

async function performSearch(query: string) {
    currentQuery.value = query;
    currentPage.value = 1;
    await loadResults();
}

async function handlePageChange(newPage: number) {
    currentPage.value = newPage;
    await loadResults();
}

async function loadResults() {
    loading.value = true;

    // const [capesResults, bdtdResults] = await Promise.all([
    //     fetchCapesResults(currentQuery.value, currentPage.value),
    //     fetchBdtdResults(currentQuery.value, currentPage.value),
    // ]);

    // results.value = [...capesResults, ...bdtdResults];


    const bdtdResults = await fetchBdtdResults(currentQuery.value, currentPage.value);
    console.log('Resultados BDTD:', bdtdResults);

    results.value = bdtdResults;

    // Ajuste totalPages de acordo com APIs
    totalPages.value = 10; // Exemplo estático

    loading.value = false;
}
</script>