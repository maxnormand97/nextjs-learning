'use server';

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

    // everything in here is now a server action
  // sever actions can be extracted into their own thing
  // and you cannot use them in client components
  export async function shareMeal(formData) {
    const meal = {
      title: formData.get('title'),
      summary: formData.get('summary'),
      instructions: formData.get('instructions'),
      creator: formData.get('name'),
      creator_email: formData.get('email'),
    }

    await saveMeal(meal)
    redirect('/meals')
  }