import { FiPlus, FiX } from 'react-icons/fi'
import * as C from './styles'

export const NoteItem = ({ isNew, value, onClick, ...rest }) => {
	// Forma desestruturada de receber uma prop
	return (
		<C.Container isNew={isNew}>
			<input
				type='text'
				value={value}
				readOnly={!isNew}
				{...rest}
			/>

			<button
				type='button'
				onClick={onClick}
			>
				{isNew ? <FiPlus id='plusIcon' /> : <FiX id='minusIcon' />}
			</button>
		</C.Container>
	)
}
