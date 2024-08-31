import React from 'react'
import './TaskColumn.css'
import TaskCard from './TaskCard.jsx'

const TaskColumn = (props) => {
  return (
    <section className="task-column">
        <div className="heading">
            <img src={props.image} alt="Not started" className='icon'></img>
            <span className="has-text-weight-bold">{props.columnName}</span>
        </div>
        <TaskCard />
    </section>
  )
}

export default TaskColumn