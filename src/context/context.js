import React,{createContext,useState} from 'react';

const Context=createContext()

function ContextProvider(props) {
    const [state, setState] = useState({
        guests:
            [
                { id: 1, name: "Sagar", adress: "Baramula", invited: 1, phone: 8870076744, dietary: "Veg" },
                { id: 2, name: "Chiru", adress: "Kenya", invited: 0, phone: 8900922442, dietary: "Non-Veg" },
                { id: 3, name: "Nikhil Paul", adress: "Russia", invited: 1, phone: 9476047955, dietary: "Jain" },
                { id: 4, name: "Vinayak", adress: "Kasol", invited: 0, phone: 9531824210, dietary: "Non-Veg" },
                { id: 5, name: "Vinayak", adress: "Kasol", invited: 0, phone: 9531809590, dietary: "Veg" },
                { id: 6, name: "Vinayak", adress: "Kasol", invited: 1, phone: 9933208108, dietary: "Veg" },
            ],
        options: [
            { _id: 1, dietary: 'Veg' },
            { _id: 2, dietary: 'Non-Veg' },
            { _id: 3, dietary: 'Jain' }
        ],
        toggle: true,
        search: null,
        editGuest:null
    })
    const addGuest = (data) => {
        console.log({
            ...state,
            guests:[...state.guests,data]
                
        });
        
        
        setState({
            ...state,
            guests: state.editGuest ?
                state.guests.map(guest => guest.id === data.id ? data : guest)
                : [...state.guests, data],
            editGuest:null
                
        })        
    }
    const deleteGuest = (id) => {
        
        setState({
            ...state,
            guests:
                state.guests.filter(guest => 
                    parseInt(guest.id)!==parseInt(id)
                )
        })
        
    }
    const inviteGuest = (id) => {
        var data = [...state.guests]
        data.forEach(da => {
            if (parseInt(da.id) === parseInt(id)){
                da.invited = 1
                return
            }
        })        
        setState({...state,guests:data})
    }
    const changeToggle = () => {
        setState({...state,toggle:!state.toggle})
    }
    const SearchGuest = (name) => {
        const reg = new RegExp(`${name}`, 'gi')
        setState({
            ...state,
            search:state.guests.filter(guest=>guest.name.match(reg))
        })
    }
    const clearSearchGuest = () => {
        setState({
            ...state,
            search:null
        })
    }
    const editGuest = (data) => {
        console.log(data);
        
        setState({
            ...state,
            editGuest:data
        })        

    }
    const clearEditGuest = () => {
        setState({
            ...state,
            editGuest:null
        })
    }
    return (
        <Context.Provider value={{
            state,
            addGuest,
            deleteGuest,
            inviteGuest,
            changeToggle,
            clearSearchGuest,
            SearchGuest,
            editGuest,
            clearEditGuest
        }}>
            {props.children}
        </Context.Provider>
    );
}

export {Context,ContextProvider};