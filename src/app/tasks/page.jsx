import Drawers from "@/components/Drawers";
import TaskCard from "@/components/TaskCard";
import { addATask } from "@/lib/actions";
import { getTasksData } from "@/lib/tasks";
import React from "react";

const TaskPage = async () => {
  const tasks = await getTasksData();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <Drawers addATask={addATask}></Drawers>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task}></TaskCard>
      ))}
    </div>
  );
};

export default TaskPage;
