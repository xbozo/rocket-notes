import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/global'
import theme from './styles/theme'

import Routes from '../src/routes'
import { AuthProvider } from './contexts/AuthContext'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<AuthProvider>
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<Routes />
			</ThemeProvider>
		</AuthProvider>
	</React.StrictMode>
)
