export interface Coursework {
	id: number;
	title: string;
	description: string;
	questions: string[];
	imgUrl?: string;
	score: number;
	scoreRecieved: number;
	solution?: boolean;
	answer?: string[];
}


export interface Homework extends Coursework {
	createdAt: Date;
	updatedAt?: Date.now;
	duration: number;
	numberOfTries: number;
}

export interface Project extends Coursework {
	complete: boolean;
}

export interface Test {
	id: number;
	header: string;
	score: number;
	scoreRecieved: number;
	questions: string[];
	shortAnswerQuestions?: string[];
}