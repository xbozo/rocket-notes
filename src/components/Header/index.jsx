import { RiShutDownLine } from 'react-icons/ri'
import avatarFallback from '../../assets/images/avatar_placeholder.svg'
import { useAuthContext } from '../../contexts/AuthContext'
import { api } from '../../libs/axios'
import * as C from './styles'

export const Header = () => {
	const { signOut, user } = useAuthContext()

	const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarFallback

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

			<C.Logout onClick={signOut}>
				<RiShutDownLine />
			</C.Logout>
		</C.Container>
	)
}
