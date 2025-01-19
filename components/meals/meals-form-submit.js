'use client';
import { useFormStatus } from "react-dom";
// Needs to be a client because its affecting the DOM use this
// when you want to have dynamic form for submission states
export default function MealsFormSubmit() {
    const { pending } = useFormStatus()

    return <button disabled={pending}>
        {pending ? 'Submitting...' : 'Share Meal'}
    </button>
}