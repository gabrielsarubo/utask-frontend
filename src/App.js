import React from 'react';
import AddTask from './components/AddTask'
import Tasks from './components/Tasks'

import './style.css'

class App extends React.Component {
  state = {
    tasksTODO: [
      { taskName: 'Fazer upload no GitLab', id: 1 },
      { taskName: 'Criar layout novo', id: 2 },
      { taskName: 'Fazer planejamento', id: 3 }
    ],
    tasksDOING: [
      { taskName: 'Test the app', id: 1 },
      { taskName: 'Go shopping', id: 2 },
    ],
    tasksDONE: [
      { taskName: 'Develop new form', id: 1 },
      { taskName: 'Cycle throgh a list', id: 2 },
      { taskName: 'Reack is awesome', id: 3 }
    ]
  }

  // used to communicate from child to parent
  // change the state of parent based on the new task coming from the child (./AddTask)
  addTask = (newTask) => {
    // generate a different ID every time
    newTask.id = Math.random()

    // the right way to change the state in this case is to:
    // first, create a copy of the current array, so we are not editing it
    // second, add the newTask to the copy of that array
    // third, and then take that new array and asign to this thing below
    // this way, we will be changing the state INSIDE the setState method and that is good practice
    let tasksTODO = [...this.state.tasksTODO, newTask]

    this.setState({
      tasksTODO: tasksTODO
    })
  }

  render() {
    return (
      <div className="App">
        <header id="main-header">
          <h1>uTask</h1>
          
          <AddTask addTask={this.addTask} />
        </header>

        <div id="interface">
          <section id="container-cards">
            {/* CARD TO DO */}
            <div id="card-todo" className="cards">
              <div className="inner-card">
                <div className="card-title">
                  <h2>To Do</h2>
                </div>

                {/* returns an UL .task-list filled with the tasks items as LIs */}
                <Tasks tasks={this.state.tasksTODO} />
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default App;
