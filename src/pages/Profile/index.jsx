import { FiArrowLeft, FiCamera, FiLock, FiMail, FiUser } from 'react-icons/fi'
import * as C from './styles'

import { Link } from 'react-router-dom'

import { useState } from 'react'
import avatarFallback from '../../assets/images/avatar_placeholder.svg'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { useAuthContext } from '../../contexts/AuthContext'
import { api } from '../../libs/axios'

const Profile = () => {
	const { user, updateProfile } = useAuthContext()

	const [name, setName] = useState(user.name)
	const [email, setEmail] = useState(user.email)
	const [oldPassword, setOldPassword] = useState()
	const [newPassword, setNewPassword] = useState()

	const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarFallback

	const [avatar, setAvatar] = useState(avatarUrl)
	const [avatarFile, setAvatarFile] = useState(null)

	const handleUpdateUser = async () => {
		const updatedUser = {
			name,
			email,
			new_password: newPassword,
			old_password: oldPassword,
		}

		const updatedUserData = Object.assign(user, updatedUser)

		await updateProfile({
			user: updatedUserData,
			avatarFile,
		})
	}

	const handleChangeAvatar = (event) => {
		const file = event.target.files[0]
		setAvatarFile(file)

		const imagePreview = URL.createObjectURL(file)
		setAvatar(imagePreview)
	}

	return (
		<C.Container>
			<header>
				<Link to='/'>
					<FiArrowLeft />
				</Link>
			</header>

			<C.Form>
				<C.Avatar>
					<img
						src={avatar}
						alt='Foto do usuário'
					/>

					<label htmlFor='avatar'>
						<FiCamera />

						<input
							id='avatar'
							type='file'
							onChange={handleChangeAvatar}
						/>
					</label>
				</C.Avatar>

				<Input
					placeholder='Nome'
					type='text'
					icon={FiUser}
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>

				<Input
					placeholder='E-mail'
					type='text'
					icon={FiMail}
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>

				<Input
					placeholder='Senha atual'
					type='password'
					icon={FiLock}
					onChange={(e) => setOldPassword(e.target.value)}
				/>

				<Input
					placeholder='Nova senha'
					type='password'
					icon={FiLock}
					onChange={(e) => setNewPassword(e.target.value)}
				/>

				<Button
					title='Salvar'
					onClickFn={handleUpdateUser}
				/>
			</C.Form>
		</C.Container>
	)
}

export default Profile
