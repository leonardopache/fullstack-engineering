function Search({ search, onChange }) {
    return (
        <input onChange={ (search) => { onChange(search) } } className="form-control" 
                placeholder="Type to search..." value={ search }></input>
    )
}

export default Search;