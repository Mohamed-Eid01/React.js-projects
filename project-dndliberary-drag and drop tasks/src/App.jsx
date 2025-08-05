import { useState } from "react";
import "./App.css";
import {
  closestCorners,
  DndContext,
  useSensors,
  useSensor,
  PointerSensor,
  KeyboardSensor,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  verticalListSortingStrategy,
  sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";
import {Column} from "./components/Column";
import {Input} from "./components/Input/Input"

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Add tests to home pages" },
    { id: 2, title: "Fix styles in about pages" },
    { id: 3, title: "Learn how to center a div" }
  ]);
  const addTask = title =>{
    setTasks(tasks => [...tasks,{id:tasks.length + 1,title}])
  }

  const getTaskPos = (id) => tasks.findIndex(task => task.id === id);

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id === over.id) return;

    setTasks((tasks) => {
      const originalPos = getTaskPos(active.id);
      const newPos = getTaskPos(over.id);

      return arrayMove(tasks, originalPos, newPos);
    });
  };
    const sensors = useSensors(
      useSensor(PointerSensor),
      useSensor(KeyboardSensor, {
        coordinateGetter: sortableKeyboardCoordinates,
      })
    );

  return (
    <div className="App">
      <h1>My Tasks ✅</h1>
      <DndContext sensors={sensors} onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
        <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
          <Input onSumbit={addTask} />
          <Column tasks={tasks} />
        </SortableContext>
      </DndContext>
    </div>
  );
}

export default App;
