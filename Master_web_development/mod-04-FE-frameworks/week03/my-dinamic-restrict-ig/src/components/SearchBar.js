function SearchBar({ search, onChange }) {
    return (
        <div className='form'>
            <input onChange={ (search) => { onChange(search) } } className="form-control" 
                placeholder="Type to search..." value={ search }></input>
        </div>
    )
}

export default SearchBar;