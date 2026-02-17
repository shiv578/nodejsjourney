let tasks = [];
let currentId = 1;

// ...........................................AddTask..................................................
const addTask = (title) => {
    const newTask = {
        id: currentId++,  // Add task with auto-increment id
        title: title,
        status: "pending"
    };
    tasks.push(newTask);
    console.log("Task added successfully!");
};

// ............................................GetAllTask..............................................
const getAllTasks = () => {
    if (tasks.length === 0) {
        console.log("No tasks available.");
        return;
    }
    console.table(tasks);
};

// ..............................................CompleteTask...........................................
const completeTask = (id) => {
    const task = tasks.find(t => t.id === id);
    if (!task) {
        console.log("Task not found!");
        return;
    }
    task.status = "completed";
    console.log("Task marked as completed!");
};

// ..................................................DeleteTask.........................................
function deleteTask(id) {
    const newTasks = tasks.filter(t => t.id !== id);

    if (newTasks.length === tasks.length) {
        console.log("Task not found!");
        return;
    }

    // Reassign IDs using map()
    tasks = newTasks.map((task, index) => ({
        ...task,id: index + 1
    }));

    // reset currentId for next addition
    // currentId = tasks.length + 1;

    console.log("Task deleted successfully!");
}

addTask("Learn JavaScript");
addTask("Practice MERN");
addTask("Build Project");
getAllTasks();
completeTask(2);
getAllTasks();
deleteTask(1);
getAllTasks();


