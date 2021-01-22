import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

//Initial state

const initialState = {
    transactions:[],
    error:null,
    loading:true
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

async function getTransactions(){
    try{
     const res =await axios.get('/api/v1/transactions');
     dispatch({
         type:'GET_TRANSACTION',
         payload:res.data.data
     })
    }catch(err){
        dispatch({
            type:'TRANSACTION_ERROR',
            payload:err.response.data.error
        })
    }
}

return (<globalContext.Provider value={{
    transactions:state.transactions,
    deleteTransaction,
    addTransaction,
    getTransactions,
    error:state.error,
    loading:state.loading
}}>
    {children}
</globalContext.Provider>)
}