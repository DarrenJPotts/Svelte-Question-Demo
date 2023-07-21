import { error } from '@sveltejs/kit';
import { quizData } from '../../../data/data';

export function load({ params }: { params: { id: string } }) {
	const quiz = quizData.find((quiz) => quiz.id === parseInt(params.id));

	if (!quiz) {
		throw error(404, 'Quiz not found');
	}
	return quiz;
}
