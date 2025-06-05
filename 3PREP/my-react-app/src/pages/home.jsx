import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setApiCharacters } from '../redux/characterSlice';
import SearchBar from '../components/searchbar';
import CharacterList from '../components/characterlist';
import './home.css';

export default function Home() {
    const dispatch = useDispatch();

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then((res) => res.json())
            .then((data) => dispatch(setApiCharacters(data.results)));
    }, [dispatch]);

    return (
        <div className="home-container">
            <h2 className="home-title">Personajes de Rick & Morty</h2>
            <SearchBar />
            <CharacterList />
        </div>
    );
}