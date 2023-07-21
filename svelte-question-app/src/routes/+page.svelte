<script lang="ts">
	import { quizData } from './../data/data';
	import Card from './../components/card.svelte';
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	{#each quizData as quiz (quiz.id)}
		<Card {quiz} />
	{/each}
</div>
