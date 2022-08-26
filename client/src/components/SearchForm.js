import React from 'react'

const SearchForm = ({handleSubmit, setPassName, errors}) => {
  
    
    
    return (
    <div>
        <form onSubmit={handleSubmit}>
            <div className="input-container">
                <label>Search passenger...</label>
                <input type="text" name="passName" onChange={(e) => setPassName(e.target.value)} />
            </div>
            <div className="button-container">
                <input type="submit" />
            </div>
            {errors.map((err) => (
            <div key={err}>{err}</div>
            ))}
        </form>
    </div>
  )
}

export default SearchForm