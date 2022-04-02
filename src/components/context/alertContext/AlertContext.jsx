import { createContext } from 'react';
import { useReducer } from 'react';
import AlertReducer from './AlertReducer';
const AlertContext = createContext()

export const AlertProvider = ({ children }) => {

    const initialState=null
    
    const [state, dispatch] = useReducer(AlertReducer,initialState)
    

    const setAlert = (type, msg) => {
        dispatch({ type: "SET_ALERT", payload: { type, msg } })
        setTimeout(()=>dispatch({type:"REMOVE_ALERT"}),3000)
    }
    return <AlertContext.Provider value={{alert:state,setAlert}}>
        {children}
    </AlertContext.Provider>
}



export default AlertContext
