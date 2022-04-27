// import { Homework } from '../../interfaces'
import { $fetch } from 'ohmyfetch'

export default defineEventHandler(async (event) => {
	// console.log(event)
	// const { title, description, 
	// 	imgUrl, score, scoreRecieved, 
	// 	solution, answer, createdAt, 
	// 	updatedAt, duration, numberOfTries } = await useBody(event)

	// const storageServer = await useStorage().setItem('foo:bar', 'baz')		

	// console.log(storageServer)
	const homework = await useBody(event)

	const solution = await $fetch('https://jsonplaceholder.typicode.com/todos/1')
	console.log(solution)

	return {
		homework,
		solution
	}
})


