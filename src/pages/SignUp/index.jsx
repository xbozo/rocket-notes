import { FiLock, FiMail, FiUser } from 'react-icons/fi'
import * as C from './styles'

import { Link } from 'react-router-dom'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { api } from '../../libs/axios'

const SignUp = () => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const navigate = useNavigate()

	const handleSignUp = async () => {
		try {
			await api.post('/users', {
				name,
				email,
				password,
			})

			alert('Usuário cadastrado com sucesso.')
			navigate('/')
		} catch (err) {
			if (err.response) {
				return alert(err.response.data.message)
			}

			return alert('Deu erro genérico.')
		}
	}

	return (
		<C.Container>
			<C.Background />

			<C.Form>
				<h1>Rocket Notes</h1>
				<p>Aplicação para salvar e gerenciar seus links úteis.</p>

				<h2>Crie sua conta</h2>

				<Input
					placeholder='Nome'
					type='text'
					icon={FiUser}
					onChange={(e) => setName(e.target.value)}
				/>

				<Input
					placeholder='E-mail'
					type='text'
					icon={FiMail}
					onChange={(e) => setEmail(e.target.value)}
				/>

				<Input
					placeholder='Senha'
					type='password'
					icon={FiLock}
					onChange={(e) => setPassword(e.target.value)}
				/>

				<Button
					title='Cadastrar'
					onClickFn={handleSignUp}
					type='button'
				/>

				<Link to='/'>Voltar para o login</Link>
			</C.Form>
		</C.Container>
	)
}

export default SignUp
