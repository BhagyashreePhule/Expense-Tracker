import  { useState } from 'react';
import './App.css';
import Expenses from "./Component/Expenses/Expenses";
import NewExpense from './Component/NewExpense/NewExpense';

const dummyData =[
  {
    id :"exp1",
    date:new Date(2021,5,12),
    item:"New TV",
    price:799.49
  },
  {
    id :"exp2",
    date:new Date(2021,2,12),
    item:"Car Insurance",
    price:294.76
  },
  {
    id :"exp3",
    date:new Date(2021,2,28),
    item:"New Desk (Wooden)",
    price:450.01
  },
  {
    id :"exp4",
    date:new Date(2022,8,28),
    item:"New Laptop ",
    price:300.01
  },

  {
     id :"exp5",
    date:new Date(2020,5,15),
    item:"New Camera ",
    price:130
  
  },

   
];

function App() {

  const[expenseData,setExpenseData] = useState(dummyData);

  
  // javascript code//
  //const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  
  
 // console.log(expenseData);
  //console.log(expenseData[0]);

  const getNewexpenseRecord=(data) =>{
    //alert("hi from <App/> ");
    //console.log("printed from app.js =>");




    console.log(data);

    //expenseData.push(data);
    setExpenseData(prev =>[data,...prev]);

}
  return (
    <div>
  <NewExpense readExpenseData={getNewexpenseRecord}/>
    <Expenses expenseData={expenseData} />
    
    </div>
  );
}

export default App;
