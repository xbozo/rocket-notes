import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 8px;
	border-radius: 10px;
	padding-right: 16px;
	background-color: ${({ theme, isNew }) => (isNew ? 'transparent' : theme.COLORS.BACKGROUND_900)};
	color: ${({ theme }) => theme.COLORS.GRAY_300};
	border: ${({ theme, isNew }) => (isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : 'none')};

	button {
		border: none;
		background: none;

		#plusIcon {
			color: orange;
		}

		#minusIcon {
			color: red;
		}
	}

	input {
		height: 56px;
		width: 100%;
		padding: 12px;
		color: ${({ theme }) => theme.COLORS.WHITE};
		background: transparent;
		border: none;

		&::placeholder {
			color: ${({ theme }) => theme.COLORS.GRAY_300};
		}
	}
`
