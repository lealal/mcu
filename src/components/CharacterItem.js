import React from 'react'

const CharacterItem = ({item}) => {
    return(
        <div className="card">
            <img className="card-header" src={item.img} alt={item.name}/>
            <ul>
                <li><strong>Actor: </strong>{item.actor}</li>
                <li><strong>Name: </strong>{item.name}</li>
                <li><strong>Nickname: </strong>{item.nickname}</li>
                <li><strong>Introduce: </strong>{item.introduce}</li>
                <li><strong>Status: </strong>{item.status}</li>
            </ul>
        </div>
    )
}

export default CharacterItem