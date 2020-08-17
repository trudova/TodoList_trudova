import React, { Component } from 'react'
import "@fortawesome/fontawesome-free/css/all.min.css";
import { v4 as uuidv4 } from 'uuid';
import  'bootstrap/dist/css/bootstrap.min.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
 class App extends Component {
   state={
     items:[{id:1,
    title:'wake up'},
    {id:2,
      title:'make breekfast'}
    ],
    id:uuidv4(),
    item:'',
    editItem:false
   }
   handleChange=(e)=>{
     console.log('hello handleChange')
   }

   handleSubmit =(e)=>{
    console.log('hello handleSubmit')
   }

   clearList =()=>{
    console.log('hello clearList')
   }
   handleDelete =(id)=>{
    console.log(`hello delete ${id}`)
   }

   handleEdit =(id)=>{
    console.log(`hello edit ${id}`)
   }

  render() {
    console.log(this.state)
    return (
      <div className="container">
      <div className='row'>
        <div className='col-10 mx-auto col-md-8 mt-5'>
          <h2 className='text-capitalize text-centr'>ToDo input</h2>
          <TodoInput item ={this.state.item} handleChange={this.handleChange} handleSubmit={this.handleSubmit} editItem={this.state.editItem}/>
        <TodoList items={this.state.items} clearList={this.clearList} handleDelete={this.handleDelete} handleEdit={this.handleEdit}  />
        </div>
      </div>
    </div>
    )
  }
}
uuidv4(); 
export default App;



