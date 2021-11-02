import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const saveNewExpenseHandler = (expenseData) => {
    const newExpense = {
      ...expenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(newExpense);
  };
  return (
    <div className='new-expense'>
      <ExpenseForm onSaveNewExpense={saveNewExpenseHandler} />
    </div>
  );
};

export default NewExpense;
