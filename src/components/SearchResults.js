import React from 'react'

function SearchResults({results}) {
    console.log(results)
    return (
        <div className="search__results">
            {results.map((result, i)=> 
                <p key={i} id={result.id}>{result.name} - {result.type}</p>
            )}
        </div>
    )
}

export default SearchResults
