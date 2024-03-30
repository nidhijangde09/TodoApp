import React from "react";
import './TaskCard.css'
import imgDelete from "./delete.png"

function TaskCard({ title, category, i, delFunction, index }) {
    return (
        <div key={i} className='task-card'>
            <h2 className='task-title'>{title}</h2>
            <span className='task-category'>{category}</span>
            <img src={imgDelete} alt='delete'
                className='delete-icon'
                onClick={() => {
                    delFunction(index)

                }} />
        </div>
    )
}

export default TaskCard