import React, { Component } from 'react'
import TodoItem from './TodoItem'
export default class TodoList extends Component {
    render() {
        const {items,clearList,handleDelete,handleEdit}=this.props;
        return (
            <ul className=' list-group my-5' >
                <h3 className='text-cdpitalize text-center' >to do list</h3>
                {items.map(item=>{
                    return (
                    <TodoItem
                     key={item.id} title={item.title} handleDelete={()=>handleDelete(item.id)} handleEdit={()=>handleEdit(item.id)} />)})}
            <button type='button' className='btn btn-danger btn-block text-uppercase mt-5 ' onClick={clearList} > clear list</button>
            </ul>
        )
    }
}
