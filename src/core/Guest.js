import React,{useContext} from 'react';
import {Context} from '../context/context'

function Guest({data}) {
    const guests = useContext(Context)
    const { deleteGuest,inviteGuest,editGuest } = guests   
    
  
    const deleteGuestName = (e) => {
        deleteGuest(e.target.value)
    }
    
    const invite = (e) => {
        inviteGuest(e.target.value)
    }
    return (
        
        <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12"  style={{ padding: '20px' }}>
            
            <div className="card-body row" style={{ border: '2px solid black' }}>
                <div className="col-2" >
                    <button
                        value={data.id}
                        className="btn btn-raised btn-danger "
                        style={{
                            maxWidth: '40px', maxHeight: '40px'
                        }}
                        onClick={deleteGuestName}>
                        X
                    </button>
                    <br/>
                    <br/>
                    <br/>
                    <button
                        value={data.id}
                        className="btn btn-raised btn-outline-success"
                        onClick={()=>editGuest(data)}
                    >
                        Edit
                        </button>
                </div>
            <div className="col-8">
                <h5 className="card-title">Name :{data.name}</h5>
                
            <h5 className="card-text">Adress:{data.adress}</h5>
            <h5 className="card-text">Phone :{data.phone}</h5>
                {
                    !data.invited ?
                        <button 
                            key={data.id}
                            className="btn btn-success btn-raised"
                            value={data.id}
                            onClick={invite} >
                        Invite
                    </button> :
                            <button
                                key={data.id}
                            className="btn btn-info" >
                            Invited
                        </button>
                        
                }
                </div>
                <div className="col-2" style={{
                    background: data.dietary === 'Veg' ?
                            '#40ff3a' :
                        (data.dietary === 'Non-Veg' ? '#fc2828' : '#6ee2ff'),
                        height: '60px',
                    width:'100%'
                        }} >
                    <p >
                        {data.dietary}
                    </p>
                  
                </div>
            </div>
        </div>
    );
}

export default Guest;