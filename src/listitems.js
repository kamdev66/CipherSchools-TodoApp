import React from 'react';
import './listitem.css'

function ListItems(props) {
  return(
      <>
      <div >
          <div >
              <h4 className='item'>{props.task}  <span><button onClick={()=>{
                  props.complete(props.id)
              }}>&#10004;</button></span>  
              <span><button onClick={()=>{
                  props.onSelect(props.id)
              }}>&#10006;</button></span></h4>
          </div>
          
      </div>
      </>
  );
}

export default ListItems;
