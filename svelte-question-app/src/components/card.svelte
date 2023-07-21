<script lang="ts">
	import * as images from '../data/image';
	import type { QuizInterface } from '../interfaces/quiz.interface';

	export let quiz: QuizInterface;
</script>

<div class="bg-initial card card-hover w-[250px] overflow-hidden cursor-pointer shadow mx-2">
	<section class="h-44">
		<img class="bg-black/50 w-full" src={images[quiz.imageUrl]} alt="" />
	</section>
	<footer class="card-footer flex items-center justify-between py-3 px-2">
		<h1 class="font-bold">{quiz.name}</h1>
		<div>{quiz.questions.length} questions</div>
	</footer>
</div>
