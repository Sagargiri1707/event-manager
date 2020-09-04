import React from 'react';
import Guest from './guests'
import AddGuest from './addGuest'
function Index(props) {
    return (
        <div>
            <AddGuest />
            <Guest />  
            
        </div>
    );
}

export default Index;