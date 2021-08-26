import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import MagicEightBall from './components/MagicEightBall'
import ThemeSwitcher from './components/ThemeSwitcher'
import ThemeContextProvider from './contexts/ThemeContextProvider'

function App() {
	const [theme, setTheme] = useState('dark')

	return (
		<ThemeContextProvider>
			<div className="App">
				<Container>
					<h1><span role="img" aria-label="A fish on a hook">🎣</span> React Hooks</h1>

					<div className="text-center">
						<MagicEightBall />
					</div>
				</Container>
			</div>
		</ThemeContextProvider>
	)
}

export default App
