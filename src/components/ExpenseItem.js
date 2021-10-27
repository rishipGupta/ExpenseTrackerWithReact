import './ExpenseItem.css';

const ExpenseItem = ({ title, amount, date }) => {
  return (
    <div className='expense-item'>
      <div>{date}</div>
      <div className='expense-item__description'>
        <h2>{title}</h2>
      </div>
      <div className='expense-item__price'>{`$${amount}`}</div>
    </div>
  );
};

export default ExpenseItem;
