import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const [showAddExpense, setShowAddExpense] = useState(false);

  const saveNewExpenseHandler = (expenseData) => {
    const newExpense = {
      ...expenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(newExpense);
  };

  const isEditingHandler = () => {
    setShowAddExpense(true);
  };
  const stopEditingHandler = () => {
    setShowAddExpense(false);
  };
  return (
    <div className='new-expense'>
      {!showAddExpense && (
        <button type='button' onClick={isEditingHandler}>
          Add New Expense
        </button>
      )}
      {showAddExpense && (
        <ExpenseForm
          onSaveNewExpense={saveNewExpenseHandler}
          stopEditing={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
