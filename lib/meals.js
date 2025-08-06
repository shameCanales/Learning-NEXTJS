import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000)); //add arbetrary delay
  // throw new Error("Loading meals failed"); //simulate error to show error page of nextjs
  return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

//run is for inserting data
//all is for getting all row data
//get is for getting single row
