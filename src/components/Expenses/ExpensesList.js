import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';
const ExpensesList = ({ items }) => {
  if (items.length === 0) {
    return <h1 className='expenses-list__fallback '>Found no expenses.</h1>;
  }

  return (
    <ul className='expenses-list'>
      {items.map((expense) => {
        // console.log(expense);
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
      ;
    </ul>
  );
};

export default ExpensesList;
