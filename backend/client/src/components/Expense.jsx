import React , {useContext} from 'react'
import { globalContext } from '../context/globalState';
export const Expense = () => {
    const { transactions } = useContext( globalContext )
    const amounts = transactions.map( transaction => transaction.amount);
    const income = amounts.filter(item => item > 0)
    .reduce( (acc,item ) => (acc += item), 0).toFixed(2);
    
    const expense = amounts.filter(item => item < 0 ).reduce((acc,item) => (acc+= item),0).toFixed(2) * -1;

    return (
      
            <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p  className="money plus">${ income    }</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p  className="money minus">${ expense }</p>
            </div>
            </div>
        
    )
}
