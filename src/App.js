import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
    { id: 1, title: 'Stationary', amount: 50, date: new Date().toISOString() },
    { id: 2, title: 'Fuel', amount: 250, date: new Date().toISOString() },
    { id: 3, title: 'New Desk', amount: 450, date: new Date().toISOString() },
    {
      id: 4,
      title: 'Insurance',
      amount: 300,
      date: new Date().toISOString(),
    },
  ];
  return (
    <div>
      <ol>
        {expenses.map((expense) => (
          <li key={expense.id}>
            <ExpenseItem
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          </li>
        ))}
      </ol>
    </div>
  );
}

export default App;
