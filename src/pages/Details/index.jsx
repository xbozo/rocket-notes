import * as C from './styles'

import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tag'
import { api } from '../../libs/axios'

const Details = () => {
	const [noteData, setNoteData] = useState(null)

	const params = useParams()
	const navigate = useNavigate()

	const handleDeleteNote = async () => {
		const confirm = window.confirm('Deseja realmente excluir a nota?')

		if (confirm) {
			await api.delete(`/notes/${params.id}`)
			navigate('/')
		}
	}

	useEffect(() => {
		const fetchNoteDetails = async () => {
			const res = await api.get(`/notes/${params.id}`)
			setNoteData(res.data)
		}

		fetchNoteDetails()
	}, [])

	return (
		<C.Container>
			<Header />

			{noteData && (
				<main>
					<C.Content>
						<ButtonText
							onClickFn={handleDeleteNote}
							title='Excluir nota'
						/>

						<h1>{noteData.title}</h1>

						<p>{noteData.description}</p>

						{noteData.links && (
							<Section title='Links úteis'>
								<C.Links>
									{noteData.links.map((noteLink) => {
										return (
											<li key={noteLink.id}>
												{' '}
												<a
													target='_blank'
													href={noteLink.url}
												>
													{noteLink.url}
												</a>{' '}
											</li>
										)
									})}
								</C.Links>
							</Section>
						)}

						{noteData.tags && (
							<Section title='Marcadores'>
								{noteData.tags.map((noteTag) => {
									return (
										<Tag
											title={noteTag.name}
											key={noteTag.id}
										/>
									)
								})}
							</Section>
						)}

						<Button
							onClickFn={() => navigate('/')}
							title='Voltar'
						/>
					</C.Content>
				</main>
			)}
		</C.Container>
	)
}

export default Details
