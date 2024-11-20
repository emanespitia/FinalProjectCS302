import React, {useState} from "react";

const taskInput =({handleAddtask})=>{
    const [task, setTask] = userState ('');
    const addTask = () =>{
        if(task.trim())
        {
            handleAddtask(task);
            setTask('');
        }
    };

    return(
        <div>
            <input
                type ="text"
                value={task}
                onChange={(e)=>setTask(e.target.value)}
                placeholder="Enter a task"
            ></input>
            <button onClick={addTask}>Add Task</button>
        </div>
    )

}


export default TaskInput;