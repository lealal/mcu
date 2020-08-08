import React from 'react'
import CharacterItem from './CharacterItem'

const CharacterGrid = ({items}) => {
    return (
        <section>
            <div className='cards'>
                {items.map((item) => (
                    <CharacterItem key={item.id} item={item} />
                ))}
            </div>
        </section>
    )
}

export default CharacterGrid