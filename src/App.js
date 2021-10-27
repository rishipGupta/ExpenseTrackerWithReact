import Expenses from './components/Expenses/Expenses';

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
  return (
    <div>
      <h2>Let's get started</h2>
      <div>
        <Expenses expenses={expenses} />
      </div>
    </div>
  );
}

export default App;
