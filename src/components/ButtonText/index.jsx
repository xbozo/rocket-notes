import * as C from './styles'

export const ButtonText = ({ title, isActive, onClickFn }) => {
	return (
		<C.Container
			type='button'
			isActive={isActive}
			onClick={onClickFn}
		>
			{title}
		</C.Container>
	)
}
