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

			api.defaults.headers.common['Authorization'] = `Bearer ${token}`

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

		delete api.defaults.headers.common['Authorization']

		setData({})
	}

	const updateProfile = async ({ user, avatarFile }) => {
		try {
			if (avatarFile) {
				const fileUploadForm = new FormData()
				fileUploadForm.append('avatar', avatarFile)

				const res = await api.patch('/users/avatar', fileUploadForm)
				user.avatar = res.data.avatar
			}

			// remove a senha do objeto user
			const { new_password, old_password, ...userData } = user

			await api.put('/users', user)

			localStorage.setItem('@rocketnotes:user', JSON.stringify(userData))

			setData({ user: userData, token: data.token })
			alert('Perfil atualizado.....')
		} catch (err) {
			if (err.response) {
				alert(err.response.data.message)
				console.error(err.response.data.message)
			} else {
				alert('Erro genérico; não foi possível atualizar o perfil.', console.error(err))
			}
		}
	}

	useEffect(() => {
		const token = localStorage.getItem('@rocketnotes:token')
		const user = localStorage.getItem('@rocketnotes:user')

		if (token && user) {
			api.defaults.headers.common['Authorization'] = `Bearer ${token}`

			setData({ token, user: JSON.parse(user) })
		}
	}, [])

	const contextValue = {
		signIn,
		signOut,
		updateProfile,
		user: data.user,
	}

	return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
}

export const useAuthContext = () => {
	const context = useContext(AuthContext)

	return context
}
