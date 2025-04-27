<template>
    <tr class="result-item">
        <td>{{ item.title }}</td>
        <!-- <td>{{ item.authors.join(', ') }}</td> -->
        <td>Author</td>
        <td>{{ item.date }}</td>
        <td><a :href="item.url" target="_blank">Abrir</a></td>
    </tr>
</template>

<script setup lang="ts">
import type { Result } from '../types/result';

defineProps<{
    item: Result;
}>();
</script>