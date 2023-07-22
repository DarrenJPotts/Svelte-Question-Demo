<script lang="ts">
	export let isCorrect: boolean | null;
</script>

{#if isCorrect === null}
	<div class="bg-gray-200 w-4 h-4 rounded-full m-3" />
{:else if isCorrect === true}
	<div class="bg-success-500 w-4 h-4 rounded-full m-3" />
{:else if isCorrect === false}
	<div class="bg-error-500 w-4 h-4 rounded-full m-3" />
{/if}
