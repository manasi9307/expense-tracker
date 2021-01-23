import React , { useContext } from 'react'

import { globalContext } from '../context/globalState';

export const Trans = ({transaction}) => {
    const sign = transaction.amount < 0 ? '-' : '+';
    const { deleteTransaction } = useContext(globalContext);
    return (
        
            <li className={transaction.amount < 0 ? "minus" : "plus"}>{ transaction.text } <span>{sign} ${ Math.abs(transaction.amount) }</span>
            <button onClick={()=> deleteTransaction(transaction._id)} className="delete-btn">X</button></li>
        
    )
}
