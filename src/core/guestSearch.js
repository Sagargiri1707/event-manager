import React,{useContext, useRef} from 'react';
import {Context} from '../context/context' 
function GuestSearch(props) {
    const context = useContext(Context)
    const { SearchGuest, clearSearchGuest } = context
    const searchValue=useRef('')
    const handleChange = (e) => {
        if (searchValue.current.value !== '')
            SearchGuest(e.target.value)
        else {
            clearSearchGuest()
        }
    }
    return (
        <div>
            <input ref={searchValue} type="text" className="search" onChange={handleChange} placeholder="Search guest by name ..." />
            <i className="fas fa-search search-icon"/>
        </div>
    );
}

export default GuestSearch;