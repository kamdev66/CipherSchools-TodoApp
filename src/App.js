import React ,{useState} from 'react';
import './App.css';
import ListItems from './listitems';

function App() {
  const [items,setItems]=useState("Add the Task");
  const [data,setData]=useState([])


  const changeHandler=(e)=>{
    setItems(e.target.value)
  }

  const submitHandler=(e)=>{
    e.preventDefault();
    const newData=items;
    setData([...data,newData]);
    setItems('')
  }

  const doneItem=(data)=>{
  
  }

  const deleteItem=(id)=>{
    const allData=data.filter((currElem,index)=>{
      return index !== id;
    })
    setData(allData)
  }

  
  return (
    <>
    <div className='container'>
      <h1 className='todo'>Todo List</h1><hr></hr>
      <form onSubmit={submitHandler} className='form'>
        <input type="text"  value={items} onChange={changeHandler} />
        <button type='submit'>Submit</button>
      </form>
      
    </div>
    {
        data.map((value,index)=>(
          <ListItems
          key={index}
          id={index}
          task={value}
          onSelect={deleteItem}
          complete={doneItem}
         />
        ))
      }
    </>
  );
}

export default App;
