import React, { useState } from 'react'
import './TaskForm.css'
import Tag from './Tag'

const TaskForm = ({setTasks}) => {
    const [taskData, setTaskData] = useState({
        task: "",
        status: "Not started",
        tags: []
    })

    const checkTag = (tag) => {
        return taskData.tags.includes(tag)
    }

    const selectTag = (tag) => { 
        if (taskData.tags.includes(tag)) {
            const updatedTags = taskData.tags.filter(t => t !== tag)
            setTaskData(prev => {
                return {...prev, tags: updatedTags}
            })
        } else {
        setTaskData(prev => {
            return {...prev, tags: [...prev.tags, tag]}
        })
        }
    }

    const handleChange = (e) => {
        const {name, value} = e.target
        setTaskData(prev => {
            return {...prev, [name]: value}
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setTasks(prev => {
            return [...prev, taskData]
        })
        setTaskData({task: "", status: "Not started", tags: []})
    }

    return (
        <header className="app-header">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="task"
                    value={taskData.task}
                    className="task-input is-size-6"
                    placeholder="Enter new task to add"
                    onChange={handleChange}
                />
                <div className="task-form-bottom">
                    <div className="tags-container">
                        <Tag tagName="Work" selectTag={selectTag} selected={checkTag("Work")} />
                        <Tag tagName="Personal" selectTag={selectTag} selected={checkTag("Personal")} />
                        <Tag tagName="Study" selectTag={selectTag} selected={checkTag ("Study")} />
                        <Tag tagName="Health" selectTag={selectTag} selected={checkTag("Health")} />
                    </div>
                    <div className="new-task-container">
                        <select className="task-status" onChange={handleChange} name="status">
                            <option value="Not started" >Not started</option>
                            <option value="In progress" >In progress</option>
                            <option value="Completed" >Completed</option>
                        </select>
                        <button
                            type="submit"className="button is-dark is-small">+ Add task</button>
                    </div>
                </div>
            </form>
        </header>
    )
}

export default TaskForm