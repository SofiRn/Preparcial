import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CharacterList from '../pages/CharacterList.jsx';
import CreateCharacter from '../pages/CreateCharacter.jsx';
import EditCharacter from '../pages/EditCharacter.jsx';
 import ProtectedRoute from '../components/ProtectedRoute.jsx';

const Router = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<CharacterList />} />

					{/* <Route path="/create" element={<CreateCharacter />} /> */}

					<Route
						path='/create'
						element={
							<ProtectedRoute>
								<CreateCharacter />
							</ProtectedRoute>
						}
					/>
					<Route
						path='/edit/:id'
						element={
							<ProtectedRoute>
								<EditCharacter />
							</ProtectedRoute>
						}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default Router;
