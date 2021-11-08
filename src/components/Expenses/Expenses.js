import { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';

const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  const filterExpensesByYear = (selectedYear) => {
    // console.log(selectedYear);
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );
  return (
    <div>
      <Card className='expenses'>
        <ExpenseFilter
          selected={filteredYear}
          onFilterByYear={filterExpensesByYear}
        />
        {filteredExpenses.length > 0 ? (
          filteredExpenses.map((expense) => {
            // console.log(expense);
            return (
              <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
              />
            );
          })
        ) : (
          <p>No expenses found.</p>
        )}
        {/* {filteredExpenses.map((expense) => {
          // console.log(expense);
          return (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          );
        })} */}
      </Card>
    </div>
  );
};

export default Expenses;
