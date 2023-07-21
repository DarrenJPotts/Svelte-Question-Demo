<script lang="ts">
	import type { Answer } from '../../../interfaces/answer.interface';
	import { answers } from '../../../store/store';
	import type { PageData } from './$types';
	import QuestionButton from './components/question-button.svelte';
	import QuestionOption from './components/question-option.svelte';
	import QuestionText from './components/question-text.svelte';

	export let data: PageData;

	let currentQuestionIndex: number = 0;
	let answersValue: Answer[];
	let selectedOption: null | string = null;
	answers.subscribe((value) => {
		answersValue = value;
	});

	$: question = data.questions[currentQuestionIndex];
</script>

<div class="w-full">
	<QuestionText text={question.question} />
	<div class="flex justify-between flex-wrap cursor-pointer">
		{#each question.options as option}
			<QuestionOption {option} />
		{/each}
	</div>
	<QuestionButton />
</div>
