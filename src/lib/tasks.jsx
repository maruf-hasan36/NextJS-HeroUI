import tasks from "../data/data.json";
export const getTasksData = async () => {
  return await tasks;
};

export const postTasks = async (newTasks) => {
  newTasks.id = tasks.length + 1;
  tasks.push(newTasks);
  return { ok: true, message: "Successfull" };
};
