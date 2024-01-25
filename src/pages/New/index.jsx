import * as C from './styles'

import { Link } from 'react-router-dom'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'
import { TextArea } from '../../components/TextArea'
import { api } from '../../libs/axios'

const New = () => {
	const [title, setTitle] = useState('')
	const [description, setDescription] = useState('')

	const [links, setLinks] = useState([])
	const [newLink, setNewLink] = useState('')

	const [tags, setTags] = useState([])
	const [newTag, setNewTag] = useState('')

	const navigate = useNavigate()

	const handleAddLink = () => {
		setLinks((prev) => [...prev, newLink])

		setNewLink('')
	}

	const handleRemoveLink = (deletedLinkIndex) => {
		setLinks((prev) => prev.filter((_, index) => index !== deletedLinkIndex))
	}

	const handleAddTag = () => {
		setTags((prev) => [...prev, newTag])

		setNewTag('')
	}

	const handleRemoveTag = (deletedTagIndex) => {
		setTags((prev) => prev.filter((_, index) => index !== deletedTagIndex))
	}

	const handleAddNewNote = async () => {
		try {
			await api.post('/notes', {
				title,
				description,
				tags,
				links,
			})

			alert('Nota criada com sucesso.')
			navigate('/')
		} catch (err) {
			alert('Deu erro. Checa o console!')
			console.error(err)
		}
	}

	return (
		<C.Container>
			<Header />

			<main>
				<C.Form>
					<header>
						<h1>Criar nota</h1>
						<Link to='/'>Voltar</Link>
					</header>

					<Input
						placeholder='Título'
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
					<TextArea
						placeholder='Observações'
						value={description}
						onChange={(e) => setDescription(e.target.value)}
					/>

					<Section title='Links úteis'>
						{links.map((link, index) => {
							return (
								<NoteItem
									key={index}
									value={link}
									onClick={() => handleRemoveLink(index)}
								/>
							)
						})}
						<NoteItem
							isNew
							placeholder='Novo link'
							value={newLink}
							onChange={(e) => setNewLink(e.target.value)}
							onClick={handleAddLink}
						/>
					</Section>

					<Section title='Marcadores'>
						<div className='tags'>
							{tags.map((tag, index) => {
								return (
									<NoteItem
										key={index}
										value={tag}
										onClick={() => handleRemoveTag(index)}
									/>
								)
							})}
							<NoteItem
								isNew
								placeholder='Nova tag'
								value={newTag}
								onChange={(e) => setNewTag(e.target.value)}
								onClick={handleAddTag}
							/>
						</div>
					</Section>

					<Button
						title='Salvar'
						onClickFn={handleAddNewNote}
					/>
				</C.Form>
			</main>
		</C.Container>
	)
}

export default New
