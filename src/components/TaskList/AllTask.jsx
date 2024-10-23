import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
    const [userData, setUserData] = useContext(AuthContext);

    return (
        <div className="bg-[#1c1c1c] p-5 rounded mt-5 h-fit">
            <div className="bg-red-400 mb-2 py-2 px-4 flex justify-between rounded">
                <h2 className="w-1/5 text-center">Employee Name</h2>
                <h3 className="w-1/5 text-center">New Task</h3>
                <h5 className="w-1/5 text-center">Active Task</h5>
                <h5 className="w-1/5 text-center">Completed</h5>
                <h5 className="w-1/5 text-center">Failed</h5>
            </div>
            <div id="alltask" className="overflow-auto">
                {userData.map((elem, index) => {
                    return (
                        <div key={index} className="border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded">
                            <h2 className="w-1/5 text-center">{elem.firstName}</h2>
                            <h3 className="w-1/5 text-center text-blue-400">{elem.taskCounts.newTask}</h3>
                            <h5 className="w-1/5 text-center text-yellow-400">{elem.taskCounts.active}</h5>
                            <h5 className="w-1/5 text-center text-white">{elem.taskCounts.completed}</h5>
                            <h5 className="w-1/5 text-center text-red-600">{elem.taskCounts.failed}</h5>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default AllTask;