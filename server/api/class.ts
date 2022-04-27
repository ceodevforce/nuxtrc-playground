import { Homework, Test, Coursework, Projects } from '../../interfaces'
import { createClient } from '@supabase/supabase-js'

async function getHomeWorkData(url: string, key: string): object {
	const supabase = createClient(url, key)

	const { data, error } = await supabase.from('homework').select('*')

	if(!data) {
		throw new Error('No homework available')
	}

	return data

}

async function getCourseData(url: string, key: string): object {
	const supabase = createClient(url, key)

	const { data, error } = await supabase.from('coursework').select('*')

	if(!data) {
		throw new Error('No homework available')
	}

	return data

}

export default defineEventHandler(async (event) => {

	const config = useRuntimeConfig()

	const { url, key } = config.public.supabase

	const homeworks: Homework[] = await getHomeWorkData(url, key)

	const courseworks: Coursework = await getCourseData(url, key)

	// // Get a data for class
	// const homeworks: Homework[] = [
	// 	{
	// 		id: 3,
	// 		title: 'Perimeter',
	// 		description: 'Perimeter is the addition of all sides',
	// 		score: 40,
	// 		scoreRecieved: 34,
	// 		createdAt: '2022-09-12',
	// 		duration: 6500,
	// 		numberOfTries: 3

	// 	}
	// ]

	const projects: Projects = []

	

	const tests: Test = []

	return {
		message: 'sucss',
		data: {
			homeworks,
			courseworks,
			tests,
			projects
		}
		

	}
})