import { Header } from './components/Header';
import  {Balance} from './components/Balance';
import  {Expense} from './components/Expense';
import  {Transaction} from './components/Transaction';
import  {AddTransaction} from './components/AddTransaction';
import './App.css';

import { Provider } from './context/globalState';

function App() {
  return (
    <Provider>
      <Header/>
       <div className="container">
         <Balance />
         <Expense />
         <Transaction />
         <AddTransaction />
       </div>
    </Provider>
  );
}

export default App;
