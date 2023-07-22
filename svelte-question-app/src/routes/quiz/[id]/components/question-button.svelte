<script lang="ts">
	export let handleSubmit: () => void;
	export let handleNext: () => void;
	export let showCorrectAnswer: boolean;
</script>

<div class="text-center">
	{#if showCorrectAnswer}
		<button
			class="bg-primary-900 text-white font-bold p-4 rounded px-16 hover:scale-105"
			on:click={handleNext}
		>
			Next
		</button>
	{:else}
		<button
			class="bg-primary-900 text-white font-bold p-4 rounded px-16 hover:scale-105"
			on:click={handleSubmit}
		>
			Submit
		</button>
	{/if}
</div>
