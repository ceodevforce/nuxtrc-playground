import { createClient } from '@supabase/supabase-js'



async function getCourseWork(url: string, key: string): object {
	try{
		const supabase = createClient(url, key)
		const { data } = await supabase.from('coursework').select('*')
		if(!data) {
			throw new Error('No data available')
		}
		return data
	}catch(e) {
		console.log(e.message)
	}
	

}

export default defineEventHandler(async (event) => {
	const config = useRuntimeConfig()
	const { url, key } = config.public.supabase

	const supabase = createClient(url, key)


	/*First Test*/


	const { data }  = await supabase.from('coursework').select('*')
	const coursework = data

	if(!coursework) {
		throw new Error('No data available')
	} 

	/*
		Second test
	
	 */
	
	const dataTwo = await getCourseWork(url, key)
	console.log(dataTwo)

	return {
		message: 'This is a api server for NUXT3',
		coursework
	}
})




// async function fetchCourseWork(supabase) {

	
// 	try {

// 		const { data } = await supabase.from('coursework').select('*')
// 		// if(!data) {
// 		// 	throw new Error('No data available')
// 		// } 
// 		return data

// 	} catch (err) {
// 		console.log(err)
// 	}
	

// } 