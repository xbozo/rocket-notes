import * as C from './styles'

import { Link } from 'react-router-dom'

import { useState } from 'react'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'
import { TextArea } from '../../components/TextArea'

const New = () => {
	const [links, setLinks] = useState([])
	const [newLink, setNewLink] = useState('')

	const handleAddLink = () => {
		setLinks((prev) => [...prev, newLink])

		setNewLink('')
	}

	const handleRemoveLink = (deletedLinkIndex) => {
		setLinks((prev) => prev.filter((_, index) => index !== deletedLinkIndex))
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

					<Input placeholder='Título' />
					<TextArea placeholder='Observações' />

					<Section title='Links úteis'>
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
							{links.map((link, i) => {
								return (
									<NoteItem
										key={i}
										value={link}
										onClick={() => handleRemoveLink(i)}
									/>
								)
							})}
						</div>
					</Section>

					<Button title='Salvar' />
				</C.Form>
			</main>
		</C.Container>
	)
}

export default New
