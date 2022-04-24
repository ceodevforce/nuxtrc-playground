// import { Homework } from '../../interfaces'

export default defineEventHandler(async (event) => {
	console.log(event)
	const { title, description, 
		imgUrl, score, scoreRecieved, 
		solution, answer, createdAt, 
		updatedAt, duration, numberOfTries } = await useBody(event)



	const homework = await useBody(event)

	return {
		homework
	}
})


