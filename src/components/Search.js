import React, { useState } from 'react'

const Search = ({ getQuery }) => {
    const [text, setText] = useState('')

    const onChange = (q) => {
        setText(q)
        getQuery(q)
    }

    return(
        <form>
            <input className="search-box"
                type="text"
                placeholder="Search characters"
                value={text}
                onChange={(e) => onChange(e.target.value)}
                autoFocus
            />
        </form>
    )
    
}

export default Search;
