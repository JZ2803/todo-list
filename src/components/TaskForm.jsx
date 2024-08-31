import React from 'react'
import './TaskForm.css'
import Tag from './Tag'

const TaskForm = () => {
  return (
    <header className="app-header">
        <form>
            <input type="text"className="task-input is-size-6"
            placeholder="Enter new task to add"></input>
            <div className="task-form-bottom">
                <div className="tags-container">
                    <Tag tagName="Work"/>
                    <Tag tagName="Personal"/>
                    <Tag tagName="Study"/>
                    <Tag tagName="Health"/>
                </div>
                <div className="new-task-container">
                    <select className="task-status">
                        <option className="todo" >Not started</option>
                        <option className="doing" >In progress</option>
                        <option className="done" >Completed</option>
                    </select>
                    <button type="submit" className="button is-dark is-small">+ Add task</button>
                </div>
            </div>
        </form>
    </header>
  )
}

export default TaskForm