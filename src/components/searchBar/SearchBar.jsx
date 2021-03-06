import React from 'react';

export const SearchBar = () => {
    return (
        <div>
            <div className='my-3 p-2 searchBar' style={
                {
                    'border-radius':'14px',
                    'width' : '100%'
                }}>
                <svg className="bi bi-search ml-1" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z" clip-rule="evenodd"/>
                    <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM13 6.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z" clip-rule="evenodd"/>
                </svg>                   
                <input className='border-0 searchBarInput' type='text'  placeholder='search here...'></input>    
            </div>
        </div>
    )
}
