import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import FailedTask from "./FailedTask";
import CompleteTask from "./CompleteTask";

const TaskList = ({data}) => {
    return(
        <div id="tasklist" className="h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5 mt-10">
            {data.tasks.map((elem, index) => {
                if(elem.newTask){
                    return <NewTask key={index} data={elem}/>
                }
                if(elem.completed){
                    return <CompleteTask key={index} data={elem}/>
                }
                if(elem.active){
                    return <AcceptTask key={index} data={elem}/>
                } 
                if(elem.failed){
                    return <FailedTask key={index} data={elem}/>
                }
            })}
        </div>
    )
}

export default TaskList;