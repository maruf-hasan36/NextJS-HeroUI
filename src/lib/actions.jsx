import { revalidatePath } from "next/cache";
import { postTasks } from "./tasks";

export const addATask = async (formData) => {
  "use server";
  const newTasks = Object.fromEntries(formData.entries());
  console.log(newTasks);

  const res = await postTasks(newTasks);
  if (res.ok) {
    revalidatePath("/tasks");
  }
};
