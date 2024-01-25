/* eslint-disable react/prop-types */

import { createContext, useContext, useEffect, useState } from 'react'
import { api } from '../libs/axios'

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
	const [data, setData] = useState({})

	const signIn = async ({ email, password }) => {
		try {
			const req = await api.post('/sessions', { email, password })
			const { user, token } = await req.data

			localStorage.setItem('@rocketnotes:user', JSON.stringify(user))
			localStorage.setItem('@rocketnotes:token', token)

			setData({ user, token })
		} catch (err) {
			if (err.response) {
				alert(err.response.data.message)
				console.error(err.response.data.message)
			} else {
				alert('Erro genérico.', console.error(err))
			}
		}
	}

	const signOut = () => {
		localStorage.removeItem('@rocketnotes:user')
		localStorage.removeItem('@rocketnotes:token')

		setData({})
	}

	useEffect(() => {
		const token = localStorage.getItem('@rocketnotes:token')
		const user = localStorage.getItem('@rocketnotes:user')

		if (token && user) {
			api.defaults.headers.authorization = `Bearer ${token}`

			setData({ token, user: JSON.parse(user) })
		}
	}, [])

	const contextValue = {
		signIn,
		signOut,
		user: data.user,
	}

	return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
}

export const useAuthContext = () => {
	const context = useContext(AuthContext)

	return context
}
