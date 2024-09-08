import React from 'react'
import './TaskCard.css'
import './Tag.jsx'
import deleteIcon from '../assets/trash-can-solid.svg'
import Tag from './Tag.jsx'

const TaskCard = (props) => {
  return (
    <article className="task-card box">
      <h3 className="heading">{props.task.task}</h3>
      <div className="task-card-bottom">
        <div className="tags-container">
          {
            props.task.tags.map((tag, index) => <Tag key={index} tagName={tag} selected={true} />)
          }
        </div>
        <div className="delete-button" onClick={() => props.handleDelete(props.taskIndex)}>
          <img src={deleteIcon} alt="Delete task"></img>
        </div>
      </div>
    </article>
  )
}

export default TaskCard