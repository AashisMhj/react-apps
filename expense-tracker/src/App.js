import {useState, useEffect} from 'react';
import Dexie from 'dexie';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './style.css';

const db = new Dexie('Expense-App');

db.version(1).stores({
  formData: "++id,url,expense_title, expense_type, expense_amount,date"
});

const expenseType = {
  income: "income",
  expense: "expense"
}

function App() {
  const [expenseRecord, setExpenseRecord] = useState([]);
  const [expenseTitle, setExpenseTitle] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('0');
  const [expenseDate, setExpenseDate] = useState('');
  const [currentExpenseType, setCurrentExpenseType] = useState(expenseType.income);
  const [orderBy, setOrderBy] = useState('');
  const [orderDirection, setOrderDirection] = useState('');
  const isDbOpen = db.isOpen();

  function submitHandler(event){
    console.log(currentExpenseType);
    event.preventDefault();
    addRecord({
      expenseTitle,
      expenseAmount,
      expenseDate,
      currentExpenseType
    });
  }

  function clearFields(){
    setExpenseAmount(0);
    setExpenseDate('');
    setExpenseTitle('');
    setCurrentExpenseType(expenseType.income);
  }

  function getTotalBalance(){
    let total = 0;
    expenseRecord.forEach((item) =>{
      if(item.expense_type === expenseType.income){
        total += parseInt(item.expense_amount) || 0
      }else{
        total -= parseInt(item.expense_amount) || 0
      }
    });
    return total;
  }

  function getTotalIncome(){
    return expenseRecord.filter(item => item.expense_type === expenseType.income).reduce((acc, item)=> {
      return acc + parseInt(item.expense_amount) || 0;
    }, 0)
  }

  function getTotalExpense(){
    return expenseRecord.filter(item => item.expense_type === expenseType.expense).reduce((acc, item)=> {
      return acc + parseInt(item.expense_amount) || 0
    }, 0)
  }

  function addRecord(data){
    // TODO add record
    db.formData.add({
      expense_title: data.expenseTitle, 
      expense_type: data.currentExpenseType, 
      expense_amount: data.expenseAmount, 
      date: data.expenseDate
    }).then(()=>{
      clearFields();
      getAllRecords();
    }).catch((err)=>{
      console.log(err)
      toast.error('Error in saving record');
    });

  }

  function clearAllRecords(){
    db.formData.clear()
      .then(()=>{
        getAllRecords();
      })

  }

  function filterRecords(orderBy, orderDirection){
    if(orderDirection === 'desc'){
      db.formData.orderBy(orderBy).toArray()
        .then(data => {
          setExpenseRecord(data);
        })
    }else{
      db.formData.orderBy().reverse().toArray()
        .then(data =>{
          setExpenseRecord(data);
        })
    }
  }

  function deleteRecord(id){
    db.formData.delete(id)
      .then(()=>{
        toast.success('Record Deleted');
        getAllRecords();
      })
      .catch((error)=>{
        console.log(error);
        toast.error('Error clearing Records');
      })
  }

  function getAllRecords(){
    db.formData.toArray()
      .then(formData => {
        setExpenseRecord(formData);
      })
      .catch((err) =>{
        console.log(err);
        toast.error('Error Fetching data');
      })

  }

  useEffect(()=>{
    getAllRecords();
  }, [])

  useEffect(()=>{
    filterRecords(orderBy, orderDirection)
  }, [orderBy, orderDirection])


  return (
    <>
      <header className='header'>
        <h2>Expense Tracker </h2> <span className={` dot ${isDbOpen ? 'active' : 'inactive'}`}></span>  
      </header>
      <div className='container'>
        <h4>Your Balance</h4>
        <h1>{`$${getTotalBalance()}`}</h1>
        <div className='inc-exp-container'>
          <div>
            <h4>Income</h4>
            <p>{`+$${getTotalIncome()}`}</p>
          </div>
          <div>
            <h4>Expense</h4>
            <p>{`-$${getTotalExpense()}`}</p>
          </div>
        </div>
        <h3>Add new Transaction</h3>
        <form>
          <div className='form-control'>
            <label htmlFor='expense'>Expense</label>
            <input id='expense' type="text" value={expenseTitle} onChange={(event) => setExpenseTitle(event.target.value)} placeholder="Enter Expense ..." />
          </div>
          <div className='form-control'>
            <label htmlFor='expense-date'>Expense Date</label>
            <input id='expense-date' type="date" value={expenseDate} onChange={(event) => setExpenseDate(event.target.value)} />
          </div>
          <div className='form-control'>
            <label htmlFor='expense-type'>Expense Type</label>
            <select value={currentExpenseType} onChange={(event) => setCurrentExpenseType(event.target.value)}>
              <option value={expenseType.income}>Income</option>
              <option value={expenseType.expense}>Expenditure</option>
            </select>
          </div>
          <div className='form-control'>
            <label htmlFor='amount'>Amount</label>
            <input type="number" placeholder='Enter amount ...' value={expenseAmount} onChange={(event) => setExpenseAmount(event.target.value) } />
          </div>
          <button className='btn' onClick={submitHandler}>Add transaction</button>
        </form>
        <h3>History</h3>
        <button className='clear-btn' onClick={() => clearAllRecords()}>Clear All</button>
        <div className='form-control'>
          <label>Order By</label>
          <div >
            <input type="radio" radioGroup='order-by' name="date" value="date" checked={orderBy === 'date'} onChange={(event) => setOrderBy(event.target.value)} /> Date
            <input type="radio" radioGroup='order-by' name="expense_amount" value="expense_amount" checked={orderBy === 'expense_amount'} onChange={(event) => setOrderBy(event.target.value)} /> Amount
            
          </div>
        </div>
        <div className='form-control'>
          <label>Ordering Order</label>
          <div>
            <input type="radio" radioGroup='order' name="ASC" value="asc" checked={orderDirection === "asc"} onChange={(event) => setOrderDirection(event.target.value)} /> ASC
            <input type="radio" radioGroup='order' name="DESC" value="desc" checked={orderDirection === "desc"} onChange={(event) => setOrderDirection(event.target.value)} /> DESC
          </div>
        </div>
        <ul className='list'>
          {
            expenseRecord.map((item) =><li key={item.id} className={item.expense_type === expenseType.income ? 'plus' : 'minus'}>
              {item.expense_title} <span>{item.date}</span> <span> {item.expense_type === expenseType.income ? '+' : '-'}{item.expense_amount}</span>
              <button className='delete-btn' onClick={() => deleteRecord(item.id)}></button>
            </li>)
          }
        </ul>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
