import { useState } from 'react';
import React from 'react';
import ExpneseForm from './ExpneseForm';
import "./NewExpense.css";

const NewExpense = (props) => {

    const [showExpenseForm, setshowExpenseForm] = useState(false);
    
    const getNewexpenseData =(data) =>{
     props.readExpenseData(data);  
    }

    
    return (
        <div className="new-expense">

     {!showExpenseForm && <button onClick={ () => setshowExpenseForm(true)}>Add New Expense </button>}
   

     { showExpenseForm && <ExpneseForm sendData ={getNewexpenseData} setshowExpenseForm={setshowExpenseForm} />  }
             
        </div>
    );
}

export default NewExpense;


    

