import axios from 'axios'

export const api = axios.create({
	// baseURL: 'http://localhost:3333',
	baseURL: 'https://rocket-notes-api-25e7.onrender.com',
})

api.interceptors.request.use((config) => {
	const token = localStorage.getItem('token')

	if (token) {
		config.headers.Authorization = `Bearer ${token}`
	}

	return config
})
