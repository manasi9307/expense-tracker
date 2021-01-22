import React, {useContext, useEffect} from 'react';
import { Trans } from './Trans';
import { globalContext } from '../context/globalState';

export const Transaction = () => {
  const {transactions, getTransactions} = useContext(globalContext);

     useEffect(() => {
       getTransactions();
       //eslint-disable-next-line react-hooks/exhaustive-deps
     },[]);    
    return (
        <>
        <h3>History</h3>
        <ul  className="list">
            {transactions.map(transaction => (
              <Trans key={transaction.id} transaction={transaction} />  
            ))}
            
        </ul>
        </>
    )
}
