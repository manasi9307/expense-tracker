import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

//Initial state

const initialState = {
    transactions:[]
}

//Create Context

export const globalContext = createContext(initialState);

//Provide component

export const Provider = ({children}) => {
const [state, dispatch] = useReducer(AppReducer, initialState);

//Actions
function deleteTransaction(id){
    dispatch({
        type:'DELETE_TRANSACTION',
        payload:id
    });
}   

function addTransaction(transaction){
    dispatch({
        type:'ADD_TRANSACTION',
        payload:transaction
    });
}

return (<globalContext.Provider value={{
    transactions:state.transactions,
    deleteTransaction,
    addTransaction
}}>
    {children}
</globalContext.Provider>)
}