import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const expenses = [
    { id: 1, title: 'Stationary', amount: 50, date: new Date() },
    { id: 2, title: 'Fuel', amount: 250, date: new Date() },
    { id: 3, title: 'New Desk', amount: 450, date: new Date() },
    {
      id: 4,
      title: 'Insurance',
      amount: 300,
      date: new Date(),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log('in App.js');
    console.log(expense);
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
