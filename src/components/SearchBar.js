import React, { useState } from 'react'

const SearchBar = ({ onSearchPosts }) => {
    const [searchTerm, setSearchTerm] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        onSearchPosts(searchTerm)
    }

    return ( <form action="/" method="get" onSubmit={onSubmit}>
        <label htmlFor="header-search">
            <span >Search posts</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search posts"
            onChange={(e) => setSearchTerm(e.target.value)}
        />
        <input type="submit" />
    </form>
    )
};

export default SearchBar;