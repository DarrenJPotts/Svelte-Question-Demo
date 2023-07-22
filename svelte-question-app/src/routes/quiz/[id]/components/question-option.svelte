<script lang="ts">
	export let option: { label: string; text: string };
	export let selectedOption: null | string;
	export let answer: string;
	export let showCorrectAnswer: boolean;
	export let handleChangeOption: (label: string) => void;
</script>

<button
	class={`bg-gray-200 rounded w-[49%] text-center p-2 mb-4 py-5 text-black hover:scale-[102%]
	${option.label === selectedOption ? 'bg-primary-500' : 'bg-white'}
	${showCorrectAnswer && (answer === option.label ? 'bg-success-400' : 'bg-error-400')}
	`}
	on:click={() => handleChangeOption(option.label)}
>
	{option.text}
</button>
