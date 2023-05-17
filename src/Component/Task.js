import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchTask } from '../Redux/taskSlice';
const Task = () => {
    const dispatch = useDispatch();
    const task = useSelector((state) => {
        return state.task
    });

    useEffect(() => {
        dispatch(fetchTask());
    }, []);
    console.log(task.task)

    return (
        <div>

        </div>
    )
}

export default Task
