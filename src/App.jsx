import React, { useState, useEffect } from 'react'
import './index.css'
import TaskForm from './components/TaskForm'
import TaskColumn from './components/TaskColumn'
import notStartedIcon from './assets/bullseye-solid.svg'
import inProgressIcon from './assets/bars-progress-solid.svg'
import completedIcon from './assets/check-double-solid.svg'

const storedTasks = localStorage.getItem("tasks")
console.log(storedTasks)

const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(storedTasks))

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])
  
  const handleDelete = (taskIndex) => {
    const updatedTasks = tasks.filter((task, index) => index !== taskIndex)
    setTasks(updatedTasks)
  }

  return (
    <div className="app container is-max-desktop">
      <TaskForm setTasks={setTasks}/>
      <main>
        <div className="app-main">
          <TaskColumn columnName="Not started" image={notStartedIcon} tasks={tasks} status="Not started" handleDelete={handleDelete} />
          <TaskColumn columnName="In progress" image={inProgressIcon} tasks={tasks} status="In progress" handleDelete={handleDelete} />
          <TaskColumn columnName="Completed" image={completedIcon} tasks={tasks} status="Completed" handleDelete={handleDelete} />
        </div>
      </main>
    </div>
  )
}

export default App