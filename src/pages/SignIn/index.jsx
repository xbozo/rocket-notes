import { FiLock, FiMail } from 'react-icons/fi'
import * as C from './styles'

import { Input } from '../../components/Input'

import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../components/Button'
import { useAuthContext } from '../../contexts/authContext'

const SignIn = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const { signIn } = useAuthContext()

	const handleSignIn = () => {
		signIn({ email, password })
	}

	return (
		<C.Container>
			<C.Form>
				<h1>Rocket Notes</h1>
				<p>Aplicação para salvar e gerenciar seus links úteis.</p>

				<h2>Faça seu Login</h2>

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
					type='button'
					title='Entrar'
					onClickFn={handleSignIn}
				/>

				<Link to='/register'>Criar Conta</Link>
			</C.Form>

			<C.Background />
		</C.Container>
	)
}

export default SignIn
