import React,{useContext} from 'react';
import { Context } from '../context/context'
import Guest from './Guest'
function Guests(props) {
    const guests = useContext(Context)
    const { state,changeToggle } = guests   
    
  
    return (
        <div>
            <div style={{ paddingTop: '50px' }}>
            {
                    <div >{
                        state.guests.length?
                        <button className="btn btn-raised btn-info" onClick={() => changeToggle()}>
                            {
                                state.toggle?'Show Invited only':'Show All'
                            }
                            
                        </button>:<></>}
                            <div className="row no-gutters">
                            {
                                !state.search?
                                    state
                                        .guests
                                        .filter(gst => state.toggle || gst.invited)
                                        .map((data, id) => {                                            
                                            return (
                                                <Guest data={data} key={id} />
                                            )
                                        }) :
                                    state.search.map((data, id) => {
                                        
                                        return <Guest data={data} key={id}/>
                                    })
                                    
                                    
                                    
                                }
                                </div>
                            
                        </div>

            }
            
            </div>
            
        </div>

        
    );
}

export default Guests;