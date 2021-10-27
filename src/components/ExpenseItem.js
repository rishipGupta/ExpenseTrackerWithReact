import './ExpenseItem.css';

const ExpenseItem = () => {
  return (
    <div className='expense-item'>
      <div>October 27th 2021</div>
      <div className='expense-item__description'>
        <h2>Car Insurance</h2>
      </div>
      <div className='expense-item__price'>$300</div>
    </div>
  );
};

export default ExpenseItem;
