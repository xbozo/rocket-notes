import { RiShutDownLine } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'
import avatarFallback from '../../assets/images/avatar_placeholder.svg'
import { useAuthContext } from '../../contexts/authContext'
import { api } from '../../libs/axios'
import * as C from './styles'

export const Header = () => {
	const { signOut, user } = useAuthContext()

	const navigate = useNavigate()

	const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarFallback

	const handleSignOut = () => {
		navigate('/')

		signOut()
	}

	return (
		<C.Container>
			<C.Profile to='/profile'>
				<img
					src={avatarUrl}
					alt={user.name}
				/>
				<div>
					<span>Bem-vindo,</span>
					<strong>{user.name}</strong>
				</div>
			</C.Profile>

			<C.Logout onClick={handleSignOut}>
				<RiShutDownLine />
			</C.Logout>
		</C.Container>
	)
}
