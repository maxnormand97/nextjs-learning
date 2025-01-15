import sql from 'better-sqlite3';

const db = sql('meals.db')

// simple sql query within a function
// you can use async functions in next
export async function getMeals() {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    return db.prepare('SELECT * FROM meals').all()
}

export function getMeal(slug) {
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}