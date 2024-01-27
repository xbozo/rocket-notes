import { FiPlus, FiSearch } from 'react-icons/fi'
import * as C from './styles'

import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ButtonText } from '../../components/ButtonText'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Note } from '../../components/Note'
import { Section } from '../../components/Section'
import { api } from '../../libs/axios'

const Home = () => {
	const [tags, setTags] = useState()
	const [selectedTags, setSelectedTags] = useState([])

	const [search, setSearch] = useState('')
	const [notes, setNotes] = useState([])

	const navigate = useNavigate()

	const handleSelectTag = (tagName) => {
		if (tagName === 'all') {
			return setSelectedTags([])
		}

		const alreadySelected = selectedTags.includes(tagName)

		if (alreadySelected) {
			const filteredTags = selectedTags.filter((tag) => tag !== tagName)
			return setSelectedTags(filteredTags)
		}

		return setSelectedTags((prev) => [...prev, tagName])
	}

	const handleShowNoteDetails = (id) => {
		navigate(`/details/${id}`)
	}

	useEffect(() => {
		const fetchTags = async () => {
			const req = await api.get('/tags')
			setTags(req.data)
		}

		fetchTags()
	}, [])

	useEffect(() => {
		const fetchNotes = async () => {
			const req = await api.get(`/notes?title=${search}&tags=${selectedTags}`)

			setNotes(req.data)
		}

		fetchNotes()
	}, [search, selectedTags])

	return (
		<C.Container>
			<C.Brand>
				<h1>Rocketnotes</h1>
			</C.Brand>

			<Header />

			<C.Menu>
				<li>
					<ButtonText
						title='Todos'
						onClickFn={() => handleSelectTag('all')}
						isActive={selectedTags.length === 0}
					/>
				</li>

				{tags &&
					tags.map((tag) => {
						return (
							<li key={tag.id}>
								<ButtonText
									title={tag.name}
									onClickFn={() => handleSelectTag(tag.name)}
									isActive={selectedTags.includes(tag.name)}
								/>
							</li>
						)
					})}
			</C.Menu>

			<C.Search>
				<Input
					placeholder='Pesquisar pelo título'
					icon={FiSearch}
					onChange={(e) => setSearch(e.target.value)}
				/>
			</C.Search>

			<C.Content>
				<Section title='Minhas Notas'>
					{notes &&
						notes.map((note) => {
							return (
								<Note
									key={note.id}
									data={note}
									onClick={() => handleShowNoteDetails(note.id)}
								/>
							)
						})}
				</Section>
			</C.Content>

			<C.NewNote to='/new'>
				<FiPlus />
				Criar Nota
			</C.NewNote>
		</C.Container>
	)
}

export default Home
