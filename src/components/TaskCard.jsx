import React from 'react'
import './TaskCard.css'
import './Tag.jsx'
import deleteIcon from '../assets/trash-can-solid.svg'
import Tag from './Tag.jsx'

const TaskCard = () => {
  return (
    <article className="task-card box">
      <h3 className="heading">Sample card</h3>
      <div className="tags-card-bottom">
        <div className="tags-container">
          <Tag tagName="Work"/>
          <Tag tagName="Study"/>
          <Tag tagName="Health"/>
        </div>
        <div className="delete-button">
          <img src={deleteIcon} alt="Delete task"></img>
        </div>
      </div>
    </article>
  )
}

export default TaskCard