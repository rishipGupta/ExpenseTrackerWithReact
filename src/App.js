import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const dummyExpenses = [
  { id: 1, title: 'Stationary', amount: 50, date: new Date(2021, 3, 10) },
  { id: 2, title: 'Fuel', amount: 250, date: new Date(2020, 5, 23) },
  { id: 3, title: 'New Desk', amount: 450, date: new Date(2019, 10, 20) },
  {
    id: 4,
    title: 'Insurance',
    amount: 300,
    date: new Date(2019, 9, 15),
  },
];

function App() {
  const [expenses, setExpenses] = useState(dummyExpenses);

  const addExpenseHandler = (expense) => {
    console.log('in App.js');
    console.log(expense);
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <div>
        <NewExpense onAddExpense={addExpenseHandler} />

        <Expenses expenses={expenses} />
      </div>
    </div>
  );
}

export default App;
