import React, { useState, useContext,useEffect } from 'react';
import {Context} from '../context/context'
import GuestSearch from './guestSearch';
function AddGuest(props) {
    const context = useContext(Context)
    const {addGuest,state,editGuest }=context
    useEffect(() => {
        if (state.editGuest !== null) {
            
            changeGuest(state.editGuest);            
        }
        else
            changeGuest({
        
                id: Math.floor(Math.random()*10000000),
                name: '',
                adress: '',
                invited: 0,
                phone: '',
                dietary:'Non-Veg'
            })
    },[state.editGuest])
    const [guest, changeGuest] = useState({
        
        id: Math.floor(Math.random()*10000000),
        name: '',
        adress: '',
        invited: 0,
        phone: '',
        dietary:'Non-Veg'
    })


    
    const submitForm = (e) => {
        e.preventDefault()
        addGuest(guest)        
        changeGuest({
            id:Math.floor(Math.random()*10000000),
            name: '',
            adress: '',
            invited: 0,
            phone: '',
            dietary:'Non-Veg'
        })
    }
    const changeInput = (e) => {        
        changeGuest({
            ...guest,
            [e.target.name]:e.target.value
        })
    }
    const checkCount = (data) => 
        state.guests.filter(guest =>guest.dietary===data.dietary).length
    const checkInvited = (data) => 
        state.guests.filter(guest =>guest.dietary===data.dietary && guest.invited===1 ).length
    const totalInvited = () =>
        state.guests.filter(guest=>guest.invited===1).length
    
    return (
        <div className="row">
            <div className="col-6 col-sm-6 col-xs-12" >
            <h1>
                    Add Guest
            </h1>
                
            <form onSubmit={submitForm}>
                <div>
                    <label >
                        Enter Name:
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={guest.name}
                        onChange={changeInput}
                        placeholder="Enter Name"  
                        required
                    />
                </div>
                <div>
                    <label>
                        Enter Adress:
                    </label>
                    <input
                        type="text"
                        name="adress"
                        value={guest.adress}
                        onChange={changeInput}
                        placeholder="Enter Adress"
                        required
                    />
                </div>
                <div>
                    <label>
                        Enter Phone:
                    </label>
                    <input
                        type="text"
                        name="phone"
                        value={guest.phone}
                        onChange={changeInput}
                        placeholder="Enter Phone number"
                        required
                    />
                </div>
                <div>
                        <label>
                            Dietary:
                        </label>   
                        <span className="options" onChange={changeInput}>
                        <label style={{paddingLeft:'20px'}}>Non Veg <input type="radio" name="dietary" value="Non-Veg" /><span className="checkmark"/> </label>
                        <label style={{paddingLeft:'20px'}}> Veg <input type="radio" name="dietary" value="Veg" /> </label>
                        <label style={{paddingLeft:'20px'}}>Jain <input type="radio" name="dietary" value="Jain" /> </label>
                        </span>
                </div>
                <button
                    type="submit"
                    className="btn btn-raised btn-warning"
                >
                        Add Guest
                    </button>
               
            </form>
            </div>
            <div className="col-6 col-sm-6 col-xs-12" >
                <h1>Guest Overview</h1>
                <table >
                    <thead>
                        <tr >
                            <th style={{padding:'20px 20px 0px 20px'}}>Dietary</th>
                            <th style={{padding:'20px 20px 0px 20px'}}>Guest</th>
                            <th style={{padding:'20px 20px 0px 20px'}}>Invited</th>
                        </tr>
                        
                    </thead>
                    <tbody>
                        {
                            state.options.map((data, id) => {
                                const count = checkCount(data)
                                const invitedCount=checkInvited(data)
                                return (
                                    <tr key={data.dietary}>
                                        <td>{data.dietary}</td>
                                        <td>{count}</td>
                                        <td>{invitedCount}</td>
                                    </tr>
                                )
                            })
                        }
                        <tr style={{fontWeight:'bolder'}}>
                            <td>Total:</td>
                            <td>{state.guests.length}</td>
                            <td>{totalInvited()}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="col-12">
                <GuestSearch/>
            </div>
            
        </div>
        
           
    );
}

export default AddGuest;