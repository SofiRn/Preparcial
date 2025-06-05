// import { useState } from 'react'
import { Provider } from 'react-redux'
import './App.css'
import Router from './routes/Router.jsx'
import { store } from './redux/store.js'

// import './App.css'
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import CharacterList from './pages/CharacterList.jsx';
// import CreateCharacter from './pages/CreateCharacter.jsx';
// import EditCharacter from './pages/EditCharacter.jsx';
// import ProtectedRoute from './components/ProtectedRoute.jsx';

function App() {


  return (

       <>
    <Provider store={store}>
      <Router></Router>
    </Provider>
    </>
  )
}



export default App




