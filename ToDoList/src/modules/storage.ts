import AsyncStorage from '@react-native-async-storage/async-storage'



export const getAllData = async () => {
    try {
        console.log("retrieving all data...")

        const allKeys = await AsyncStorage.getAllKeys();
        const data = await AsyncStorage.multiGet(allKeys);

        console.log("data: " + data)

    } catch (error) {
        console.log(error)
    }
}

export const getTasks = async (): Promise<Task[]> => {
    try{
        const data = await AsyncStorage.getItem('Tasks')
        return data ? JSON.parse(data) : []
    }catch (error){
        console.log(error)
        throw error
    }
}

export const setTask = async ( taskObject: Task): Promise<any | null> => {
    try {
        //Get an array of tasks from storage. Converted from JSON to :Task[]
        const tasksInStorage = await AsyncStorage.getItem('Tasks');
        const exsitingTasks: Task[] = tasksInStorage ? JSON.parse(tasksInStorage) : [];

        //Inserts new object into array and overrides key "Tasks" with new array
        exsitingTasks.push(taskObject)
        await AsyncStorage.setItem("Tasks", JSON.stringify(exsitingTasks));

    } catch (error) {
        console.log(error)
    }
}

export const clearData = async (key: string) => {
    try{
        await AsyncStorage.removeItem(key);
        console.log(`Key: '${key}' has been removed from AsyncStorage`)
    }catch (error){
        throw error
    }
}






