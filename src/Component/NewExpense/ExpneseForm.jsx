import React ,{ useState} from 'react';
import "./ExpenseForm.css";

const ExpneseForm = (props) => {

    const [title,setTitle ] = useState("sneha");
    const [amount, setAmount] = useState(0);
    const [date, setDate] = useState();


    // const [data,setData] = useState({
    //     title:"priya",
    //     amount:0,
    //     date:""
    // });
    



    const handleSubmit =(e) => {
        e.preventDefault();//to stop the page from reloading
       // alert("add expense button clicked!");
      // console.log(title,amount,date);

    // const month=date.toLocaleString("en-us",{month:"long"});
    // const year=date.getFullYear();
    // const date=date.getDate();

      const data = { 
      id:Math.random().toString(),
      item:title,
      price:amount,
      date:new Date(date)      
}

// const dataobject = {
//      title:data.title,
//      amount:data.amount,
//      date:data.date         
//     }


//console.log(data);

props.sendData(data);//calling getNewExpenseData()of NewExpense component

//alert("Expense Record Added Successfully..!");

setTitle("");
setAmount("");
setDate("");


props.setshowExpenseForm(false);

    } 

    return (

        <form onSubmit={handleSubmit}>

<div className=" new-expense__controls" >

<div className=" new-expense__control">
<label >Title</label>
{/* <input type="text" onChange={updateTitle}value={data.title}/> */}
<input type="text" onChange={(e) =>setTitle(e.target.value) } value={title}/>

    </div>

    <div className=" new-expense__control">
<label >Amount</label>
<input type="number"onChange={(e) => setAmount(e.target.value)} value={amount}/>
{/* <input type="number"onChange={(e) => setData({...data,amount:e.target.value})} value={data.amount}/> */}
    </div>

    <div className=" new-expense__control">
<label >Date</label>
<input type="date" onChange={(e) => setDate(e.target.value)} value={date} />
{/* <input type="date" onChange={(e) => setData({...data,date:e.target.value})} /> */}
    </div> 

 </div>

<div className=" new-expense__action">
<button type="button" onClick={ () =>props.setshowExpenseForm(false) }>Cancel</button>
<button type="submit">Add Expense </button>
    </div>

 </form>
        
    );
}

export default ExpneseForm;
