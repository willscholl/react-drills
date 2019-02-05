import React, { Component } from 'react';
import Todo from './Todo'

export default function List( props ) {
    let toDoList = props.tasks.map( ( element, index ) => {
      return (
        <Todo key={ index } task={ element } />
      )
    })
    return(
      <div>
        { toDoList }
      </div>
    )
}



