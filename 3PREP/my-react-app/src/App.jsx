import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import CreateCharacter from './pages/createcharacters';
import EditCharacter from './pages/editcharacter';
import { useSelector, useDispatch } from 'react-redux';
import { setUserType } from './redux/characterSlice';
import './App.css';

export default function App() {
	const userType = useSelector((state) => state.characters.userType);
	const dispatch = useDispatch();

	return (
		<div className='app-container'>
			<nav className='app-nav'>
				<Link to='/'>Inicio</Link>
				{userType === 'admin' && <Link to='/create'>Crear</Link>}
				<button onClick={() => dispatch(setUserType(userType === 'admin' ? 'user' : 'admin'))}>
					Cambiar a {userType === 'admin' ? 'User' : 'Admin'}
				</button>
			</nav>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/create' element={userType === 'admin' ? <CreateCharacter /> : <Home />} />
				<Route path='/edit/:id' element={userType === 'admin' ? <EditCharacter /> : <Home />} />
			</Routes>
		</div>
	);
}
