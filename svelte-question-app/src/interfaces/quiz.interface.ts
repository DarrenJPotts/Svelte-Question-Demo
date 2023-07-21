export interface QuizInterface {
	id: number;
	name: string;
	imageUrl: 'chemistry' | 'biology';
	questions: {
		id: number;
		question: string;
		answer: string;
		options: {
			id: number;
			text: string;
			label: string;
		}[];
	}[];
}
