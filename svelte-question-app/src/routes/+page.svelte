<script lang="ts">
	import { quizData } from './../data/data';
	import Card from './../components/card.svelte';
</script>

{#each quizData as quiz (quiz.id)}
	<Card {quiz} />
{/each}
