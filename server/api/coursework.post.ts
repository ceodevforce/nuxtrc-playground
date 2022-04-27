import { createClient } from '@supabase/supabase-js'

export default defineEventHandler(async (event) => {

	//TODO: Add a policy to enter data on database
	const config = useRuntimeConfig()

	const { url, key } = config.public.supabase

	const supabase = createClient(url, key)

	const { title, description, 
			imgUrl, score, scoreRecieved, 
			solution, answer, createdAt, 
			updatedAt, duration, numberOfTries } = await useBody(event)

	const { data, error } = await supabase.from('coursework').insert([{
		title: title,
		description: description,
		imgUrl: imgUrl,
		score: score,
		scoreRecieved: scoreRecieved,
		solution: solution,
		answer: answer,
		duration: duration,
		numberOfTries: numberOfTries
	}]) 

	console.log(event)
	



	const homework = await useBody(event)

	return {
		homework
	}
})