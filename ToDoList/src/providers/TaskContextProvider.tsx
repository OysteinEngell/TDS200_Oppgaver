import { ReactNode, createContext, useContext, useEffect, useState} from "react";
import { getAllData, getTasks, storeTask, clearData } from '../modules/storage';


type TaskContextType = {
    currentTask: Task | null;
    taskArray: Task[];
    updateTask: (task: Task) => void;
    addTask: (task: Task) => void;
}

const TaskContext = createContext<TaskContextType>({
    currentTask: null,
    taskArray: [],
    updateTask: (task: Task) => {},
    addTask: (task: Task) => {},
})

export const useTaskContext = () => useContext(TaskContext)

const TaskContextProvider = ({children}: {children: ReactNode}) => {
    const [currentTask, setCurrentTask] = useState<Task | null>(null)
    const [taskArray, setTaskArray] = useState<Task[] | []>([])

    useEffect(()=>{
        console.log("Fetching tasks from storage")
        const fetch = async () => {
            const tasksInStorage = await getTasks();
            setTaskArray(tasksInStorage)
            console.log("Number of tasks in storage: " + tasksInStorage.length)
          }
          fetch();
    },[])
    
    const updateTask = (task: Task) => {
        console.log(task)
    }

    const addTask = (task: Task) => {
        console.log(task)
    }




    return(
        <TaskContext.Provider
            value={{
                currentTask,
                taskArray,
                updateTask,
                addTask
            }}
        >{children}
        </TaskContext.Provider>
    )
}

export default TaskContextProvider;

