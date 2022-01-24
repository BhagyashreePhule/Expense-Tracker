import React from 'react';
import "./ExpensesList.css";
import ExpenseItem from './ExpenseItem';


const ExpensesList = (props) => {

    if(props.filteredRecords.length === 0 ){
        return <h2 className="expenses-list__fallback"> No Expenses Found ...! </h2>
    }

  return (<div className="expenses-list">
         {
             props.filteredRecords.map(row=> {
     
     return(
       <ExpenseItem key={row.id} expenseData ={row}/>
     )

      } )
    }

</div>

)
    }
  

export default ExpensesList;
