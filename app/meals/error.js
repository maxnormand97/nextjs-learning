// special component that renders every time there is an error
'use client';

export default function Error({error}) {
    return <main className="error">
        <h1>Something went wrong</h1>
        {/* you can show the props for the error but its not recommended */}
        <p></p>
    </main>
}