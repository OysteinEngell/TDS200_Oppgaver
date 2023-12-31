import { ReactNode, createContext, useContext, useEffect, useState} from "react";
import { getAllData, getTasks, storeTask, clearData, storeTaskArray } from '../modules/storage';


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
    
    const updateTask = async (task: Task) => {

        const tasksInStorage = await getTasks();
      
        const taskIndex = tasksInStorage.findIndex(currentTask => currentTask.id === task.id);
        // returns -1 if not found

        if (taskIndex !== -1) { 

          tasksInStorage[taskIndex] = task;
          await storeTaskArray(tasksInStorage);
          
          console.log("Task updated successfully!")
        } else {
          console.log("Task with the specified ID not found.")
        }
      };

    const addTask = async(task: Task) => {

        const tasksInStorage = await getTasks();

        task.id = tasksInStorage.length +1 //might not be unique
        tasksInStorage.push(task)

        setTaskArray(tasksInStorage)

        await storeTaskArray(tasksInStorage)
        console.log("Task stored successfully!")
    }

    const deleteTask = async (task: Task) => {
        
            const tasksInStorage = await getTasks();
            const updatedTasks = tasksInStorage.filter(selectedTask => selectedTask.title !== task.title);
          
            if (updatedTasks.length < tasksInStorage.length) {

              await storeTaskArray(updatedTasks)
          
              console.log("Task deleted successfully!");
            } else {
              console.log("Task with the specified title not found.");
            }
        
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

