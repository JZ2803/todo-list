import React from 'react'
import './index.css'
import TaskForm from './components/TaskForm'
import TaskColumn from './components/TaskColumn'
import notStartedIcon from './assets/bullseye-solid.svg'
import inProgressIcon from './assets/bars-progress-solid.svg'
import completedIcon from './assets/check-double-solid.svg'

const App = () => {
  return (
    <div className="app">
      <TaskForm />
      <main>
        <div className="app-main">
          <TaskColumn columnName="Not started" image={notStartedIcon} />
          <TaskColumn columnName="In progress" image={inProgressIcon} />
          <TaskColumn columnName="Completed" image={completedIcon} />
        </div>
      </main>
    </div>
  )
}

export default App