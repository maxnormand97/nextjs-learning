'use server';

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

// you can add basic form validation here however its best
// to use a more robust way or package in larger applications
function isInvalidText(text) {
  return !text || text.trim() === ''
}

  // everything in here is now a server action
  // sever actions can be extracted into their own thing
  // and you cannot use them in client components
  export async function shareMeal(prevState, formData) {
    const meal = {
      title: formData.get('title'),
      summary: formData.get('summary'),
      instructions: formData.get('instructions'),
      creator: formData.get('name'),
      creator_email: formData.get('email'),
    }

    if (
        isInvalidText(meal.title) ||
        isInvalidText(meal.summary) ||
        isInvalidText(meal.creator) ||
        !meal.creator_email.includes('@')
    ) {
      return {
        message: 'Invalid Input!'
      }
    }

    await saveMeal(meal)
    // if you want your data to appear after a request in
    // production ENV you have to do this.
    // you can set this to page or layout to have that re cached,
    // you can do this for nested pages
    // revalidatePath('/meals', 'layout')
    revalidatePath('/meals')
    redirect('/meals')
  }