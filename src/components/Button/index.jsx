import * as C from './styles'

export const Button = ({ title, onClickFn }) => {
	return (
		<C.Button
			type='button'
			onClick={onClickFn}
		>
			{title}
		</C.Button>
	)
}
