<script lang="ts">
	import { goto } from '$app/navigation';
	import type { Answer } from '../../interfaces/answer.interface';
	import { answers } from '../../store/store';

	const handleBack = () => {
		answers.set([]);
		goto('/');
	};
	let answersValue: Answer[] = [];

	answers.subscribe((value) => {
		answersValue = value;
	});

	const numCorrectAnswers = answersValue.reduce((sum, answer) => {
		if (answer.isCorrect) {
			return sum + 1;
		}
		return sum;
	}, 0);

	const numQuestions = answersValue.length;
</script>

<div class="text-center">
	<h3 class="h3">YOU SCORE IS:</h3>
	<h1 class="h1 my-5">{((numCorrectAnswers / numQuestions) * 100).toFixed(0)}%</h1>
	<p class="mb-2">Questions: {numCorrectAnswers}/{numQuestions}</p>
	<button
		class="bg-primary-900 text-white font-bold p-4 rounded px-16 hover:scale-105"
		on:click={handleBack}
	>
		Back
	</button>
</div>
