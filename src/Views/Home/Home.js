import React, { useEffect, useState } from "react";
import './Home.css'
import addIcon from "./add .png"
import TaskCard from "../../Components/TaskCard/TaskCard.js";



function Home() {
    const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState('')
    const [error, setError] = useState('');


    const saveTasksToLS = (tasksToSave) => {
        localStorage.setItem('tasks', JSON.stringify(tasksToSave));
    }

    const validateNewTask = () => {
        if (newTask == '') {
            setError('please enter a task')
            return false;
        }

        else if (newTask.length < 5) {
            setError('Task should be at least 5 characters long')
            return false;
        }

        else {
            setError('')
            return true;
        }

    }

    const addTask = () => {

        const validationResult = validateNewTask();
        if (validationResult) return;


        const newTasks = [newTasks, ...tasks]
        saveTasksToLS(newTasks);

        setTasks(newTasks)
        setNewTask('')
    }



    const deleteTask = (index) => {
        const newTasks = tasks;
        newTasks.splice(index, 1);
        setTasks([...newTasks]);

        saveTasksToLS(newTasks);
    }


    useEffect(() => {
        const tasks = localStorage.getItem('tasks');
        if (tasks) {
            setTasks(JSON.parse(tasks));
        }

    }, [])


    return (
        <div>
            <h1 className='app-heading'>ToDo App</h1>

            <div className='tasks-container'>
                {
                    tasks.map((task, i,) => {
                        return <TaskCard
                            task={task}
                            key={i} delFunction={deleteTask} />

                    })
                }
            </div>

            <p className='error-message'>{error}</p>

            <div className='input-container'>
                <input type='text'
                    placeholder='Add a new task'
                    className='task-input'
                    value={newTask}
                    onChange={(e) => {
                        setNewTask(e.target.value)

                    }}
                />



                <img src={addIcon}
                    alt='Add'
                    className='add-icon'
                    onClick={addTask}
                />

            </div>
        </div>
    )

}

export default Home