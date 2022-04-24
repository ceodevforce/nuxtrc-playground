import { Homework, Test, Coursework, Projects } from '../../interfaces'

export default defineEventHandler(() => {

	// Get a data for class
	const homeworks: Homework[] = [
		{
			id: 3,
			title: 'Perimeter',
			description: 'Perimeter is the addition of all sides',
			score: 40,
			scoreRecieved: 34,
			createdAt: '2022-09-12',
			duration: 6500,
			numberOfTries: 3

		}
	]

	const projects: Projects = []

	const courseworks: Coursework = []

	const tests: Test = []

	return {
		message: 'Retrieved all class data',
		homeworks,
		courseworks,
		tests,
		projects

	}
})