import { RiShutDownLine } from 'react-icons/ri'
import { useAuthContext } from '../../contexts/authContext'
import * as C from './styles'

export const Header = () => {
	const { signOut } = useAuthContext()

	return (
		<C.Container>
			<C.Profile to='/profile'>
				<img
					src='https://github.com/xbozo.png'
					alt='Foto do usuário'
				/>
				<div>
					<span>Bem-vindo,</span>
					<strong>Guilherme Viana</strong>
				</div>
			</C.Profile>

			<C.Logout onClick={signOut}>
				<RiShutDownLine />
			</C.Logout>
		</C.Container>
	)
}
