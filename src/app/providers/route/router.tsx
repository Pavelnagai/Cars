import { Route, Routes } from 'react-router-dom'
import { RootLayout } from '../../../pages/root-layout/RootLayout'
import { HomePage } from '../../../pages/home/HomePage'
import { Game } from '../../../pages/game/Game'

export const AppRouter = () => {
	return (
			<Routes>
				<Route element={<RootLayout />} path="/">
					<Route element={<HomePage />} index />
					<Route element={<Game />} path="/game" />
				</Route>
			</Routes>
	)
}
