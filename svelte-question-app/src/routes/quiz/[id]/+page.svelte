<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import type { Answer } from '../../../interfaces/answer.interface';
	import { answers } from '../../../store/store';
	import type { PageData } from './$types';
	import QuestionButton from './components/question-button.svelte';
	import QuestionOption from './components/question-option.svelte';
	import QuestionProgressCircle from './components/question-progress-circle.svelte';
	import QuestionText from './components/question-text.svelte';

	export let data: PageData;

	let currentQuestionIndex: number = 0;
	let answersValue: Answer[];
	let selectedOption: null | string = null;
	let showCorrectAnswer: boolean = false;

	const handleChangeOption = (label: string) => {
		selectedOption = label;
	};

	const handleSubmit = () => {
		if (!selectedOption) return;

		showCorrectAnswer = true;

		answers.update((currentState) => {
			const updatedAnswerState = currentState;
			updatedAnswerState[currentQuestionIndex].isCorrect = selectedOption === question.answer;
			return updatedAnswerState;
		});
	};

	const handleNext = () => {
		showCorrectAnswer = false;
		selectedOption = null;

		if (currentQuestionIndex === data.questions.length - 1) {
			goto('/results');
		} else {
			currentQuestionIndex++;
		}
	};

	answers.subscribe((value) => {
		answersValue = value;
	});

	$: question = data.questions[currentQuestionIndex];

	onMount(() => {
		answers.set(
			data.questions.map((q): any => {
				return {
					id: q.id,
					isCorrect: null
				};
			})
		);
	});
</script>

<div class="w-full">
	<div class="flex justify-center">
		{#each answersValue as answer}
			<QuestionProgressCircle isCorrect={answer.isCorrect} />
		{/each}
	</div>
	<QuestionText text={question.question} />
	<div class="flex justify-between flex-wrap cursor-pointer">
		{#each question.options as option}
			<QuestionOption
				{option}
				{selectedOption}
				{handleChangeOption}
				{showCorrectAnswer}
				answer={question.answer}
			/>
		{/each}
	</div>
	<QuestionButton {handleSubmit} {handleNext} {showCorrectAnswer} />
</div>
