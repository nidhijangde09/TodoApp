import React from "react";
import './TaskCard.css'
import imgDelete from "./delete.png"

function TaskCard({ task, i, delFunction, index }) {
    return (
        <div key={i} className='task-card'>
            <h2 className='task-title'>{task}</h2>
            <img src={imgDelete} alt='delete'
                className='delete-icon'
                onClick={() => {
                    delFunction(index)

                }} />
        </div>
    )
}

export default TaskCard