import React, {useContext} from 'react';
import { Trans } from './Trans';
import { globalContext } from '../context/globalState';

export const Transaction = () => {
  const {transactions} = useContext(globalContext);
         
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
