"use server";
import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

function isInvalidText(text) {
  return !text || text.trim() === "";
}

export async function shareMeal(prevState, formData) {
  // "use server"; //server action: guaranted to execute on a server. explicitly tell that this should run on the server
  //user server only works if the component is not a client component. we move the sharemeal server action here because the component is now client component
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return {
      message: "Invalid Input",
      //we can also have an array or errors and have if check on every field then push to the array.
    };
  }

  await saveMeal(meal);
  revalidatePath("/meals"); //just like invalidateQueries in tanstack. to refetch the meals after adding a new one
  redirect("/meals");
}
