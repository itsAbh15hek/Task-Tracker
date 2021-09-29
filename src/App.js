import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  // Add Task
  function addTask(task) {
    setTasks([...tasks, { id: tasks.length + 1, ...task }]);
  }

  // Delete Task
  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  // Toggle Reminder
  function toggleReminder(id) {
    const temp = tasks.map((task) => {
      if (task.id === id) task.reminder = !task.reminder;
      return task;
    });
    setTasks([...temp]);
  }

  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        setText={showAddTask}
      />
      {showAddTask && <AddTask onSubmitForm={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        <h3>No tasks added yet.</h3>
      )}
      <Footer />
    </div>
  );
}

export default App;
