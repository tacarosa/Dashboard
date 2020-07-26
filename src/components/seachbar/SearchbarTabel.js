import React from 'react'

const SearchBar = (props) => {
    let input
    const handleChange = (e) => {
        e.preventDefault()
        props.onSearch(input.value);
    }
    return (
      <div className="d-flex inline-flex">
            <input
                className="form-control"
                placeholder="Search"
                ref={ n => input = n }
                type="text"
                onChange={handleChange}
            />
      </div>
    )
}

export default SearchBar