import { useEffect, useState } from "react"
import CharacterCard from "../../components/CharacterCard/CharacterCard"
import { useDispatch, useSelector } from "react-redux"
import { addCharacterToAPIList, setApiCharacters, setSearchQuery } from "../../store/stateSlice/StateSlice";
import { fetchMultipleCharacters, fetchOneCharacter } from "../../services/apiFetch";
import "../List/List.css"

const List = () => {

    const dispatch = useDispatch();
    const characters = useSelector((state) => state.state.apiCharacters);
    const customCharacters = useSelector((state) => state.state.customCharacters);
    const query = useSelector((state) => state.state.searchQuery)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getCharacters = async () => {
            const characters = await fetchMultipleCharacters()
            dispatch(setApiCharacters(characters.results))
            setLoading(false)
        }
        getCharacters();
    },[dispatch])

    const setQuery = (e) => {
        dispatch(setSearchQuery(e.target.value))
        console.log(query)
    }

    const addChar = async() => {
        const newChar = await fetchOneCharacter(query);
        dispatch(addCharacterToAPIList(newChar))
    }

    return(
        <>
            <input onChange={(e) => setQuery(e)}></input>
            <button onClick={()=> addChar()}></button>
            <div className="lists">
                <div>
            {characters.map((character) => (
                <CharacterCard 
                name={character.name}
                species={character.species}
                image={character.image}
                id={character.id}
            ></CharacterCard>
            ))}
            </div>

            <div>
            {customCharacters.map((character) => (
                <CharacterCard 
                name={character.name}
                species={character.species}
                image={character.image}
                id={character.id}
            ></CharacterCard>
            ))}
            </div>
            </div>
        </>
    )
}

export default List