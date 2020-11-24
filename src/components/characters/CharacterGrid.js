import React from 'react'
import "../../App.css"
import CharacterItem from "./CharacterItem"
import Spinner from "../../components/ui/Spinner"


const CharacterGrid = ({ items, isLoading }) => {

    return isLoading ? (<Spinner />) :
        (<section className="cards">
            {items.map(item => (
                <CharacterItem key={item.char_id} item={item}></CharacterItem>
            ))}
        </section>)
}

export default CharacterGrid
